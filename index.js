const ColorNames = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
    ];
var colorunder=[];
for(var i=0;i<ColorNames.length;i++){
    colorunder[i]=ColorNames[i].toLowerCase();
}

const googleMapAPIKey="AIzaSyCi9MNw3zwpsLsh2bXJkQyOZK0vGN8khPg";
var color;
var imageLocation;    
var name;
var followers;
var following;
var company;
var email;
var location;
var website;
var repos;
var bio ;
var stars;
var githubPage;


const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs"),
convertFactory = require('electron-html-to');

const electron = require("electron");
const util = require("util");


const readFileAsync = util.promisify(fs.readFile);
const appendFileAsync = util. promisify(fs.appendFile);
const axiosGet = util.promisify(axios.get);
const writefileAsync = util.promisify(fs.writeFile);
// const appendFileAsync = util.promisify(fs.appendFile);
async function createProfile(){
     try {
         
await inquirer.prompt({
    type:"input",
    name:"favoriteColor",
    message:"what is your favoriteColor?",})
.then (function(data){console.log(data.favoriteColor);
    color=data.favoriteColor;
    console.log(color);
    if(colorunder.indexOf(color.toLowerCase())==-1){
        throw("must be a color");
    }} ) 
.then(function(){

    const queryUrlRepo = "https://api.github.com/users/shawnwhy/repos";
    axios.get(queryUrlRepo).then(function(res){
        writefileAsync("repo.json", JSON.stringify(res.data),"utf8")
       
    })
    .then(readFileAsync("repo.json","utf8")
    .then(function(data){
        var repoInfo=JSON.parse(data);
        stars=0;
        for(var i=0;i<repoInfo.length;i++){
            stars += parseInt(repoInfo[i].stargazers_count)
           }
           console.log(`stars${stars}`);
    }))
} )    
.then(
        function(){
            console.log(`color${color}`)
    const queryUrl = "https://api.github.com/users/ShawnWhy";
    axios.get(queryUrl).then(function(res){
        writefileAsync("res.Json",JSON.stringify(res.data),"utf8")
        //writes the response into a string and then into a JSON file
      .then(readFileAsync("res.json", "utf8")
      
      .then(function(data){
          //turn res information into variables;
          var gitHubInformation= JSON.parse(data);
          console.log(gitHubInformation);
            var imageLocation = gitHubInformation.avatar_url;      
             name = gitHubInformation.name;
             followers=gitHubInformation.followers;
            following=gitHubInformation.following;
             company = gitHubInformation.company;
              email = gitHubInformation.email;
              location = gitHubInformation.location;
              website = gitHubInformation.blog;
              repos = gitHubInformation.public_repos;
              bio = gitHubInformation.bio;
              githubPage=gitHubInformation.html_url;
            //   stars = gitHubInformation.
            
             writefileAsync("profile.html", 
`
<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <style>
        img{
            display:block;
         max-width: 150%;
         max-height:150%;
         height:auto;
        width:auto;
        margin:auto;
        position:relative;
        right:14% }
        .image-container{
            border-radius: 50%;
            height:200px;
            margin:5% auto;
             border:2px double white;
            overflow:hidden;
            position:relative;
            top:10%;
        }
        .sectionsContainer{
            position:relative;
            right:10%;
        }
        body{
            border:2px solid black
        }</style>
</head>
    <body>
         <div class="row">
            <div class= "col-md-4 offset-md-1">
            <div class= "col-md-8 offset-md-2" style="background-color:${color}; border-radius:40px; margin:2% auto; height:500px">
                <div class="row" style="margin-top:20px"></div>
                <div class="row">
                    <div class="col-md-6 offset-md-3 image-container"><img src=${imageLocation}></div>
                </div>
            <div style="width:100%"></div>
                <div class="row">
                    <div class = "col-md-8 offset-md-2">
                    <p style="text-align:center; margin:5px auto">${name}</p>
                    <div style="width:100%; height:1px; background-color:white;"></div>
                    <p style="text-align:center; margin:5px auto">${bio}</p>
                        <div class="col-md-12">
                     <a class = "col-md-3 offset-md-1" style="background-color:white; height:auto; border-radius:3px;" href="">${location}</a>
                    <a class = "col-md-3 offset-md-1" style="background-color:white; height:auto; border-radius:3px;"href =${website}>website</a>
                    <a class = "col-md-3 offset-md-1" style="background-color:white; height:auto; border-radius:3px;"href=${githubPage}>GitHub</a>
                    </div></div> </div>
                    </div>
                </div>
                <div class="col-md-5 sectionsContainer" style="border:2px solid ${color};background-color:white; border-radius:40px; margin:2% auto; height:500px">
                    <div class="row" style="height:20%"></div>
                    <div class="row" style="height:20%">
                <div class="col-md-3 offset-md-2" style="background-color:${color};border:2px solid white; border-radius:20px;">Public Repositories:${repos}</div>
                <div class="col-md-3 offset-md-2" style="background-color:${color};border:2px solid white; border-radius:20px;">GitHub Stars:${stars}</div></div>
                <div class="row" style="height:20%"></div>
                <div class="row" style="height:20%">
                    <div class="col-md-3 offset-md-2" style="background-color:${color};border:2px solid white; border-radius:20px;">followers:${followers}</div>
                    <div class="col-md-3 offset-md-2" style="background-color:${color};border:2px solid white; border-radius:20px;">following:${following}</div></div>
                </div>
    </div>
    </body>
</html>`,"utf8")}))
// .then(function(){
  
// fs.readFile('profile.html', 'utf8', (err, htmlString) => {
//     // add local path in case your HTML has relative paths
//     // htmlString = htmlString.replace(/href="|src="/g, match => {
//     //   return match + 'file://path/to/you/base/public/directory';
//     // });
//     const conversion = convertFactory({
//       converterPath: convertFactory.converters.PDF,
//       allowLocalFilesAccess: true
//     });
//     conversion({ html: htmlString }, (err, result) => {
//       if (err) return console.error(err);
//       result.stream.pipe(fs.createWriteStream('c:/profile.pdf'));
//       conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
//     });
//   });
//       }










// )
        
            
            
             

 
  

})})}
catch(err){
    console.log("error"+err);
}}
createProfile(); 


