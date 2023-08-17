import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  useEffect,
  useState,
} from "react";
import { stockAction } from "../store/stock/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  FiPlusSquare,
  FiMinusSquare,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
  FiEdit,
} from "react-icons/fi";

const Stock = () => {
  const currentPath = window.location.pathname;
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    cInitCol: "p",
    searchBy: "name",
    search: "",
    cInitSort: "s",
    sortStockBy: "date",
    sort: "ASC",
    type: null,
  });

  const stock = useSelector((state) => state.stock);
  const data = stock.data.results;

  useEffect(() => {
    dispatch(stockAction.getStockThunk(query));
  }, [dispatch, query]);

  const handleSearchChange = (event) => {
    setQuery((prevData) => ({
      ...prevData,
      search: event.target.value,
    }));
    setQuery((prevData) => ({
      ...prevData,
      page: 1,
    }));
  };

  const sortSearch = (value) => {
    if (value === "product") {
      setQuery((prevData) => ({
        ...prevData,
        cInitCol: "p",
        searchBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "username") {
      setQuery((prevData) => ({
        ...prevData,
        cInitCol: "u",
        searchBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "remark") {
      setQuery((prevData) => ({
        ...prevData,
        cInitCol: "s",
        searchBy: "remark",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const status = (value) => {
    if (value === "1") {
      setQuery((prevData) => ({
        ...prevData,
        type: "1",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "2") {
      setQuery((prevData) => ({
        ...prevData,
        type: "2",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "3") {
      setQuery((prevData) => ({
        ...prevData,
        type: "3",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const sortBy = (value) => {
    if (value === "date") {
      setQuery((prevData) => ({
        ...prevData,
        cInitSort: "s",
        sortStockBy: "date",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "createdAt") {
      setQuery((prevData) => ({
        ...prevData,
        cInitSort: "s",
        sortStockBy: "createdAt",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "userName") {
      setQuery((prevData) => ({
        ...prevData,
        cInitSort: "u",
        sortStockBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "productName") {
      setQuery((prevData) => ({
        ...prevData,
        cInitSort: "p",
        sortStockBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const sort = (value) => {
    if (value === "ASC") {
      setQuery((prevData) => ({
        ...prevData,
        sort: "ASC",
      }));
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
      setQuery((prevData) => ({
        ...prevData,
        limit: "5",
      }));
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
  };

  const nextPage = () => {
    setQuery((prevData) => ({
      ...prevData,
      page: query.page + 1,
    }));
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
          <h1 className="text-3xl font-bold mb-10">Management Stock</h1>
          <div className="bg-white w-full p-5 flex flex-col gap-6">
            <div className="flex gap-5">
              <Link
                to="/stock-in"
                className="bg-green-500 text-white pl-2 px-3 py-2 rounded-lg flex items-center gap-1 w-fit"
              >
                <FiPlusSquare className="text-2xl" />
                <p>Add Stock In</p>
              </Link>
              <Link
                to="/stock-out"
                className="bg-red-500 text-white pl-2 px-3 py-2 rounded-lg flex items-center gap-1 w-fit"
              >
                <FiMinusSquare className="text-2xl" />
                <p>Add Stock Out</p>
              </Link>
              <Link
                to="/edit-stock"
                className="bg-yellow-500 text-white pl-2 px-3 py-2 rounded-lg flex items-center gap-1 w-fit"
              >
                <FiEdit className="text-2xl" />
                <p>Update Stock</p>
              </Link>
            </div>
            <div className="flex gap-5">
              <div className="flex border-2 grow justify-center py-1 px-3 items-center gap-4 rounded-md">
                <input
                  className="focus:outline-none w-full border-b-2 pb-1"
                  placeholder="Search for product/pengubah/remark"
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
                    <option value="product">Product</option>
                    <option value="username">Pengubah</option>
                    <option value="remark">Remark</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-4 text-white" />
                </div>
                <div className="h-full border-l border-1 my-1" />
                <div className="relative">
                  <select
                    className="focus:outline-none bg-[#101540] text-white p-2 my-1 rounded-md pr-8 pl-3"
                    name="role"
                    id="role"
                    onClick={(e) => status(e.target.value)}
                  >
                    <option className="hidden">Status</option>
                    <option value="1">Stock in</option>
                    <option value="2">Stock out</option>
                    <option value="3">Updated</option>
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
                    <option value="date">Date</option>
                    <option value="createdAt">Created At</option>
                    <option value="userName">Pengubah</option>
                    <option value="productName">Product</option>
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
            <p>Total Product : {stock?.data?.pageInfo?.totalData}</p>
            {/* table */}
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <td className="py-2 pl-8 bg-gray-100 border-b font-bold">
                    ID
                  </td>
                  <td className="py-2 bg-gray-100 border-b font-bold">
                    Product Name
                  </td>
                  <td className="py-2 bg-gray-100 border-b font-bold">
                    Pengubah
                  </td>
                  <td className="py-2 bg-gray-100 border-b font-bold">Date</td>
                  <td className="py-2 bg-gray-100 border-b font-bold">
                    Status
                  </td>
                  <td className="py-2 bg-gray-100 border-b font-bold">
                    Remark
                  </td>
                  <td className="py-2 bg-gray-100 border-b font-bold">
                    <div className="flex justify-center">Quantity</div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.stock_id}>
                    <td className="py-2 pl-8 border-b">{item.stock_id}</td>
                    <td className="py-2 border-b">{item.product_name}</td>
                    <td className="py-2 border-b">{item.user_name}</td>
                    <td className="py-2 border-b">
                      {moment(item.date).format("DD-MM-YYYY")}
                    </td>
                    <td className="py-2 border-b">
                      <div
                        className={
                          item.type === 1
                            ? "text-green-500 font-bold"
                            : item.type === 2
                            ? "text-red-500 font-bold"
                            : "text-yellow-500 font-bold"
                        }
                      >
                        {item.type === 1
                          ? "Stock in"
                          : item.type === 2
                          ? "Stock out"
                          : "Updated"}
                      </div>
                    </td>
                    <td className="py-2 border-b">
                      <div className="w-20">
                        <p className="truncate" title={item.remark}>
                          {item.remark}
                        </p>
                      </div>
                    </td>
                    <td className="py-2 border-b">
                      <div className="flex justify-center">{item.quantity}</div>
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
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                  <FiChevronUp className="absolute right-2 top-3" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <p>Halaman :</p>
                <p>
                  {query.page}/{stock?.data?.pageInfo?.totalPage}
                </p>
              </div>
              <button
                onClick={nextPage}
                disabled={query.page === stock?.data?.pageInfo?.totalPage}
                className={
                  query.page === stock?.data?.pageInfo?.totalPage
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

export default Stock;
