# PEC Student Hub (Student Academic Management Portal)

## Project Vision

PEC Student Hub is a student-centric application designed to provide a seamless and user-friendly interface for managing academic information. Our vision is to empower students by offering easy access to all their academic details in one consolidated platform, reducing complexity and enhancing their educational experience.

## Scope and Features

### Overall Goal
To help students efficiently manage all their academic details, track progress, and stay informed about important academic events and information.

### Current Features
The application currently includes the following features (some pages are placeholders pending full backend integration):
*   **Dashboard/Home:** Displays a daily timetable and quick stats.
*   **Timetable Viewing:** Allows students to view their class schedule by day.
*   **Assignments:** A section to track upcoming and past assignments (currently a placeholder page).
*   **Performance:** A section to view academic performance metrics (currently a placeholder page).
*   **User Profile:** Displays user information (currently a placeholder page).
*   **Navigation:** Smooth client-side navigation using React Router.
*   **Responsive Design:** Adapts to different screen sizes for accessibility on various devices.

### Planned Features
Based on user feedback and project goals, the following features are planned for future development:
*   **Exam Seating Information:** Display assigned seating for upcoming exams.
*   **Semester Results:** Show current and past semester grades and GPA.
*   **Previous Semester Details:** Access to timetables, attendance, and results from prior semesters.
*   **Notifications:** Alerts for important academic events, deadlines, or new information.
*   **Detailed Attendance Tracking:** More granular attendance information per subject.
*   **User Authentication:** Secure login for students.
*   **Dynamic Data Integration:** Full integration with college backend systems for real-time data.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   Node.js (version 18.x or later recommended)
*   npm (usually comes with Node.js) or Yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd pec-student
    ```
    (Replace `<repository-url>` with the actual URL of the repository.)

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

Once dependencies are installed, you can start the local development server:

Using npm:
```bash
npm run dev
```
Or using Yarn:
```bash
yarn dev
```
This will typically start the application on `http://localhost:5173` (the port might vary if 5173 is in use). The application supports Hot Module Replacement (HMR) for a fast development experience.

### Building for Production

To create a production build of the project:

Using npm:
```bash
npm run build
```
Or using Yarn:
```bash
yarn build
```
This command will generate a `dist` folder containing the optimized static assets for deployment.

## Linting

To check the codebase for linting errors and warnings:
```bash
npm run lint
```
Or using Yarn:
```bash
yarn lint
```

## Technology Stack

*   **Frontend:** React, TypeScript, Vite
*   **Styling:** SCSS
*   **Routing:** React Router DOM
*   **HTTP Client:** Axios
*   **Linting:** ESLint, Prettier (Prettier setup not explicitly mentioned but common)
*   **Icons:** React Icons

## Contributing
(Details to be added later - for now, focus on setup and understanding the project.)
