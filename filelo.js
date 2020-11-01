const fs = require("fs");
const readlineSync = require("readline-sync");
const path = require("path");

let getUserInput = () => {
    return new Promise ((resolve, reject) => {
        const userInput = readlineSync.question("Please enter your two points as follows: x1,y1,x2,y2: \n");
        if (userInput.length < 1) {
            reject(err);
        } else {
            resolve(userInput);
        }
    })
}

let writeUserInputToFile = (userInput) => {
    return new Promise ((resolve, reject) => {
        fs.mkdir(path.join(__dirname, "dataPoints"), (err) => {
            if(err) {
                reject(err);
            } else {
                fs.writeFile(path.join(__dirname, "dataPoints", "points.txt"), userInput, {encoding: "utf8" }, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve("Contents saved.");
                    }
                })
            }
        })
    })
}

let readUserInputFromFile = () => {
    return new Promise ((resolve, reject) => {
        fs.readFile(path.join(__dirname, "dataPoints", "points.txt"), { encoding: "utf8"}, (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }
        })
    })
}

module.exports = { getUserInput, readUserInputFromFile, writeUserInputToFile };