import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ChatService from '../../services/chatService';
import TripService from '../../services/tripService';
import { useAuth } from '../../context/AuthContext';
import TripPlanCard from './TripPlanCard';
import { FaTrash, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

function ChatColumn({ onBotResponse, onUserQuery }) {
  const location = useLocation();
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savingTrip, setSavingTrip] = useState(false);
  const messagesEndRef = useRef(null);
  const initialQueryProcessed = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle initial query from navigation
  useEffect(() => {
    if (location.state?.initialQuery && !initialQueryProcessed.current) {
      initialQueryProcessed.current = true;
      handleSendMessage(location.state.initialQuery);
    }
  }, [location.state?.initialQuery]);

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    // Clear markers when user sends a new query
    if (onUserQuery) {
      console.log('🧹 ChatColumn: Calling onUserQuery to clear markers');
      onUserQuery();
    }

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageText,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      console.log('📤 ChatColumn: Sending message:', messageText);
      const response = await ChatService.sendMessage(messageText);
      console.log('📥 ChatColumn: Received response:', response);
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response.response,
        tripPlan: response.trip_plan,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);

      // Process chatbot response for locations
      if (onBotResponse && response.response) {
        console.log('🔄 ChatColumn: Calling onBotResponse with:', response.response);
        await onBotResponse(response.response);
        console.log('✅ ChatColumn: onBotResponse completed');
      } else {
        console.log('❌ ChatColumn: onBotResponse not called - missing callback or response');
      }
    } catch (err) {
      console.error('💥 ChatColumn: Chat error details:', err);
      setError(`Failed to get response: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToPlans = async (tripPlan) => {
    if (!user) {
      setError('Please log in to save trip plans');
      return;
    }

    setSavingTrip(true);
    try {
      await TripService.createTrip(tripPlan, user.uid);
      
      // Add a success message
      const successMessage = {
        id: Date.now() + 2,
        type: 'bot',
        content: '✅ Trip plan successfully added to your plans! You can view it in the Saved section.',
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, successMessage]);
    } catch (err) {
      console.error('Error saving trip plan:', err);
      setError('Failed to save trip plan. Please try again.');
    } finally {
      setSavingTrip(false);
    }
  };

  const handleModification = (tripPlan) => {
    // Send a modification request to continue the conversation
    const modificationMessage = "Please modify this trip plan according to my preferences.";
    handleSendMessage(modificationMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim() && !isLoading) {
        handleSendMessage(inputValue);
      }
    }
  };

  const handleReset = async () => {
    try {
      await ChatService.resetChat();
      setMessages([]);
      setError(null);
      initialQueryProcessed.current = false; // Reset the flag so initial query can be processed again
      
      // Clear markers when chat is reset
      if (onUserQuery) {
        onUserQuery();
      }
    } catch (err) {
      setError('Failed to reset chat. Please try again.');
    }
  };

  return (
    <div className="flex flex-1 flex-col split:w-1/2 relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 min-h-full overflow-hidden">
      {/* Glowing accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 z-0"></div>

      {/* Main Content */}
      <div className="relative mx-auto w-full flex-1 flex-col bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-blue-900/80 pt-20 pb-24 rounded-2xl shadow-xl z-10 overflow-hidden">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 h-full">
          {/* Header with Reset Button */}
          <div className="flex justify-between items-center mb-6 pt-4">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl split:text-4xl text-cyan-200 drop-shadow">
              Where to today?
            </h2>
            {messages.length > 0 && (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/50 rounded-lg text-red-300 hover:text-red-200 transition-colors"
              >
                <FaTrash className="w-4 h-4" />
                <span className="hidden sm:inline">Reset Chat</span>
              </button>
            )}
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto space-y-4 pb-4" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#0891b2 #1f2937'
          }}>
            {messages.length === 0 ? (
              // Welcome Message
              <div className="flex flex-col">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-white text-xs uppercase shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M17.991 5.27c1.466-.272 2.314-1.13 2.555-2.575.152 1.392 1.214 2.397 2.533 2.565-1.45.267-2.303 1.12-2.544 2.58a2.862 2.862 0 0 0-.806-1.732 2.887 2.887 0 0 0-1.738-.838Z" />
                    </svg>
                  </span>
                  <div className="bg-gradient-to-br from-blue-800/60 via-gray-900/80 to-gray-800/90 border border-cyan-700 rounded-2xl p-4 max-w-[80%]">
                    <p className="text-md sm:text-lg text-cyan-100">
                      Hey there, where would you like to go? I'm here to assist you in planning your experience. Ask me anything travel related.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Chat Messages
              messages.map((message) => (
                <MessageBubble 
                  key={message.id} 
                  message={message} 
                  onAddToPlans={handleAddToPlans}
                  onModification={handleModification}
                  savingTrip={savingTrip}
                />
              ))
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-white text-xs uppercase shadow-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.991 5.27c1.466-.272 2.314-1.13 2.555-2.575.152 1.392 1.214 2.397 2.533 2.565-1.45.267-2.303 1.12-2.544 2.58a2.862 2.862 0 0 0-.806-1.732 2.887 2.887 0 0 0-1.738-.838Z" />
                  </svg>
                </span>
                <div className="bg-gradient-to-br from-blue-800/60 via-gray-900/80 to-gray-800/90 border border-cyan-700 rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-cyan-300 text-sm">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-4 text-red-300">
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Chat Input Form */}
      <div className="relative w-full z-10 transition-transform duration-drawer ease-drawer">
        <div className="absolute inset-0 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-cyan-900/80 backdrop-blur-md"></div>
        <div className="rounded-t-2xl sm:px-5">
          <div className="relative mx-auto w-full">
            <form onSubmit={handleSubmit} className="relative flex cursor-text gap-2 transition-colors hover:border-cyan-700 flex-wrap rounded-t-2xl border-t px-container py-3 sm:rounded-3xl sm:border-2 sm:border-cyan-700 sm:px-4 bg-transparent">
              <textarea 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                rows="1" 
                className="scrollbar-hide resize-none bg-transparent outline-none placeholder:text-cyan-400 focus:placeholder:text-cyan-300 flex-1 disabled:text-cyan-800 text-md xs:self-center sm:basis-full text-cyan-100"
                placeholder="Ask anything..."
                style={{ height: '24px' }}
                maxLength="600"
                autoComplete="off"
                disabled={isLoading || savingTrip}
              />
              <div className="ml-auto flex items-center gap-[inherit]">
                <button 
                  type="submit" 
                  className="group relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance bg-cyan-700/80 hover:bg-cyan-500 text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size] shadow-lg" 
                  disabled={!inputValue.trim() || isLoading || savingTrip}
                >
                  <span className="contents">
                    <FaPaperPlane className="shrink-0 transform-cpu size-[1em] text-[1.25em]" />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="relative text-center text-3xs leading-tight empty:hidden sm:text-2xs bg-transparent py-1.5 sm:bg-transparent">
            <p className="text-cyan-400">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="shrink-0 transform-cpu size-[1em] -mt-0.5 inline-block text-[1.25em]"
              >
                <path d="M12 20.357a8.357 8.357 0 1 0 0-16.714 8.357 8.357 0 0 0 0 16.714ZM12 12v4.5" />
                <path d="M12 9.429a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286Z" />
              </svg>
              {' '}PakVista Ai can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Message Bubble Component
function MessageBubble({ message, onAddToPlans, onModification, savingTrip }) {
  const isUser = message.type === 'user';
  
  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-white text-xs uppercase shadow-lg">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M17.991 5.27c1.466-.272 2.314-1.13 2.555-2.575.152 1.392 1.214 2.397 2.533 2.565-1.45.267-2.303 1.12-2.544 2.58a2.862 2.862 0 0 0-.806-1.732 2.887 2.887 0 0 0-1.738-.838Z" />
          </svg>
        </span>
      )}
      
      <div className={`max-w-[80%] ${isUser ? 'order-first' : ''}`}>
        <div className={`rounded-2xl p-4 ${
          isUser 
            ? 'bg-gradient-to-br from-cyan-600/60 via-blue-700/80 to-cyan-800/90 border border-cyan-500/50 text-white' 
            : 'bg-gradient-to-br from-blue-800/60 via-gray-900/80 to-gray-800/90 border border-cyan-700 text-cyan-100'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          <p className={`text-xs mt-2 ${isUser ? 'text-cyan-200' : 'text-cyan-400'}`}>
            {message.timestamp}
          </p>
        </div>
        
        {/* Trip Plan Card */}
        {!isUser && message.tripPlan && (
          <div className="mt-4">
            <TripPlanCard 
              tripPlan={message.tripPlan}
              onAddToPlans={() => onAddToPlans(message.tripPlan)}
              onModification={() => onModification(message.tripPlan)}
            />
            {savingTrip && (
              <div className="mt-3 flex items-center gap-2 text-cyan-300 text-sm">
                <FaCheckCircle className="animate-pulse" />
                <span>Saving trip plan...</span>
              </div>
            )}
          </div>
        )}
      </div>
      
      {isUser && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 text-white text-xs uppercase shadow-lg">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </span>
      )}
    </div>
  );
}

export default ChatColumn; 