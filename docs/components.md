# UI Components Overview

This document provides a high-level look at the main reusable UI components in the PEC Student Hub application. These components are crucial for building a consistent, student-centric, and user-friendly experience, allowing students to interact with their academic information intuitively.

## Core Components

### NavItem
*   **Location:** `src/components/NavItem/index.tsx`
*   **Purpose/Role:** The `NavItem` component is used for the main application navigation, typically found in the persistent navigation bar (e.g., sidebar or bottom navbar). It allows students to easily switch between different major sections of the application, such as "Home," "Performance," "Assignments," and "Profile." Each `NavItem` usually consists of an icon and a text label, clearly indicating its destination.

### StatsCard
*   **Location:** `src/components/StatsCard/index.tsx`
*   **Purpose/Role:** `StatsCard` is designed to display key statistics or metrics in a concise and easily digestible format. For example, it's used on the Home page to show "Overall Attendance," "Overall Credits Earned," and "CGPA." These cards provide students with quick insights into their academic standing at a glance.

### SubjectCard
*   **Location:** `src/components/SubjectCard/index.tsx`
*   **Purpose/Role:** The `SubjectCard` is a vital component for displaying detailed information about a specific class or subject within the timetable on the Home page. It typically shows the subject name, subject code, subject type (Theory, Lab, Activity), faculty name, and the student's attendance percentage for that subject. This component is central to how students view and understand their academic schedules.

### WeekDayNavItem
*   **Location:** `src/components/WeekDayNavItem/index.tsx`
*   **Purpose/Role:** `WeekDayNavItem` components are used in a horizontal navigation bar, allowing students to select a specific day of the week (e.g., Monday, Tuesday). Selecting a day updates the timetable view to show the schedule for that chosen day. This is essential for easy navigation through the weekly academic calendar.

### ProgressBar
*   **Location:** `src/components/ProgressBar/index.tsx`
*   **Purpose/Role:** The `ProgressBar` is a visual component used to represent progress or a percentage value, such as the attendance percentage for a subject displayed within a `SubjectCard` or overall attendance in a `StatsCard`. It offers a quick visual cue, making it easier for students to assess their standing or completion levels.
