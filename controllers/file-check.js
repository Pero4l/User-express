const FILE_PATH = "./user.json";
const POST = "./posts.json";
const fs = require("fs");


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


function readPosts() {
  try {
    if (!fs.existsSync(POST)) return [];
    const data = fs.readFileSync(POST, "utf8");
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

function writePosts(posts) {
  try {
    fs.writeFileSync(POST, JSON.stringify(users, null, 2));
  } catch (err) {
    console.log("Error writing users:", err);
  }
}


module.exports = {
    readUsers,
    readPosts,
    writeUsers,
    writePosts
}