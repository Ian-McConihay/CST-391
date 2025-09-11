# Milestone 2: Daily Devotional Tracker

**Ian M. McConihay**  
College of Science, Engineering and Technology, Grand Canyon University  
JavaScript Web Application Development  
**Instructor: Bobby Estey**  
**Date: September 7, 2025**

---

## Instructor Feedback

> "Ian, here's an update.  Thank you for meeting all requirements on this assignment. First thank you for using Markdown, a Developer's professional approach for documentation of software.

>Requirements:  Provided an introduction explaining your final project proposal and listing the functional requirements and the Entity-Relationship Diagram explaining your backend database.

>You also listed the Sitemap your pages that are going to be developed along with the  and the Wireframes of the component structure of your application.

>There was a Class diagram showing the classes that will be developed.  Finally, the Risks about this project are also mentioned.

>The only item I see missing is a Conclusion, please add a Conclusion.

---

## Response to Feedback

> I addressed the feedback by adding a conclusion. I also included a REST API overview with five endpoints in the updated proposal. This aligns with the guidance for RESTful design and will serve as the foundation for future API development.

---

## Introduction

The **Daily Devotional Tracker** is a full-stack web application designed to help users engage with their spiritual discipline through digital journaling. Users can create, view, update, and delete devotionals while tagging entries with Bible verses or topics. The app will include dashboards, filtering, and a secure login system. It features two frontends (Angular and React) and a shared Express.js REST API backed by a MySQL database.

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

> Additional endpoints (e.g., for authentication or tags) will be added in later milestones.

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

---

## Figure 2: Sitemap

![Sitemap](Screenshot%202025-09-05%20at%201.05.09 PM.png)

---

## Figure 3: UI Wireframes

![UI Wireframes](Screenshot%202025-09-05%20at%201.05.23 PM.png)

---

## Figure 4: UML Class Diagram

![UML Diagram](Screenshot%202025-09-05%20at%201.05.43 PM.png)

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
The Daily Devotional Tracker is designed to be a meaningful and technically robust application that supports users in maintaining their spiritual disciplines through journaling, reflection, and consistent engagement. By leveraging modern web technologies like Angular, React, Express, and MySQL, the project delivers both functionality and flexibility. The API design, risk planning, and clear user stories form a solid foundation for development in future milestones. With a focus on simplicity, security, and usability, this tracker is positioned to serve as a valuable daily tool for spiritual growth.
