import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { useState } from "react";
import { deleteProduct } from "../feature/productSlice";
import { useNavigate } from "react-router-dom";

function Products() {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFristProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFristProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };

  const handleRowClick = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="flex-grow text-xl font-bold  text-center">
          Product List
        </h1>
        <button
          onClick={() => navigate("/add")}
          className="font-bold bg-blue-400 py-2 px-4 rounded-lg text-white hover:bg-blue-500"
        >
          Add New Product
        </button>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Description</th>

              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr
                key={product.id}
                onClick={() => handleRowClick(product.id)}
                className="hover:bg-gray-50"
              >
                <td className="py-2 px-4 border-b">
                  {indexOfFristProduct + index + 1}
                </td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">{product.stock}</td>
                <td className="py-2 px-4 border-b">{product.description}</td>
                <td className="py-2 px-4 border-b flex gap-2 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(product.id);
                    }}
                    className="px-4 py-2 bg-blue-400 rounded-lg shadow-lg text-white hover:bg-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(product.id);
                    }}
                    className="px-3 py-1 text-white bg-red-400 rounded-lg hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {currentProducts.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {currentProducts.length > 0 && (
          <div className="flex justify-center items-center my-4 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 border rounded-lg disabled:opacity-50"
            >
              Prev
            </button>
            {currentPage}
            {/* {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded-lg ${
                  currentPage === i + 1
                    ? "bg-blue-400 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))} */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 border rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
