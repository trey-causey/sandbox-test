// console.log("this is a test");
// let test2 = 100;
// let myArray = [15,23,34,45,546,56,567];
// let myFE = (test1) => {
//     let r = 3 * test1;
//     return r;
// };
// let myFE = function(tes) {
//     return tes;
// } 
   
// let result = myFE(...myArray);
// console.log(result);
// document.getElementById('mainID').textContent = `${result}`;
// myFE(test2);
// console.log( typeof myArray);
//alert("something is: ");

console.log("about to fetch race results");


chartIt();

async function getData() {
    const response = await fetch('/sandbox-test/resources/carinfo.csv');
    //const response = await fetch('/sbtjs/resources/carInfo.csv');
    const data = await response.text();
    console.log(data);

    const table = data.split(/\n/).slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        //const number = parseFloat(row[1]);
        quarterMileTime.push(parseFloat(columns[1]));
        basePrice.push(parseFloat(columns[2]));
        EPAmpg.push(parseFloat(columns[3]));
        CargoVolCUFT.push(parseFloat(columns[4]));
        Skidpad.push(parseFloat(columns[5]));
        Curbweight.push(parseFloat(columns[6]));
        BrakingDist.push(parseFloat(columns[7]));
        Acceleration.push(parseFloat(columns[8]));
        // const gunTimeDM = columns[5];
        // ytimes.push(gunTimeDM);
        // const range = columns[columns.length - 1];
        console.log(row);
        
    });
   

}
// catchRainbow()
// .then(response => {
//     console.log('yay!');
// })
// .catch(error => {
//     console.log('error');
//     console.error(error);
// })

// async function catchRainbow() {
//     const response = await fetch('/resources/rainbow.jpg');
//     const blob = await response.blob();
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// }
// .catch(error => {
//         console.log(error);
//     };

// fetch('/resources/test.csv').then(response => {
//     console.log(response);
//     return response.blob();
// }).then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);

// }).catch(error => {
//     console.log(error);
// });

