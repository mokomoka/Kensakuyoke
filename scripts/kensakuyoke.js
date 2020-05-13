function onSubmit() {
  var form = document.getElementById("kensakuyoke");
  var text_orig = form.text_orig.value;
  var text_orig_arr = String(text_orig).split("");
  var text_con = "";
  var method = form.method.value;
  if (method === "others_input") {
    method = form.text_other_input.value;
  } else if (method === "others_replace") {
    method = form.text_other_replace.value;
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
  var form = document.getElementById("kensakuyoke");
  if (document.getElementById("others_input").checked) {
    form.text_other_input.disabled = false;
    form.text_other_replace.disabled = true;
  } else if (document.getElementById("others_replace").checked) {
    form.text_other_replace.disabled = false;
    form.text_other_input.disabled = true;
  } else {
    form.text_other_input.disabled = true;
    form.text_other_replace.disabled = true;
  }
}
window.onload = changeDisabled();
