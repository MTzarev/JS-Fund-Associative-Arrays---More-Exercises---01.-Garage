function garage(input) {
//let list = input.join(`, `)
let garageInfo = {};
for (let info of input) {

    let [garageNum, carInfo] = info.split(`, `)
    garageInfo[garageNum]=carInfo
}
    for(let garageNum in garageInfo){


    console.log(`Garage № ${garageNum} - ${garageInfo[garageNum]}`);
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
// garage(['1 - color: green, fuel type: petrol',
// '1 - color: dark red, manufacture: WV',
// '2 - fuel type: diesel',
// '3 - color: dark blue, fuel type: petrol']);
