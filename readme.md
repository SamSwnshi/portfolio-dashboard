# 📊 Samswnshi Portfolio Dashboard

A full-stack portfolio tracker web application with a **Node.js + TypeScript backend** and a **React + Vite + TypeScript frontend**.  
The app allows users to track stock holdings, fetch live financial data (via Yahoo API), and display it in a clean dashboard UI.

---

## 🚀 Features

**Frontend (React + Vite + TS)**
- Interactive portfolio dashboard  
- Table display of holdings  
- TypeScript type safety  
- Feature-based folders

**Backend (Node.js + Express + TS)**
- REST API for stock holdings  
- Controller/Service/Model structure  
- Yahoo Finance service  
- Data seed script  
- TypeScript config

---

## 📂 Project Structure
```

samswnshi-portfolio-dashboard/
├── backend/
│ ├── package.json
│ ├── tsconfig.json
│ └── src/
│ ├── index.ts
│ ├── seed.ts
│ ├── controllers/
│ │ └── financeControllers.ts
│ ├── models/
│ │ └── holding.model.ts
│ ├── routes/
│ │ └── index.ts
│ └── services/
│ └── yahooService.ts
└── frontend/
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.ts
└── src/
├── App.tsx
├── main.tsx
├── features/
│ ├── api/
│ │ └── financeApi.ts
│ └── dashboard/
│ ├── DashboardPage.tsx
│ └── PortfolioTable.tsx
└── types/
└── StockHolding.ts
```


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```
Git clone https://github.com/SamSwnshi/samswnshi-portfolio-dashboard.git
cd samswnshi-portfolio-dashboard
```


### 2. Install dependencies

#### Backend
```
cd backend
npm install
```


---

## ▶️ Running the Project

### Backend (Node/Express)

```
cd backend
npm run dev
```

Runs at [**http://localhost:5000**](http://localhost:5000)

### Frontend (React/Vite)

```
cd frontend
npm run dev

```

Runs at [**http://localhost:5173**](http://localhost:5173)

---

## 🔗 API Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|-----------------------------|
| GET    | /api/holdings      | List all holdings           |


---

## 🛠️ Tech Stack

- Node.js, Express, TypeScript  
- React, Vite, TypeScript  
- Yahoo Finance API

---


---

## ✨ Credits

Created by **Sameer Suryawanshi**.

---


