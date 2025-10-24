import fs from 'fs';

interface Typed {
    getColorInHex(): void;
    convertColorBaseNumber(): void;

    createFile(fileName: string, data: string): void
}

type Conversion = Typed

let colorR = Math.floor(Math.random() * 255);
let colorG = Math.floor(Math.random() * 255);
let colorB = Math.floor(Math.random() * 255);

const conversion:Conversion = {

    getColorInHex() {
        console.log("#" +
            colorR.toString(15) + colorG.toString(16) + colorB.toString(16));
    },

    convertColorBaseNumber() {

        console.log(`R: ${colorR} G: ${colorG} B: ${colorB}`)
    },

    createFile(fileName: string, data: string) {

        fs.writeFileSync(fileName, data.toString());

    }
}

const fileName =  "colors.color.col"
let color = {
    r: colorR,
    g: colorG,
    b: colorB
}

let message = `R: ${color.r} G: ${color.g} B: ${color.b} `

conversion.createFile(fileName, message.toString());
conversion.getColorInHex()
conversion.convertColorBaseNumber()