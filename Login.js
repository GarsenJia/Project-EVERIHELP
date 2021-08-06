var users = [];
var paswrds = [];

function li(){
    var number = document.

    getElementById("number").value;
    var paswrd = document.getElementById("paswrd").value;
    var info = number + "," + paswrd + "\n";
    window.alert(users.length);
    window.alert(paswrds.length);
    users.push(number);
    paswrds.push(paswrd)
    window.alert(users.length);
    window.alert(paswrds.length);
    window.alert(users[0]);
    var txtFile = "./Users.txt";
    var file = new File(txtFile);
    var str = "My string of text";

    file.open("w"); // open file with write access
    file.writeln("First line of text");
    file.writeln("Second line of text " + str);
    file.write(str);
    file.close();
}

function validusr(){
    var number = document.getElementById("number").value;
    //window.alert(users.includes(number));
    if(users.includes(number)){
        window.alert("exist");
    }else{
        li();
    }
}