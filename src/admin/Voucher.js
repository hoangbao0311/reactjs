import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Voucher = () => {
  const [listVoucher, setListVoucher] = useState([]);
  const [discount, setDiscount] = useState("");
  const [deal, setDeal] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get("https://frt6fs-3004.csb.app/voucher");
      if (response.status === 200) {
        setListVoucher(response.data);
      }
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://frt6fs-3004.csb.app/voucher/${id}`
      );
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpDiscount = async () => {
    const response = await axios.post("https://frt6fs-3004.csb.app/voucher/", {
      code: discount,
      deals: parseFloat(deal),
    });
    if (response.status === 201) {
      getData();
      toast.success("Thêm mã thành công !");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex gap-3 my-2 ">
        <input
          className="border-[1px] border-black outline-none p-1"
          placeholder="Mã giảm giá"
          onChange={(e) => setDiscount(e.target.value)}
        />
        <input
          className="border-[1px] border-black outline-none p-1"
          placeholder="Số tiền"
          onChange={(e) => setDeal(e.target.value)}
        />
        <button
          className=" bg-green-700 text-white p-1"
          onClick={handleUpDiscount}
          type=""
        >
          Thêm mã giảm giá
        </button>
      </div>

      <div className="h-full">
        {listVoucher.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div>
            {listVoucher.map((item) => (
              <div key={item.id} className="flex gap-5 p-2 items-center">
                <div>ID: {item.id}</div>
                <div>Mã Voucher: {item.code}</div>
                <div>Số tiền: {item.deals}</div>
                <div
                  className="bg-red-700 p-1 text-white px-2 rounded-lg cursor-pointer hover:bg-red-800"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Voucher;
