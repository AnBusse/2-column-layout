function toggle_visibility(id1, id2, id3, id4, id5, id6) {
  var a = document.getElementById(id1);
  var b = document.getElementById(id2);
  var c = document.getElementById(id3);
  var d = document.getElementById(id4);
  var e = document.getElementById(id5);
  var f = document.getElementById(id6);

  if (a.style.display === "block") {
    a.style.display = "none";
    b.style.minHeight = "0px";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";
    f.style.display = "none";

  } else {
    a.style.display = "block";
    b.style.minHeight = "300px";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "none";
    f.style.display = "block";
  }
}
