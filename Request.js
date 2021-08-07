var lats = [];
var lnts = [];
var isPickup = [];
var isService = [];
var des = [];
var id = [];
var time = [];

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

    //window.alert("1");
    console.warn("1");
    /*
    if (!navigator.geolocation){
        window.alert("无法获取地理位置");
        return;
    }else{
        function success(position) {
            var lat = position.coords.latitude;
            var lnt = position.coords.longitude;
            window.alert(lat);
            window.alert(lnt);
            latFile.WriteLine(lat);
            lntFile.WriteLine(lnt);
        };

        function error() {
            window.alert("未能获取地理位置");
            return;
        };

        navigator.geolocation.getCurrentPosition(success(position), error());
    }
     */
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition());
        } else {
            window.alert("无法获取地理位置");
        }
    }

    function showPosition(position) {
        window.alert("00");
        window.alert(position.coords.latitude);
        window.alert("01");
        window.alert(position.coords.longitude);
        window.alert("02");
    }

    getLocation();

    //window.alert("2");
    console.warn("2");
    var pick = document.getElementById("pickup").value;
    var des = document.getElementById("description").value;
    var id = document.getElementById("id").value;
    var ser = document.getElementById("ser").value;

    //window.alert("3");
    console.warn("3");
    puFile.WriteLine(pick);
    desFile.WriteLine(des);
    idFile.WriteLine(id);
    serFile.WriteLine(ser);
    timeFile.WriteLine(Date.parse(new Date()));
    //jump to list of request
    window.location.href="?";
}

function validNumber(){
    var number = document.getElementById("usrname").value;
    var pattern = /^\d{11}$/;
    if(!pattern.test(number) || number == "" || number == undefined){
        window.alert("请输入有效手机号")
    }
}