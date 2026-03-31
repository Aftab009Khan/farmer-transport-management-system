function loginUser(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  console.log("Login:", email, password, role);

  alert("Login Successful!");

  // Redirect based on role
  if (role === "farmer") {
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "driver.html";
  }
}
function loginUser(event){
  event.preventDefault()
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;
  alert("login successful!");
  if (role=="farmer"){
    window.location.href ="dashboard.html";
  } else{
    window.location.href ="driver.html"
  }
  
}
function registerUser(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let mobile = document.getElementById("mobile").value;
  let role = document.getElementById("role").value;

  console.log("Register:", name, email, password, mobile, role);

  alert("Registration Successful!");

  // Redirect to login page
  window.location.href = "login.html";
}
function submitRequest(event) {
  event.preventDefault();

  let pickup = document.getElementById("pickup").value;
  let destination = document.getElementById("destination").value;
  let load = document.getElementById("load").value;
  let distance = document.getElementById("distance").value;

  // Price calculation
  let price = (distance * 20) + (load * 2);

  document.getElementById("price").innerText =
    "Estimated Price: ₹" + price;

  console.log("Request:", pickup, destination, load, distance);
}
localStorage.setItem("userRole", role);
let role = localStorage.getItem("userRole");
let menu = document.getElementById("menu");

if (!role) {
  // Not logged in
  menu.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="request.html">Book Transport</a></li>
    <li><a href="login.html">Login</a></li>
    <li><a href="register.html">Register</a></li>
  `;
} else if (role === "farmer") {
  menu.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="request.html">Book Transport</a></li>
    <li><a href="dashboard.html">My Requests</a></li>
    <li><a href="#" onclick="logout()">Logout</a></li>
  `;
} else {
  menu.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li><a href="driver.html">Available Requests</a></li>
    <li><a href="#" onclick="logout()">Logout</a></li>
  `;
}
function logout() {
  localStorage.removeItem("userRole");
  window.location.href = "index.html";
}
function loadMenu() {
  let role = localStorage.getItem("userRole");
  let menu = document.getElementById("menu");

  if (!menu) return;

  if (!role) {
    menu.innerHTML = `
      <li><a href="index.html">Home</a></li>
      <li><a href="request.html">Book Transport</a></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="register.html">Register</a></li>
    `;
  } else if (role === "farmer") {
    menu.innerHTML = `
      <li><a href="index.html">Home</a></li>
      <li><a href="request.html">Book Transport</a></li>
      <li><a href="dashboard.html">My Requests</a></li>
      <li><a href="#" onclick="logout()">Logout</a></li>
    `;
  } else {
    menu.innerHTML = `
      <li><a href="index.html">Home</a></li>
      <li><a href="driver.html">Available Requests</a></li>
      <li><a href="#" onclick="logout()">Logout</a></li>
    `;
  }
}
<script src="script.js"></script>
<script>
loadMenu();
</script>
