//////////////////SETUP////////////////////
// Close all other index.html files and open the index.html file in javascript-4/index.html.

//////////////////Step 1////////////////////
// Create a new array called 'faveColors' and assign it a value of your three favorite colors as strings.

// CODE HERE
let faveColors = ["red", "blue", "yellow"];

//////////////////Step 2////////////////////
// Create an object called 'me' that has these keys: firstName, superHeroName, homeTown, superPowers, superPowerXP, and profileImage. 

// The firstName key should have a value of your name as a string. 

// The superHeroName key should be your name if you were a super hero. Feel free to jazz it up and get silly with it, e.g. "Thunderous Gas Man". 

// The homeTown key value you should be your home town. 

// The superPowers key value should be an array with your three super powers as strings. e.g. ['Mega Blast', 'Thunder From Down Under', 'Calamitous Crop Duster']

//  The superPowerXP key value should be a method that returns a random number between 1-100. Use Math.floor(Math.random() * 100) + 1 

// The profileImage key value should be a method that returns this url `https://randomuser.me/api/portraits/med/lego/${Math.floor(Math.random() * 10) + 1 }.jpg`.

// CODE HERE
let me = {
    firstName: "Ben",
    superHeroName: "Wizard of Code",
    homeTown: "Rexburg",
    superPowers:  [
        "The Ultimate Debug-Orama",
        "Eat, Code, Repeat",
        "The Infinite Loop"
    ],
    superPowerXP: function() {
        return Math.floor(Math.random() * 100) + 1;
    },
    profileImage: function() {
        return `https://randomuser.me/api/portraits/med/lego/${Math.floor(Math.random() * 10) + 1 }.jpg` 
    }
}

//////////////////Step 3////////////////////
// In this step, you will create three variables that will hold some data from your me object. The first variable you create should be 'regularName', and it should receive its value from the value of your firstName key on the me object above. The next variable is 'superName' which should have its value assigned as the value of the superHeroName property on the me object. The last variable you should create is 'homeTown' which will be the value of homeTown on the me object

// CODE HERE
let regularName = me.firstName;
let superName = me.superHeroName;
let homeTown = me.homeTown;

//////////////////Step 4////////////////////
//Create a function called 'setColor' that takes in one parameter called 'arr' that is an array of colors. Make sure that we only ever have three colors by using splice to trim the array to just 3 colors. 

// Next, create a for loop to loop over the remaining three colors. If any of the colors is 'blue', change it's value to '#4D4DFF' (which is just a more appealing shade of blue). Outside of the for loop but still inside of setColor, invoke the function called 'background' which will take in three arguments. These arguments should be the three items remaining in your colors array. 

// CODE HERE
function setColor(arr) {
    console.log(arr);
    arr.splice(3);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "blue") {
            console.log(arr[i])
            arr[i] = "#4D4DFF";
        }
    }
    console.log(arr);
    background(arr[0], arr[1], arr[2]);
}

//////////////////Step 5////////////////////
//Create a function called 'setPowers' that takes in 'arr' as a parameter. In your setPowers function, loop over the arr parameter and run a function we created called createLi(), which will take each item of the array as an argument. Remember, you did not create the createLi function. The createLi function is a function we created that determines how the content is displayed.

// CODE HERE
function setPowers(arr) {
    for (let i = 0; i < arr.length; i++) {
        createLi(arr[i]);
    }
}


//////////////////Step 6////////////////////
//Lastly, create a function called 'redactInfo' that will take in an object called 'obj' as a parameter. Now, imagine your super hero needs to go undercover, and you need to remove all info about them. That is what this function will do. In your function, loop over the obj parameter passed in, and change each keys value to 'redacted'. Outside of the loop but still in the redactInfo function, run the function redacted() which is a function we created that will update the text on the screen.

// CODE HERE
function redactInfo(obj) {
    console.log(obj);
    for(let key in obj) {
        obj[key] = "redacted"
    }
    console.log(obj);
    redacted();
    
}
