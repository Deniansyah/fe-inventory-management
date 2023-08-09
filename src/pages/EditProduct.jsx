import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import productDefault from "../assets/image/product/productDefault.jpg";
import http from "../helpers/http";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const EditProduct = () => {
  const currentPath = "/product";
  const token = useSelector((state) => state.auth.data);

  const [product, setProduct] = useState({})
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const pathname = window.location.pathname;
  const parts = pathname.split("/");
  const id = parts[2];

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await http(token).get(`http://localhost:3001/product/${id}`);
      setProduct(response.data.results);
    } catch (error) {
      setProduct({});
    }
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setProduct(name);
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setProduct(price);
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setProduct(description);
    setDescription(event.target.value);
  };

  const updateProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const data = await http(token).patch(
        `http://localhost:3001/product/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Edit product succes");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  return (
    <div className=" bg-gray-200 h-screen relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-5">Edit Product</h1>
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <form onSubmit={updateProduct}>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    src={productDefault}
                    alt="Name of Product"
                    className="h-60 w-60"
                  />
                  <input
                    type="file"
                    name="picture"
                    onChange={handlePictureChange}
                    className="block w-1/2 text-sm text-slate-500 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#101540] hover:file:bg-violet-100"
                  />
                </div>
                <div className="flex flex-col gap-3 justify-center mt-3">
                  <div>
                    <p>Name Product :</p>
                    <input
                      className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                      name="name"
                      type="text"
                      placeholder="Name of product"
                      value={product.name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div>
                    <p>Price :</p>
                    <input
                      className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                      type="number"
                      name="price"
                      placeholder="Price"
                      value={product.price}
                      onChange={handlePriceChange}
                    />
                  </div>
                  <div>
                    <p>Description :</p>
                    <textarea
                      className="focus:outline-none p-2 border-2 border-black rounded-sm"
                      name="description"
                      id="description"
                      placeholder="Description Product"
                      cols="50"
                      rows="5"
                      value={product.description}
                      onChange={handleDescriptionChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="bg-[#101540] py-2 px-3 rounded-md text-white w-fit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct