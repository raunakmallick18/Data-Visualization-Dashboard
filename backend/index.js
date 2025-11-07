import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const DB_NAME = process.env.DB_NAME || "vizdb";
const COLLECTION = process.env.COLLECTION || "insights";

let db;
let useLocal = false; // fallback flag

// 🧠 Try connecting to MongoDB
MongoClient.connect(MONGO_URI)
    .then((client) => {
        db = client.db(DB_NAME);
        console.log(`✅ Connected to MongoDB: ${DB_NAME}`);
    })
    .catch((err) => {
        console.error("⚠️ MongoDB connection failed, using local JSON instead.");
        useLocal = true;
    });

// ✅ GET /api/data route
app.get("/api/data", async(req, res) => {
    try {
        if (useLocal) {
            console.log("📁 Serving data from local jsondata.json file");
            const jsonData = JSON.parse(fs.readFileSync("./jsondata.json"));
            return res.json(jsonData);
        }

        if (!db) {
            console.warn("⚠️ Database not initialized yet, using fallback.");
            const jsonData = JSON.parse(fs.readFileSync("./jsondata.json"));
            return res.json(jsonData);
        }

        const data = await db.collection(COLLECTION).find().limit(500).toArray();
        res.json(data);
    } catch (err) {
        console.error("❌ Error fetching data:", err);
        res.status(500).json({ message: "Error fetching data" });
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("✅ API is running. Use /api/data to fetch dataset.");
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));