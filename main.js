const { getUserInput, writeUserInputToFile, readUserInputFromFile } = require("./filelo");
const distance = require("./mathHelpers").distance;


getUserInput()
    .then ((userInput) => {
        console.log(`You entered: ${userInput} \nSaving points.txt to a folder named dataPoints.`);
        return (writeUserInputToFile(userInput));
    })
    .then ((message) => {
        (console.log(message));
        return readUserInputFromFile();
    })
    .then((content) => {
        const [x1, y1, x2, y2] = content.split(",");
        const answer = distance(x1, y1, x2, y2);
        console.log(`The distance between your two points: (${x1}, ${y1}) and (${x2}, ${y2}) is ${answer}`);
    })
    .catch(err => console.log(err));
