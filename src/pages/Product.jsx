import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import productDefault from "../assets/image/product/productDefault.jpg";
import http from "../helpers/http";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { productAction } from "../store/product/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  FiPlus,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
  FiTrash2,
  FiEdit3,
} from "react-icons/fi";

const Product = () => {
  const currentPath = window.location.pathname;
  const token = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const [del, setDel] = useState(false);
  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    searchBy: "name",
    search: "",
    sortBy: "createdAt",
    sort: "ASC",
  });

  const product = useSelector((state) => state.product);
  const data = product.data.results;

  useEffect(() => {
    dispatch(productAction.getProductThunk(query));
    setDel(false);
  }, [dispatch, del, query]);

  const handleSearchChange = (event) => {
    setQuery(prevData => ({
      ...prevData,
      search: event.target.value,
    }))
    setQuery(prevData => ({
      ...prevData,
      page: 1,
    }))
  };

  const deleteProduct = async (id) => {
    try {
      const response = await http(token).delete(
        `http://localhost:3001/product/${id}`
      );
      alert("delete product succes");
      setDel(true);
      console.log(response);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  const sortSearch = (value) => {
    if (value === "name") {
      setQuery(prevData => ({
        ...prevData,
        searchBy: "name",
      }))
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "description") {
      setQuery((prevData) => ({
        ...prevData,
        searchBy: "description",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const sortBy = (value) => {
    if (value === "name") {
      setQuery(prevData => ({
        ...prevData,
        sortBy: "name",
      }))
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "createdAt") {
      setQuery((prevData) => ({
        ...prevData,
        sortBy: "createdAt",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const sort = (value) => {
    if (value === "ASC") {
      setQuery(prevData => ({
        ...prevData,
        sort: "ASC",
      }))
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "DESC") {
      setQuery((prevData) => ({
        ...prevData,
        sort: "DESC",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const limit = (value) => {
    if (value === "5") {
      setQuery(prevData => ({
        ...prevData,
        limit: "5",
      }))
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "10") {
      setQuery((prevData) => ({
        ...prevData,
        limit: "10",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "20") {
      setQuery((prevData) => ({
        ...prevData,
        limit: "20",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "30") {
      setQuery((prevData) => ({
        ...prevData,
        limit: "30",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const prevPage = () => {
    setQuery((prevData) => ({
      ...prevData,
      page: query.page - 1,
    }));
  }

  const nextPage = () => {
    setQuery((prevData) => ({
      ...prevData,
      page: query.page + 1,
    }));
  }

  // Converter Rupiah
  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedPrice;
  };

  return (
    <div className=" bg-gray-200 min-h-screen relative">
      <Navbar />
      <div className="flex">
        <SideBar path={currentPath} />
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-5">Management Product</h1>
          <div className="bg-white w-full p-5 flex flex-col gap-6">
            <Link
              to="/add-product"
              className="bg-green-500 text-white pl-2 px-3 py-2 rounded-lg flex items-center gap-1 w-fit"
            >
              <FiPlus className="text-2xl" />
              <p>Add product</p>
            </Link>
            <div className="flex gap-5">
              <div className="flex border-2 grow justify-center py-1 px-3 items-center gap-4 rounded-md">
                <input
                  className="focus:outline-none w-full border-b-2 pb-1"
                  placeholder="Search product"
                  type="text"
                  onChange={handleSearchChange}
                />
                <FiSearch className="text-2xl" />
                <div className="h-full border-l border-1 my-1" />
                <div className="relative">
                  <select
                    className="focus:outline-none bg-[#101540] text-white p-2 my-1 rounded-md pr-8 pl-3"
                    name="seachBy"
                    id="seachBy"
                    onClick={(e) => sortSearch(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="description">Description</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-4 text-white" />
                </div>
              </div>
              {/* sort */}
              <div className="flex justify-center items-center border-2 py-1 px-3 rounded-md gap-3">
                <div className="relative">
                  <select
                    className="focus:outline-none bg-[#101540] text-white p-2 my-1 rounded-md pr-8 pl-3"
                    name="sortBy"
                    id="sortBy"
                    onClick={(e) => sortBy(e.target.value)}
                  >
                    <option value="createdAt">Created At</option>
                    <option value="name">Name</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-4 text-white" />
                </div>
                <div className="relative">
                  <select
                    className="focus:outline-none bg-[#101540] text-white p-2 my-1 rounded-md pr-8 pl-3"
                    name="sort"
                    id="sort"
                    onClick={(e) => sort(e.target.value)}
                  >
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-4 text-white" />
                </div>
              </div>
            </div>
            <p>Total Product : {product?.data?.pageInfo?.totalData}</p>
            {/* table */}
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <td className="py-2 pl-7 bg-gray-100 border-b"></td>
                  <td className="py-2 pr-6 bg-gray-100 border-b"></td>
                  <td className="py-2 bg-gray-100 border-b font-bold">ID</td>
                  <td className="py-2 bg-gray-100 border-b font-bold">
                    <div className="flex justify-center">Picture</div>
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
                    <div className="flex justify-center">Stock</div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 pl-7 border-b text-center text-green-500">
                      <Link to={"/edit-product/" + item.id}>
                        <FiEdit3 className="text-xl" />
                      </Link>
                    </td>
                    <td className="py-2 pr-6 border-b text-center text-red-500">
                      <button onClick={() => deleteProduct(item.id)}>
                        <FiTrash2 className="text-xl" />
                      </button>
                    </td>
                    <td className="py-2 border-b">{item.id}</td>
                    <td className="py-2 border-b">
                      <div className="flex justify-center">
                        <img
                          src={
                            item.picture === null
                              ? productDefault
                              : item.picture
                          }
                          alt={item.name}
                          className="h-8 w-8 rounded-full"
                        />
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">
                      <div className="w-28">
                        <p className="truncate" title={item.description}>
                          {item.description}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b">
                      {formatPrice(item.price)}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex justify-center">{item.stock}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* next prev page */}
            <div className="flex justify-between items-center gap-5">
              {/* Primary Color : #101540 */}
              <button
                onClick={prevPage}
                disabled={query.page === 1}
                className={
                  query.page === 1
                    ? "bg-gray-500 p-3 rounded-md text-white"
                    : "bg-[#101540] p-3 rounded-md text-white"
                }
              >
                <FiChevronLeft className="text-3" />
              </button>
              <div className="flex justify-center items-center">
                <p>Baris per halaman : </p>
                <div className="relative ml-3">
                  <select
                    className="focus:outline-none border-black border p-1 my-1 rounded-md pr-7 pl-3"
                    name="limit"
                    id="limit"
                    onClick={(e) => limit(e.target.value)}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="10">20</option>
                    <option value="10">30</option>
                  </select>
                  <FiChevronUp className="absolute right-2 top-3" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <p>Halaman :</p>
                <p>
                  {query.page}/{product?.data?.pageInfo?.totalPage}
                </p>
              </div>
              <button
                onClick={nextPage}
                disabled={query.page === product?.data?.pageInfo?.totalPage}
                className={
                  query.page === product?.data?.pageInfo?.totalPage
                    ? "bg-gray-500 p-3 rounded-md text-white"
                    : "bg-[#101540] p-3 rounded-md text-white"
                }
              >
                <FiChevronRight className="text-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
