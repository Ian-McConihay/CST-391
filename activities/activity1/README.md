- **Author**: Ian M. McConihay  
- **Course**: JavaScript Web Application Development  
- **Instructor**: Bobby Estey  
- **College**: College of Science, Engineering and Technology, Grand Canyon University  
- **Date**: September 7, 2025  

⸻

## Recordings

- [Part 1: Postman](https://www.loom.com/share/5440f961846f40ed80b394d23f7a4c9f?sid=45b87aa1-e7c4-49e7-88f8-76844d622b75)  
- [Part 2: Details for walkthrough](https://www.loom.com/share/ac0c4533bcbe497b86d384c4e600f3de?sid=fcbe9595-179e-4a3d-8196-52ae7aef5b02)  
⸻

Introduction

In this activity, the goal was to refine the MusicAPI Node.js server into a fully structured application using TypeScript, Express, and MySQL. The assignment covered multiple aspects of real-world back-end development. First, the build process was streamlined with custom package.json scripts and environment variables stored in a .env file. Then, the application was refactored into a Model-View-Controller (MVC) architecture with separate routers, controllers, DAOs, and query files. Middleware such as logger, cors, and helmet was also introduced to handle logging, cross-origin requests, and basic security. The final major step involved connecting the API to a MySQL database. Using DAOs and query files, the MusicAPI supports full CRUD operations for albums as well as read functionality for artists. Once implemented, the API endpoints were tested in both a browser and Postman, validating that requests correctly returned data from the database. This provided practical experience in designing and deploying a RESTful API that can support Angular or React front ends in future assignments.

⸻

## Router

router
  .route('/albums')
  .get(AlbumsController.readAlbums);

	•	Defined in albums.routes.ts.
	•	Maps the GET /albums endpoint to the readAlbums controller.
	•	Confirms that incoming HTTP requests are properly routed.

⸻

## Controller

export const readAlbums: RequestHandler = async (req, res) => {
  let albumId = parseInt(req.query.albumId as string);
  let albums = Number.isNaN(albumId) 
      ? await AlbumDao.readAlbums() 
      : await AlbumDao.readAlbumsByAlbumId(albumId);
  await readTracks(albums, res);
  res.status(200).json(albums);
};

	•	Found in albums.controller.ts.
	•	Responsibilities:
	•	Parse albumId query parameter.
	•	Call DAO to fetch either all albums or a specific album.
	•	Append track data via readTracks().
	•	Return JSON response with 200 OK.

⸻

## DAO

export const readAlbums = async () => {
  return execute<Album[]>(albumQueries.readAlbums, []);
};

	•	Implemented in albums.dao.ts.
	•	Responsibilities:
	•	Abstract SQL logic from the controller.
	•	Use the shared execute() method to run queries.
	•	Return a typed result (Album[]).

⸻

## Queries

readAlbums: `
  SELECT id AS albumId, title, artist, description, year, image
  FROM music.albums
`

	•	Defined in albums.queries.ts.
	•	Responsibilities:
	•	Provide parameterized SQL statements.
	•	Use ? placeholders to securely bind inputs (e.g., albumId).
	•	Prevent SQL injection by avoiding string concatenation.

⸻

## Postman Test Table

| **Method** | **Endpoint** | **Description** | **Browser** | **Postman** | **Parameters / Body** |
|------------|--------------|-----------------|-------------|-------------|-----------------------|
| GET        | `http://localhost:5000/albums` | Retrieves all albums. | ✅ | ✅ | — |
| GET        | `http://localhost:5000/albums/:artist` | Retrieves albums by a specific artist. | — | ✅ | `artist="The Beatles"` |
| GET        | `http://localhost:5000/albums?albumId=7` | Retrieves a specific album by ID. | ✅ | ✅ | `albumId=7` |
| GET        | `http://localhost:5000/albums/search/artist/:search` | Searches for albums by artist keyword. | — | ✅ | `search="Beat"` |
| GET        | `http://localhost:5000/albums/search/description/:search` | Searches for albums by description keyword. | — | ✅ | `search=1966` |
| POST       | `http://localhost:5000/albums` | Creates a new album with tracks. | — | ✅ | JSON Body (new album data) |
| PUT        | `http://localhost:5000/albums` | Updates an existing album and its tracks. | — | ✅ | JSON Body (updated album data) |
| DELETE     | `http://localhost:5000/albums/:albumId` | Deletes an album by ID. | — | ✅ | `albumId=34` |
| GET        | `http://localhost:5000/artists` | Retrieves all artists. | ✅ | ✅ | — |
⸻

## Summary
	•	The GET /albums endpoint demonstrates:
	•	Clear routing through albums.routes.ts.
	•	Business logic in the controller.
	•	Database abstraction with a DAO layer.
	•	Secure parameterized queries in albums.queries.ts.
	•	Validated using Postman, confirming end-to-end functionality.

⸻

## Issues I Ran Into

While testing my endpoints, I ran into a **403 Forbidden** error when trying to access `/albums`:

```bash
MacBookPro:MusicAPI ianmcconihay$ curl -i http://localhost:5000/albums
HTTP/1.1 403 Forbidden
Content-Length: 0
Server: AirTunes/860.7.1
X-Apple-ProcessingTime: 1
X-Apple-RequestReceivedTimestamp: 1515800386
```
I resolved this by adjusting my server port to 5050 in the .env file and restarting the server. Once updated, the endpoints worked correctly in Postman and the browser.