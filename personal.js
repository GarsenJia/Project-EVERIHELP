function showOffer(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var proFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/proFileOffer.txt", 1, true);
    var info = proFile.ReadLine().split(";");
    document.getElementById("offername01").textContent=info[0];
    document.getElementById("offeraddress01").textContent=info[1];
    document.getElementById("offertype01").textContent=info[2];
    document.getElementById("offerway01").textContent=info[3];
    document.getElementById("offerdesc01").textContent=info[4];
    info = proFile.ReadLine().split(";");
    document.getElementById("offername02").textContent=info[0];
    document.getElementById("offeraddress02").textContent=info[1];
    document.getElementById("offertype02").textContent=info[2];
    document.getElementById("offerway02").textContent=info[3];
    document.getElementById("offerdesc02").textContent=info[4];
}

function showQuest(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var proFile = fso.OpenTextFile("F:/CSC/Github/Unihack2021--33/Data/proFileQuest.txt", 1, true);
    var info = proFile.ReadLine().split(";");
    document.getElementById("requesttype01").textContent=info[2];
    document.getElementById("requestway01").textContent=info[3];
    document.getElementById("requestdesc01").textContent=info[4];

    info = proFile.ReadLine().split(";");
    document.getElementById("requesttype02").textContent=info[2];
    document.getElementById("requestway02").textContent=info[3];
    document.getElementById("requestdesc02").textContent=info[4];
}