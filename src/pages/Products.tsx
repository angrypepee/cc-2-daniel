import React from 'react';
import background from "../public/banner.png";
import salmon from "../public/salmon.webp"; 

// Sample product data
const products = [
    {
        id: 1,
        title: "Salmon Fillet",
        description: "Fresh and delicious salmon fillet.",
        image: salmon.src, 
    },
    {
        id: 2,
        title: "Tuna Steak",
        description: "High-quality tuna steak.",
        image: salmon.src, 
    },
    {
        id: 3,
        title: "Shrimp",
        description: "Juicy shrimp for your seafood recipes.",
        image: salmon.src, 
    },
    {
        id: 4,
        title: "Crab Legs",
        description: "Sweet and succulent crab legs.",
        image: salmon.src, 
    },
    {
        id: 5,
        title: "Mahi Mahi",
        description: "Fresh mahi mahi for grilling.",
        image: salmon.src, 
    },
    {
        id: 6,
        title: "Lobster",
        description: "Premium lobster for special occasions.",
        image: salmon.src, 
    },
    {
        id: 7,
        title: "Cod Fillet",
        description: "Mild and flaky cod fillet.",
        image: salmon.src, 
    },
    {
        id: 8,
        title: "Sardines",
        description: "Healthy sardines packed in oil.",
        image: salmon.src, 
    },
];

function ProductsView() {
    return (
        <div>
            <section
                style={{
                    backgroundImage: `url(${background.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '400px',
                }}
                className="flex items-center justify-center cont"
            >
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">Our Products</h1>
                    <p className="mt-4 text-lg text-white">"Freshness Delivered, Quality You Can Trust!"</p>
                </div>
            </section>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 pt-20 container mx-auto">
                {products.map(product => (
                    <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
                        {/* Set height and width to be equal for square images */}
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-48 object-cover"
                            style={{ height: '250px', width: '250px', objectFit: 'cover' }} // Fixed height and width for square
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                            <p className="mt-2 text-gray-600">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsView;
