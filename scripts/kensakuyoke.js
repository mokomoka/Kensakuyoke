function onSubmit() {
  var form = document.getElementById("kensakuyoke");
  var text_orig = form.text_orig.value;
  var text_orig_arr = String(text_orig).split("");
  var text_con = "";
  var method = form.method.value;
  if (method === "others") {
    method = form.text_other.value;
  }
  for (var i = 0; i < text_orig_arr.length; i++) {
    if (i < text_orig_arr.length - 1) {
      text_con += text_orig_arr[i] + method;
    } else {
      text_con += text_orig_arr[i];
    }
  }
  document.getElementById("text_converted").value = text_con;
  return false;
}
function changeDisabled() {
  var methods = document.getElementById("kensakuyoke").method;
  if (methods[methods.length - 1].checked) {
    document.getElementById("kensakuyoke").text_other.disabled = false;
  } else {
    document.getElementById("kensakuyoke").text_other.disabled = true;
  }
}
window.onload = changeDisabled();
