import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { FiChevronDown } from "react-icons/fi";

const StockIn = () => {
  const currentPath = "/stock"

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
          <div className="bg-white w-full p-5 flex flex-col gap-6">
            <div className="flex gap-5">
              <div>
                <p>Date :</p>
                <input
                  className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                  name="date"
                  type="date"
                />
              </div>
              <div>
                <p>Status :</p>
                <div className="relative">
                  <select
                    className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                    name="date"
                  >
                    <option className="hidden">--- Select Status ---</option>
                    <option value="stockin">Stock In</option>
                    <option value="stockout">Stock Out</option>
                  </select>
                  <FiChevronDown className="absolute right-2 top-3" />
                </div>
              </div>
              <div>
                <p>Quantity :</p>
                <input
                  className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm"
                  name="qty"
                  type="number"
                  placeholder="Insert quantity of stock"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Remark :</label>
              <textarea
                className="focus:outline-none p-2 border-2 border-black rounded-sm"
                name="remark"
                id="remark"
                rows="8"
                placeholder="Description/Information for stock"
              />
            </div>
            <div className="flex w-full justify-end">
              <button
                type="submit"
                className="bg-[#101540] py-2 px-3 rounded-md text-white w-fit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockIn