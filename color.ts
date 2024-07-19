import { Image } from "https://deno.land/x/imagescript@1.3.0/mod.ts";

const names = ["LP-81 MIXING BLUE",
    "LP-82 MIXING RED",
    "LP-83 MIXING YELLOW",
    "LP-80 FLAT YELLOW",
    "LP-79 FLAT RED",
    "LP-78 FLAT BLUE",
    "LP-77 LIGHT BROWN (DAK 1942)",
    "LP-76 YELLOW-BROWN (DAK 1941)",
    "LP-75 BUFF",
    "LP-74 FLAT EARTH",
    "LP-73 KHAKI",
    "LP-72 MICA SILVER",
    "LP-71 CHAMPAGNE GOLD",
    "LP-70 GLOSS ALUMINUM",
    "LP-69 CLEAR YELLOW",
    "LP-68 CLEAR BLUE",
    "LP-67 SMOKE",
    "LP-66 FLAT FLESH",
    "LP-65 RUBBER BLACK",
    "LP-64 OLIVE DRAB (JGSDF)",
    "LP-63 TITANIUM SILVER",
    "LP-62 TITANIUM GOLD",
    "LP-61 METALLIC GRAY",
    "LP-60 NATO BLACK",
    "LP-59 NATO BROWN",
    "LP-58 NATO GREEN",
    "LP-57 RED BROWN 2",
    "LP-56 DARK GREEN 2",
    "LP-55 DARK YELLOW 2",
    "LP-54 DARK IRON",
    "LP-53 CLEAR ORANGE",
    "LP-52 CLEAR RED",
    "LP-51 PURE ORANGE",
    "LP-50 BRIGHT RED",
    "LP-49 PEARL CLEAR",
    "LP-48 SPARKLING SILVER",
    "LP-47 PEARL BLUE",
    "LP-46 PURE METALLIC RED",
    "LP-31 DARK GREEN 2 (IJN)",
    "LP-32 LIGHT GRAY (IJN)",
    "LP-33 GRAY GREEN (IJN)",
    "LP-34 LIGHT GRAY",
    "LP-35 INSIGNIA WHITE",
    "LP-36 DARK GHOST GRAY",
    "LP-37 LIGHT GHOST GRAY",
    "LP-38 FLAT ALUMINUM",
    "LP-39 RACING WHITE",
    "LP-40 METALLIC BLACK",
    "LP-41 MICA BLUE",
    "LP-42 MICA RED",
    "LP-43 PEARL WHITE",
    "LP-44 METALLIC ORANGE",
    "LP-45 RACING BLUE",
    "LP-16 WOODEN DECK TAN",
    "LP-17 LINOLEUM DECK BROWN",
    "LP-18 DULL RED",
    "LP-19 GUN METAL",
    "LP-20 LIGHT GUN METAL",
    "LP-21 ITALIAN RED",
    "LP-22 FLAT BASE",
    "LP-23 FLAT CLEAR",
    "LP-24 SEMI-GLOSS CLEAR",
    "LP-25 BROWN (JGSDF)",
    "LP-26 DARK GREEN (JGSDF)",
    "LP-27 GERMAN GRAY",
    "LP-28 OLIVE DRAB",
    "LP-29 OLIVE DRAB 2",
    "LP-30 LIGHT SAND",
    "LP-1 BLACK",
    "LP-2 WHITE",
    "LP-3 FLAT BLACK",
    "LP-4 FLAT WHITE",
    "LP-5 SEMI GLOSS BLACK",
    "LP-6 PURE BLUE",
    "LP-7 PURE RED",
    "LP-8 PURE YELLOW",
    "LP-9 CLEAR",
    "LP-11 SILVER",
    "LP-12 IJN GRAY (KURE ARSENAL)",
    "LP-13 IJN GRAY (SASEBO ARSENAL)",
    "LP-14 IJN GRAY (MAIZURU ARSENAL)",
    "LP-15 IJN GRAY (YOKOSUKA ARSENAL)",
    "LP-85 MEDIUM AIR GRAY",
    "LP-84 CAMOUFLAGE GRAY"];
const colors = 
    ["#222963FF","#B82B41FF","#F8D949FF","#F9E24CFF","#D32D2BFF","#2D6991FF","#DDB578FF","#AA8357FF","#C6A880FF","#8E4C35FF","#989042FF","#D5D9DCFF","#D0C79FFF","#DDDEDDFF","#FBE64DFF","#4AA3E4FF","#C7C9C8FF","#F3CD97FF","#000000FF","#33533AFF",
        "#DBDCCFFF","#D7C99AFF","#717071FF","#000000FF","#654C35FF","#33533AFF","#4C3834FF","#638264FF","#C5B55CFF","#504336FF","#E28E33FF","#D12D39FF","#E39234FF","#D22D27FF","#F8F9F8FF","#DFE0DFFF","#163A89FF","#CC2B25FF",
        "#194135FF","#CAD1C3FF","#BBC3A8FF","#D0CCC1FF","#DDDCD8FF","#86A0AEFF","#9EB3BFFF","#DDDEDDFF","#FFFFFFFF","#3F3B3AFF","#153888FF","#B82E28FF","#FFFFFFFF","#DF7F2FFF","#163A89FF","#B2B285FF","#3E330BFF","#772910FF","#333333FF",
        "#666666FF","#E93323FF","#FFFFFFFF","#FFFFFFFF","#FFFFFFFF","#634E15FF","#32651AFF","#3C5B5BFF","#38511CFF","#365916FF","#DBAF76FF","#030000FF","#FFFFFFFF","#030000FF","#FFFFFFFF","#030000FF","#255AA6FF","#D22D26FF","#FDF150FF","#FFFFFFFF",
        "#DFDFDFFF","#737B84FF","#53575FFF","#7E8086FF","#656B74FF","#848484FF","#6F6F6FFF"
    ];

// const colorsBin = await Deno.readFile('./tamiya_4.png')
// const img = await Image.decode(colorsBin);
// const colorCount = 20;
// const colors: number[] = [];
// const startPos = [74, 36];
// const colorsPerRow = 4;
// for (let i = 0; i < colorCount; i++) {
//     const x = i % colorsPerRow;
//     const y = Math.floor(i / colorsPerRow);

//     colors.push(img.getPixelAt(startPos[0] + 164*x, startPos[1] + 183*y));
// }

// const formattedColors = colors.map((c) => '#'+c.toString(16).padStart(8, '0').toUpperCase());
// const colos = JSON.parse(await Deno.readTextFile('./colors.json'));
// const added = colos.map((v, i) => ({
//     ...v,
//     value: formattedColors[i]
// }));

// await Deno.writeTextFile('./tamiya4.json', JSON.stringify(formattedColors));
// async function parseColors(colorTxt: string) {
//     const lines = colorTxt.split('\n');
//     const json = lines.map((line, i) => {
//         if (line === '') {
//             return undefined;
//         }

//         const [name,finish,type] = line.split(',');

//         return {
//             id: i + 1,
//             name,
//             finish,
//             type: type?.split('.')
//         }
//     }).filter((v) => v !== undefined);
//     // console.log(json.length);
//     await Deno.writeTextFile('./colors.json', JSON.stringify(json));
// }

// const text = await Deno.readTextFile('./colors.txt');
// await parseColors(text);


const moreColors = [];
console.log(colors.length, names.length)
for (let i = 0; i < names.length; i++) {
    const curName = names[i];
    const curColor = colors[i];
    const nameMatch = curName.match(/^LP-(?<id>\d+) (?<name>.*)$/);
    moreColors.push({
        id: nameMatch?.groups['id'],
        key: 'LP',
        value: curColor,
        name: nameMatch?.groups['name'],
        brand: 'Tamiya'
    });
}
moreColors.sort((a,b) => a.id -b.id)
await Deno.writeTextFile('./tamiyacolors.json', JSON.stringify(moreColors));
