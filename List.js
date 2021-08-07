var lats = [];
var lnts = [];
var pickup = [];
var service = [];
var des = [];
var id = [];
var times = [];
var index = 5;

/*
First 5 row when loading
 */
function load(){
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
    while(!putFile.AtEndOfStream){
        pickup.push(puFile.ReadLine());
    }
    while(!sertFile.AtEndOfStream){
        service.push(serFile.ReadLine());
    }
    while(!destFile.AtEndOfStream){
        des.push(desFile.ReadLine());
    }
    while(!idFile.AtEndOfStream){
        id.push(idFile.ReadLine());
    }
    while(!timeFile.AtEndOfStream){
        times.push(timeFile.ReadLine());
    }

    document.getElementById("lat00").innerHTML="latitude: "+lats[0];
    document.getElementById("lnt00").innerHTML="longitude: "+lnts[0];
    document.getElementById("pick00").innerHTML="isPickup: "+ pickup[0];
    document.getElementById("service00").innerHTML="isService: " + service[0];
    document.getElementById("Des00").innerHTML="Description: " + des[0];
    document.getElementById("id00").innerHTML="ID: " + id[0];
    document.getElementById("time00").innerHTML="Timestamp: " + times[0];

    document.getElementById("lat01").innerHTML="latitude: "+lats[1];
    document.getElementById("lnt01").innerHTML="longitude: "+lnts[1];
    document.getElementById("pick01").innerHTML="isPickup: "+ pickup[1];
    document.getElementById("service01").innerHTML="isService: " + service[1];
    document.getElementById("Des01").innerHTML="Description: " + des[1];
    document.getElementById("id01").innerHTML="ID: " + id[1];
    document.getElementById("time01").innerHTML="Timestamp: " + times[1];

    document.getElementById("lat02").innerHTML="latitude: "+lats[2];
    document.getElementById("lnt02").innerHTML="longitude: "+lnts[2];
    document.getElementById("pick02").innerHTML="isPickup: "+ pickup[2];
    document.getElementById("service02").innerHTML="isService: " + service[2];
    document.getElementById("Des02").innerHTML="Description: " + des[2];
    document.getElementById("id02").innerHTML="ID: " + id[2];
    document.getElementById("time02").innerHTML="Timestamp: " + times[2];

    document.getElementById("lat03").innerHTML="latitude: "+lats[3];
    document.getElementById("lnt03").innerHTML="longitude: "+lnts[3];
    document.getElementById("pick03").innerHTML="isPickup: "+ pickup[3];
    document.getElementById("service03").innerHTML="isService: " + service[3];
    document.getElementById("Des03").innerHTML="Description: " + des[3];
    document.getElementById("id03").innerHTML="ID: " + id[3];
    document.getElementById("time03").innerHTML="Timestamp: " + times[3];

    document.getElementById("lat04").innerHTML="latitude: "+lats[4];
    document.getElementById("lnt04").innerHTML="longitude: "+lnts[4];
    document.getElementById("pick04").innerHTML="isPickup: "+ pickup[4];
    document.getElementById("service04").innerHTML="isService: " + service[4];
    document.getElementById("Des04").innerHTML="Description: " + des[4];
    document.getElementById("id04").innerHTML="ID: " + id[4];
    document.getElementById("time04").innerHTML="Timestamp: " + times[4];

}



/*
Next button
 */
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
    while(!putFile.AtEndOfStream){
        pickup.push(puFile.ReadLine());
    }
    while(!sertFile.AtEndOfStream){
        service.push(serFile.ReadLine());
    }
    while(!destFile.AtEndOfStream){
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

/*
Prev Button
 */
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
    while(!putFile.AtEndOfStream){
        pickup.push(puFile.ReadLine());
    }
    while(!sertFile.AtEndOfStream){
        service.push(serFile.ReadLine());
    }
    while(!destFile.AtEndOfStream){
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

/*
on click(accept)
 */
