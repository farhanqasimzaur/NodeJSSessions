const router = require('express').Router();
const fs = require('fs');

const rawData = fs.readFileSync('users.json');
const users = JSON.parse(rawData);

function findAll(){
    return users;
}

function find(name){
    const u = users.filter(e => e.name === name);
    if(!u.length){
        throw new Error("user not found");
    }
    return u;
}

function findOne(name){
    const u = users.find(e => e.name === name);
    if(!u.length){
        throw new Error("user not found");
    }
    return u;
}

router.get('', function(req, res){

    try{
        const u = find('farhan');
        res.status(200).send(u);
    }catch(e){
        res.status(404).send('NOT_FOUND');
    }
    
});

module.exports = router;