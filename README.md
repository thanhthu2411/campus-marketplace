# Campus Marketplace

Campus Marketplace is a SvelteKit application using TypeScript and MongoDB.

SvelteKit provides both the frontend and backend:

- Svelte components render the user interface.
- SvelteKit server routes handle backend logic.
- MongoDB stores application data.
- TypeScript provides type safety.

## Requirements

- Node.js 20 or newer
- npm
- MongoDB running locally or a MongoDB Atlas database

## Installation

Install dependencies:

npm install

## Frontend and backend organization

SvelteKit contains both frontend and backend code in one project, but the code is separated by file conventions.

### Frontend pages

Frontend pages use `+page.svelte`.

Example:

```text
src/routes/listings/+page.svelte

