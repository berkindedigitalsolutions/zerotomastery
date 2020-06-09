// //file system
const fs = require('fs');

// fs.readFile("./santa.txt",(err,data) => {
//     console.time('funchallenge');

//     let floor = 0;
//     let basementVar = [];
//     if (err) {
//         console.log('errorrrrr');
//     }
//     instructionString =data.toString('utf8');
    
//     for (let i=0; i <instructionString.length;i++) {
//         if (instructionString[i] ==='(') {
//             floor += 1;
//         } else {
//             floor -= 1;
//         }
//         if (floor === -1) {
//             basementVar.push(i+1);
//         }
//     }
//     console.log('Floor',floor);
//     console.log(basementVar);
//     console.timeEnd('funchallenge');
// })


// Solution from ZerotoMastery 
function question1() {
    fs.readFile('./santa.txt', (err,data) => {
        console.time('zerotomastery');

        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc,currentValue) => {
            if (currentValue ==='(') {
                return acc += 1;
            } else if (currentValue ===')') {
                return acc -= 1;
            }
        },0)
        console.log('Floor',answer);
        console.timeEnd('zerotomastery');

    })

}
question1();

//Question 2 - When does santa first enter the basement

function question2() {
    fs.readFile('./santa.txt', (err,data) => {
        console.time('zerotomastery');

        const directions = data.toString();
        const directionsArray = directions.split('');
        let acc=0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem ==='(') {
                acc += 1;
            } else if (currentItem ===')') {
                acc -= 1;
            }
            counter++;

            return acc < 0;
        })
        console.log('Basement entered at: ',counter)
        console.timeEnd('zerotomastery');

    })
}

question2();