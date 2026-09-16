# My Portfolio API

A small, public, read-only API for the portfolio frontend. It uses Node.js and
Express and does not require authentication.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Run locally

```bash
npm install
npm start
```

The API listens on `http://localhost:3000` by default. Set `PORT` to use a
different port:

```bash
PORT=4000 npm start
```

## Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | API metadata and endpoint list |
| GET | `/health` | Service health check |
| GET | `/api/portfolio` | All portfolio content |
| GET | `/api/profile` | Profile and headline metrics |
| GET | `/api/skills` | Skills grouped by category |
| GET | `/api/projects` | All portfolio projects |
| GET | `/api/projects/:id` | One project by ID |
| GET | `/api/contact` | Public contact details and social links |

Responses are JSON. CORS is enabled for all origins by default so the static
portfolio can call the API from a different host. Set `CORS_ORIGIN` to restrict
it to a specific origin.

Portfolio content is stored in `data/portfolio.js`.
