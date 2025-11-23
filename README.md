# Account Form Project

A full-stack web application for user account creation, featuring a form to register users and store data in MongoDB.

## Features

- User registration form with validation
- Password hashing and email uniqueness checks
- Success page after registration
- Responsive UI with Mantine components
- RESTful API with NestJS backend

## Tech Stack

- **Frontend**: Next.js, React, Mantine UI, TypeScript
- **Backend**: NestJS, MongoDB, Mongoose, bcrypt
- **Database**: MongoDB Atlas

## Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd account-form-project
   ```

2. Install dependencies for backend:

   ```
   cd backend
   npm install
   ```

3. Install dependencies for frontend:

   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - In `backend/.env`, add:
     ```
     MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/account-form-project?retryWrites=true&w=majority
     ```
   - Replace with your MongoDB Atlas credentials.

## Running the Application

1. Start the backend:

   ```
   cd backend
   npm run start:dev
   ```

   - Runs on `http://localhost:3001`

2. Start the frontend:

   ```
   cd frontend
   npm run dev
   ```

   - Runs on `http://localhost:3000`

3. Open `http://localhost:3000` in your browser to access the form.

## API Endpoints

- **POST /users**: Create a new user

  - Body: `{ firstName, lastName, email, password, phone }`
  - Response: `{ message, userId }`

- **GET /users**: Get all users (excludes passwords)

- **GET /users/:id**: Get a user by ID (excludes password)

## Folder Structure

```
account-form-project/
├── backend/
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   ├── users/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.module.ts
│   │   │   ├── dto/create-user.dto.ts
│   │   │   └── schemas/user.schema.ts
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── success/page.tsx
│   │   ├── components/AccountForm.tsx
│   │   └── lib/api.ts
│   └── .env (if needed)
└── README.md
```

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit changes.
4. Push and create a pull request.
   git reset --soft HEAD~1

## License

MIT License. See LICENSE file for details.
