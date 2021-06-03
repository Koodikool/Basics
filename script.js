console.log('This message will appear in the console.')

var first = 5
var second = 6
var answer = first + second
console.log(answer)

var simpleMath = 8 / (5 * 3)
console.log(simpleMath)

var sumOfOnes = 1
sumOfOnes = sumOfOnes + 1
sumOfOnes += 1
sumOfOnes++
console.log(sumOfOnes)

var computerAccuracy = 2.0 - 1.1
console.log(computerAccuracy)

var bankBalanceCents = 200
var burgerPrice = 160
var centsLeftOver = bankBalanceCents - burgerPrice
console.log(centsLeftOver)

var x = undefined
var y = x * 2
console.log(y)

var firstString = "A string is always surrounded by quotes."
var secondString = "Strings can also be added to eachother."
var stringsTogether = firstString + secondString
console.log(stringsTogether)

var stringsTogetherWithSpace = firstString + " " + secondString
console.log(stringsTogetherWithSpace)

var addStringAndNumber = 1 + 1 + " vs. " + 1 + 1
console.log(addStringAndNumber)

var singleQuotes = 'Here we use single quotes, it makes no difference'
console.log(singleQuotes)

var letterCount = singleQuotes.length
console.log(letterCount)

var findInString = singleQuotes.includes("it makes")
console.log(findInString)

var firstBoolean = true
var secondBoolean = false
var sumOfBooleans = firstBoolean + secondBoolean
console.log(sumOfBooleans)

console.log("Log can take multiple arguments:", firstBoolean, secondBoolean, sumOfBooleans)

var soTrue = false || true
console.log("soTrue", soTrue)
var notTrue = false && true
console.log("notTrue", notTrue)
var notSure = true && true
console.log("notSure", notSure)
var totallySure = false || false
console.log("totallySure", totallySure)

var sumOfMoreBooleans = firstBoolean + firstBoolean + firstBoolean
console.log(sumOfMoreBooleans)

var yourAge = 10
var accessAllowed = null
if (yourAge < 18) {
    accessAllowed = false
} else {
    accessAllowed = true
}
console.log('accessAllowed', accessAllowed)

if (accessAllowed) {
    console.log('Welcome inside.')
} else {
    console.log("You're too young for this place")
}
