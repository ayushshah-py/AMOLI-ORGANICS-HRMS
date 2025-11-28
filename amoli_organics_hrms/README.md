# AMOLI ORGANICS HRMS - Full Project (Frontend + Node.js Backend)
This archive contains a ready-to-upload starter project for **AMOLI ORGANICS HRMS**:
- React + Vite frontend (Tailwind)
- Node.js + Express backend (MongoDB)
- .env.example files, README and deploy notes
## Quick start (local)
1. Backend:
   - cd backend
   - cp .env.example .env  (fill values)
   - npm install
   - npm run dev
2. Frontend:
   - cd frontend
   - cp .env.example .env (set VITE_API_URL)
   - npm install
   - npm run dev
## Deploy (free)
- Frontend: Vercel (connect GitHub repo); set VITE_API_URL env var
- Backend: Render or Railway; set MONGO_URL and JWT_SECRET env vars
- Database: MongoDB Atlas (free tier)
