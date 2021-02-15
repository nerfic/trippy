# API Documentation

## Root URL

URL racine : `http://localhost:3001/api`

## Entities

- Hotel
- Room
- User
- Favorite

## Routes

### Home

- **GET** `/home`

Get the cities

### Hotels

- **GET** `/hotels`

Get all hotels

- **GET** `/hotels/city/:city`

Get all hotels by city

- **GET** `/hotels/:id`

Get an hotel

### Rooms

- **GET** `/hotels/:hotelId/rooms`

Get all rooms of an hotel

- **GET** `/hotels/:hotelId/rooms/:roomId`

Get a room

### Users

- **GET** `/users/:id` (auth)

Get a user

- **GET** `/users/:userId/hotels/:hotelId/favorites`

Get the favorite for the user and that hotel

- **PUT** `/users/:userId/hotels/:hotelId/favorites/toggle`

Toggle the favorite for the user and that hotel
