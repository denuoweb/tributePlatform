
# Tribute Website for Naoto Sekiguchi

This project is a Single Page Application (SPA) built using the Mountaineer framework for the backend and React for the frontend. It features a continuous music player and sections including Home, Art, Dedication, and Book.

## Prerequisites

- Python 3.11+
- Node.js 18+
- npm

## Setup

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/denuoweb/tributePlatform.git
cd tribute-website
```

## Backend Setup

Install Python dependencies using pip:

```bash
pip install -r requirements.txt
```

## Frontend Setup

Navigate to the `views` directory and install Node.js dependencies using npm:

```bash
cd views
npm install
```

## Running the Application

### Starting the Backend Server

In the project root directory, start the uvicorn server:

```bash
uvicorn app:controller --reload
```

This command starts the backend server on `http://127.0.0.1:8000`. The `--reload` flag enables auto-reloading on code changes.

### Starting the Frontend Development Server

In a new terminal, navigate to the `views` directory and start the React development server:

```bash
npm start
```

This command starts the frontend development server, typically on `http://localhost:3000`, and should open your default web browser automatically.

## Navigating the Application

The application's main sections are accessible from the homepage. Interact with the music controls to play, pause, or change the music, and navigate between the Home, Art, Dedication, and Login sections to explore content.

## Contributing

Contributions are welcome. Please fork the repository and submit pull requests with any enhancements.

### To Fix

- Adding template to bottom of existing file.
- view_path path issues extra /view/app 

## License

This project is licensed under the MIT License - see the LICENSE file for details.
