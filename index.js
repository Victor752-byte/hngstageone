const d = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = d.getDay();
let mark;
function ampm(){
    if(d.getHours() < 11){
        return "am"
    }
    return "pm"
}

document.getElementById("currentTimeUTC").innerHTML=d.getUTCHours() + ':' + d.getMinutes() + ampm();
document.getElementById("currentDay").innerHTML= days[day];
