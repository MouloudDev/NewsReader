---

# NewsReader

A modern, user-friendly news reader application built with Vite. This app fetches news articles from various sources and categories, providing users with a seamless reading experience. It integrates with multiple news APIs for comprehensive news coverage.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js (v14 or higher)
- npm (v6 or higher)

### 1. Clone the Repository

```bash
git clone git@github.com:MouloudDev/NewsReader.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required packages:

```bash
cd NewsReader
npm install
```

### 3. Configure Environment Variables

1. You will find a `.env.example` file in the root directory.
2. Create a new `.env` file based on this example:

```bash
cp .env.example .env
```

3. Obtain your API keys from the following services:
   - [World News API](https://worldnewsapi.com/)
   - [NewsData.io](https://newsdata.io/)
   - [MediaStack](https://mediastack.com/)

4. Add the API keys to your `.env` file:

```
VITE_WORLD_NEWS_API_KEY=your_worldnewsapi_key
VITE_NEWSDATA_API_KEY=your_newsdata_key
VITE_MEDIASTACK_API_KEY=your_mediastack_key
```

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

The app should now be running on `http://localhost:5173`.

## Project Structure

The project is organized as follows:

```
src/
│
├── components/      # Contains all the UI components
│   └── TopStories.jsx   # Example of a component file
│
├── icons/           # Icons used throughout the app
│   └── facebook.jsx
│
├── services/        # Functions that interact with external APIs
│   └── mediastack.js
│
├── skeletons/       # Skeleton components for loading states
│   └── NewsCardSkeleton.jsx
│
├── stores/          # Zustand stores for managing state
│   └── latestNews.js
│
└── utils/           # Utility functions used across the app
    └── formatNews.js
```

### Key Features

- **Optimized API Calls:** To minimize API requests, some categories are not fetched by default and are commented out in `newsCategories store`. Additionally, data is fetched at the top-level `App` component to centralize and reduce redundant requests.
- **Real-Time Search:** Users can search for articles across different categories and news sources.
- **Responsive Design:** The app is designed to be fully responsive, providing a smooth experience on both mobile and desktop devices.

## Contributing

Feel free to open issues and submit pull requests. Contributions are welcome!

---
