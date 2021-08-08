var lats = [];
var lnts = [];
var pickup = [];
var service = [];
var des = [];
var id = [];
var times = [];
var index = 5;
var names = [];


function infoLoad(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var latFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Latitudes.txt", 1, true);
    var lntFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Longitudes.txt", 1, true);
    var puFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/isPickup.txt", 1, true);
    var serFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/isService.txt", 1, true);
    var desFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Description.txt", 1, true);
    var idFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/ID.txt", 1, true);
    var timeFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Timestamp.txt", 1, true);
    var nameFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Names.txt", 1, true);
    while(!latFile.AtEndOfStream){
        lats.push(latFile.ReadLine());
    }
    while(!lntFile.AtEndOfStream){
        lnts.push(lntFile.ReadLine());
    }
    while(!puFile.AtEndOfStream){
        pickup.push(puFile.ReadLine());
    }
    while(!serFile.AtEndOfStream){
        service.push(serFile.ReadLine());
    }
    while(!desFile.AtEndOfStream){
        des.push(desFile.ReadLine());
    }
    while(!idFile.AtEndOfStream){
        id.push(idFile.ReadLine());
    }
    while(!timeFile.AtEndOfStream){
        times.push(timeFile.ReadLine());
    }
    while(!nameFile.AtEndOfStream){
        names.push(nameFile.ReadLine());
    }
    var corInfo = "经度: "+lnts[0]+" 纬度: "+lats[0];
    document.getElementById("cord00").textContent=corInfo;
    document.getElementById("pick00").textContent=pickup[0];
    document.getElementById("service00").textContent=service[0];
    document.getElementById("Des00").textContent=des[0];
    document.getElementById("id00").textContent=id[0];
    document.getElementById("time00").textContent=times[0];
    document.getElementById("name00").textContent=names[0];

    corInfo = "经度: "+lnts[1]+" 纬度: "+lats[1];
    document.getElementById("cord01").textContent=corInfo;
    document.getElementById("pick01").textContent=pickup[1];
    document.getElementById("service01").textContent=service[1];
    document.getElementById("Des01").textContent=des[1];
    document.getElementById("id01").textContent=id[1];
    document.getElementById("time01").textContent=times[1];
    document.getElementById("name01").textContent=names[1];

    corInfo = "经度: "+lnts[2]+" 纬度: "+lats[2];
    document.getElementById("cord02").textContent=corInfo;
    document.getElementById("pick02").textContent=pickup[2];
    document.getElementById("service02").textContent=service[2];
    document.getElementById("Des02").textContent=des[2];
    document.getElementById("id02").textContent=id[2];
    document.getElementById("time02").textContent=times[2];
    document.getElementById("name02").textContent=names[2];

    corInfo = "经度: "+lnts[3]+" 纬度: "+lats[3];
    document.getElementById("cord03").textContent=corInfo;
    document.getElementById("pick03").textContent=pickup[3];
    document.getElementById("service03").textContent=service[3];
    document.getElementById("Des03").textContent=des[3];
    document.getElementById("id03").textContent=id[3];
    document.getElementById("time03").textContent=times[3];
    document.getElementById("name03").textContent=names[3];

    corInfo = "经度: "+lnts[4]+" 纬度: "+lats[4];
    document.getElementById("cord04").textContent=corInfo;
    document.getElementById("pick04").textContent=pickup[4];
    document.getElementById("service04").textContent=service[4];
    document.getElementById("Des04").textContent=des[4];
    document.getElementById("id04").textContent=id[4];
    document.getElementById("time04").textContent=times[4];
    document.getElementById("name04").textContent=names[4];
}

function acceptTask0(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var proFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/proFileOffer.txt", 8, true);
    var taskInfo = document.getElementById("name03").textContent+";"
        + document.getElementById("id00").textContent+";"
        + document.getElementById("service00").textContent+";"
        + document.getElementById("pick00").textContent+";"
        + document.getElementById("Des00").textContent+";"
        + document.getElementById("time00").textContent+";"
        + document.getElementById("cord00").textContent+";";
    proFile.WriteLine(taskInfo);

}


function acceptTask1(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var proFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/proFileOffer.txt", 8, true);
    var taskInfo = document.getElementById("name01").textContent+";"
        + document.getElementById("id01").textContent+";"
        + document.getElementById("service01").textContent+";"
        + document.getElementById("pick01").textContent+";"
        + document.getElementById("Des01").textContent+";"
        + document.getElementById("time01").textContent+";"
        + document.getElementById("cord01").textContent+";";
    proFile.WriteLine(taskInfo);

}


function acceptTask2(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var proFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/proFileOffer.txt", 8, true);
    var taskInfo = document.getElementById("name02").textContent+";"
        + document.getElementById("id02").textContent+";"
        + document.getElementById("service02").textContent+";"
        + document.getElementById("pick02").textContent+";"
        + document.getElementById("Des02").textContent+";"
        + document.getElementById("time02").textContent+";"
        + document.getElementById("cord02").textContent+";";
    proFile.WriteLine(taskInfo);

}

function acceptTask3(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var proFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/proFileOffer.txt", 8, true);
    var taskInfo = document.getElementById("name03").textContent+";"
        + document.getElementById("id03").textContent+";"
        + document.getElementById("service03").textContent+";"
        + document.getElementById("pick03").textContent+";"
        + document.getElementById("Des03").textContent+";"
        + document.getElementById("time03").textContent+";"
        + document.getElementById("cord03").textContent+";";
    proFile.WriteLine(taskInfo);

}