// fs.readFile('index.html', 'utf8', (err, htmlString) => {
//     // add local path in case your HTML has relative paths
//     htmlString = htmlString.replace(/href="|src="/g, match => {
//       return match + 'file://path/to/you/base/public/directory';
//     });
//     const conversion = convertFactory({
//       converterPath: convertFactory.converters.PDF,
//       allowLocalFilesAccess: true
//     });
//     conversion({ html: htmlString }, (err, result) => {
//       if (err) return console.error(err);
//       result.stream.pipe(fs.createWriteStream('/path/to/anywhere.pdf'));
//       conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
//     });
//   });
      
      
  
// function const profileData= readFileAsync("res.json", "utf8");})
// // profileData=await profileData.JSON.parse;

// .then( console.log(profileData))

// const fs = require("fs");
// const util = require("util");
// const axios = require("axios");

// const appendFileAsync = util.promisify(fs.appendFile);
// const readFileAsync = util.promisify(fs.readFile);

// const config = { headers: { accept: "application/json" } };

// axios
//   .get("https://icanhazdadjoke.com/", config)
//   .then(function(res) {
//     const { joke } = res.data;

//     appendFileAsync("jokes.txt", joke + "\n").then(function() {
//       readFileAsync("jokes.txt", "utf8").then(function(data) {
//         console.log("Saved dad jokes:");
//         console.log(data);
//       });
//     });
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

    

    // {type:"checkbox",
    //  name:"interests",
    //  message:"what are you interested in?",
    //  choices:[
    //      "videogames",
    //      "hiking",
    //      "doing homework",
    //      "more work",
    //  ]
    // },

    //  }


// }
// .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/shawnwhy/repos?per_page=100`;

//     axios.get(queryUrl).then(function(res) {
//       const repoNames = res.data.map(function(repo) {
//         return repo.name;
//       });

//       const repoNamesStr = repoNames.join("\n");
 
//       fs.writeFile("repos.txt", repoNamesStr, function(err) {
//         if (err) {
//           throw err;
//         }

//         console.log(`Saved ${repoNames.length} repos`);
//       });
//     });
//   });
// var fs = require('fs'),
//     convertFactory = require('electron-html-to');
 
// var conversion = convertFactory({
//   converterPath: convertFactory.converters.PDF
// });
 
// conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
//   if (err) {
//     return console.error(err);
//   }
 
//   console.log(result.numberOfPages);
//   console.log(result.logs);
//   result.stream.pipe(fs.createWriteStream('/path/to/anywhere.pdf'));
//   conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
// });

// const name = await inquirer.prompt({
//     type:"input",
//     name:"yourName",
//     message:"what is your name?"},
//     {type:"checkbox",
//      name:"interests",
//      message:"what are you interested in?",
//      choices:[
//          "videogames",
//          "hiking",
//          "doing homework",
//          "more work",
//      ]
//     },
