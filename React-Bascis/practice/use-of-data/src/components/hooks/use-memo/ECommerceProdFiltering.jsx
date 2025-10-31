import React, {useState,useMemo} from 'react'

const ECommerceProdFiltering = ({products}) => {

    const[query, setQuery] = useState("");

    const productFiltering = useMemo(() =>{
        console.log("Product filtering...");
        return products.filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase())
        );
    },[query, products]);

  return (
    <div>
        <input
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
            {productFiltering.map((product) => (
                <li key={product.id}>
                    {product.name} - ${product.price}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ECommerceProdFiltering;