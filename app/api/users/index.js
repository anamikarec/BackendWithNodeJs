const users = ["Anamika","Akanksha","Priyanka"];

function getAllUsers(){
    return users;
}

function getUsers(index){
    if(index>=0 && index<users.length){
        return users[index];
    }
    else{
        return null;
    }
}

function addUser(name){
    users.push(name);
    return users;
}

module.exports = {
    getAllUsers,
    getUsers,
    addUser
}