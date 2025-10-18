# Milestone 5: Daily Devotional Tracker (React UI + CRUD Enhancements)

**Ian M. McConihay**  
College of Science, Engineering and Technology, Grand Canyon University  
JavaScript Web Application Development  
**Instructor: Bobby Estey**  
**Date: October 19, 2025**

---
## Introduction

Milestone 5 represents the final stage of the Daily Devotional Tracker React application, focused on refining the user interface, enhancing usability, and completing the full suite of CRUD functionality. Building upon previous milestones, this version replaces modal forms with dedicated routing for creation and editing, improving both accessibility and reliability. The application now features a responsive design using Bootstrap, integrated delete confirmations with SweetAlert2, and a clean, card-based layout that encourages daily journaling. These enhancements contribute to a more polished, user-friendly experience while maintaining a clear separation of concerns in the codebase.

---

## Screencast

🎥 **Watch the UI + CRUD React App in Action:**

🔗 [Loom Screencast – Milestone 5](https://www.loom.com/share/8a08ac9b97f6464f920c0a9157f89c30?sid=7eb91e0a-bd55-4f2a-85c7-a6c97a4aafd8)

### What the Screencast Covers

- React routing between `/` and `/edit/:id`
- Listing devotions with responsive card layout
- Creating a new devotion using a controlled form
- Editing an existing devotion with prefilled values
- SweetAlert confirmation before deletion
- Bootstrap UI integration with search box, buttons, and banner
- CSS enhancements for hover effects and focus styles

---

## Summary of Changes

| Feature / Element         | Description                                                            | Status     |
|---------------------------|------------------------------------------------------------------------|------------|
| React Routing              | Navigation with React Router (`/`, `/edit/:id`)                        | Completed  |
| DevotionList Component     | Displays list of devotions and handles delete with SweetAlert          | Completed  |
| DevotionForm Component     | Used for both create and update operations                             | Completed  |
| Form Refactor              | Moved from modal to standalone page to simplify modal bugs             | Completed  |
| Custom CSS Polish          | Added hover, shadow, gradient navbar, soft borders                     | Completed  |
| Bootstrap UI Integration   | Buttons, containers, alerts, search field, responsive cards            | Completed  |
| SweetAlert2 Integration    | Confirmation dialog for deleting devotions                             | Completed  |
| CRUD Functional Test       | Tested all endpoints through UI and verified UI updates                | Completed  |

---

## REST API Documentation

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/api/devotions`      | Retrieve all devotionals           |
| GET    | `/api/devotions/:id`  | Retrieve a single devotional       |
| POST   | `/api/devotions`      | Create a new devotional            |
| PUT    | `/api/devotions/:id`  | Update an existing devotional      |
| DELETE | `/api/devotions/:id`  | Delete a devotional                |

All requests are handled in the `api.js` module using `fetch`.

---

## Functional Requirements Covered

| ID   | Requirement                                                           |
|------|------------------------------------------------------------------------|
| FR01 | List all devotions with title, date, and content preview              |
| FR02 | Create new devotion with a validated form                             |
| FR03 | Edit and update existing devotions using the same form                |
| FR04 | Delete devotion with SweetAlert confirmation                          |
| FR05 | Navigation between home and form views using React Router             |
| FR06 | Responsive layout using Bootstrap 5 and custom CSS                    |
| FR07 | Client-side search functionality by title/content                     |
| FR08 | Alert banner shown after creation or update                           |

---

## Known Issues or TODOs

| ID   | Issue / Item                    | Description                                                   |
|------|---------------------------------|---------------------------------------------------------------|
| KI01 | No Authentication               | App is public; no login or user-based access control          |
| KI02 | Rich Text Editing               | Textareas use plain input; future versions may allow Markdown |
| KI03 | Date Formatting                 | Date display is basic; could improve formatting                |

---

## Lessons Learned

- **Routing over modals**: Using dedicated pages instead of modals reduced bugs and improved UX.
- **Component reuse**: Reusing a single form component for both create and edit kept the logic DRY.
- **UI polish matters**: Even small changes like shadows and focus styling significantly improved aesthetics.
- **Client-side search**: Implementing simple filtering made content much easier to browse.
- **Confirmation dialogs**: Using SweetAlert made destructive actions feel safer and more professional.

---

## PowerPoint Summary

A summary presentation is included as `milestone5-summary.pptx`, highlighting:

- Before/after UI refinements
- Screenshots of all views (List, Create, Edit)
- REST API design
- Routing logic and code snippets
- Lessons learned and next steps for expansion

---

## Final Thoughts

Milestone 5 completes the core CRUD functionality in a fully navigable React application. By enhancing the interface, polishing the user experience, and integrating feedback from previous milestones, this project now offers a professional and usable devotional tracker. Future enhancements may include authentication, date filtering, and backend persistence with MongoDB or PostgreSQL.