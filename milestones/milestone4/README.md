# Milestone 4: Daily Devotional Tracker (UI + CRUD)

**Ian M. McConihay**  
College of Science, Engineering and Technology, Grand Canyon University  
JavaScript Web Application Development  
**Instructor: Bobby Estey**  
**Date: September 28, 2025**

---

## Instructor Feedback from Milestone 3

> "Ian, all you have to do is post only the link to the markdown file, nothing else.  Think about what I am saying.  All the other links should be on that one markdown page.  I post on all my sites a category ## Links and have my links below.

 

Please remember that you want to capture everything under ONE UMBRELLA, I Hope this make sense, let me know in Halo with your comments :-)

 

Now to your work, excellent work and very impressive you have learned both MermaidJS and Marp.  Keep doing FANTASTIC :-)"

---

## Response to Feedback

> I consolidated all project materials under one markdown file, including a clear ## Links section, as suggested. Diagram explanations were also refined for clarity and professionalism.

---

## Screencast

Watch the demonstration of the full-stack Daily Devotional Tracker Angular application:

🔗 [Watch on Loom (Milestone 4) Part 1](https://www.loom.com/share/67b4f3415836406bb6254c647d67d540?sid=b1149773-6a18-4491-99d5-f6cb496f237b)

🔗 [Watch on Loom (Milestone 4) Part 2](https://www.loom.com/share/a9f4d23bef2040c0a9e3ad2b5f11016a?sid=c985ef2d-eac0-4b74-b73c-d7d2cf724d87)

### What the Screencast Covers

- Angular navigation using a Bootstrap NavBar
- Listing devotionals (GET)
- Creating a new devotional (POST)
- Editing and updating an existing devotional (PUT)
- Deleting a devotional (DELETE)
- Real-time UI updates and form validation
- REST API requests and responses in browser dev tools

---

## Summary of Changes

| Feature / Element           | Description                                                                  | Status     |
|-----------------------------|------------------------------------------------------------------------------|------------|
| Angular Frontend Scaffold   | Created Angular project using standalone components                         | Completed  |
| DevotionListComponent       | Lists all devotions and allows delete/edit actions                          | Completed  |
| DevotionFormComponent       | Handles both creation and editing forms with validation                     | Completed  |
| DevotionService             | Communicates with Express backend API using HttpClient                      | Completed  |
| Routing                     | Configured routing between `/devotion`, `/devotion/create`, and `/devotion/edit/:id` | Completed  |
| Bootstrap UI Integration    | Applied Bootstrap NavBar and styling for layout consistency                 | Completed  |
| API Connection              | Integrated Angular with Express API at `http://localhost:3000/api/devotions` | Completed  |
| CRUD Functional Test        | All operations verified through browser and dev tools                       | Completed  |
| Postman Documentation       | Updated Postman collection with API examples and saved responses            | Completed  |
| Screencast Recording        | UI demonstration with narration of key functionality                       | Completed  |

---

## REST API Documentation

The API used by the Angular application supports the following endpoints:

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/api/devotions`      | Retrieve all devotionals           |
| GET    | `/api/devotions/:id`  | Retrieve a single devotional       |
| POST   | `/api/devotions`      | Create a new devotional            |
| PUT    | `/api/devotions/:id`  | Update an existing devotional      |
| DELETE | `/api/devotions/:id`  | Delete a devotional                |

The Angular service uses `HttpClient` to call these endpoints via relative URLs mapped to `http://localhost:3000/api/devotions`.

---

## Functional Requirements Covered

| ID   | Requirement                                                                 |
|------|------------------------------------------------------------------------------|
| FR01 | List all devotionals in a table with date, title, and content preview       |
| FR02 | Create a new devotional using a validated form                              |
| FR03 | Update existing devotionals via an edit form                                |
| FR04 | Delete devotionals directly from the list view                              |
| FR05 | Navigate between views using a Bootstrap NavBar                             |
| FR06 | Reflect Create/Update/Delete operations immediately in the UI               |

---

## Known Issues or TODOs

| ID   | Issue / Item                         | Description                                              |
|------|--------------------------------------|----------------------------------------------------------|
| KI01 | User Authentication                  | Not yet implemented (planned for Milestone 5)            |
| KI02 | Search or Filter by Date             | Not implemented in current UI                            |
| KI03 | Mobile Responsiveness                | Basic Bootstrap works, but more tuning needed for mobile |
| KI04 | Form Validation                      | Minimal; future work includes required field feedback    |

---

## Lessons Learned

- Implementing full CRUD in Angular is straightforward when services and routing are well organized
- Bootstrap makes layout easier but still requires tuning for mobile devices
- Using Angular's standalone components greatly simplified modular design
- Keeping backend field names (`title`, `content`, `date`) in sync with frontend bindings is essential to avoid 400/500 errors
- Clear separation of concerns (routes, services, components) enables better testing and debugging

---

## PowerPoint Summary

See `milestone4-summary.pptx` for the final presentation, covering:

- System architecture and flow
- UI demonstration screenshots
- Challenges encountered (routing, data binding bugs)
- Known issues and future enhancements
- Lessons learned and developer reflections

---

## Final Thoughts

Milestone 4 successfully bridges the REST API developed in Milestone 3 with a fully functional Angular UI. The project now allows users to journal daily devotions through an intuitive web interface backed by a scalable database and modular code structure. Milestone 5 will introduce additional enhancements like authentication, filters, and possibly dashboard visualizations.