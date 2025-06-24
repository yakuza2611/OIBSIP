// Register
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username]) {
    alert("❌ Username already exists!");
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  alert("✅ Registration successful! You can now login.");
  window.location.href = "index.html";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username] === password) {
    localStorage.setItem("loggedInUser", username);
    alert("✅ Login successful!");
    window.location.href = "secure.html";
  } else {
    alert("❌ Invalid username or password.");
  }
});
