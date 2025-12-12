# Wheel of Timelines

**Wheel of Timelines** is an interactive web application dedicated to the *Wheel of Time* series. It features a comprehensive interactive map, a timeline of events, various quizzes, and a blog section.

## Features

-   **Interactive Map**: Explore the world of the Wheel of Time with a detailed, interactive map built using Konva.js.
-   **Timeline**: A chronological timeline of events from the series.
-   **Quizzes**: Test your knowledge or find out which character you are with Score, Personality, and Drop quizzes.
    -   Trivia (Novice, Accepted, Aes Sedai levels)
    -   "Who Said It?"
    -   "Which Forsaken Are You?"
    -   "Which Ta'veren Are You?"
    -   "Which Talent Do You Have?"
-   **Blog**: Articles and posts regarding the series and the making of the map.

## Tech Stack

This project is built with **React** and utilizes several libraries for UI and functionality:

-   **React** (v17)
-   **Hookrouter** for routing
-   **React-Konva** & **Konva** for the interactive map canvas
-   **Bootstrap** & **React-Bootstrap** for layout and components
-   **Material UI** for UI components and icons
-   **SASS** for styling

## Getting Started

### Prerequisites

-   Node.js (v12+ recommended)
-   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/jorisBarkema/Wheel-of-Timelines.git
    cd Wheel-of-Timelines/wotl
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To build the app for production to the `build` folder:

```bash
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

## Configuration

The application may require a `src/config.json` file for certain configurations, such as Google Analytics keys.

Example structure for `src/config.json`:
```json
{
  "config": {
    "GA": "YOUR_GA_TRACKING_ID"
  }
}
```

## Project Structure

-   `src/js/map`: Components related to the interactive map.
-   `src/js/timeline`: Components for the timeline view.
-   `src/js/quizzes`: Logic and data for the various quizzes.
-   `src/js/blog`: Blog page and post components.
-   `src/data`: Data files used across the application.

## License

[MIT](LICENSE)