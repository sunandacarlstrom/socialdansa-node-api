const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 5020; 

app.listen(PORT, () => console.log(`Servern är uppe och kör på port ${PORT}`));