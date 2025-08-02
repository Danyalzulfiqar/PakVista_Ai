
1) add ui for sharing the posts (inspirations)
2) add map to the chat page and remove the search page completly
3) make the map automated when chatting in the chatbot it should automatically pin point on the map
4) automate the trip planning that will be added to the database once confirmed from the user from chatbot



user interact with the chatbot ask for planning recomendation and general questions related to the tourism. once the chatbot return the trip plan it will ask for the confirmation or modification.
if confirmed then frontend code will smartly convert into the trip plan object by splitting (we need to make a format fixxed so that we can inform the chatbot backend team that we need the result of the plan in this format) and ten saved into the firestore
also if any modification the chatbot it self make the modification ask from the user and regenerat the updated plan in the ame structure
(take refrence from the create.json for fields information also there is notes fields this will be used by chatbot to add the detail plann with timming with respect to the destinations and activities also the budget break down (calcualtion summary) will also be here in notes) other fields are catered as it is there are some manadtory fields that need to be filled by the chatbot but there are some fileds that can be filled from the frontend code while instering into the db like createdAt example fields are here:
{
    "title": "Hunza Valley Adventure",
    "startLocation": "Islamabad",
    "destinations": ["Naran", "Babusar Top", "Hunza Valley", "Attabad Lake"],
    "startDate": "2024-07-10",
    "endDate": "2024-07-20",
    "travelers": 4,
    "tripType": "Adventure",
    "budget": 120000,
    "gears": ["Backpack", "Camera", "Hiking Shoes", "Tent"],
    "notes": "Notes of destination with time mapping(mandatory) + budget break down(mandatory) + any necessary notes like any contact number, food, cultural norms etc (optional) "
}