# 🕒 ClockWise – Smart Work & On-site Time Tracker

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)
![React](https://img.shields.io/badge/React-19.x-61DAFB.svg)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC.svg)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

> **ClockWise** is a modern and intuitive solution to manage work hours 🕒, analyze productivity 📊, and track on-site 🏢 or remote work 🏠 with ease. Built with **React 19**, **TypeScript**, and **TailwindCSS 4**, it focuses on scalability, performance, and user-friendly design.

---

## 📦 Features

- 📍 **Smart Work & Office Check-ins**  
  Log whether you worked remotely or on-site, with accurate timestamps.

- 📅 **Visual Reports**  
  Get clean, responsive weekly/monthly charts showing your productivity.

- 🧾 **Work Logs**  
  Record your work sessions with descriptions, hours, and tasks.

- 🎛️ **Dynamic Dashboard**  
  Interactive UI built with reusable components and Zustand for state management.

- 🌙 **Dark Mode**  
  Automatic light/dark theme support.

---
## Installation

To get started with ClockWise, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ClockWise.git
   cd ClockWise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build the project for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

## 🧩 Tech Stack

| Tech                    | Role                         |
| ----------------------- | ---------------------------- |
| ⚛️ React 19             | UI library                   |
| 🟦 TypeScript           | Static typing                |
| 🎨 TailwindCSS 4        | Utility-first styling        |
| 🛣 React Router 7       | Page routing                 |
| 📊 Recharts             | Data visualization           |
| 🧠 Zustand              | Global state management      |
| 🧾 React Hook Form      | Form handling and validation |
| 🌀 Framer Motion        | Animations and transitions   |
| 🧰 Lucide / React Icons |                              |


## Development & Tooling

- **Vite** for blazing-fast dev server
- **TypeScript** strict mode enabled
- **ESLint** for code linting
- **typescript-eslint** for type-aware linting

## Pages Overview

### 🔎 About Page

The About Page serves as the landing page for the application. It provides an introduction to ClockWise and its features.

- **Components**:
  - **SummaryCards**: Displays three summary cards that highlight key features of the application, such as monthly hour management, graphical analysis, and presence forms.
  - **FeatureTabs**: Allows users to switch between different features of the application, providing detailed descriptions and links to further explore products.

### 🛠 Product Page (ProductPage.tsx) 
This is the core view of the app, bringing together all key data and features in a single unified dashboard.

- **🧭 Sidebar**: Navigation panel for switching sections

- **📈 Charts**: Visual summaries of time worked (bar, pie, line charts via Recharts)

- **🕒 Time Summary**: Total and average hours worked, split by category

- **🧾 Work Log Table**: Table with all work sessions (add/edit via modal form)

- **🌗 Dark Mode Toggle**: Light and dark themes, persisted in state

✅ Note: This page acts as both the product showcase and the user dashboard — it’s a single source of truth for work tracking and data insights.

## Contributing

If you'd like to contribute to ClockWise, feel free to fork the repository and submit a pull request. Please ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
