import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import productDefault from "../assets/image/product/productDefault.jpg"

import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiUpload,
  FiEdit3,
  FiTrash2,
} from "react-icons/fi";

const Product = () => {
  const currentPath = window.location.pathname;

  const data = [
    {
      id: 1,
      picture: productDefault,
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet",
      price: 10990,
      stock: 0,
    },
    {
      id: 2,
      picture: productDefault,
      name: "Product 2",
      description: "Consectetur adipiscing elit",
      price: 15990,
      stock: 0,
    },
    {
      id: 3,
      picture: productDefault,
      name: "Product 3",
      description: "Pellentesque euismod magna",
      price: 19990,
      stock: 0,
    },
    {
      id: 4,
      picture: productDefault,
      name: "Product 4",
      description: "Sed feugiat fringilla mauris",
      price: 12990,
      stock: 0,
    },
    {
      id: 5,
      picture: productDefault,
      name: "Product 5",
      description: "Fusce eu ultrices justo",
      price: 9990,
      stock: 0,
    },
  ];

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedPrice;
  };
  
  return (
    <div className=" bg-gray-200 relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-5">Management Product</h1>
          {/* kotak putih */}
          <div className="bg-white w-full min-h-[70%] p-5 flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Add Product</h2>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Picture
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Name
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Description
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Price
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">
                    <button className="border flex justify-center items-center gap-2 py-1 px-3 border-black">
                      <FiUpload />
                      <p>Upload Picture</p>
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      className="focus:outline-none"
                      type="text"
                      placeholder="Name of product"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      className="focus:outline-none"
                      type="text"
                      placeholder="Description Product"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      className="focus:outline-none"
                      type="number"
                      placeholder="Price"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="bg-[#101540] py-2 px-3 rounded-md text-white w-fit">
              Add New Product
            </button>
            <h2 className="text-2xl font-bold">List of Product</h2>
            {/* filter */}
            <div className="flex gap-5">
              {/* search */}
              <div className="flex border-2 grow justify-center py-1 px-3 items-center gap-2">
                <input
                  className="focus:outline-none w-full border-2"
                  type="text"
                />
                <select name="seachBy" id="seachBy">
                  <option value="createdAt">Created At</option>
                  <option value="name">Name</option>
                </select>
                <FiSearch className="text-2xl" />
              </div>
              {/* sort */}
              <div className="flex justify-center items-center border-2 py-1 px-3">
                <select name="sortBy" id="sortBy">
                  <option value="createdAt">Created At</option>
                  <option value="name">Name</option>
                </select>
                <select name="sort" id="sort">
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
                </select>
              </div>
            </div>
            <p>Total Product : 5</p>
            {/* table */}
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 pl-5 bg-gray-100 border-b"></th>
                  <th className="py-2 pl-5 bg-gray-100 border-b"></th>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    ID
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Picture
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Name
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Description
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Price
                  </td>
                  <td className="py-2 px-4 bg-gray-100 border-b font-bold">
                    Stock
                  </td>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 pl-5 border-b text-center">
                      <FiEdit3 />
                    </td>
                    <td className="py-2 pl-5 border-b text-center">
                      <FiTrash2 />
                    </td>
                    <td className="py-2 px-4 border-b">{item.id}</td>
                    <td className="py-2 px-4 border-b">
                      <img
                        src={item.picture}
                        alt={item.name}
                        className="h-8 w-8"
                      />
                    </td>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.description}</td>
                    <td className="py-2 px-4 border-b">
                      {formatPrice(item.price)}
                    </td>
                    <td className="py-2 px-4 border-b">{item.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* next prev page */}
            <div className="flex justify-between items-center gap-5 text-white">
              {/* Primary Color : #101540 */}
              <div className="bg-gray-500 p-3 rounded-md">
                <FiChevronLeft className="text-3" />
              </div>
              <div className="bg-gray-500 p-3 rounded-md">Save Changes</div>
              <div className="bg-gray-500 p-3 rounded-md">
                <FiChevronRight className="text-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product