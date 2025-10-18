---
marp: true
theme: gaia
paginate: true
class: lead
---

## Milestone 5: Daily Devotional Tracker (React Frontend)
### Ian M. McConihay  
College of Science, Engineering and Technology, Grand Canyon University  
JavaScript Web Application Development  
Instructor: Bobby Estey  
Oct 19, 2025

---

## Introduction

Milestone 5 completes the Daily Devotional Tracker by delivering a fully functional React-based frontend integrated with a RESTful Express API. This version improves UX by replacing modals with dedicated pages, enhancing styling with custom CSS and Bootstrap, and adding SweetAlert2 confirmations for deletion. Each feature supports daily journaling in a responsive, modern web interface, showcasing full CRUD operations with clean code organization.

---

## Project Overview

- Full-stack web application
- REST API (Express.js + TypeScript)
- MySQL database
- React frontend using functional components and hooks
- Bootstrap styling and SweetAlert2 integration

---

## React + REST Integration

| Feature        | Description                                             |
|----------------|---------------------------------------------------------|
| List Devotions | `DevotionList` fetches from API using `useEffect()`     |
| Create/Edit    | Separate pages with controlled components and `useState` |
| Delete         | SweetAlert2 confirmation before API call                |
| Routing        | `/`, `/create`, `/edit/:id` configured using React Router |

---

## REST API Endpoints (Recap)

| Method | Endpoint              | Purpose                  |
|--------|-----------------------|--------------------------|
| GET    | `/api/devotions`      | Fetch all devotionals    |
| GET    | `/api/devotions/:id`  | Get devotional by ID     |
| POST   | `/api/devotions`      | Create new devotional    |
| PUT    | `/api/devotions/:id`  | Update devotional        |
| DELETE | `/api/devotions/:id`  | Delete devotional        |

---

## UI/UX Enhancements

| Update Area         | Description |
|---------------------|-------------|
| Page-Based Editing  | Replaced modals with dedicated Create/Edit pages |
| Custom Styling      | Upgraded to unique card layout and soft green theme |
| SweetAlert2         | Added confirmation dialog for deletions |
| Navigation          | Bootstrap NavBar with React Router links |

---

## Sample Devotion Object (JavaScript)

```js
{
  id: 1,
  title: "Evening Reflection",
  content: "Reflected on James 1:5 – asked God for wisdom...",
  date: "2025-10-16"
}
```

---

## MySQL Table Setup

```sql
CREATE TABLE devotions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Custom CSS Highlights

- Green gradient NavBar  
- Rounded cards with hover elevation  
- Clean input forms with subtle focus outlines  
- Unique font pairing for professional feel  
- Responsive layout with mobile-first design

---

## Challenges Overcome

- Rewriting modal logic to use React Router pages  
- Maintaining UI state consistency during updates  
- Ensuring correct form reset and controlled components  
- Styling all views to match custom theme while remaining responsive

---

## Known Issues

| Issue                  | Status             |
|------------------------|--------------------|
| Authentication         | Not yet implemented |
| Search/filter features | Still pending       |
| Pagination             | Not implemented     |

---

## Lessons Learned

- Routing-based forms are easier to manage than modals  
- SweetAlert2 improves UX and adds polish with little code  
- Component reuse and separation of concerns make debugging easier  
- Custom CSS design enhances brand personality and user engagement

---

## Demo Instructions

1. Start MySQL and run table DDL.  
2. Run backend: `npm run dev` in `/milestone3`.  
3. Run frontend: `npm start` in `/devotional-react`.  
4. Navigate to `http://localhost:5173`.  
5. Create, Edit, and Delete devotions from the React UI.

---

## Links

- **GitHub Backend:** [Express + TypeScript API](https://github.com/Ian-McConihay/CST-391/tree/main/milestones/milestone3)  
- **GitHub Frontend:** [React Devotional UI](https://github.com/Ian-McConihay/CST-391/tree/main/milestones/milestone5)  
- **Screencast:** [Watch Milestone 5 Demo on Loom](https://www.loom.com/share/8a08ac9b97f6464f920c0a9157f89c30?sid=7eb91e0a-bd55-4f2a-85c7-a6c97a4aafd8)

---

## Thank You!

**Milestone 5: Final UI Build with React + REST + Bootstrap**