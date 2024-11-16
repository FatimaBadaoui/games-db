# Games DB

A modern web application built with React and Vite that allows users to explore and discover video games using the RAWG Video Games Database API.

## Features

- Browse popular and trending video games
- Search for specific games
- Filter games by platform, genre, and release date
- View detailed information about each game including:
  - Release date
  - Ratings and reviews
  - Screenshots and trailers

## Tech Stack

- [React](https://react.dev/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Axios](https://axios-http.com/) - HTTP client for API requests

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/FatimaBadaoui/games-db.git
cd games-db
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your RAWG API key:
```bash
VITE_KEY=your_api_key_here
```

To get an API key:
1. Visit [RAWG](https://rawg.io/apidocs)
2. Create an account
3. Generate an API key from your dashboard

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Environment Variables

The following environment variables are required:

- `VITE_KEY`: Your RAWG API key

## Project Structure

```
games-db/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- [RAWG Video Games Database](https://rawg.io/) for providing the API
- [Vite](https://vitejs.dev/) for the excellent build tool
- [Tailwind CSS](https://tailwindcss.com/) for the styling utilities