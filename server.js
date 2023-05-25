const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Skapar enpointresurser...

// listar alla dansband
app.get("/api/v1/danceband", async (req, res) => {
    const url = "http://localhost:3000/danceband";
    const { data } = await axios.get(url);
    res.status(200).json(data);
});

// hämta ett specifikt dansband
app.get("/api/v1/danceband/:id", async (req, res) => {
    const param = req.params.id;
    const url = `http://localhost:3000/danceband/${param}`;
    const { data } = await axios.get(url);
    res.status(200).json(data);
});

// lägger till ett dansband i listan
app.post("/api/v1/danceband", async (req, res) => {
    const url = "http://localhost:3000/danceband";
    const body = req.body;
    const { data } = await axios.post(url, body);
    res.status(201).json(data);
});

const PORT = 5020;

app.listen(PORT, () => console.log(`Servern är uppe och kör på port ${PORT}`));
