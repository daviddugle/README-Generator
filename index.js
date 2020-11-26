//this is looking at the npm
const inquirer = require('inquirer');
//this is requiring node files
const fs = require('fs');

inquirer 
.prompt([
//these are the questions that it is going to ask
{
    type: 'input',
    message: 'What is the title of your Project?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is your Github user name?',
    name: 'userName',
},
{
    type: 'input',
    message: 'What is your Email address?',
    name: 'email',
},
{
    type: 'input',
    message: 'Please describe your project.',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the steps to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Please provide instruction and examples for use.',
    name: 'usage',  
},
{
    type: 'input',
    message: 'How would you like Contributors to contact you?',
    name: 'contributor',
},
{
    type: 'input',
    message: 'How would you test your application?',
    name: 'test',
},
{
    type: 'list',
    message: 'Please choose your license.',
    name: 'license',
    choices: 
    ["Apache License 2.0",
    "GNU General Public License v3.0",
    "MIT License","BSD 2-Clause 'Simplified' License", 
    "BSD 3-Clause 'New' or 'Revised' License",
    "Boost Software License 1.0", 
    "Creative Commons Zero v1.0 Universal", 
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0", 
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License2.0",
    "The Unlicense"
],
},

])
//Let the magic begin
.then((data) =>{

    console.log(data);
//let's set up what we want to put in the file
const readMeGen = 
`##${data.title}


#${data.license}

#Description
${data.description}

#Installation Instructions
${data.installation}

#Usage
${data.usage}

#Contributing
${data.contributor}

#Tests
${data.test}`;

//let's create the file
const fileName = `${data.title.toUpperCase().split(' ').join('')}.md`
fs.writeFile(fileName, readMeGen, (err)=>{
    if (err)
        console.log("err")
    ;
    else {
        console.log("Success!")
    };
});

});