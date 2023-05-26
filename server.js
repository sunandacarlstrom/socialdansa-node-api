const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
//tillåter alla att komma åt mina endpoints med cors
app.use(cors());
app.use(express.json());

// Skapar enpointresurser...

// listar alla dansband
app.get("/api/v1/danceband", async (req, res) => {
    const url = "http://localhost:5030/danceband";
    const { data } = await axios.get(url);
    res.status(200).json(data);
});

// hämta ett specifikt dansband
app.get("/api/v1/danceband/:id", async (req, res) => {
    const param = req.params.id;
    const url = `http://localhost:5030/danceband/${param}`;
    const { data } = await axios.get(url);
    res.status(200).json(data);
});

// hämta alla meddelanden och visa i Admin
app.get("/api/v1/messages", async (req, res) => {
    const url = `http://localhost:5030/message`;
    const { data } = await axios.get(url);
    res.status(200).json(data);
});

// skicka ett meddelande från kontaktformuläret till api
app.post("/api/v1/messages", async (req, res) => {
    const url = "http://localhost:5030/message";
    const body = req.body;
    const { data } = await axios.post(url, body);
    res.status(201).json(data);
});

const PORT = 5020;

app.listen(PORT, () => console.log(`Servern är uppe och kör på port ${PORT}`));
