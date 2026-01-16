# EJS Demo Project

A simple Express.js server that demonstrates EJS templating with a mock Instagram-like interface.

## Features

- **EJS Templating**: Server-side rendering with embedded JavaScript
- **Mock Instagram Pages**: View user profiles with follower counts and posts
- **Static Assets**: Serve CSS and client-side files from the public directory
- **Express.js**: Lightweight web framework

## Project Structure

```
├── index.js              # Main Express server
├── data.json            # User data (Instagram-like profiles)
├── package.json         # Project dependencies
├── public/              # Static files
│   └── style.css       # CSS styling
└── views/              # EJS templates
    ├── home.ejs        # Home page
    ├── ig.ejs          # Instagram profile page
    ├── error.ejs       # Error page
    ├── rolldice.ejs    # Dice roller page
    └── includes/       # Reusable components
        ├── head.ejs    # Header template
        └── footer.ejs  # Footer template
```

## Installation

```bash
# Install dependencies
npm install
```

## Usage

```bash
# Start the server
node index.js
```

The server will run on `http://localhost:8080`

### Available Routes

- `/` - Home page
- `/ig/:username` - View Instagram-like profile for a username (e.g., `/ig/cats`)
- `/rolldice` - Dice roller demo (if implemented)

## Sample Data

The `data.json` file contains user profiles with:
- User name
- Follower/following counts
- Posts with images, likes, and comments

Example: `/ig/cats` displays the cat profile with posts

## Technologies

- **Express.js** - Web framework
- **EJS** - Templating engine
- **Node.js** - Runtime environment

## Author

Aadi

## License

ISC
