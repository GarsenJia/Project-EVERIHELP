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
    var number = document.getElementById("usrname").value;
    var paswrd = document.getElementById("paswrd").value;
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var usrFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Users.txt", 1, true);
    var psdFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Passwords.txt", 1, true);

    while(!usrFile.AtEndOfStream){
        usernames.push(usrFile.ReadLine());
    }
    while(!psdFile.AtEndOfStream){
        paswrds.push(psdFile.ReadLine());
    }
    usrFile.Close();
    psdFile.Close();

    if(!contains(usernames,number)){
        var usrWrt = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Users.txt", 8, true);
        var psdWrt = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Passwords.txt", 8, true);
        usrWrt.WriteLine(number);
        psdWrt.WriteLine(paswrd);
        window.alert("已自动注册 跳转中");
        usrWrt.Close();
        paswrd.Close();
    }else{
        index = usernames.indexOf(number);
        if(paswrds[index] == paswrd){
            window.alert("登陆成功 跳转中");
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
