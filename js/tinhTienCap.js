document.getElementById("tinhTien").addEventListener("click", function () {
  // alert("Ok");

  var personal = document.getElementById("personal");

  var company = document.getElementById("company");

  var connect = document.getElementById("connect");

  let loaiKH = document.querySelector('input[name="loaiKH"]:checked').value;

  if (loaiKH == 0) {
    connect.disabled = true;
  }
});
