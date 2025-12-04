fetch("https://localhost:3000/ping")
  .then(r => r.json())
  .then(console.log)
  .catch(err => console.error("Error:", err));
