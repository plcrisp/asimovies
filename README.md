# 🎬 AsiMovies - Firebase & Angular Training Project

Angular + Firebase web app (Authentication, CRUD, Storage, Hosting) built as the core curriculum for a 4-hour Firebase onboarding session at **Asimov Jr.** Still being used to train new developers.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## ✨ Features

- Firebase Authentication (login / session state)
- Movie catalog with search and genre filtering
- Full CRUD on Firestore (create, read, update, delete movies)
- Poster image upload via Firebase Storage
- Deployed on Firebase Hosting

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Angular, TypeScript, Tailwind CSS |
| Cloud / Backend | Firebase (Authentication, Firestore, Storage, Hosting) |

## 🔥 Firebase Concepts Covered

The app is structured to teach Firebase progressively, each concept building on the previous one:

1. **Authentication** - sign-in and session handling
2. **Firestore** - CRUD operations on the movie catalog
3. **Storage** - uploading and serving poster images
4. **Hosting** - deploying the app to production

## 📁 Project Structure

```
├── base-codes/     # Starter HTML/CSS provided to trainees, so the session focuses on TypeScript & Firebase logic
├── src/            # Angular app: components, services, Firebase integration
├── public/         
├── angular.json
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

**Prerequisites:** Node.js 18+, a Firebase project with Authentication, Firestore, and Storage enabled.

```bash
git clone https://github.com/plcrisp/asimovies.git
cd asimovies
npm install
```

Add your Firebase credentials in `src/environments/environment.ts`:

```ts
export const environment = {
  firebase: {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  }
};
```

```bash
ng serve
```

App runs at `http://localhost:4200`.

## Author

**Pedro Lucas Crisp** - Computer Engineering student @ UNIFEI
[LinkedIn](https://linkedin.com/in/pedrolcrisp) · [GitHub](https://github.com/plcrisp) · pedrolcrisp@gmail.com
