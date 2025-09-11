# Milestone 3: Daily Devotional Tracker

**Ian M. McConihay**  
College of Science, Engineering and Technology, Grand Canyon University  
JavaScript Web Application Development  
**Instructor: Bobby Estey**  
**Date: September 14, 2025**

---

## Instructor Feedback

> "The diagrams need to be explained, remember this is to be a professional presentation for readers.  Hope this makes sense, keep doing well"

---

## Response to Feedback

> I addressed the feedback by adding diagram explanations.

---

## Screencast

Watch the demonstration of the Daily Devotional Tracker REST API in action via Postman and MySQL Workbench:

[Watch on Loom](https://www.loom.com/share/094153bf966848e285de247a24c1e871?sid=8d021144-639b-4ca3-a985-6a7ed2f0ef05)

### What the Screencast Covers

- Launching the Express + TypeScript backend
- Testing all CRUD API endpoints:
  - `GET /api/devotions`
  - `GET /api/devotions/:id`
  - `POST /api/devotions`
  - `PUT /api/devotions/:id`
  - `DELETE /api/devotions/:id`
- Viewing changes in MySQL using Workbench
- Explaining the code structure (controllers, routes, models, db connection)
- Showing terminal logs and successful API responses

--
## Introduction

The **Daily Devotional Tracker** is a full-stack web application designed to help users engage with their spiritual discipline through digital journaling. Users can create, view, update, and delete devotionals while tagging entries with Bible verses or topics. The app includes dashboards, filtering, and will support a secure login system. It features two frontends (Angular and React) and a shared RESTful API built with Express.js and backed by a MySQL database. This milestone focuses on implementing and testing the back-end REST API using Node.js, Express, and TypeScript.

---

### Summary of Changes

| Feature / Element          | Description                                                                 | Status       |
|----------------------------|-----------------------------------------------------------------------------|--------------|
| REST API Endpoints         | Added full CRUD for `/api/devotions` using Express and TypeScript           | Completed |
| MySQL Integration          | Connected to MySQL using `mysql2/promise` and `.env` credentials            | Completed |
| Devotions Table (DDL)      | Created `devotions` table with `id`, `title`, `content`, `date`, timestamps | Completed |
| Seed Data                  | Inserted multiple sample devotions for testing                              | Completed |
| Postman API Testing        | Collection created and initial testing done                                 | Completed |
| API Documentation Export   | Will export from Postman before final submission                            | Completed |
| PowerPoint (Marp Format)   | First draft created for Milestone 3                                         | Completed |
| Screencast                 | Planning recording showing API + MySQL results                              | Completed |

---

## REST API Overview

The API follows REST conventions and uses plural nouns for resources. Below are the key endpoints for the `devotions` resource:

| Method | Endpoint              | Description                         |
|--------|-----------------------|-------------------------------------|
| GET    | `/api/devotions`      | Fetch all devotionals               |
| GET    | `/api/devotions/:id`  | Fetch a single devotional by ID     |
| POST   | `/api/devotions`      | Create a new devotional             |
| PUT    | `/api/devotions/:id`  | Update a devotional                 |
| DELETE | `/api/devotions/:id`  | Delete a devotional                 |

---

## Functionality Requirements (User Stories)

| ID   | User Story                                                                 |
|------|-----------------------------------------------------------------------------|
| US01 | As a user, I want to create a new devotional entry so that I can record my reflections. |
| US02 | As a user, I want to view a list of my past devotional entries so that I can revisit them. |
| US03 | As a user, I want to update an existing devotional entry so that I can revise my thoughts. |
| US04 | As a user, I want to delete devotional entries so that I can remove outdated records. |
| US05 | As a user, I want to tag each devotional with a Bible verse or topic for categorization. |
| US06 | As a user, I want to search and filter devotionals by date or keyword for easier access. |
| US07 | As a user, I want to see a dashboard summary of my devotional habits for better consistency. |
| US08 | As a user, I want to securely log in and log out to protect my private devotional content. |

---

## Figure 1: ER Diagram

![ER Diagram](Screenshot%202025-09-05%20at%201.04.00 PM.png)
>Entity-Relationship diagram for the Devotions database schema, showing the devotions table with fields: id, title, content, date, and created_at. Primary key relationships and data types are also illustrated.
---

## Figure 2: Sitemap

![Sitemap](Screenshot%202025-09-05%20at%201.05.09 PM.png)
>Visual sitemap diagram showing the structure of the web application. Includes main routes like Home, View Devotions, Add Devotion, Edit Devotion, and Login/Logout paths.
---

## Figure 3: UI Wireframes

![UI Wireframes](Screenshot%202025-09-05%20at%201.05.23 PM.png)
>Low-fidelity wireframe mockups of the user interface, featuring key pages such as the devotion list view, create form, and individual devotion detail view. Layout includes headers, buttons, and input fields.
---

## Figure 4: UML Class Diagram

![UML Diagram](Screenshot%202025-09-05%20at%201.05.43 PM.png)
>UML class diagram displaying the core backend components. Includes classes such as DevotionController, DevotionService, DevotionModel, and DevotionRepository, along with their relationships and methods.
---

## Risk Table

| Risk               | Description                                         | Mitigation                                  |
|--------------------|-----------------------------------------------------|----------------------------------------------|
| 1. Dual Frontends  | Managing both Angular and React apps may take more time. | Build Angular first, then reuse logic for React. |
| 2. Auth Complexity | Adding user login could introduce security issues. | Use strong libraries like Passport if needed. |
| 3. DB Changes      | App needs may evolve beyond current ER design.     | Keep schema flexible; use migration tools.   |
| 4. Time Constraints| Milestone timeline is limited.                     | Focus on MVP; postpone extras.               |
| 5. State Handling  | React state can get complex.                       | Keep logic simple; avoid overengineering.    |
| 6. Deployment Errors| Hosting issues may occur.                         | Test early on hosting platforms.             |
| 7. Mobile Support  | App may not look good on phones.                   | Use Bootstrap; test on small screens.        |

---

## Conclusion

With Milestone 3 complete, the foundation for the Daily Devotional Tracker's back-end is solidly in place. The Node.js and Express-based REST API provides full CRUD support for the devotions resource and has been integrated with a MySQL database. This enables seamless data storage, retrieval, and manipulation—setting the stage for the Angular and React frontends in upcoming milestones. The system is modular, well-typed using TypeScript, and tested via Postman. Moving forward, security (auth), user management, and richer frontend experiences will be layered on top of this robust back-end architecture.