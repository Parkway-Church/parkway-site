# Parkway Christian Church - Website

This is the repository for the frontend application of the Parkway Christian Church website. It is built as a modern, high-performance Single Page Application (SPA) designed to provide information about the church, live stream access, sermons, events, and giving.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content Management**: [TinaCMS](https://tina.io/)
- **Hosting / Deployment**: Firebase (suggested by config files)

## 📦 Prerequisites

Before you begin, ensure you have met the following requirements:
*   You have installed **Node.js** (v18.0.0 or higher recommended).
*   You have installed **npm** (comes with Node.js) or **yarn**.

## 🛠️ Installation & Running Locally

1. **Clone the repository** (if you haven't already).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up Environment Variables**:
   Create a `.env` file in the root directory based on `.env.example` (if it exists) and add your specific API keys. See the **Configuration & External Services** section below for the required keys.
4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## 📂 Project Structure

A brief overview of the `src/` directory:

```text
src/
├── components/   # Reusable UI components (Navbar, Footer, Buttons, Modals)
├── config/       # Configuration setup for third-party APIs (Blogger, Calendar)
├── data/         # Static content and mock data (Leadership profiles, quotes, etc.)
├── pages/        # Top-level route components representing full pages (Home, Giving, Youth, etc.)
├── services/     # API service functions (e.g., fetching Facebook events)
├── App.tsx       # Main component handling routes
├── main.tsx      # Entry point of the application
└── index.css     # Global Tailwind imports and custom base styles
```

## 🔌 Configuration & External Services

The application integrates with several external APIs to keep content fresh without a complex backend.

### 1. Facebook Events (Youth Events)
The site fetches events directly from a Facebook Page using the Facebook Graph API.
*   **Location**: `src/services/facebook.ts`
*   **Requirements**: Requires `VITE_FB_ACCESS_TOKEN` and `VITE_FB_PAGE_ID` environment variables. If these are not provided, it falls back to empty/mock data.

### 2. Google Calendar Integration
Used to pull in holistic church events.
*   **Location**: `src/config/calendar.ts`
*   **Setup**: Replace the `calendarId` in this file with your official public Google Calendar ID (currently pointing to `info@parkwaychristianchurch.org`).

### 3. Blogger API
The application can pull live blog posts using the Blogger API v3.
*   **Location**: `src/config/blogger.ts`
*   **Setup**: For this to work, you must generate a Google Cloud API Key with Blogger API v3 enabled and provide your `blogId`. Update the config object in the file.

### 4. TinaCMS
Used to enable visual, on-page content editing for non-technical users.
*   **Location**: `tina/` directory.
*   **Running Tina Locally**: Usually requires running `npx tina dev` alongside your Vite server if configured, which launches a local GraphQL server for content editing. 

## 🏗️ Building for Production

To create a production-ready build:

```bash
npm run build
```
This will generate optimized static assets in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## 🚀 Deployment

This project contains Firebase configuration files (`firebase.json`, `.firebaserc`).
To deploy to Firebase Hosting:

1. Install Firebase CLI (if not already installed): `npm install -g firebase-tools`
2. Log in to Firebase: `firebase login`
3. Build the project: `npm run build`
4. Deploy: `firebase deploy`
