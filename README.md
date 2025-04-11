# 🍹 Drink Recipe Finder

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-TypeSafe-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Speedy🔥-purple?logo=vite)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

A **multi-page drink recipe web app** built with **React** and **React Router DOM** for seamless navigation. The app uses **Zustand with Slice Pattern** for modular state management and delivers an enhanced, responsive user experience.

> Search, discover, and save your favorite drink recipes with ease.

![App Preview](https://wilmed10.github.io/portfolio/img/project-drinks.png)


## 🌐 Live Demo

👉 Try it here:  
🔗 [https://wilmed10.github.io/drinks/](https://wilmed10.github.io/drinks/)


## ✅ Features

- 🔍 Search and browse drink recipes by ingredient or name.
- 📃 View detailed instructions and ingredients for each drink.
- 💾 Save your favorite drinks with persistent local storage.
- 🚦 Efficient multi-page navigation using React Router.
- 🧠 Modular and scalable state management via Zustand slices.
- 🎯 Fully responsive UI for mobile and desktop.


## 🛠️ Technologies Used

- ⚛️ React 19
- ⚡ Vite
- 💅 TypeScript
- 📦 Zustand (with Slice Pattern)
- 🚦 React Router DOM
- 🌐 Axios – API requests
- 🎨 Tailwind CSS


## 🧠 What I Learned

- How to configure a React + TypeScript project using Vite.
- Implementing Zustand slices for scalable state management.
- Creating a multi-page experience using React Router DOM.
- Making API calls and managing async state effectively.
- Structuring a modular and clean React project for better scalability.


## 📁 Project Structure

```bash
drinks/
├── public/                # Static files (images)
├── src/
│   ├── components/        # Reusable UI components
│   ├── layouts/           # App-level layout wrappers
│   ├── services/          # API request logic
│   ├── stores/            # Zustand stores (using slices)
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility/helper functions
│   ├── views/             # Page views
│   ├── index.css          # Global styles
│   ├── main.tsx           # App entry point
│   ├── router.tsx         # Routing logic
│   └── vite-env.d.ts      # Vite-specific TS declarations
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

---

## ⚙️ Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/wilmed10/drinks

# Navigate to the project folder
cd drinks

# Install dependencies
npm install

# Run the app
npm run dev
