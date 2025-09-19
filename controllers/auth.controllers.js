
const{readUsers,  writeUsers} = require("./file-check")




function register (req, res) {
  const { name, email, password } = req.body;

  

  let users = readUsers();
  const id = users.length + 1;
  const date = new Date().toLocaleString();

  if (users.find((u) => u.name === name && u.email === email)) {
    return res.status(400).json({
      success: false,
      message: "User already exists"
    });
  }

  const newUser = { id, name, email, password, date };
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({
    success: true,
    message: "Account created successfully",
    data: newUser
  });
};



function login(req, res){
    const { email, password } = req.body;

    let users = readUsers();

    console.log(users);

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        res.status(400).json({
            success: false,
            message: "Login Invalid"
        });
    } else {
        res.status(200).json({
            success: true,
            message: "Login Successfully"
        });
    }
};


module.exports = {
    register,
    login
}
