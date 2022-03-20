document.getElementById("tinhTienThue").addEventListener("click", function () {
  var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  var nguoiPhuThuoc = document.getElementById("soNguoi").value * 1;
  var khauTru = 4000000;

  var thuNhapChiuThue = tongThuNhap - khauTru - nguoiPhuThuoc * 1600000;

  console.log(thuNhapChiuThue);

  var tienThue;

  if (tongThuNhap <= 48000000) {
    document.getElementById("tienThue").value = "Miễn thuế";
  } else {
    if (thuNhapChiuThue <= 60000000) {
      tienThue = (thuNhapChiuThue * 5) / 100;
    } else if (thuNhapChiuThue <= 120000000) {
      tienThue = (thuNhapChiuThue * 10) / 100;
    } else if (thuNhapChiuThue <= 216000000) {
      tienThue = (thuNhapChiuThue * 15) / 100;
    } else if (thuNhapChiuThue <= 384000000) {
      tienThue = (thuNhapChiuThue * 20) / 100;
    } else if (thuNhapChiuThue <= 624000000) {
      tienThue = (thuNhapChiuThue * 25) / 100;
    } else if (thuNhapChiuThue <= 960000000) {
      tienThue = (thuNhapChiuThue * 30) / 100;
    } else if (thuNhapChiuThue > 960000000) {
      tienThue = (thuNhapChiuThue * 35) / 100;
    }
    if (tienThue <= 0) {
      document.getElementById("tienThue").value = "Miễn thuế";
    } else {
      document.getElementById("tienThue").value =
        tienThue.toLocaleString() + " VNĐ";
    }
  }
});
