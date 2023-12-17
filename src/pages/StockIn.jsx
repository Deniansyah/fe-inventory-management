import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import http from "../helpers/http";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { productAction } from "../store/product/reducer";
import { useDispatch, useSelector } from "react-redux";

const StockIn = () => {
  const currentPath = "/stock"
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.auth.data);
  const product = useSelector((state) => state.product);
  const data = product.data.results;
  const [productVal, setProductVal] = useState("")
  const [idProduct, setIdProduct] = useState("")
  const [date, setDate] = useState("")
  const [quantity, setQuantity] = useState("")
  const [remark, setRemark] = useState("")
  const [hide, setHide] = useState(false)
  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    searchBy: "name",
    search: "",
    sortBy: "createdAt",
    sort: "ASC",
  });

  useEffect(() => {
    dispatch(productAction.getProductThunk(query));
  }, [dispatch, query]);

  const handleSearchChange = (event) => {
    setProductVal(event.target.value);
    if (event.target.value === "") {
      setHide(false)
    } else {
      setHide(true)
    }
    setQuery((prevData) => ({
      ...prevData,
      search: event.target.value,
    }));
    setQuery((prevData) => ({
      ...prevData,
      page: 1,
    }));
  };

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleRemarkChange = (event) => {
    setRemark(event.target.value)
  }

  const handleAc = (id, name) => {
    setHide(false)
    setIdProduct(id)
    setProductVal(name)
  }

  const updateStock = async (event) => {
    event.preventDefault();
    const formData = {
      date: date,
      type: 1,
      quantity: quantity,
      remark: remark,
    };
    
    try {
      const data = await http(token).patch(
        `/edit-stock/${idProduct}`,
        formData
      );
      alert("Add stock to product succes");
      history.push("/stock");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  const isButtonDisabled =
    productVal === "" ||
    idProduct === "" ||
    date === "" ||
    quantity === "" ||
    remark === "";

  return (
    <div className=" bg-gray-200 min-h-screen relative">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        {/* side navbar */}
        <SideBar path={currentPath} />
        {/* Main Section */}
        <div className="ml-24 mt-16 w-full p-10">
          <h1 className="text-3xl font-bold mb-10">Add Stock In</h1>
          <form onSubmit={updateStock}>
            <div className="bg-white w-full p-5 flex flex-col gap-6">
              <div className="relative">
                <div className="flex flex-col">
                  <label>
                    <span className="text-red-500">*</span>Product :
                  </label>
                  <input
                    className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                    name="product"
                    type="text"
                    placeholder="Search product"
                    autoComplete="off"
                    value={productVal}
                    onChange={handleSearchChange}
                  />
                </div>
                {hide ? (
                  <ul className="absolute bg-white border w-64">
                    {data?.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleAc(item.id, item.name)}
                        className="hover:bg-gray-300 pl-2"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="flex gap-5">
                <div>
                  <p>
                    <span className="text-red-500">*</span>Date :
                  </p>
                  <input
                    className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                    name="date"
                    type="date"
                    onChange={handleDateChange}
                  />
                </div>
                <div>
                  <p>
                    <span className="text-red-500">*</span>Quantity :
                  </p>
                  <input
                    className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                    name="qty"
                    type="number"
                    placeholder="Insert quantity of stock"
                    onChange={handleQuantityChange}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label>
                  <span className="text-red-500">*</span>Remark :
                </label>
                <textarea
                  className="focus:outline-none p-2 border-2 border-black rounded-sm"
                  name="remark"
                  id="remark"
                  rows="8"
                  placeholder="Description/Information for stock"
                  onChange={handleRemarkChange}
                />
              </div>
              <div className="flex w-full justify-end">
                <button
                  disabled={isButtonDisabled}
                  type="submit"
                  className={
                    isButtonDisabled
                      ? "bg-gray-500 py-2 px-3 rounded-md text-white w-fit"
                      : "bg-[#101540] py-2 px-3 rounded-md text-white w-fit"
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StockIn