# Fake Video Games API 🎮
The Fake Video Games API is an application programming interface (API) developed using Node.js and Express. This API simulates data related to video games, providing endpoints to access and manage information about games, developers, and publishers. 🕹️👾


## Available Endpoints 📋
### [GET ALL VIDEO GAMES ]('https://fakeapigames.4.us-1.fl0.io/videoGames') 🚀

This endpoint is used to retrieve all available video games.

Fetching from the production API
```js 
fetch('https://fakeapigames.4.us-1.fl0.io/videoGames')
.then(response => response.json())
.then(data => console.log(data));
```
Fetching from the local host
```js 
fetch('http://localhost:1234/videoGames')
.then(response => response.json())
.then(data => console.log(data));
```

### [GET ALL PUBLISHERS ]('https://fakeapigames.4.us-1.fl0.io/videoGames/publishers') 📢 AND [GET ALL DEVELOPERS ]('https://fakeapigames.4.us-1.fl0.io/videoGames/developers') 👨‍💻

These endpoints are used to retrieve the list of video game publishers and the list of video game developers.

Fetching to get publishers
```js 
// API 
fetch('https://fakeapigames.4.us-1.fl0.io/videoGames/publishers')
.then(response => response.json())
.then(data => console.log(data));

// LOCAL HOST
fetch('http://localhost:1234/videoGames/publishers')
.then(response => response.json())
.then(data => console.log(data));
```
Fetching to get developers

```js 
// API 
fetch('https://fakeapigames.4.us-1.fl0.io/videoGames/developers')
.then(response => response.json())
.then(data => console.log(data));

// LOCAL HOST
fetch('http://localhost:1234/videoGames/developers')
.then(response => response.json())
.then(data => console.log(data));
```

### [GET BY ID]('https://fakeapigames.4.us-1.fl0.io/videoGames/56514712-a2d5-44a9-9b28-5bd930b487fe') 🔑


This endpoint is used to retrieve details about a specific video game based on its ID.

Fetching from the production API
```javascript
const gameId = '56514712-a2d5-44a9-9b28-5bd930b487fe'; 
// Replace with the ID of the video game you want to retrieve

fetch(`https://fakeapigames.4.us-1.fl0.io/videoGames/${gameId}`)
  .then(response => response.json())
  .then(data => console.log(data));
```

### [POST NEW GAME]('https://fakeapigames.4.us-1.fl0.io/videoGames') 🆕🎮

```js
const newGame = 
{
    // Video game title (String)
    title: "ARK: Survival Of The Fittest",

    // Array of genre IDs (Array of positive integers)
    genres: [1, 2, 3, 4, 5, 6],

    // ID of the publisher (Positive integer)
    publisher: 1,

    // Description of the video game (String)
    description: "ARK: Survival of the Fittest is a Multiplayer Online Survival Arena (MOSA) game that pits as many as 72 combatants against one another in the struggle for survival in a harsh, changing environment packed with deadly creatures, 'Evolution Events,' and other players.",

    // ID of the developer (Positive integer)
    developer: 1,

    // URL of the cover image (String with a valid URL)
    coverImage: "https://steamcdn-a.akamaihd.net/steam/apps/407530/header.jpg?t=1567712233"
}

fetch('https://fakeapigames.4.us-1.fl0.io/videoGames', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newGame),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network error - ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('New game created:', data);
  })
  .catch(error => {
    console.error('Error creating the new game:', error);
  });
```
### [POST NEW DEV AND PUB]('https://fakeapigames.4.us-1.fl0.io/videoGames/developers') 🆕🧑‍💻

### New Developer
```js
const newDeveloper = {
  name: "Diego Amachi",
};

fetch('http://localhost:1234/videoGames/developers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newDeveloper),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network error - ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('New developer created:', data);
  })
  .catch(error => {
    console.error('Error creating the new developer:', error);
  });

```
### New Publisher
```js
const newPublisher = {
  name: "Editor's Name",
};

fetch('http://localhost:1234/videoGames/publishers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newPublisher),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network error - ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('New publisher created:', data);
  })
  .catch(error => {
    console.error('Error creating the new publisher:', error);
  });
```
### [UPGRADE VIDEO GAME BY ID]('https://fakeapigames.4.us-1.fl0.io/videoGames/56514712-a2d5-44a9-9b28-5bd930b487fe') 🕹️
```JS
// UUID
const gameId = '4e2bbcf5-b9ea-40ff-97fe-b0d3f11bc9a6'; /

//UPGRADE
const patchData = {
  publisher: 4,
};

//PATCH
fetch(`http://localhost:1234/videoGames/${gameId}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(patchData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network error - ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Upgrade successful:', data);
  })
  .catch(error => {
    console.error('Error performing the upgrade:', error);
  });
```
### [DELETE VIDEO GAME BY ID]('https://fakeapigames.4.us-1.fl0.io/videoGames/56514712-a2d5-44a9-9b28-5bd930b487fe') ❌

```js
const gameId = '0af43d92-81c5-4622-87bb-b6c17beec22b';

fetch(`http://localhost:1234/videoGames/${gameId}`, {
  method: 'DELETE',
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network error - ${response.status}`);
    }
    console.log('Deletion successful');
  })
  .catch(error => {
    console.error('Error performing the deletion:', error);
  });
```
## EXAMPLES OF USE 🗑️

### Filter by genre:

### https://fakeapigames.4.us-1.fl0.io/videoGames?genre=family

### Filter by developer:

### https://fakeapigames.4.us-1.fl0.io/videoGames?developer=Crate%20Entertainment

### Filter by publisher:

### https://fakeapigames.4.us-1.fl0.io/videoGames?publisher=UBISOfT



## Getting Started

- 1  Clone this repository:
```
git clone https://github.com/Ares101101/fake-videoGames-api.git
```
- 2  Install dependencies:
```
npm install
```
 - 3 Start the server:
 ```
 npm start
 ```
 
Explore and enjoy the Fake Video Games API experience!

