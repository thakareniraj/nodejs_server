const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoose = require("mongoose");
const jsondata = require("./data.json");

const app = express();
app.use(express.json());

// MongoDB connection URL and database name
const url = process.env.MONGODB_URI;
const dbName = "gfg";

// Connect to MongoDB using Mongoose
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to connect to MongoDB
async function connectToMongo() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to database");
    return client;
  } catch (err) {
    console.error("Error connecting to database:", err);
    throw err;
  }
}

// Route to check server status
app.get("/", (req, res) => {
  try {
    const client = connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = collection.find({}).toArray();

    res.json(documents);
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.post("/data", (req, res) => {
  res.send("posted");
});

// Route to fetch all data from MongoDB
app.get("/data", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection.find({}).toArray();

    res.json(documents);
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).send("An error occurred while fetching data.");
  }
});

// Route to fetch filtered data from MongoDB
app.get("/filter_data", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection
      .find({ country: "United States of America" })
      .toArray();

    res.json(documents);
  } catch (err) {
    console.error("An error occurred:", err);
    res.status(500).send("An error occurred while fetching data.");
  }
});

app.post("/filter_data", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection.find({}).toArray();
    // Extract country from the request body
    const { country } = req.body;

    // Validate the input
    if (!country) {
      return res.status(400).json({ error: "Country is required" });
    }

    // Filter the data based on the country
    const filteredData = documents.filter((entry) => entry.country === country);

    // Return the filtered data
    res.json(filteredData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/source", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection.find({}).toArray();
    // Extract country from the request body
    const { source } = req.body;

    // Validate the input
    if (!source) {
      return res.status(400).json({ error: "source is required" });
    }

    // Filter the data based on the country
    const filteredData = documents.filter((entry) => entry.source === source);

    // Return the filtered data
    res.json(filteredData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/pestle", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection.find({}).toArray();
    // Extract country from the request body
    const { pestle } = req.body;

    // Validate the input
    if (!pestle) {
      return res.status(400).json({ error: "pestle is required" });
    }

    // Filter the data based on the country
    const filteredData = documents.filter((entry) => entry.pestle === pestle);

    // Return the filtered data
    res.json(filteredData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/region", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection.find({}).toArray();
    // Extract country from the request body
    const { region } = req.body;

    // Validate the input
    if (!region) {
      return res.status(400).json({ error: "region is required" });
    }

    // Filter the data based on the country
    const filteredData = documents.filter((entry) => entry.region === region);

    // Return the filtered data
    res.json(filteredData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/sector", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection.find({}).toArray();
    // Extract country from the request body
    const { sector } = req.body;

    // Validate the input
    if (!sector) {
      return res.status(400).json({ error: "sector is required" });
    }

    // Filter the data based on the country
    const filteredData = documents.filter((entry) => entry.sector === sector);

    // Return the filtered data
    res.json(filteredData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/end_year", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection.find({}).toArray();
    // Extract country from the request body
    const { end_year } = req.body;

    // Validate the input
    if (!end_year) {
      return res.status(400).json({ error: "end_year is required" });
    }

    // Filter the data based on the country
    const filteredData = documents.filter(
      (entry) => entry.end_year === end_year
    );

    // Return the filtered data
    res.json(filteredData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/topic", async (req, res) => {
  try {
    const client = await connectToMongo();
    const db = client.db(dbName);
    const collection = db.collection("data");

    const documents = await collection.find({}).toArray();
    // Extract country from the request body
    const { topic } = req.body;

    // Validate the input
    if (!topic) {
      return res.status(400).json({ error: "topic is required" });
    }

    // Filter the data based on the country
    const filteredData = documents.filter((entry) => entry.topic === topic);

    // Return the filtered data
    res.json(filteredData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log("Example app listening on port 3000!");
});
