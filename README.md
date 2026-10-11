# PEC Student Hub — Student Academic Portal

A student-facing web application built to make academic information more accessible to students at Prathyusha Engineering College.

**Live Demo:** [pec-student.vercel.app](https://pec-student.vercel.app/)

## Features

- **Timetable:** View the daily class schedule in a centralized interface.
- **Academic Dashboard:** Access timetable information and quick academic summaries.
- **Responsive Interface:** Navigate academic information across different screen sizes.

> The application was developed iteratively. Feature availability may differ from the broader project vision.

## Technology Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** SCSS
- **Routing:** React Router
- **HTTP Client:** Axios

## Architecture

This repository contains the frontend client. Academic data is retrieved through a separate backend service.

**Related repository:** [PEC Student Server →](https://github.com/gideon-jacob/pec-student-server)

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/gideon-jacob/pec-student-client.git
cd pec-student-client
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Production Build

```bash
npm run build
```

## Project Evolution

PEC Student Hub was the starting point for a broader effort to digitize college academic workflows. The concept later expanded into **[PEC Tracking Online Portal (PECTOP)](https://github.com/pec-developers/pec-tracking-online-portal)**, which explores a more comprehensive, role-based academic platform.

