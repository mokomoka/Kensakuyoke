function onSubmit() {
  var form = document.getElementById("kensakuyoke");
  var text_orig = form.text_orig.value;
  var text_orig_arr = String(text_orig).split("");
  var text_con = "";
  var method_value = form.method.value;
  var con_type;

  if (!method_value.indexOf("replace")) {
    con_type = "replace";
    if (method_value === "replace_others") {
      method_value = form.text_other_replace.value;
    } else {
      method_value = method_value.slice(-1);
    }
  } else {
    con_type = "input";
    if (method_value === "input_others") {
      method_value = form.text_other_input.value;
    } else {
      method_value = method_value.slice(-1);
    }
  }

  // 検索避け文に変換
  if (con_type === "input") {
    for (var i = 0; i < text_orig_arr.length; i++) {
      if (i < text_orig_arr.length - 1) {
        text_con += text_orig_arr[i] + method_value;
      } else {
        text_con += text_orig_arr[i];
      }
    }
  } else if (con_type === "replace") {
    for (var i = 0; i < text_orig_arr.length; i++) {
      if (i % 2 == 0) {
        text_con += text_orig_arr[i];
      } else {
        text_con += method_value;
      }
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

function copyText() {
  var text = document.getElementById("text_converted");
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
