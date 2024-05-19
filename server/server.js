import express from "express";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

// const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// app.use(express.json());
const databaseId = process.env.NOTION_DATABASE_ID;

app.get(`/api/database`, async (req, res) => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    console.log("Success!");
    res.json({ message: "success!", data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