function acceptTask4() {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var proFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/proFileOffer.txt", 8, true);
    var taskInfo = document.getElementById("name04").textContent + ";"
        + document.getElementById("id04").textContent + ";"
        + document.getElementById("service04").textContent + ";"
        + document.getElementById("pick04").textContent + ";"
        + document.getElementById("Des04").textContent + ";"
        + document.getElementById("time04").textContent + ";"
        + document.getElementById("cord04").textContent + ";";
    proFile.WriteLine(taskInfo);
}



/*

const nextPg = (ev)=>{
    ev.preventDefault();

    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var latFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Latitudes.txt", 1, true);
    var lntFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Longitudes.txt", 1, true);
    var puFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/isPickup.txt", 1, true);
    var serFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/isService.txt", 1, true);
    var desFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Description.txt", 1, true);
    var idFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/ID.txt", 1, true);
    var timeFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Timestamp.txt", 1, true);
    while(!latFile.AtEndOfStream){
        lats.push(latFile.ReadLine());
    }
    while(!lntFile.AtEndOfStream){
        lnts.push(lntFile.ReadLine());
    }
    while(!puFile.AtEndOfStream){
        pickup.push(puFile.ReadLine());
    }
    while(!serFile.AtEndOfStream){
        service.push(serFile.ReadLine());
    }
    while(!desFile.AtEndOfStream){
        des.push(desFile.ReadLine());
    }
    while(!idFile.AtEndOfStream){
        id.push(idFile.ReadLine());
    }
    while(!timeFile.AtEndOfStream){
        times.push(timeFile.ReadLine());
    }

    document.getElementById("lat00").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt00").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick00").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service00").innerHTML="isService: " + service[index];
    document.getElementById("Des00").innerHTML="Description: " + des[index];
    document.getElementById("id00").innerHTML="ID: " + id[index];
    document.getElementById("time00").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.getElementById("lat01").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt01").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick01").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service01").innerHTML="isService: " + service[index];
    document.getElementById("Des01").innerHTML="Description: " + des[index];
    document.getElementById("id01").innerHTML="ID: " + id[index];
    document.getElementById("time01").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.getElementById("lat02").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt02").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick02").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service02").innerHTML="isService: " + service[index];
    document.getElementById("Des02").innerHTML="Description: " + des[index];
    document.getElementById("id02").innerHTML="ID: " + id[index];
    document.getElementById("time02").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.getElementById("lat03").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt03").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick03").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service03").innerHTML="isService: " + service[index];
    document.getElementById("Des03").innerHTML="Description: " + des[index];
    document.getElementById("id03").innerHTML="ID: " + id[index];
    document.getElementById("time03").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.getElementById("lat04").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt04").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick04").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service04").innerHTML="isService: " + service[index];
    document.getElementById("Des04").innerHTML="Description: " + des[index];
    document.getElementById("id04").innerHTML="ID: " + id[4];
    document.getElementById("time04").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.forms[0].reset();

}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', submit);
})


const prevPg = (ev)=>{
    ev.preventDefault();

    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var latFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Latitudes.txt", 1, true);
    var lntFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Longitudes.txt", 1, true);
    var puFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/isPickup.txt", 1, true);
    var serFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/isService.txt", 1, true);
    var desFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Description.txt", 1, true);
    var idFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/ID.txt", 1, true);
    var timeFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/Timestamp.txt", 1, true);
    while(!latFile.AtEndOfStream){
        lats.push(latFile.ReadLine());
    }
    while(!lntFile.AtEndOfStream){
        lnts.push(lntFile.ReadLine());
    }
    while(!puFile.AtEndOfStream){
        pickup.push(puFile.ReadLine());
    }
    while(!serFile.AtEndOfStream){
        service.push(serFile.ReadLine());
    }
    while(!desFile.AtEndOfStream){
        des.push(desFile.ReadLine());
    }
    while(!idFile.AtEndOfStream){
        id.push(idFile.ReadLine());
    }
    while(!timeFile.AtEndOfStream){
        times.push(timeFile.ReadLine());
    }
    index-=5;
    document.getElementById("lat00").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt00").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick00").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service00").innerHTML="isService: " + service[index];
    document.getElementById("Des00").innerHTML="Description: " + des[index];
    document.getElementById("id00").innerHTML="ID: " + id[index];
    document.getElementById("time00").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.getElementById("lat01").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt01").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick01").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service01").innerHTML="isService: " + service[index];
    document.getElementById("Des01").innerHTML="Description: " + des[index];
    document.getElementById("id01").innerHTML="ID: " + id[index];
    document.getElementById("time01").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.getElementById("lat02").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt02").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick02").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service02").innerHTML="isService: " + service[index];
    document.getElementById("Des02").innerHTML="Description: " + des[index];
    document.getElementById("id02").innerHTML="ID: " + id[index];
    document.getElementById("time02").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.getElementById("lat03").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt03").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick03").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service03").innerHTML="isService: " + service[index];
    document.getElementById("Des03").innerHTML="Description: " + des[index];
    document.getElementById("id03").innerHTML="ID: " + id[index];
    document.getElementById("time03").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.getElementById("lat04").innerHTML="latitude: "+lats[index];
    document.getElementById("lnt04").innerHTML="longitude: "+lnts[index];
    document.getElementById("pick04").innerHTML="isPickup: "+ pickup[index];
    document.getElementById("service04").innerHTML="isService: " + service[index];
    document.getElementById("Des04").innerHTML="Description: " + des[index];
    document.getElementById("id04").innerHTML="ID: " + id[4];
    document.getElementById("time04").innerHTML="Timestamp: " + times[index];
    index+=1;
    document.forms[0].reset();

}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', submit);
})



 */
