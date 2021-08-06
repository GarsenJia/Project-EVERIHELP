function li(){
    var number = document.getElementById("number");
    var paswrd = document.getElementById("paswrd");
    var info = number.value + "," + paswrd.value;
    window.alert(info);
    var fso = new ActiveXObject(Scripting.FileSystemObject);
    var f = fso.createtextfile("./Users.txt",2,true);
    //window.alert(info);
    f.writeLine(info);
    f.close();
}

function validusr(){
    var number = document.getElementById("number");
    var usrs = [];
    var fso = new ActiveXObject(Scripting.FileSystemObject);
    var f = fso.createtextfile("C:/Users/Shengyi Jia/IdeaProjects/Help/Users.txt",2,true);
    while (!f.AtEndOfStream){
        usrs.push(f.Readline());
    }

}