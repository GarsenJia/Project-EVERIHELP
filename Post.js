var lats = [];
var lnts = [];
var isPickup = [];
var isService = [];
var des = [];
var id = [];
var time = [];
var name = [];
var status = [];

function pst(){
    //window.alert("0");
    console.warn("0");

    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var latFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Latitudes.txt", 8, true);
    var lntFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Longitudes.txt", 8, true);
    var puFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/isPickup.txt", 8, true);
    var serFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/isService.txt", 8, true);
    var desFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Description.txt", 8, true);
    var idFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/ID.txt", 8, true);
    var timeFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Timestamp.txt", 8, true);
    var nameFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Names.txt", 8, true);
    var statusFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Status.txt", 8, true);


    var pick = document.getElementById("pickup").value;
    var des = document.getElementById("description").value;
    var id = document.getElementById("id").value;
    var ser = document.getElementById("ser").value;
    var lat = document.getElementById("lat").value;
    var lnt = document.getElementById("lnt").value;
    var name = document.getElementById("name").value;
    var time = Date.parse(new Date());

    //window.alert("3");
    latFile.WriteLine(lat);
    lntFile.WriteLine(lnt);
    puFile.WriteLine(pick);
    desFile.WriteLine(des);
    idFile.WriteLine(id);
    serFile.WriteLine(ser);
    timeFile.WriteLine(time);
    nameFile.WriteLine(name);
    statusFile.WriteLine("-1");

    var proFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/proFileQuest.txt", 8, true);
    var taskInfo = name + ";"
        + id + ";"
        + ser + ";"
        + pick + ";"
        + des + ";"
        + time + ";"
        + "经度: "+lnt+" 纬度: "+lat + ";";
    proFile.WriteLine(taskInfo);
}

function validNumber(){
    var number = document.getElementById("usrname").value;
    var pattern = /^\d{11}$/;
    if(!pattern.test(number) || number == "" || number == undefined){
        window.alert("请输入有效手机号")
    }
}