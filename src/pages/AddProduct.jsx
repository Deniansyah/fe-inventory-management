import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { productAction } from "../store/product/reducer";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const currentPath = "/product";
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    if (picture) {
    formData.append("picture", picture);
    }

    try {
      const data = await dispatch(productAction.createProductThunk(formData)).unwrap()
      alert("add product succes");
      history.push("/product")
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  const isButtonDisabled =
    name === "" || price === "" || description === ""

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
          <h1 className="text-3xl font-bold mb-5">Add Product</h1>
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <form onSubmit={addProduct}>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <td className="py-2 px-4 w-64 bg-gray-100 border-b font-bold">
                      Picture
                    </td>
                    <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                      <span className="text-red-500">*</span>Name
                    </td>
                    <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                      <span className="text-red-500">*</span>Description
                    </td>
                    <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                      <span className="text-red-500">*</span>Price
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">
                      <input
                        type="file"
                        name="picture"
                        onChange={handlePictureChange}
                        className="block w-full text-sm text-slate-500 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#101540] hover:file:bg-violet-100"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        className="focus:outline-none"
                        name="name"
                        onChange={handleNameChange}
                        type="text"
                        placeholder="Name of product"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        className="focus:outline-none"
                        type="text"
                        name="description"
                        onChange={handleDescriptionChange}
                        placeholder="Description Product"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        className="focus:outline-none"
                        type="number"
                        name="price"
                        onChange={handlePriceChange}
                        placeholder="Price"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                disabled={isButtonDisabled}
                type="submit"
                className={
                  isButtonDisabled
                    ? "bg-gray-500 py-2 px-3 rounded-md text-white w-fit mt-5"
                    : "bg-[#101540] py-2 px-3 rounded-md text-white w-fit mt-5"
                }
              >
                Add New Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct