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
    "MIT License",
    "BSD 2Clause 'Simplified' License", 
    "BSD 3Clause 'New' or 'Revised' License",
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
`# ${data.title}







![License](https://img.shields.io/badge/license-${data.license.split(' ').join('')}-green)









### Table of Contents


* [Description](##Description)

* [Installation](##Installation)

* [Technologies](##Technologies)

* [Usage](##Usage)

* [Contributing](##Contributing)

* [Questions](##Questions)

* [Tests](##Tests)

* [Photos](##Photos)

* [Video](##Video)
















## Description

${data.description}





## Installation Instructions

${data.installation}




## Technologies Used

* list your technologies used in the app




## Usage

${data.usage}







## Contributing

${data.contributor}





## Questions

I can be reached via Github or email, please see the appropriat links below.

Github:
<a href='https://github.com/${data.userName}' target='_blank'>${data.userName}</a>

Email:
<a href='mailto:${data.email}'>${data.email}</a>





## Tests

${data.test}



## Photos

![DeployedPhoto]()

place your photo in the parentheses




## Video

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

`;

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