# API Endpoints

## HTML API

### Home

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Events

- `GET /api/group/:groupId/event`
- `POST /api/group/:groupId/events`
- `GET /api/group/:groupId/event/:eventId`
- `PATCH /api/group/:groupId/events/:eventId`
- `DELETE /api/group/:groupId/events/:eventId`

### Groups

- `GET /api/group`
- `GET /api/group/:groupId`
- `DELETE /api/group/:groupId`
- `GET /api/group/:groupId/`
