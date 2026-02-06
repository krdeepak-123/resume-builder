function generate() {
  let name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("output").innerText =
      "Please enter your name";
  } else {
    document.getElementById("output").innerText =
      "Hello " + name + "! Your resume is ready.";
  }
}
