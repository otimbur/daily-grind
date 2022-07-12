//alert("It's working");

/*

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

pic - image src
alt - the alt tag for the image
desc - a description of the coffeday - the day of the week for the coffee
color -  color associated with coffee 
name - the name of the coffe 


*/
function coffeTemplate(coffe) {
    let myReturn = "";

    myReturn += `
           <p>
               <img class="description" src="${coffe.pic}" alt="${coffe.alt}" id="coffee" />
               <strong class="feature">${coffe.day}'s Coffee Special:</strong> ${coffe.day}'s daily coffee special is <strong class="feature">${coffe.name}</strong>
               <p class= "am"> ${coffe.desc} </p>
           </p>
    
    `;

    return myReturn;

}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffe = "";

//use location object to access query string (address bar)
const queryString = window.location.search;

//output to console    
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("day")) {//data on querystring, load from quertstring
    myDay = urlParams.get("day");
}
// covert to integer as it's a string from the querystring.
myDay = parseInt(myDay)
switch (myDay) {

    case 0:
        today = " Sunday";
        coffe = {
            color: "Black",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: " A picture of a bubble-tea",
            day: "Sunday",
            desc: `Bubble tea tastes like a well 
            balanced and sweet milky beverage with a slight twist, boba pearls`
        };
        break;

    case 1:
        today = "Monday";
        coffe = {
            color: "White",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: " A picture of a caramel latte",
            day: "Monday",
            desc: `A caramel latte is a coffee drink that contains espresso coffee, steamed and frothed milk, and caramel sauce. The espresso and milk are combined, 
            and then the caramel syrup is mixed in`
        };
        break;

    case 2:
        today = "Tuesday";
        coffe = {
            color: "Brown",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: " A picture of a cold brew",
            day: "Tuesday",
            desc: `Cold brew is simply coffee that has been brewed with cold rather than hot water and usually involves a long steeping 
            process—anywhere between 12-24 hours.`
        };
        break;

    case 3:
        today = "Wednesday";

        coffe = {
            color: "Red",
            name: "Frappuccino",
            pic: "images/frappaccino.jpg",
            alt: " A picture of a frappuccino",
            day: "Wednesday",
            desc: `A frappuccino consists of coffee or 
            crème base, blended with ice.`
        };

        break;

    case 4:
        today = "Thursday";

        coffe = {
            color: "Green",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: " A picture of a mocha",
            day: "Thursday",
            desc: `A shot of espresso is combined with a chocolate powder or syrup, followed by milk or cream.`
        };
        break;
    case 5:
        today = "Friday";
        coffe = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: " A picture of a Pumpkin Spice Latte",
            day: "Friday",
            desc: `The Pumpkin Spice Latte is a coffee drink made with a mix of traditional autumn spice flavors (cinnamon, nutmeg, and clove), steamed milk, espresso, and often sugar, topped with whipped cream and pumpkin pie spice`
        };
        break;
    case 6:
        today = "Saturday";
        coffe = {
            color: "black",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: " A picture of a drip",
            day: "Saturday",
            desc: `I like a cold drip!`
        };
        break;

    default:
        today = "Something went wrong!";

}

//let coffeData = coffeTemplate(coffe);
//alert(coffeData);
//loads coffe data to page
document.getElementById("coffe-cup").innerHTML = coffeTemplate(coffe);
document.querySelector("html").style.background = coffe.color;

