


function test()
{
// deklarace akltualniho casu
    let myDate = Date.now()
    
let xmasdate = parseInt(new Date(2022, 11, 24, 0, 0, 0).getTime())
let diff = xmasdate - myDate;

let days = parseFloat(diff/86400000);
days = Math.floor(days)

let hours = (days - Math.floor(days)) * 24;
    let minutes = (hours - Math.floor(hours)) * 60
let secunds = (minutes - Math.floor(minutes) ) * 60
let output = days + " dny"
document.getElementById("vystup").innerHTML= output

    console.log("myDate" + myDate);
console.log("xmasDate" + xmasdate );
console.log("diff" + diff );
console.log("days" + days );
    console.log("hours" + hours );

    console.log("minutes" + minutes)

    console.log("secunds" + minutes)

    window.requestAnimationFrame(test);
}




window.requestAnimationFrame(test);
