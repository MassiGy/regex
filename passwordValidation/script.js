// To do  : create a client side password validation using regex
// steps:
// query the elements form the dom
// create the regex schema, and store it into a variable
// at each time the user types, check if the typed password match the predefined regex expression
// if it is valid set the feedback value to "valid" and give it the valid class
// if it is not, set the feedback value to "invalid" and give it the invalid class


let input = document.querySelector("#input");
let feedback = document.querySelector('#feedback');

// now we need to defind the schema of a good password, 
// in other words we need to define the search pattern which a good password will be built upon

// method one: the user password should be like: string(or not) +( at_least_one_char_of(-_#$%) || at_least_a_digit ) + string
 let password_regex = /\w?[-_#$%0-9]\w/;

// method two   : the user password should be like: string(or not) +( at_least_one_char_of(-_#$%) && atleast_a_digit ) + string
 let password_regex_1=/\w?[-_#$%.?]\w/
 let password_regex_2=/\w?[0-9]\w/

// method three : it is the same as the second one but this time we need to be sure that the use will use lower case
//                  and uppercase letters, it is an extention for the second method
 let password_regex_for_uppercases=/\w?[A-Z]\w/
 let password_regex_for_lowercases=/\w?[a-z]\w/



// we will use method three
function validator() {
        if(password_regex_1.test(input.value) && password_regex_2.test(input.value)
             && password_regex_for_lowercases.test(input.value) && password_regex_for_uppercases.test(input.value)
             && input.value.length >= 10 && input.value.length <= 20)   {
            feedback.innerHTML="valid";
            feedback.classList.remove("invalid");
            feedback.classList.add("valid");
        } else {
            feedback.innerHTML="invalid";
            feedback.classList.remove("valid");
            feedback.classList.add("invalid");
            
        }    
}

input.addEventListener('input', validator)





