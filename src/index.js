const express = require("express");
const app = express();

// Порт, на котором запустится сервер
const PORT = process.env.PORT || 3000;

// Маршрут для проверки работы сервера
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
