# GameExplorerApp

Mobile app to search and view video game information using the RAWG API.

## Features

- Real-time game search
- Game details view (release date, rating, platforms, genres)
- Dark mode interface optimized for gaming
- Retro gaming "Press Start 2P" font

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on mobile device for testing

## Installation

```bash
# Clone the repository
git clone [repository-url]
cd GameExplorerApp

# Install dependencies
npm install
```

## Getting Started

```bash
# Start the development server
npx expo start

# For iOS
npx expo start --ios

# For Android
npx expo start --android
```

## API

The app uses the public RAWG API to fetch video game data. The API key is included in the `utils/api.ts` file.

## Technologies Used

- React Native
- Expo
- TypeScript
- Expo Router
- RAWG API

## Build

To create a production build:

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## Notes

- The app requires an internet connection to work
- Search results appear after typing at least 3 characters
- Only portrait orientation is supported
