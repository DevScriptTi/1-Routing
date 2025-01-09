import Link from "next/link";

function HomePage() {
    const products = [
        {
            id: 1,
            title: "Product 1",
            description: "This is the description for product 1.",
            price: "$10.00",
            rating: 4,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            title: "Product 2",
            description: "This is the description for product 2.",
            price: "$20.00",
            rating: 5,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            title: "Product 3",
            description: "This is the description for product 3.",
            price: "$30.00",
            rating: 3,
            imageUrl: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
            <p className="mb-6">This is the home page of our Next.js tutorial application.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Link href={`${product.id}`} key={product.id} className="border p-4 rounded-lg shadow-lg hover:opacity-70">
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover mb-2" />
                        <p className="mb-2">{product.description}</p>
                        <p className="font-bold mb-2">{product.price}</p>
                        <p>Rating: {product.rating} stars</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default HomePage;
