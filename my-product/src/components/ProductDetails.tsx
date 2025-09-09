import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../app/store";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.products.find((product) => product.id === id)
  );

  if (!product)
    return (
      <div className="text-3xl font-bold text-center">Product Not Found</div>
    );

  return (
    <div className="flex items-center justify-center shadow-2xl m-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
    </div>
  );
}

export default ProductDetails;
