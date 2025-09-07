# Milestone 1: Daily Devotional Tracker

- **Author**: Ian M. McConihay  
- **College**: College of Science, Engineering and Technology, Grand Canyon University  
- **Course**: JavaScript Web Application Development  
- **Instructor**: Bobby Estey  
- **Date**: September 7, 2025  

---

## Introduction

The **Daily Devotional Tracker** is a full-stack web application designed to help users organize and reflect on their daily spiritual journey. The platform enables individuals to create, view, edit, and delete personalized devotional entries while optionally associating each entry with Bible verses, topics, or prayer focuses.

This tool serves as a digital journal for daily reflections, scripture engagement, and prayer tracking, supporting a Christian lifestyle centered on growth and consistency.

Users will interact with the application through modern, responsive front-end interfaces built using **Angular** and **React**. Both front ends will consume a shared **Express.js RESTful API**, powered by a **MySQL** database. This modular and scalable design ensures clean separation of concerns, reusability, and long-term maintainability.

---

## Functionality Requirements (User Stories)

| ID    | User Story                                                                 |
|-------|----------------------------------------------------------------------------|
| US01  | As a user, I want to create a new devotional entry so that I can record my reflections. |
| US02  | As a user, I want to view a list of my past devotional entries so that I can revisit them. |
| US03  | As a user, I want to update an existing devotional entry so that I can revise my thoughts. |
| US04  | As a user, I want to delete devotional entries so that I can remove outdated records. |
| US05  | As a user, I want to tag each devotional with a Bible verse or topic for categorization. |
| US06  | As a user, I want to search and filter devotionals by date or keyword for easier access. |
| US07  | As a user, I want to see a dashboard summary of my devotional habits for better consistency. |
| US08  | As a user, I want to securely log in and log out to protect my private devotional content. |

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