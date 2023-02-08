export default function drawLine(x1,y1,x2,y2){
    return `<line x1="${randomIntFromInterval(-40,500)}"  y1="${y1}" x2="${x2}" y2="${y2}" stroke="red"></line>`
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

