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
        //jump to page #2
        window.alert("jump");
    }else{
        index = users.indexOf(number);
        if(paswrds[index] == paswrd){
            //jump to page #2
            window.alert("jump");
        }else{
            window.alert("用户名或密码错误");
        }
    }
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', submit);
})


