const express = require("express");

const fs = require("fs")

const app = express();

app.use(express.json());

const PORT = 7000;

const FILE_PATH = require("./user.json")


function readUsers(){
    try{
        if(!fs.existsSync(FILE_PATH)) return [];
        const data = fs.readFileSync(FILE_PATH, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Erro reading users:", err)
        return []; 
    }
}

function writeUsers(user){
    try{
        fs.writeFileSync(FILE_PATH, JSON.stringify(user, null, 2));
    } catch (err) {
        console.log("Error writing users:", err);
        
    }
}



app.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Welcome DevPTB the server is running"
    })
});


app.post("/register", (req, res) => {

    const{name, email, password} = req.body

    res.status(200).json({
        success: true,
        message: "Account created successfully"
    })

    const user = readUsers()

    if(user.find((u)=> u.name === name && u.email === email)){
        console.log("User already exist.");
        
    }

})



app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}` );
    
})