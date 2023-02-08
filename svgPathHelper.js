export default function drawLine(x1,y1,x2,y2){
    const rayon = randomIntFromInterval(20,80)
    const start =  randomIntFromInterval(-40,500)

    return `<path d="M ${start } ${start } A ${rayon } ${rayon } 0 0 1 ${rayon * 2 } ${rayon * 2 }"  d="" stroke="red"/>`

}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}


