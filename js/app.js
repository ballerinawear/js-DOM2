/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/
var kapRank = document.getElementById("rating1");
kapRank.innerHTML = "Rating: 5 Stars";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/
var sunPrice = document.getElementById("price2");
sunPrice.innerHTML = "Price: $$$";
var sunAddress = document.getElementById("addy2");
sunAddress.innerHTML = "Adress: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/
var addRamenHours = document.getElementById("text3");
var ramenHours = document.createElement("div");
ramenHours.id = "hours3";
ramenHours.innerHTML = "Hours: 6pm - 12am Sun - Sat";
addRamenHours.appendChild(ramenHours);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/
var kamInfo = document.getElementById("text4");
var kamAddPrice = document.createElement("div");
kamAddPrice.id = "price4";
kamAddPrice.innerHTML = "Price: $$$";
kamInfo.appendChild(kamAddPrice);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/
var kamAddAddy = document.createElement("div");
kamAddAddy.id = "addy4";
kamAddAddy.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
kamInfo.appendChild(kamAddAddy);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/
var kamHours = document.createElement("div");
kamHours.id = "hours4";
kamHours.innerHTML = "Hours: 9am - 10pm Sun - Sat";
kamInfo.appendChild(kamHours);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/
var addComment = document.getElementById("comment4");
var addUpdate = document.createElement("p");
addUpdate.id = "update4";
addUpdate.innerHTML = "I'd leave a blank space for this oxtail soup!";
addComment.appendChild(addUpdate);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/
var addText5 = document.getElementById("text5");
var addName5 = document.createElement("div");
addName5.id = "name5";
addName5.innerHTML = "5. The Death Star Cafe";
addText5.appendChild(addName5);
var addRate5 = document.createElement("div");
addRate5.id = "rating5";
addRate5.innerHTML = "Rating: 2 Stars";
addText5.appendChild(addRate5);
var addPrice5 = document.createElement("div");
addPrice5.id = "price5";
addPrice5.innerHTML = "$$";
addText5.appendChild(addPrice5);
var addAdd5 = document.createElement("div");
addAdd5.id = "addy5";
addAdd5.innerHTML = "Address: A galaxy far, far away.";
addText5.appendChild(addAdd5);
var addHours5 = document.createElement("div");
addHours5.id = "hours5";
addHours5.innerHTML = "Hours: We never close.";
addText5.appendChild(addHours5);
