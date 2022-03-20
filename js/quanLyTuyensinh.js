document.getElementById("check").addEventListener("click", function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;

  var diemKhuVuc =
    document.querySelector('input[name="khuvuc"]:checked').value * 1;

  var diemDoiTuong =
    document.querySelector('input[name="doituong"]:checked').value * 1;

  var diemMon1 = document.getElementById("diemMon1").value * 1;
  var diemMon2 = document.getElementById("diemMon2").value * 1;
  var diemMon3 = document.getElementById("diemMon3").value * 1;

  var txtTongDiem = document.getElementById("txt-tongDiem");

  var ketQua = document.getElementById("ketQua");

  var tongDiem;

  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    ketQua.innerText = "Rớt";
  } else {
    tongDiem = diemMon1 + diemMon2 + diemMon3 + diemDoiTuong + diemKhuVuc;
    if (tongDiem >= diemChuan) {
      ketQua.innerText = "Đậu";
    } else {
      ketQua.innerText = "Rớt";
    }
  }
  txtTongDiem.value = tongDiem;
});
