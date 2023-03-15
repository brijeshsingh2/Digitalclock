setInterval(myTimer, 1000);
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");
let ampm = document.getElementById("ampm");

function myTimer() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if(h>=12){
        h=h-12;
        ampm.innerText="PM";
    }
    else{
        ampm.innerText="AM";
    }

    if (h < 10)
        h = '0' + h;
    if (m < 10)
        m = '0' + m;
    if (s < 10)
        s = '0' + s;
   
    hh.innerHTML = h + 'h';
    mm.innerHTML = m+'m';
    ss.innerHTML = s +'s';
    
}
