# AI Builder Log & Migration Guide

This log serves as a record of recent changes, current architecture specifications, dependency profiles, and instruction guides for future migrations or updates to the Parkway Christian Church website repository.

---

## 🛠️ Current Tech Stack & System Specs
* **Core Framework**: React 19 (`react` & `react-dom` `@^19.2.0`)
* **Routing**: React Router v7 (`react-router-dom` `@^7.13.0`)
* **Styling**: Tailwind CSS v3 (`tailwindcss` `@^3.4.17`), PostCSS, Autoprefixer
* **Animations**: Framer Motion (`framer-motion` `@^12.29.2`)
* **Icons**: Lucide React (`lucide-react` `@0.563.0`)
* **Build Engine**: Vite (`vite` `@^7.2.4`) + TypeScript
* **Hosting**: Firebase Hosting (Project ID: `parkway-website-cb250`)
* **CMS Config**: TinaCMS integration configuration

---

## 📝 Recent Changes Log (May 26, 2026)

### 1. Special Event Register Button (Youth Page)
* **File Modified**: `src/pages/ParkYouth.tsx`
* **Action**: Hidden the "REGISTER NOW" button inside the **Featured Special Event** card by wrapping it in JSX comments (`{/* ... */}`).
* **Migration / Restoration Instruction**: To restore or reactivate the button at a later date, uncomment the block around lines 225-234:
  ```tsx
  {/* {!specialEvent.title.toLowerCase().includes('summer bash') && (
      <a
          href="https://fldisciplesregionalchurch.regfox.com/2026-summer-camp-grades-3-12"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-neon-green text-black font-marker text-lg text-center hover:bg-white transition-colors border-2 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] uppercase"
      >
          REGISTER NOW
      </a>
  )} */}
  ```

### 2. Summer Bash Event Image Configuration
* **Files Modified**: 
  * `src/config/eventImages.ts` (Keyword mapping)
  * `public/youthbash.PNG` (New image asset added)
* **Action**: Configured the specific event image call mapping for `"summer bash"`.
* **Details**: Added `'summer bash': ['/youthbash.PNG']` at the very top of `keywordImageMap` in `src/config/eventImages.ts`. This ensures that when the title of an event fetched from the Google Calendar contains the phrase "summer bash", it dynamically displays the new `youthbash.PNG` image.
* **Migration Notes**: Keeping `'summer bash'` at the very top prevents it from matching more generic keywords (like `'youth'`) that are also defined in the map, preserving the generic `youth` image for general youth events.

### 3. Summer Camp Event Image Configuration
* **Files Modified**: 
  * `src/config/eventImages.ts` (Keyword mapping)
  * `public/summercamp.PNG` (New image asset added)
* **Action**: Configured the specific event image call mapping for `"summer camp"`.
* **Details**: Added `'summer camp': ['/summercamp.PNG']` at the top of `keywordImageMap` in `src/config/eventImages.ts`. This ensures that when the title of an event fetched from the Google Calendar contains the phrase "summer camp", it dynamically displays the new `summercamp.PNG` image.

---

## 🔑 Integration Credentials & Environment Variables
The application relies on external data sources. Ensure the following environment variables are maintained in your local `.env` file and CI/CD pipelines:

| Variable Name | Purpose | Fallback / Behavior |
| :--- | :--- | :--- |
| `VITE_GOOGLE_CALENDAR_API_KEY` | Public Google Calendar API Key | Required for Events page calendar load. |
| `VITE_FB_ACCESS_TOKEN` | Facebook Graph API access token | Required for Youth Events sync; falls back to static/mock data if empty. |
| `VITE_FB_PAGE_ID` | Church/Youth Facebook Page ID | Used to fetch Facebook events automatically. |

---

## 🚀 Migration & Deployment Routine

Whenever migrating hosting providers or updating the codebase, run these verification steps:

### 1. Local Testing
```bash
npm install
npm run dev
```

### 2. Production Build Verification
Ensures TypeScript compiles correctly and Vite successfully bundles resources:
```bash
npm run build
```

### 3. Deploying to Hosting (Firebase)
Ensure you are authenticated with the correct Firebase account:
```bash
npx firebase login --reauth
npx firebase deploy --only hosting
```
