import { Image } from "https://deno.land/x/imagescript@1.3.0/mod.ts";

const colorsBin = await Deno.readFile('./acrylic6.png')
const img = await Image.decode(colorsBin);
const colorCount = 8;
const colors: number[] = [];
const startPos = [566, 1007];
const colorsPerRow = 4;
for (let i = 0; i < colorCount; i++) {
    const x = i % colorsPerRow;
    const y = Math.floor(i / colorsPerRow);

    colors.push(img.getPixelAt(startPos[0] + 547*x, startPos[1] + 639*y));
}

const formattedColors = colors.map((c) => '#'+c.toString(16).padStart(8, '0').toUpperCase());
// const colos = JSON.parse(await Deno.readTextFile('./tamiya_a_1.json'));
// const added = colos.map((v, i) => ({
//     ...v,
//     value: formattedColors[i]
// }));

await Deno.writeTextFile('./acrylic6.json', JSON.stringify(formattedColors));
async function parseColors(colorTxt: string) {
    const lines = colorTxt.split('\n');
    const json = lines.map((line, i) => {
        if (line === '') {
            return undefined;
        }

        const [name,finish,type] = line.split(',');

        return {
            id: i + 1,
            name,
            finish,
            type: type?.split('.')
        }
    }).filter((v) => v !== undefined);
    // console.log(json.length);
    await Deno.writeTextFile('./colors.json', JSON.stringify(json));
}

// const text = await Deno.readTextFile('./colors.txt');
// await parseColors(text);


// const moreColors = [];
// console.log(colors.length, names.length)
// for (let i = 0; i < names.length; i++) {
//     const curName = names[i];
//     const curColor = colors[i];
//     const nameMatch = curName.match(/^LP-(?<id>\d+) (?<name>.*)$/);
//     moreColors.push({
//         id: nameMatch?.groups['id'],
//         key: 'LP',
//         value: curColor,
//         name: nameMatch?.groups['name'],
//         brand: 'Tamiya'
//     });
// }
// moreColors.sort((a,b) => a.id -b.id)
// await Deno.writeTextFile('./tamiyacolors.json', JSON.stringify(moreColors));
