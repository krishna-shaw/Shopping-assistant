import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard"; 

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://your-api.com/products"); 
                const data = await response.json();

                const filteredProducts = data
                    .filter(product => product.category === "clothes" && product.rating >= 4)
                    .sort((a, b) => a.price - b.price);

                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
};

export default ProductList;
