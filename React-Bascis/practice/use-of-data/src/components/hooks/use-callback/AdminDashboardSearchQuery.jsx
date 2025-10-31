import React, { useMemo, useState, useEffect } from 'react'
import debounce from 'lodash.debounce';

const AdminDashboardSearchQuery = ({fetchResults}) => {
    const[query, setQuery] = useState("");
    // memoize the debounced function and provide the dependency array correctly
    const debouncedFetch = useMemo(() => debounce((newQuery) => {
        fetchResults(newQuery);
    }, 500), [fetchResults]);

    // cleanup: cancel the debounced calls when component unmounts or fetchResults changes
    useEffect(() => {
        return () => {
            if (debouncedFetch && debouncedFetch.cancel) debouncedFetch.cancel();
        };
    }, [debouncedFetch]);
  return (
    <div>
        <h2>Admin Dashboard Search Query with the help of useCallback...</h2>
        <input 
            placeholder ="Search admin data..."
            type = "text"
            onChange = {(e) => {
                setQuery(e.target.value);
                debouncedFetch(e.target.value);
            }} 
            value={query}  
        />
    
    </div>
  )
}

export default AdminDashboardSearchQuery




// const [results, setResults] = useState([]);

//   // Simulated API call (you can replace this with real API)
//   const fetchResults = (query) => {
//     console.log("Fetching results for:", query);

//     if (!query) {
//       setResults([]);
//       return;
//     }

//     // Mock search data (like you'd get from a backend)
//     const allProducts = [
//       "iPhone 16 Pro",
//       "Samsung Galaxy S24",
//       "MacBook Air M3",
//       "Dell XPS 13",
//       "Asus ZenBook OLED",
//       "Sony WH-1000XM5 Headphones",
//       "Apple Watch Series 9",
//     ];

//     // Filter products that match the query
//     const filtered = allProducts.filter((item) =>
//       item.toLowerCase().includes(query.toLowerCase())
//     );

//     setResults(filtered);