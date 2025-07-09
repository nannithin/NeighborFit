# 🏡 NeighborFit

Demo link https://neighbor-fit-client.vercel.app/

**NeighborFit** is a full-stack web application that helps users find neighborhoods that best match their lifestyle and priorities using data-driven recommendations.


---

## 📄 Project Overview

NeighborFit solves the challenge of matching people with ideal neighborhoods using a user-centered survey and algorithmic scoring system. It replaces subjective research with systematic, personalized recommendations.

### ✅ Key Features:
- Collects lifestyle preferences via an interactive survey
- Scores and ranks neighborhoods using a custom algorithm
- Displays live match results with a clean UI

---

## 🛠️ Tech Stack

| Layer     | Tools / Libraries |
|-----------|------------------|
| **Frontend** | Next.js (App Router), Tailwind CSS, shadcn/ui, Lucide Icons |
| **Backend**  | Node.js, Express, Mongoose (MongoDB), REST API |
| **Database** | MongoDB Atlas (Cloud) |
| **Deployment** | Vercel (Frontend), Render (Backend) |

---

## 📊 Matching Algorithm

NeighborFit uses a weighted scoring algorithm to rank neighborhoods according to user preferences.

```txt
Final Score = (Budget Score × 0.25) + (Priority Factors × 0.60) + (Lifestyle Match × 0.15)

# Clone the repository
git clone https://github.com/your-username/neighborfit.git
cd neighborfit

# Install dependencies
npm install

# Run development server
npm run dev
