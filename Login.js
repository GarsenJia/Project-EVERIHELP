var users = [];
var paswrds = [];

const submit = (ev)=>{
    var number = document.getElementById("usrname").value;
    var paswrd = document.getElementById("paswrd").value;
    ev.preventDefault();
    if(!users.includes(number)){
        users.push(number);
        paswrds.push(paswrd);
        document.forms[0].reset();
        //console.warn('added', {users});
        window.alert("已自动注册");
        window.alert("jump");
        //jump
        window.location.href="./Scratch.html";
        const fs = require('fs')
        let data = "Learning how to write in a file."
        fs.writeFile('./Users.txt', data, (err) => {
            if (err) throw err;})
    }else{
        index = users.indexOf(number);
        if(paswrds[index] == paswrd){
            window.location.href="./Scratch.html";
            window.alert("jump");
        }else{
            window.alert("用户名或密码错误");
        }
    }

}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', submit);
})

function validNumber(){
    var number = document.getElementById("usrname").value;
    var pattern = /^\d{11}$/;
    if(!pattern.test(number) || numer == "" || number == undefined){
        window.alert("请输入有效手机号")
    }
}
