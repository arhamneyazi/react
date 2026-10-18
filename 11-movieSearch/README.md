# 🎬 Movie Search App

A React application that lets you search for movies and view detailed information using the OMDB API.

## About

This is my first independent React project, built while learning web development. Designed and structured without following any tutorial — components, hooks, and logic planned and written myself.

## Features

- Search any movie by title
- Displays movie poster, title, year, genre, IMDb rating, plot, and director
- Clean dark UI built with Tailwind CSS
- Custom React hook for API logic separation

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- OMDB API

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/movie-search.git
```

2. Install dependencies

```bash
npm install
```

3. Get a free API key from [omdbapi.com](https://omdbapi.com) and add it to `src/hooks/useMovieInfo.js`

4. Run the app

```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── SearchBox.jsx
│   └── MovieCard.jsx
├── hooks/
│   └── useMovieInfo.js
└── App.jsx
```

## Screenshot

<img width="1917" height="936" alt="image" src="https://github.com/user-attachments/assets/abd27514-e2c2-4fcd-a62e-e4b19a3da6a4" />


## License

MIT
