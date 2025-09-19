const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 7000;
const FILE_PATH = "./user.json";

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


function readUsers() {
  try {
    if (!fs.existsSync(FILE_PATH)) return [];
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading users:", err);
    return [];
  }
}

function writeUsers(users) {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
  } catch (err) {
    console.log("Error writing users:", err);
  }
}


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome DevPTB, the server is running 🚀"
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  

  let users = readUsers();
  const id = users.length + 1;
  const date = new Date().toLocaleString();

  if (users.find((u) => u.name === name && u.email === email)) {
    return res.status(400).json({
      success: false,
      message: "User already exists"
    });
  }

  const newUser = { id, name: name, email: email, password: password, date };
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({
    success: true,
    message: "Account created successfully",
    data: newUser
  });
});


app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
