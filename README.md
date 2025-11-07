# 📊 Data Visualization Dashboard

> **A full-stack interactive dashboard built with React, Node.js, and MongoDB to visualize global insights from structured JSON data.**

This project demonstrates a modern **data visualization system** that fetches data from a MongoDB database, exposes it via an Express API, and displays it through interactive charts using Chart.js in React.  
It helps visualize metrics like **Intensity**, **Likelihood**, **Relevance**, **Region**, **Country**, **Topics**, and more.

---

## 🚀 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, Chart.js, React-ChartJS-2, Tailwind / CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (local or MongoDB Atlas) |
| **Data Format** | JSON (`jsondata.json`) |
| **Version Control** | Git & GitHub |

---

## 📁 Folder Structure

```
Data-Visualization-Dashboard/
│
├── 📁 backend/
│   ├── index.js              # Main Express server
│   ├── db.js                 # MongoDB connection setup
│   ├── routes/
│   │   └── dataRoutes.js     # REST API endpoints
│   ├── models/
│   │   └── DataModel.js      # Mongoose schema for JSON fields
│   ├── utils/
│   │   └── normalize.js      # Normalize & insert JSON data to MongoDB
│   ├── .env                  # Environment variables (Mongo URI, PORT)
│   └── package.json
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── App.js            # Main React dashboard layout
│   │   ├── chartSetup.js     # Registers Chart.js components
│   │   ├── 📁 api/
│   │   │   └── index.js      # Functions to call backend APIs
│   │   ├── 📁 components/
│   │   │   ├── 📁 Charts/    # Chart components (Line, Bar, Pie)
│   │   │   └── 📁 Filters/   # FilterPanel for selecting topics, region, etc.
│   │   └── index.js
│   ├── package.json
│   └── public/
│       └── index.html
│
├── 📁 data/
│   └── jsondata.json         # Source dataset
│
├── .gitignore
└── README.md
```

---

## 🌍 Key Features

✅ **Full-stack Implementation**  
✅ **Interactive Filters**  
✅ **Dynamic Charts**  
✅ **Error Boundaries**  
✅ **Reusable Components**  

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/raunakmallick18/Data-Visualization-Dashboard.git
cd Data-Visualization-Dashboard
```

### 2️⃣ Setup Backend
```bash
cd backend
npm install
```
Create `.env` file:
```bash
MONGO_URI=mongodb://127.0.0.1:27017/dashboard
PORT=4000
```
Start backend:
```bash
node index.js
```

### 3️⃣ Setup Frontend
```bash
cd ../frontend
npm install
npm start
```

---

## 📊 Dashboard Overview

| Visualization | Description |
|----------------|-------------|
| **Intensity vs Year** | Line chart showing yearly intensity trend |
| **Likelihood by Topic** | Bar chart highlighting topic-wise likelihood |
| **Relevance by Region** | Pie chart comparing regional importance |
| **Country-wise Intensity** | Horizontal bar showing country performance |

---

## 🧠 Example Data Structure

```json
{
  "end_year": "",
  "intensity": 6,
  "sector": "Energy",
  "topic": "gas",
  "insight": "Annual Energy Outlook",
  "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
  "region": "Northern America",
  "start_year": "",
  "impact": "",
  "added": "January, 20 2017 03:51:25",
  "published": "January, 09 2017 00:00:00",
  "country": "United States of America",
  "relevance": 2,
  "pestle": "Industries",
  "source": "EIA",
  "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
  "likelihood": 3
}
```

---

## 🧱 Technologies Used

- **Frontend:** React.js, Chart.js, React-ChartJS-2  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Styling:** Tailwind CSS or plain CSS

---

## 📚 Learnings & Insights

- Learned how to integrate full-stack (frontend + backend + database)
- Practiced visualizing real-world data dynamically
- Gained experience with Chart.js, REST API design, and modular code structure

---

## 👨‍💻 Author

**👋 Raunak Mallick**  
💼 MCA Graduate | Software Developer | Tech Enthusiast  
🔗 [GitHub Profile](https://github.com/raunakmallick18)
