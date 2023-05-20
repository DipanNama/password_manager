const express = require('express');
const router = express.Router();

let passwords = "";

// Creates a random password including all types of characters
const random = () => {
    let pass = "";
    return passwords = pass;
}

router.get('/random', (req,res) => {
    passwd();
    res.send(passwords);
})

// Creates a random password using small alphabets and numbers 
const pass = () => {
    let pass = "";
    return passwords = pass;
}

router.get('/pass', (req,res) => {
    pass();
    res.send(passwords);
})

// Provides a User Interface for the users so that they can create a random password based upon their chioce
const create = () => {
    let pass = "";
    return passwords = pass;
}

router.get('/create', (req,res) => {
    passwd();
    res.send(passwords);
})

// Creates a base64 hex string based upon some input string 
const base64 = () => {
    passowrd = "Dipan Nama";
    let pass = btoa(passowrd);
    return passwords = pass;
}

router.get('/base64', (req,res) => {
    base64();
    res.send(passwords);
})

// Creates a random hash based upon the user input
const hash = () => {
    passowrd = "Dipan Nama";
    let pass = btoa(passowrd);
    return passwords = pass;
}
router.get('/hash', (req,res) => {
    passwd();
    res.send(passwords);
})

module.exports = router;