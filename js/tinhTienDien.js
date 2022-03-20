document.getElementById("tinhTienExe2").addEventListener("click", function () {
  var soDien = document.getElementById("soDien").value * 1;

  var txtTongTien = document.getElementById("tongTienExe2");
  var tongTien;

  if (soDien < 50) {
    tongTien = soDien * 500;
  } else if (soDien < 100) {
    tongTien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien < 200) {
    tongTien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien < 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else if (soDien >= 350) {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }
  txtTongTien.value = tongTien.toLocaleString();
});
