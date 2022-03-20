var personal = document.getElementById("personal");

var company = document.getElementById("company");

personal.addEventListener("click", function () {
  connect.disabled = true;
  connect.placeholder = "không nhập";
  connect.value = "";
});

company.addEventListener("click", function () {
  connect.disabled = false;
  connect.placeholder = "nhập số";
});

document.getElementById("tinhTien").addEventListener("click", function () {
  var loaiKH = document.querySelector('input[name="loaiKH"]:checked').value * 1;

  var channel = document.getElementById("channel").value * 1;

  var connect = document.getElementById("connect");

  var tienCuoc;

  if (loaiKH == 0) {
    tienCuoc = 4.5 + 20.5 + 7.5 * channel;
  } else if (connect.value * 1 < 11) {
    tienCuoc = 15 + 7.5 * connect.value * 1 + 50 * channel;
  } else {
    tienCuoc = 15 + 75 + 5 * (connect.value * 1 - 10) + 50 * channel;
  }
  document.getElementById("ketQuaExe4").value = tienCuoc;
});
