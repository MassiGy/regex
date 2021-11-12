// To do  : create a client side password validation using regex
// steps:
// query the elements form the dom
// create the regex schema, and store it into a variable
// at each time the user types, check if the typed password match the predefined regex expression
// if it is valid set the feedback value to "valid" and give it the valid class
// if it is not, set the feedback value to "invalid" and give it the invalid class


let input = document.querySelector("#input");
let feedback = document.querySelector('#feedback');

let password_regex = /\w+[-_"#àçèé&.?%!$*]+[0-9]+\w+/;

function validator() {
        if(password_regex.test(input.value)){
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





