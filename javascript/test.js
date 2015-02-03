//this is a singlelinecomment



//STRING variables - using string data type*************************
var userName = "jason"; //setting a variable
var firstName = "your first name";
var lastName = "your last name";

userName = "bob"; // resetting it using the assighment operator equals =
  
var myComment = "who said:";
var quote = '"all the world is a stage"'; //single quotes print literal characters

//console.log(myComment); //logging to the console
//console.log(quote);

var message = firstName + " " + lastName;
//console.log(message);

//target and replace
//var paragraphRef = document.getElementById("replace");
//paragraphRef.innerHTML = message;
var mystring = document.getElementById("string1");
mystring.innerHTML = message;

var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
console.log(imagePath);

message = message.toUpperCase();
console.log(message);
//NUMBER types********************************************
var level = 1;
var lives = 3;
var ssNumber = 222334444; // this is an integer type number
var cost = 1.50;  // this is a float type number
var cost1 = "50";
var cost2  = 30;
var total = Number(cost1) + cost2;
console.log(total);
//console.log(level);

//array data type
var imageList = new Array();
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";
//imageList[7] = "images/oil/thumbs/artwork_8.jpg";

var imagePlaceholder = document.getElementById("placeholder");
imagePlaceholder.setAttribute("src", imageList[6]); //update the src attribute of the image

imageList.push("images/oil/thumbs/artwork_7.jpg"); //add on to the list
console.log(imageList.length);

//BOOLEAN datatype*******************************************
var oldEnough = false;

var hasColor = true;

var age = 18;

//if-then, branching logic, applicationlogic, business logic
if(age >= 18 && age < 100)
{
  oldEnough = true;
}

if(oldEnough == true)
{
  console.log("you can ride the rollarcoaster");
}
else{
  console.log("sorry you can't ride");
}

//FUNCTIONS - REUSABLE CHUNKS OF CODE

function dynamicGreeting()
{
  var now = new Date();
  var time = now.getHours();
  
  if(time < 12)
  {
    alert("Good morning");
  }
  
  if(time == 12)
  {
    alert("time to eat lunch");
  }
  
  if(time > 12)
  {
    alert("good afternoon/evening time is: ...." + now.toLocaleTimeString());
  } 
}

dynamicGreeting()
