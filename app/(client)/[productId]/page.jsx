import React from "react";

export const generateMetadata = ({ params }) => {
  return {
    title: `Product Details - ${params.productId}`,
    description: `Details about product with ID: ${params.productId}`,
  };
};

const products = [
  { id: "1", name: "Product 1", description: "Description of Product 1" },
  { id: "2", name: "Product 2", description: "Description of Product 2" },
  { id: "3", name: "Product 3", description: "Description of Product 3" },
];

const ProductDetails = async ({ params }) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const { productId } = params;
  const product = products.find((p) => p.id === productId);

  if (Math.random() < 0.5) {
    throw new Error(
      "An error occurred while rendering the product details page"
    );
  }
  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-700 mb-4">
            The product with ID {productId} does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-2">Product ID: {product.id}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
