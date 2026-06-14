# AI & Robotics Summer Workshop — Landing Page

A responsive workshop landing page (React + TypeScript + Tailwind CSS) with an
Express.js backend API for handling registration enquiries.

## 📁 Project Structure
```
workshop-landing/
├── frontend/   # React + TS + Tailwind app
└── backend/    # Express.js API (POST /api/enquiry)
```

## 🚀 Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on http://localhost:5173

### Backend
```bash
cd backend
npm install
cp .env.example .env   # optional: add MONGO_URI for persistence
npm run dev
```
Runs on http://localhost:5000

The frontend's registration form calls `http://localhost:5000/api/enquiry`.
Update `API_URL` in `frontend/src/components/RegistrationForm.tsx` if you
deploy the backend elsewhere.

## 🔌 API


MongoDB is optional — if `MONGO_URI` isn't set, enquiries are stored
in-memory so the API still works out of the box.

## ✨ Features
- Responsive hero, details, learning outcomes, FAQ accordion, and registration sections
- TypeScript + Tailwind CSS throughout
- Client-side form validation (name, email format, 10-digit phone)
- Loading spinner + success/error states on submit
- Express API with server-side validation and optional MongoDB persistence

---

