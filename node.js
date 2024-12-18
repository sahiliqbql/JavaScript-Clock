let s = 0;
let m = 0;
let h = 0;

let d = new Date();

setInterval(
    function(){
        d = new Date();
        s = d.getSeconds()*6;
        m = d.getMinutes()*6;
        h = d.getHours()*30;
        document.getElementById("rsec").style.transform = "rotate(" + s + "deg)";
        document.getElementById("rmint").style.transform = "rotate(" + m + "deg)";
        document.getElementById("rhour").style.transform = "rotate(" + h + "deg)";
    },1000
)
