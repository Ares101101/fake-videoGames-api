Fake Video Games API
La Fake Video Games API es una interfaz de programación de aplicaciones (API) desarrollada utilizando Node.js y Express. Esta API simula datos relacionados con videojuegos, proporcionando endpoints para acceder y gestionar información sobre juegos, desarrolladores y editores.

Endpoints Disponibles
GET /videoGames

Obtiene todos los videojuegos disponibles.
GET /videoGames/publishers

Obtiene la lista de editores de videojuegos.
GET /videoGames/developers

Obtiene la lista de desarrolladores de videojuegos.
GET /videoGames/:id

Obtiene detalles sobre un videojuego específico según su ID.
POST /videoGames

Crea un nuevo videojuego.
POST /videoGames/developers

Crea un nuevo desarrollador de videojuegos.
POST /videoGames/publishers

Crea un nuevo editor de videojuegos.
PATCH /videoGames/:id

Actualiza la información de un videojuego existente.
DELETE /videoGames/:id

Elimina un videojuego según su ID.
Ejemplos de Uso
Filtrar por género:

https://fakeapigames.1.us-1.fl0.io/videoGames?genre=Family
Filtrar por desarrollador:

https://fakeapigames.1.us-1.fl0.io/videoGames?developer=Crate%20Entertainment
Filtrar por editor:

https://fakeapigames.1.us-1.fl0.io/videoGames?publisher=UBISOft
Cómo Empezar
Clona este repositorio: git clone https://github.com/tu-usuario/fake-videoGames-api.git
Instala las dependencias: npm install
Inicia el servidor: npm start
¡Explora y disfruta de la experiencia de Fake Video Games API!

Asegúrate de reemplazar "tu-usuario" con tu nombre de usuario de GitHub y adaptar cualquier otra información específica de tu API que puedas necesitar en el README.md. ¡Espero que te sea útil!
