import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [result, setResult] = useState("");

  const convert = async () => {
    const response = await fetch(
      `http://localhost:5000/api/rate?from=${from}&to=${to}`
    );

    const data = await response.json();

    if (!data.rate) {
      alert("Failed to get exchange rate");
      return;
    }

    const rate = Number(data.rate);

    setResult((Number(amount) * rate).toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
  <option>USD</option>
  <option>EUR</option>
  <option>BDT</option>
  <option>SEK</option>
  <option>JPY</option>
  <option>CAD</option>
  <option>INR</option>
  <option>NPR</option>
  <option>KWD</option>
  <option>AED</option>
  <option>SGD</option>
  <option>AUD</option>
  <option>GBP</option>
  <option>PKR</option>
  <option>LKR</option>
</select>


      <span> to </span>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
  <option>USD</option>
  <option>EUR</option>
  <option>BDT</option>
  <option>SEK</option>
  <option>JPY</option>
  <option>CAD</option>
  <option>INR</option>
  <option>NPR</option>
  <option>KWD</option>
  <option>AED</option>
  <option>SGD</option>
  <option>AUD</option>
  <option>GBP</option>
  <option>PKR</option>
  <option>LKR</option>
</select>

      <br /> <br />

      <button onClick={convert}>Convert</button>

      {result && <h2>Result: {result} {to}</h2>}
    </div>
  );
}

export default App;
