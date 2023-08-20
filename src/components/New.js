import React from "react";
import axios from "axios";
import { useState } from "react";

function New() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Hàm xử lý khi người dùng chọn một ảnh
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // Hàm xử lý khi người dùng nhấn nút "Tải lên"
  const handleImageUpload = async () => {
    if (!selectedImage) {
      console.error("Bạn chưa chọn ảnh để tải lên.");
      return;
    }

    // Tạo FormData để đóng gói tệp hình ảnh
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      // Gửi tệp hình ảnh lên server sử dụng Axios
      const response = await axios.post(
        "http://localhost:3004/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Xử lý kết quả từ server (response.data)
      console.log("Tải ảnh lên thành công:", response.data);

      // Đặt lại trạng thái để cho phép người dùng tải lên ảnh khác
      setSelectedImage(null);
    } catch (error) {
      console.error("Lỗi khi tải ảnh lên:", error);
    }
  };

  return (
    <div className="bg-[#E9E9E9] flex justify-center p-7 rounded-3xl">
      <div className="bg-[#ffffff] rounded-2xl text-[12px] p-5 flex justify-around gap-2 ">
        <div className="flex flex-col w-[310px] gap-2 ">
          <div className="bg-[#E9E9E9] w-[270px] h-[495px] flex items-center justify-center rounded-lg">
            Kéo thả hoặc nhấp vào để tải lên
            {/* <input
              className="content-['Hello_World']"
              type="file"
              id="image-input"
              accept="image/*"
            /> */}
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Tải lên</button>
            {selectedImage && (
              <div>
                <h3>Ảnh đã chọn:</h3>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  width="200"
                />
              </div>
            )}
          </div>
          {/* <div className="bg-[#E9E9E9] flex items-center justify-center rounded-3xl w-[270px] py-4 text-[16px] ">
            Lưu từ trang
          </div> */}
        </div>
        <div className="flex flex-col gap-6">
          <input
            className="outline-none border-b-2 text-3xl font-bold"
            type="text"
            placeholder="Tạo tiêu đề"
          />
          <input
            className="outline-none border-b-2 text-base"
            type="text"
            placeholder="Cho mọi người biết bạn đang giới thiệu điều gì "
          />
        </div>
      </div>
    </div>
  );
}

export default New;
