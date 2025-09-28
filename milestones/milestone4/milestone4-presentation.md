---
marp: true
theme: gaia
paginate: true
class: lead
---

## Milestone 4: Daily Devotional Tracker (Angular Frontend)
### Ian M. McConihay
College of Science, Engineering and Technology, Grand Canyon University  
JavaScript Web Application Development  
Instructor: Bobby Estey  
Sept 28 2025

---

## Project Overview

- Full-stack web application
- REST API (Express.js + TypeScript)
- MySQL database
- Angular frontend implementing CRUD for "Devotions"
- Bootstrap navigation and responsive UI

---

## Angular + REST Integration

| Feature        | Description                                  |
|----------------|----------------------------------------------|
| List Devotions | Angular `DevotionListComponent` fetches data from API |
| Create/Edit    | Angular `DevotionFormComponent` posts/puts data to API |
| Delete         | Delete buttons call API and refresh the list |
| Routing        | `/devotion` and `/devotion/new` routes configured |

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

## Design Updates

| Update Area          | Description |
|----------------------|-------------|
| Angular UI Scaffold  | Added `DevotionListComponent` & `DevotionFormComponent` |
| Service Layer        | Created `DevotionService` using Angular HttpClient |
| Bootstrap Styling    | Added responsive NavBar and tables |
| Routing              | Configured Angular routes for listing and creating devotions |

---

## Sample Devotion Model (TypeScript)

```ts
export interface Devotion {
  id?: number;
  title: string;
  content: string;
  date: string;
  created_at?: string;
}
```

---

## MySQL Table Setup (Recap)

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

## Demo Sample Insert

```sql
INSERT INTO devotions (title, content, date)
VALUES
  ('Grace and Truth', 'Today I reflected on John 1:14.', '2025-09-09'),
  ('Evening Reflection', 'Reflected on James 1:5 – asked God for wisdom...', '2025-09-02');
```

---

## Challenges Encountered

- Configuring Angular standalone components with HttpClient
- Matching API endpoints between Angular and Express
- Setting up routing to work with new UI components
- Managing forms for both Create and Edit modes

---

## Known Issues

| Issue                  | Status    |
|------------------------|-----------|
| Search/filter not yet implemented | Pending |
| Authentication not yet added      | Pending |
| UI responsive tweaks for mobile   | Pending |

---

## Lessons Learned

- Angular HttpClient simplifies REST integration.
- Consistent naming between backend and frontend avoids errors.
- Bootstrap NavBar makes a cleaner UI with minimal CSS.
- Postman remains essential for quick API testing during frontend dev.

---

## Demo Instructions

1. Start MySQL and run table DDL.
2. Run backend: `npm run dev` in `/milestone3`.
3. Run frontend: `ng serve` in `/devotional-ui`.
4. Navigate to `http://localhost:4200`.
5. Test Create, Read, Update, Delete from the Angular UI.

---

## Links

- **GitHub Backend:** [Backend API (Express + TypeScript)](https://github.com/Ian-McConihay/CST-391/tree/main/milestones/milestone3)
- **GitHub Frontend:** [Angular Devotional UI](https://github.com/Ian-McConihay/CST-391/tree/main/milestones/milestone4)
- **Screencast:** [Watch Milestone 4 Demo on Loom Part 1](https://www.loom.com/share/67b4f3415836406bb6254c647d67d540?sid=b1149773-6a18-4491-99d5-f6cb496f237b)
- **Screencast:** [Watch Milestone 4 Demo on Loom Part 2](https://www.loom.com/share/a9f4d23bef2040c0a9e3ad2b5f11016a?sid=c985ef2d-eac0-4b74-b73c-d7d2cf724d87)

---

## Thank You!

**Milestone 4: Angular UI + CRUD Integrated with Express API**