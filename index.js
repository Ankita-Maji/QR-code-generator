/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// 
const inquirer = require("inquirer");
const fs = require("fs");
var QR = require("qr-image");
inquirer
    .prompt([
        {/* Pass your questions in here */
            type: 'input',
            name: 'url',
            message: "Enter the URL to generete QR code",
        }

    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        fs.writeFile("url.txt", answers.url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
            var qr_svg = QR.image(answers.url, { type: 'png' });

            qr_svg.pipe(require('fs').createWriteStream('QR_code.png'));
        });
    });




