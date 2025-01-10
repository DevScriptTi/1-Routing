import ProdCard from "@/components/Skeletons/ProductCard/ProdCard";

const LoadingFallback = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProdCard />
      <ProdCard />
      <ProdCard />
      <ProdCard />
    </div>
  );
};

export default LoadingFallback;
