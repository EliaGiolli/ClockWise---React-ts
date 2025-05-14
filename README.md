# ClockWise

ClockWise is a modern solution for managing work hours, analyzing weekly and monthly data, and accurately recording business activities. This application is built using React and TypeScript, following best practices for a clean and maintainable codebase.

## Table of Contents

- [Installation](#installation)
- [Libraries Used](#libraries-used)
- [Pages Overview](#pages-overview)
  - [About Page](#about-page)
  - [Product Page](#product-page)
  - [Dashboard](#dashboard)

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
   
## Libraries Used

- **React 19 + TypeScript**: For building robust UI with static type checking.
- **Vite**: Fast dev server and build tool.
- **Tailwind CSS 4 + CVA + clsx**: Utility-first styling with class management helpers.
- **Zustand**: Lightweight state management.
- **React Router v7**: For routing and navigation.
- **Framer Motion** & **Motion One**: Smooth animations and transitions.
- **React Hook Form**: Efficient form management and validation.
- **TanStack Table**: Fully customizable table library.
- **Recharts**: For data visualization and responsive charts.
- **Lucide React** & **React Icons**: Icon libraries.
- **Headless UI**: Accessible UI components.
- **React Scroll**: Smooth scrolling between sections.


## Pages Overview

### About Page

The About Page serves as the landing page for the application. It provides an introduction to ClockWise and its features.

- **Components**:
  - **SummaryCards**: Displays three summary cards that highlight key features of the application, such as monthly hour management, graphical analysis, and presence forms.
  - **FeatureTabs**: Allows users to switch between different features of the application, providing detailed descriptions and links to further explore products.

### Product Page

The Product Page showcases the various products offered by ClockWise. It includes:

- **Charts**: Visual representations of data related to work hours and productivity.
- **Time Summary**: A summary of time logged by users.
- **Work Log Table**: A table that displays logged work entries, allowing users to add new entries through a modal form.

### Dashboard

The Dashboard is the main interface for users to interact with the application. It includes:

- **Sidebar**: Navigation links to different sections of the application.
- **Time Summary**: A quick overview of logged hours.
- **Charts**: Graphical representations of work data.
- **Work Log Table**: A detailed table of work logs, with functionality to add new entries via a modal.

## Contributing

If you'd like to contribute to ClockWise, feel free to fork the repository and submit a pull request. Please ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
