# Notes Taking App

Welcome to the **Notes Taking App**, a simple yet effective application that allows users to create, update, and delete notes. This app is built with React and stores data using the browser's LocalStorage.

## Project Structure

This project is organized as follows:

```bash
├── src/                   # React source files
    ├── components/        # Reusable components
    ├── hooks/             # Custom React hooks
    ├── utils/             # Utility functions
    └── styles/            # Application styles
├── public/                # Public assets (HTML, images)
└── README.md              # Project documentation (this file)
```

## Prerequisites

Before you get started, make sure you have the following installed:

1. Node.js (>= 14.x)
2. npm or yarn

## Setup and Installation

To set up and run the Notes Taking App locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/notes-taking-app.git
```

### 2. Navigate to the project directory:

```bash
cd notes-taking-app
```

### 3. Install the dependencies:

```bash
npm install
# or
yarn install
```

### 4. Start the development server:

```bash
npm start
# or
yarn start
```

The app will be running at http://localhost:3000.

## Features

- **Create Notes**: Add new notes with a title and content.
- **Edit Notes**: Modify the content of existing notes.
- **Delete Notes**: Remove notes when they are no longer needed.
- **LocalStorage**: Notes are persisted in the browser's LocalStorage, so they remain available even after refreshing the page.

## LocalStorage Setup

This app utilizes LocalStorage to persist notes between sessions. You don't need any backend for this app—everything is stored directly in the browser.

### Example of LocalStorage Usage:

```javascript
// Save notes to LocalStorage
localStorage.setItem("notes", JSON.stringify(notes));

// Retrieve notes from LocalStorage
const storedNotes = JSON.parse(localStorage.getItem("notes"));
```

## Folder Structure

```bash
├── src/
│   ├── components/        # React components (Note, NoteForm, NoteList)
│   ├── styles/            # CSS or SCSS styles
│   └── App.js             # Main app component
├── public/                # Public files (index.html)
└── README.md              # This file
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

- **Author**: Rajeev Ranjan
- **Email**: rajeevranja413@gmail.com
- **GitHub**: [Rajeev](https://github.com/rajeevranjan413)
