//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names) {
let found = true

for (let i = 0; i < dog_names.length; i++) {
    if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
    console.log("Matched " + dog_names[i])
    }
}

if (!found) {
    console.log("No Matches")
}
}
findWords(dog_string, dog_names);



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index
with a splice, and replaces it with the string "even index" */

let Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(Given_arr){
    for (let x = 0; x < Given_arr.length; x += 2) {
        Given_arr.splice(x, 1, "even index")
    }
    return Given_arr
}
console.log(replaceEvens(Given_arr));
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
function makeUpperCase(str) {
    // Code here
    var answer = str.toUpperCase();
    return answer;
  }


  //https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
function simpleMultiplication(number){

    if(number%2===0 ){
        return number *8
    }
    else{
        return number* 9;
    }    
}
