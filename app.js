console.log("Hello World");

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// console.log(user);


fs.appendFile('greeting.txt', ' today is 25th Dec' +user.username+ '!git init'
 , (err)=> {
    if (err) {
        console.log('unable to write in a file');
        
    }
}
);