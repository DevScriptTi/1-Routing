import ProdCard from "@/components/Skeletons/ProductCard/ProdCard";

// /C:/Users/hamri/OneDrive/Desktop/nextJS/Next-js-tutorial/1-routing/app/(client)/loading.jsx
const Loading = () => {
  return (
    <div className="p-6">
      <h1 className="bg-gray-300 h-5 w-1/12 rounded-md mb-4"></h1>
      <p className="bg-gray-300 h-5 w-3/5 mb-2 rounded-md"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
      </div>
    </div>
  );
};

export default Loading;
