//------------------------------
//--------- ACTIVITY 1 ---------
//------------------------------
// Create a variable called music. Write an if statement that logs “Oh, how relaxing” if the music is classical else if logs ”Where are my dancing shoes!” if the music is disco and or else if logs “Where’s the party?”if the music is dance. For anything else log “Turn it down”


// let music="test other"
// if (music=="classical") {
//     console.log("Oh how relaxing")
// }
// else if (music=="disco") {
//     console.log("Where are my dancing shoes!")
// }
// else{
//     console.log("Turn it down")
// }







//------------------------------
//--------- ACTIVITY 2 ---------
//------------------------------
// Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs”You aren’t old enough”


// let age = 27
// if (age > 17) {
//     console.log("Yes, I can serve you.")
// }
// else{
//     console.log("No, you aren't old enough.")
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
// Create a weekend alarm. If it’s Saturday or Sunday log “Yay it’s the weekend!!”. Else log “Oh no, work again!”








//-------------------------------
//-- ACTIVITY 4.5 (SLIDE TYPO) --
//-------------------------------
// Create a variable for any pizza topping. Create a switch statement. If the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza!”. If you don’t mind the ingredient log, “I don’t mind having ${topping} on my pizza. Finally, for any topping you don’t like log “${topping} should not be on a pizza.”


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
// Create a variable called password, check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console


// let password="OOOO"

// if (password.length < 7) {
//     console.log("That password is too short. It must be at least 8 characters long.")
// }
// else{
//     console.log(`Thank you, your password is: ${password}.`)
// }








//------------------------------
//--------- ACTIVITY 6 ---------
//------------------------------
// Create a variable called num. If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console


// let num = 15

// if (num % 5 === 0 && num % 3 === 0) {
//     console.log("FIZZ BUZZ!")
// }
// else if (num % 3 === 0) {
//     console.log("FIZZ!")
// }

// else if (num % 5 === 0) {
//     console.log("BUZZ!")
// }

// else {
//     console.log(`Other: ${num}`)
// }











//------------------------------
//--------- ACTIVITY 7 ---------
//------------------------------
// Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work


// let time = 18
// let placeOfWork = "Code Nation"
// let townOfHome = "Oldham"

// if (time <= 5 || time >= 19) {
//     console.log(`I'm at home`)
// }

// else if (time >= 9 || time <= 17) {
//     console.log(`I'm at work`)
// }

// else if (time >= 5 || time <=8 || time == 18) {
//     console.log(`I'm commuting`)
//     }

// else {
//     console.log(`OTHER`)
// }



// 5 - 8 communting
// 9 - 17 at work
// 18 - 24 - 5










//------------------------------
//--------- ACTIVITY 8 ---------
//------------------------------
// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string


















//------------------------------
//--------- ACTIVITY 9 ---------
//------------------------------
// Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false












//------------------------------
//--------- ACTIVITY 10 ---------
//------------------------------
// Create two variables called num1 and num2. Create an if statement that checks if the result of the sum id even. If it is return the number, otherwise return the numbers multiplied together














//------------------------------
//--------- ACTIVITY 11 ---------
//------------------------------
// Create a variable called num. Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202)

let num = "1001"

numReversed = [...num].reverse().join("")

if (num === numReversed) {
    console.log(`Yes, ${num} is a palindrome!`)
} else {
    console.log(`Nope, ${num} isn't a palindrome.`)
}