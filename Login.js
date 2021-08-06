var users = [];
var paswrds = [];

function submit(){
    window.alert("ok")
    var number = document.getElementById("usrname").value;
    var paswrd = document.getElementById("paswrd").value;
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var usrFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Users.txt", 1, true);
    var psdFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Passwords.txt", 1, true);
    while(!usrFile.AtEndOfStream){
        users.push(usrFile.ReadLine());
    }
    while(!psdFile.AtEndOfStream){
        paswrds.push(psdFile.ReadLine());
    }
    if(!users.includes(number)){
        var usrWrt = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Users.txt", 8, true);
        var psdWrt = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Passwords.txt", 8, true);
        usrWrt.WriteLine(number);
        psdWrt.WriteLine(paswrd);
        window.alert("已自动注册");
        window.alert("jump");
        //jump
        window.location.href="./Scratch.html";
    }else{
        index = users.indexOf(number);
        if(paswrds[index] == paswrd){
            window.location.href="./Scratch.html";
            window.alert("jump");
        }else{
            document.getElementById("paswrd").innerHTML="";
            window.alert("密码错误");
        }
    }

}

/*
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', submit);
})
 */


function validNumber(){
    var number = document.getElementById("usrname").value;
    var pattern = /^\d{11}$/;
    if(!pattern.test(number) || numer == "" || number == undefined){
        window.alert("请输入有效手机号")
    }
}
