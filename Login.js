var usernames = [];
var paswrds = [];

function contains(array,e){
    for(i = 0;i < array.length; i++){
        if(array[i] == e){
            return true;
        }
    }
    return false;
}
function ie9(){
    //window.alert("ok")
    var number = document.getElementById("usrname").value;
    var paswrd = document.getElementById("paswrd").value;
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var usrFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Users.txt", 1, true);
    var psdFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Passwords.txt", 1, true);
    while(!usrFile.AtEndOfStream){
        usernames.push(usrFile.ReadLine());
    }
    while(!psdFile.AtEndOfStream){
        paswrds.push(psdFile.ReadLine());
    }
    usrFile.Close();
    psdFile.Close();
    window.alert(contains(usernames,number));

    if(!contains(usernames,number)){
        window.alert("writing");
        var usrWrt = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Users.txt", 8, true);
        var psdWrt = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Passwords.txt", 8, true);
        usrWrt.WriteLine(number);
        psdWrt.WriteLine(paswrd);
        window.alert("已自动注册");
        window.alert("jump");
        window.location.href="/Scratch.html";
        usrWrt.Close();
        paswrd.Close();
        window.alert("jump complete");
    }else{
        index = usernames.indexOf(number);
        if(paswrds[index] == paswrd){
            window.alert("jump");
            window.location.href="/Scratch.html";
            window.alert("jump complete");
        }else{
            document.getElementById("paswrd").innerHTML="";
            window.alert("密码错误");
        }
    }

}



function validNumber(){
    var number = document.getElementById("usrname").value;
    var pattern = /^\d{11}$/;
    if(!pattern.test(number) || number == "" || number == undefined){
        window.alert("请输入有效手机号")
    }
}
