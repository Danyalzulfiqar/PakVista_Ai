import React from 'react';

function ChatColumn() {
  return (
    <div className="flex flex-1 flex-col split:w-1/2">
     

      {/* Main Content */}
      <div className="relative mx-auto w-full flex-1 flex-col bg-white pt-20 pb-24">
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4">
          <div className="flex w-full flex-1 flex-col">
            {/* Welcome Message */}
            <div className="flex flex-col">
              <h2 className="mb-5 text-2xl font-semibold tracking-tight sm:text-3xl split:text-4xl">
                Where to today?
              </h2>
              <div className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white text-xs uppercase">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.991 5.27c1.466-.272 2.314-1.13 2.555-2.575.152 1.392 1.214 2.397 2.533 2.565-1.45.267-2.303 1.12-2.544 2.58a2.862 2.862 0 0 0-.806-1.732 2.887 2.887 0 0 0-1.738-.838Z" />
                  </svg>
                </span>
                <p className="text-md sm:text-lg">
                  Hey there, where would you like to go? I'm here to assist you in planning your experience. Ask me anything travel related.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Input Form */}
      <div className="relative w-full z-1 transition-transform duration-drawer ease-drawer">
        <div className="absolute inset-0 overflow-hidden rounded-t-2xl bg-background/80 backdrop-blur-md"></div>
        <div className="rounded-t-2xl sm:px-5">
          <div className="relative mx-auto w-full">
            <form className="relative flex cursor-text gap-2 transition-colors hover:border-gray-7 flex-wrap rounded-t-2xl border-t px-container py-3 sm:rounded-3xl sm:border-2 sm:border-gray-5 sm:px-4">
              <textarea 
                rows="1" 
                className="scrollbar-hide resize-none bg-transparent outline-none placeholder:text-muted focus:placeholder:text-gray-8 flex-1 disabled:text-gray-8 text-md xs:self-center sm:basis-full"
                placeholder="Ask anything..."
                style={{ height: '24px' }}
                maxLength="600"
                autoComplete="off"
              />
              <div className="mr-1 xs:order-first">
                <button type="button" className="group relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance bg-foreground/5 hover:bg-foreground/10 text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size]">
                  <span className="contents">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 transform-cpu size-[1em] stroke-2 text-[1.25em]">
                      <path d="M12 3.694V20.41M3.643 12h16.714" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="ml-auto flex items-center gap-[inherit]">
                <button type="submit" className="group relative z-0 border border-transparent inline-flex justify-center items-center rounded-full font-medium gap-[.3em] disabled:pointer-events-none disabled:opacity-50 transition-colors text-center py-[.25em] text-balance bg-transparent hover:bg-foreground/5 text-2xs min-h-[--button-xs-size] leading-[1.125] px-0 shrink-0 size-[--button-xs-size]" disabled>
                  <span className="contents">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 transform-cpu size-[1em] text-[2em] ml-[-.0625em] mt-[.0625em]">
                      <path d="m10.483 17.143 2.803 2.79a1.415 1.415 0 0 0 1.35.386 1.441 1.441 0 0 0 1.041-.952L20.28 5.571a1.441 1.441 0 0 0-1.852-1.851L4.633 8.323a1.44 1.44 0 0 0-.952 1.106 1.414 1.414 0 0 0 .386 1.285l3.523 3.523-.116 4.462 3.009-1.556ZM19.868 4.003 7.59 14.237" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="relative text-center text-3xs leading-tight empty:hidden sm:text-2xs bg-gray-2 py-1.5 sm:bg-transparent">
            <p className="text-muted">
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

export default ChatColumn; 