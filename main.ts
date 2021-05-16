function init () {
    matrix[0] = neopixel.create(DigitalPin.P1, 16, NeoPixelMode.RGB)
    matrix[1] = neopixel.create(DigitalPin.P2, 16, NeoPixelMode.RGB)
    matrix[0].setBrightness(40)
    matrix[1].setBrightness(40)
    matrix[0].showColor(neopixel.colors(NeoPixelColors.White))
    matrix[1].showColor(neopixel.colors(NeoPixelColors.White))
}
function makeRanges (snr: number) {
    //let ystrip = strip.range(0, 4)
    for (let i = 0; i <= 3; i++) {
        //matrix_range[snr][i] = matrix[snr].range(4 * i, 4)
        let ystrip = matrix[snr].range(4 * i, 4)

        //console.log(snr + "/" +i)
        matrix_range.push(ystrip)
    }
    basic.showNumber(matrix_range.length)

    // matrix_range[snr][0].showColor(neopixel.colors(NeoPixelColors.Yellow))
    // matrix_range[snr][1].showColor(neopixel.colors(NeoPixelColors.Blue))
    // matrix[snr].show()
}   
function setFarbe(snr:number,rangeNr:number) {
    //matrix[snr].clear()
    
    // for (let j=0;j<=2;j++) {
    //     //matrix[snr].setPixelColor(j, NeoPixelColors.Green);
    //     //matrix_range[snr][rangeNr].setPixelColor(j, NeoPixelColors.Green);
    //     matrix_range[snr][rangeNr].showColor(neopixel.colors(NeoPixelColors.Blue))
    // }
    //matrix_range[snr*4+rangeNr].showColor(neopixel.colors(NeoPixelColors.Blue))
    matrix[snr].show()
}

/**
 * let RangeB: neopixel.Strip = null
 */
//let xstrip: Array<neopixel.Strip> = []
let xstrip: neopixel.Strip 
let matrix: neopixel.Strip[] = []
let matrix_range: Array<neopixel.Strip> =[]
// let matrix_range: Array<neopixel.Strip[]> =[]

 
    // for (let i = 0; i <= 3; i++) {
    //      matrix_range[0].push(xstrip)
    // } 
    //     for (let i = 0; i <= 3; i++) {
    //      matrix_range[1].push(xstrip)
    // }       
// matrix_range[0].push(xstrip)

// strip.setMatrixWidth(0)
// strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))

basic.showIcon(IconNames.Heart)
init()


makeRanges(0)
makeRanges(1)


setFarbe(1,0)
setFarbe(0,1)
setFarbe(1,2)
setFarbe(0,3)

