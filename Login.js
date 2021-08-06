var users = [];
var paswrds = [];

function li(){
    var number = document.getElementById("number").value;
    var paswrd = document.getElementById("paswrd").value;
    var info = number + "," + paswrd + "\n";
    window.alert(info);
    users.push(number);
    paswrds.push(paswrd)
    window.alert(users[0]);
    const fs = require('fs');
    let data = "Learning how to write in a file.";
    fs.writeFile('Output.txt', data, (err) => {
        if (err) throw err;
    })
}

function validusr(){
    window.alert("alert");
    var number = document.getElementById("number").value;
    window.alert(users.includes(number));
    if(users.includes(number)){
        window.alert("exist");
    }else{
        li();
    }
}