const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "3af49ce59d7cc91e5cc4efe0";  

app.get("/api/rate", async (req, res) => {
  try {
    const { from, to } = req.query;

    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;

    const response = await axios.get(url);

    if (!response.data.conversion_rates[to]) {
      return res.json({ error: "No rate found" });
    }

    const rate = response.data.conversion_rates[to];
    res.json({ rate });

  } catch (err) {
    res.json({ error: "Failed to fetch exchange rate" });
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
