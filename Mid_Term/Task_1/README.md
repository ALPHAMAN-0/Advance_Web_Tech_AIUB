# Lab Task 01: Course Management REST API (NestJS)

A Course Management REST API for a university system built with NestJS. It follows the Module → Controller → Service architecture. Every route returns a simple string produced by the Service layer, and the Controller contains no business logic.

## Tech Stack

- Node.js 22
- NestJS 12
- TypeScript 6
- npm

## Project Structure

```
CourseManagementAPI/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── course/
│       ├── course.module.ts
│       ├── course.controller.ts
│       └── course.service.ts
├── package.json
├── tsconfig.json
└── nest-cli.json
```

## Setup

```bash
npm install
npm run start:dev
```

Open http://localhost:3000 in the browser.

## API Endpoints

| Method | Route        | Description          | Response                                |
| ------ | ------------ | -------------------- | --------------------------------------- |
| GET    | /course      | Get all courses      | Get All Courses - from Service          |
| GET    | /course/:id  | Get course by ID     | Get Course with ID: 5 - from Service    |
| POST   | /course      | Create new course    | Create Course - from Service            |
| PUT    | /course/:id  | Update full course   | Update Course 5 - from Service          |
| PATCH  | /course/:id  | Update partial course| Patch Course 5 - from Service           |
| DELETE | /course/:id  | Delete course        | Delete Course 5 - from Service          |

## Testing

```bash
curl http://localhost:3000/course
curl http://localhost:3000/course/5
curl -X POST http://localhost:3000/course
curl -X PUT http://localhost:3000/course/5
curl -X PATCH http://localhost:3000/course/5
curl -X DELETE http://localhost:3000/course/5
```

Automated tests:

```bash
npm test
npm run test:e2e
```

## Architecture Rules

- Controller handles request and response only.
- Service handles all business logic and returns the strings.
- Module organizes the related controller and service.
- CourseService is injected into CourseController through the constructor.
