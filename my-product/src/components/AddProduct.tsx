import React, { useEffect, useState } from "react";
import type { productFormType, productType } from "../utils/type";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../feature/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../app/store";

function AddProduct() {
  const { id } = useParams<{ id: string }>();
  const productData = useSelector((state: RootState) =>
    state.products.find((p) => p.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState<productFormType | productType>({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    productImage: "",
    brand: "",
    rating: "",
    discount: "",
    status: true,
  });

  useEffect(() => {
    if (productData) {
      setProduct(productData);
    }
  }, [productData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit", product);
    const newProduct = {
      ...product,
      price: Number(product.price) | 0,
      discount: Number(product.discount) | 0,
      stock: Number(product.stock) | 0,
      rating: Number(product.rating) | 0,
    };

    if (id) {
        console.log("--------");
        
      dispatch(updateProduct(newProduct));
    } else {
        console.log("========");
        
      dispatch(addProduct(newProduct));
    }
    setProduct({
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      productImage: "",
      brand: "",
      rating: "",
      discount: "",
      status: true,
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <div className="flex justify-center items-center mb-6">
        <h2 className="flex-grow text-2xl font-bold  text-gray-800 text-center">
          {id ? "Edit Product" : "Add Product"}
        </h2>
        <button
          onClick={() => navigate("/")}
          className="font-medium text-white bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          View Products
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="gird grid-cols-1 md:grid-cols-1 gap-10 space-y-2"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={product.price ?? ""}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">--Select Category --</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
            <option value="home">Home</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount
          </label>
          <input
            type="number"
            name="discount"
            min={1}
            max={100}
            value={product.discount}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="file"
            name="productImage"
            value={product.productImage}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex mt-3 items-center space-x-3">
          <input
            type="checkbox"
            name="status"
            checked={product.status}
            onChange={handleChange}
            className="w-5 h-5 text-blue-500 border-gray-300 rounded-lg focus:ring-blue-500"
          />
          <label className="text-sm font-medium text-gray-700">Active</label>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="md:col-span-2 flex mt-6 justify-center">
          <button
            type="submit"
            className="bg-blue-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
