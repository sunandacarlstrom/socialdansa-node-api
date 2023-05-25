const express = require("express");
const axios = require("axios");

const app = express();

// Skapar enpointresurser...
app.get("/api/v1/danceband", async (req, res) => {
    res.status(200).json({
        id: 1,
        name: "Perikles"
    });
});

app.post("/api/v1/danceband", async (req, res) => {
    res.status(201).json({ message: "Sparat uppdatering" });
});

const PORT = 5020;

app.listen(PORT, () => console.log(`Servern är uppe och kör på port ${PORT}`));
