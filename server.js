const express = require("express");

const app = express();

const authRouter = require("./routers/auth.route")
const ticketRouter = require("./routers/ticket.route")

const PORT = 7000;

app.use(express.json());






app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome DevPTB, the server is running 🚀"
  });
});


app.use('/auth', authRouter)
app.use('/ticket', ticketRouter)

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
