import React from "react";
import dtbbct from "../image/dathongbao.png";

const Footer = () => {
  return (
    <div className="lg:flex-row flex flex-col justify-center items-center mx-48 gap-10 pb-8 mt-10">
      <div className="mt-8 grid gap-x-8 gap-y-12 lg:grid-cols-2 grid-cols-1">
        <div>
          <div>
            <b>Trụ sở chính</b>: Công ty Cổ Phần Phúc Long Heritage - ĐKKD: 0316
            871719
            <br />
            do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
            <br />
            <b>Nhà máy</b>: D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III,
            phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam
            <br />
            <b>Địa chỉ</b>: Phòng 702, Tầng 7, Tòa nhà Central Plaza, số 17 Lê
            Duẩn, phường Bến Nghé, quận 1, Hồ Chí Minh
            <br />
            <b>Điện thoại</b>: 1900 234 518 (Ext.9100/ 9102)
            <br />
            <b>Fax</b>: (028) 6263 0379 <br />
            <b class="w37">Email</b>
            <span class="w4">:</span>
            <span class="w1"> sales@phuclong.masangroup.com</span>
            <br />
            <b class="w37"> </b>
            <span class="w4"></span>
            <span class="w1"> info2@phuclong.masangroup.com</span>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 f_follow">
          <label for="newsletter-email">Đăng ký nhận tin khuyến mãi</label>
          <form
            method="POST"
            action="https://phuclong.com.vn/send"
            accept-charset="UTF-8"
            class="form-inline ng-pristine ng-valid"
            id="form-newsletter"
            novalidate="novalidate"
          >
            <input
              name="_token"
              type="hidden"
              value="z5HJ9kLIvoWwNaeG9j13lIDeL3b3KYnkoaueoZtu"
            />

            <div className="flex gap-2">
              <input
                type="email"
                className="border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
                id="newsletter-email"
                name="newsletter-email"
                placeholder="Nhập địa chỉ email"
              />
              <button
                type="submit"
                className="border-[1px] border-[#0C713D] py-1 px-3 hover:bg-[#0C713D] hover:text-white rounded-md "
              >
                Gửi
              </button>
            </div>
          </form>
          <br />
          <ul>
            <li>
              <a href="https://phuclong.com.vn/chinh-sach-dat-hang">
                Chính sách đặt hàng
              </a>
            </li>
            <li>
              <a href="https://phuclong.com.vn/chinh-sach-bao-mat-thong-tin">
                Chính sách bảo mật thông tin
              </a>
            </li>
            <li>
              <img className="h-16" src={dtbbct} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
