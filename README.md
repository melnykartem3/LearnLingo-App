Learn Lingo

Learn Lingo is an interactive web application that connects users with expert
language tutors, offering filters for language, proficiency level, and price. It
allows users to save their favorite tutors, view tutor profiles, and book trial
lessons, enhancing their language learning experience.

Table of Contents

1. Demo & Design Links
2. Technologies used
3. Getting Started
4. Project Structure
5. Available Scripts
6. Core Features

- Demo & Design Links

Figma Design:
https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=0-1&node-type=canvas&t=HnM1R8GTWMiFbwLy-0
Documentation:
https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit?tab=t.0

- Technologies Used

1. Frontend: React, Redux, React Router
2. State Management: Redux Toolkit, Redux Persist
3. Form Handling & Validation: React Hook Form, Yup
4. UI & Icons: CSS Modules, React Icons, React Hot Toast
5. Backend/Database: Firebase
6. Routing: React Router DOM

- Getting Started

Installation

1. Clone the repository:

git clone https://github.com/yourusername/learn-lingo.git

cd learn-lingo

2. Install dependencies:

npm install

3. Start the app in development mode:

npm run dev

4. Navigate to http://localhost:5173 to view it in your browser.

- Core Features

1. Navigation & Authentication:

The Navigation component includes links to homepage, teachers, and favorites.
Modals for login, registration, and logout are managed with the useModal custom
hook.

2. Hero and About Sections:

The HeroSection highlights the platform's mission. The AboutSection displays
statistics about tutors, subjects, reviews, etc.

3. Teacher Profiles & Filtering:

TeachersPage fetches and displays teachers, with pagination to load more.
Filters allow users to filter teachers by language, level, and price.

4.Favorites & Reviews:

Favorite teachers are stored and displayed in the FavoritesPage. Users can
expand a teacher's profile to see reviews and language proficiencies.

5. Booking & Trial Lessons:

Users can book trial lessons via a modal within the Teacher component.

This README should give new developers an overview of the Learn Lingo project
and guide them through setup and exploration of its core functionalities. Happy
coding!
