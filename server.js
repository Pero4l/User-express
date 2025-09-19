const express = require("express");

const app = express();

app.use(express.json());

const PORT = 7000;



app.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Welcome DevPTB the server is running"
    })
})



app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}` );
    
})