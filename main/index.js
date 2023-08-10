const fs = require('fs');
const inquirer = require('inquirer');

// Questions for user about logo

// WHEN I am prompted for the shape's color (4)
// THEN I can enter a color keyword (OR a hexadecimal number)

const questions = [
    {
        type: 'input',
        message: 'Enter three characters for logo.',
        name: 'char'
    },
    {
        type: 'input',
        message: 'Enter a hexadecimal number for text color.',
        name: 'hexa'
    },
    {
        type: 'input',
        message: 'Enter a shape for the logo.',
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter the color for the logo shape.',
        name: 'color'
    },
    {
        type: 'input',
        message: 'Enter the width for the logo.',
        name: 'width'
    },
    {
        type: 'input',
        message: 'Enter the height for the logo.',
        name: 'height'
    },
];





// WHEN I have entered input for all the prompts (5)
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line



inquirer
    .prompt(questions)
    .then((answers) => {
        // Use answers to write HTML
        const html = getHtml(answers);

        fs.writeFile('logo.svg', html, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Write file success!");
            }
        });
    });

const getHtml = (answers) => {
    const { char, hexa, shape, color, width, height } = answers;

    return `
     <svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">

     <${shape} fill="${color}" />
    
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${hexa}">${char}</text>
    
     </svg>    
`;
}



// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>




// GIVEN a command-line application that accepts user input (1)
// WHEN I am prompted for text
// THEN I can enter up to three characters


// WHEN I am prompted for the text color (2)
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I am prompted for a shape (3)
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square

// WHEN I am prompted for the shape's color (4)
// THEN I can enter a color keyword (OR a hexadecimal number)

// WHEN I have entered input for all the prompts (5)
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line

// WHEN I open the `logo.svg` file in a browser (6)
// THEN I am shown a 300x200 pixel image that matches the criteria I entered