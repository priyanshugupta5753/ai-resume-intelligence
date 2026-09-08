# 🚀 ResumeIQ

> **Elevate your career trajectory with precision skills intelligence and AI-powered resume optimization.**

![UI](https://img.shields.io/badge/UI-Premium_Geometric-blue) ![AI](https://img.shields.io/badge/AI-Google_Gemini-orange) ![Docker](https://img.shields.io/badge/Deploy-Docker-2496ED?logo=docker)

**ResumeIQ** is a high-performance web application designed to help modern professionals navigate the competitive job market. It combines cutting-edge **Google Gemini AI** analysis with a premium, interactive user experience to provide deep insights into resume performance, ATS compatibility, and role matching.

---

## ✨ Core Features

### 📊 Intelligence Dashboard
- **AI Score Cards**: Real-time evaluation of Resume Score, ATS compatibility, and Job Match percentage via **Google Gemini**.
- **Actionable Insights**: Specific identification of "Key Strengths" and "Areas for Improvement."
- **Optimization Guide**: AI-generated suggestions for bullet-point improvements.

### 🎯 Job Match Predictor
- **Description Analysis**: Paste any job description to see how your current resume stacks up with high precision.
- **Skill Gap Detection**: Automatically highlights missing keywords and industry-specific certifications.

### 🎨 Premium UI/UX
- **Geometric Hero**: A stunning, high-fidelity landing page with dynamic animated shapes.
- **Reactive Themes**: Instant transition between premium Dark and minimal Light modes.
- **Smooth Transitions**: Horizontal slide animations between authentication pages.

---

## 🛠️ Technology Stack

### Frontend
- **React 19** + **Vite**
- **Tailwind CSS** (Custom Glassmorphism & Reactive Tokens)
- **Framer Motion** (Page transitions & geometric animations)
- **Lucide React** (Iconography)

### Backend
- **Django** + **Django REST Framework**
- **Google Generative AI (Gemini)**: Core intelligence engine for resume parsing and analysis.
- **SimpleJWT**: Secure authentication and session management.

---

## 🚀 Getting Started

### 🐳 Run with Docker (Recommended)
Launch the entire stack (Frontend & Backend) with one command:
```bash
docker-compose up --build
```
- **Frontend**: `http://localhost:80`
- **Backend API**: `http://localhost:8000`

### 🛠️ Local Development

1. **Clone the repo**:
   ```bash
   git clone https://github.com/Gawali-Shruti/Ai-resume-intelligence-and-interview-predictor.git
   cd Ai-resume-intelligence-and-interview-predictor
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate # or .\venv\Scripts\activate on Windows
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

3. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

> [!IMPORTANT]
> Make sure to copy `.env.example` to `.env` and provide your `GEMINI_API_KEY` for the AI features to work.

---

## 📂 Repository Structure
- `frontend/`: React application + Tailwind styles.
- `backend/`: Django API + Gemini AI Service.
- `docker-compose.yml`: Orchestration for one-click deployment.

---
*Built with passion for the future of recruitment.*
