# JobApp

JobApp is a mobile job discovery app built with React Native and Expo. It lets you
search for roles, browse popular and nearby listings, and view job details from a
remote API.

## Features
- Keyword search with pagination
- Popular and nearby job lists
- Job detail view
- Drawer navigation with custom headers

## Tech Stack
- Expo 54 + React Native 0.81
- Expo Router + React Navigation Drawer
- Axios
- RapidAPI JSearch API

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm or yarn
- Expo Go app (for running on a device)

### Install
```bash
npm install
```

### Run
```bash
npm run start
npm run android
npm run ios
npm run web
```

## API Key Setup
This project uses the RapidAPI JSearch API. The key is currently hardcoded in:
- `hook/useFetch.js`
- `app/search/[id].js`

Recommended: move the key to an Expo environment variable.

Example:
1. Create a `.env` file with:
   `EXPO_PUBLIC_RAPIDAPI_KEY=your_key_here`
2. Update the headers to use `process.env.EXPO_PUBLIC_RAPIDAPI_KEY`
3. Restart Expo with `npm run start`

## Project Structure
- `app/` - routes and screens (expo-router)
- `components/` - reusable UI components
- `constants/` - theme, icons, images
- `hook/` - custom hooks (data fetching)
- `styles/` - screen styles
- `assets/` - static assets

## Notes
- API provider: RapidAPI JSearch.
- If caching causes issues, run `npx expo start -c`.
