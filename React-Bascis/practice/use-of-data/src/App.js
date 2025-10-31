import React, { useState } from "react";
import AdminDashboardSearchQuery from "./components/hooks/use-callback/AdminDashboardSearchQuery"

function App() {
  const [results, setResults] = useState([]);

  // Simulated API call (you can replace this with real API)
  const fetchResults = (query) => {
    console.log("Fetching results for:", query);

    if (!query) {
      setResults([]);
      return;
    }

    // Mock search data (like you'd get from a backend)
    const allProducts = [
      "iPhone 16 Pro",
      "Samsung Galaxy S24",
      "MacBook Air M3",
      "Dell XPS 13",
      "Asus ZenBook OLED",
      "Sony WH-1000XM5 Headphones",
      "Apple Watch Series 9",
    ];

    // Filter products that match the query
    const filtered = allProducts.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🔍 Product Search</h1>
      <AdminDashboardSearchQuery fetchResults={fetchResults} />

      <div style={{ marginTop: "20px" }}>
        <h3>Results:</h3>
        {results.length > 0 ? (
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Find your product here</p>
        )}
      </div>
    </div>
  );
}

export default App;
