//------------------------------
// -------- ACTIVITY 1 ---------
//------------------------------
// let music="other"
// if (music=="classical") {
//     console.log("Oh, how relaxing...")
// }
// else if (music=="disco") {
//     console.log("Where are my dancing shoes?")
// }
// else{
//     console.log("Turn it down!")
// }







//------------------------------
//------ MINI ACTIVITY 1 -------
// Strict Equal: Checks if the values and types are equal
// if (4==="4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// Equal: Checks if the values are equal regardless of type
// if (4=="4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// Not Equal: Checks if the values are not equal regardless of type
// if (4!="4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// Strict Not Equal: Checks if the values and type are not equal
// if (4!=="4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }







//------------------------------
//--------- ACTIVITY 2 ---------
//------------------------------
// let age = 27
// if (age > 17) {
//     console.log("Yes, I can serve you.")
// }
// else{
//     console.log("No, you aren't old enough.")
// }







//------------------------------
//------ And && EXAMPLE --------
//------------------------------
// let food="ice cream"
// let hunger="full"

// if (hunger == "full" && food == "ice cream") {
//     console.log("Of course, who wouldn't")
// }
// else if (hunger == "hungry" && food == "ice cream") {
//     console.log("Yes please I'm starving,  could I also have a pizza")
// }
// else if  (hunger == "hungry" && food == "sprouts") {
//     console.log("Actually, I can wait")
// }
// else{
//     console.log("No thanks, I'm stuffed")
// }





//------------------------------
//------- OR || EXAMPLE --------
//------------------------------
// let food="chips"

// if (food == "ice cream" || food == "pizza") {
//     console.log("Yay let's eat!!!")
// }
// else if (food == "sprouts" || food == "broccoli") {
//     console.log("Ugh, no thanks.")
// }
// else{
//     console.log("Okay, go on then why not.")
// }








//------------------------------
//------ MINI ACTIVITY 2 -------
//------------------------------
// let weekday="test"
// if (weekday=="saturday" || weekday=="sunday") {
//     console.log("Yay it's the weekend!!")
// }
// else{
//     console.log("Oh no, work again!")
// }

// let weekday="monday"
// if (weekday=="saturday" || weekday=="sunday") {
//     console.log("Yay it's the weekend!!")
// }
// else{
//     console.log(`Oh no it's ${weekday}, work again!`)
// }

// let food="test"

// switch(food) {
//     case "ice cream":
//     case "pizza":
//         console.log("Yay, let's eat")
//         break
//     case "sprouts":
//     case "broccoli":
//         console.log("Ugh, no thanks!")
//         break
//     default:
//         console.log("Okay, go on then, why not.")
// }









//------------------------------
//--------- ACTIVITY 3 ---------
//------------------------------
// Take your if statement and add a variable called country. Now check if age > 17 and country == “UK”


// let age = 21
// let country = "USA"
// if (age > 17 && country == "UK") {
//     console.log("Yes, I can serve you.")
// }
// if (age > 20 && country == "USA") {
//     console.log("Yes, I can serve you.")
// }

// ADDITIONAL EXTRA
// else if (age > 17 & country != "UK") {
//     console.log("Yes, I can serve you. Where are you from?")
// }

// else{
//     console.log("No, you aren't old enough.")
// }










//------------------------------
//--------- ACTIVITY 4 ---------
//------------------------------
// let pizzaTopping="pineapple"

// switch(pizzaTopping) {
//     case "ham":
//     case "mushrooms":
//         console.log("These are important ingredients for my pizza!")
//         break
//     case "chillis":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
//         break
//     case "pineapple":
//         console.log(`${pizzaTopping} should not be on pizza, ever!`)
//         break
//     default:
//         console.log("What topping?")
// }









//------------------------------
//--------- ACTIVITY 5 ---------
//------------------------------
// let password="OOOOOOOOOO"

// if (password.length<7) {
//     console.log("Password is too short. Must be at least 8 characters long.")
// }
// else{
//     console.log(`${password}`)
// }









//------------------------------
//--------- ACTIVITY 6 ---------
//------------------------------
// let num = "1011"

// numReversed = [...num].reverse().join("")

// if (num === numReversed) {
//     console.log(`Yes, ${num} is a palindrome!`)
// } else {
//     console.log(`Nope, ${num} isn't a palindrome.`)
// }










//------------------------------
//--------- ACTIVITY 7 ---------
//------------------------------
// let num = 1

// if (num % 5 === 0 && num % 3 === 0) {
//     console.log("fizz buzz")
// }
// else if (num % 3 === 0) {
//     console.log("fizz")
// }

// else if (num % 5 === 0) {
//     console.log("buzz")
// }

// else {
//     console.log(`${num}`)
// }









//------------------------------
//-------- ACTIVITY 8 ----------
//------------------------------
//Create if statement that logs to console where someone is at times of day
// E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
// EXTRA: get it to say where I am right now in real time


// let time = new Date().getHours();
// if (time >= 7 && time <= 19) {
//    console.log("Red")
// } else {
//     console.log("Blue")
// }
// console.log(time)


// 9:30PM
// split into array
// check if 1st index is > or < 9
// check if 4th index is greater than 9
// if greater return 
// if less, return


// let time = "9:30PM"
// let timeFormatted = [...time]
// check if 1st index is > or < 9
// check if 4th index is greater than 9
// if greater return 
// if less, return
// console.log(timeFormatted)


// COPY PASTE FROM THIS
// numReversed = [...num].reverse().join("")

// if (num === numReversed) {
//     console.log(`Yes, ${num} is a palindrome!`)
// } else {
//     console.log(`Nope, ${num} isn't a palindrome.`)
// }