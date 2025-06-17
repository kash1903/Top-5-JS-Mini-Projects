const input = document.getElementById("input")

function reverseString(str){

    return str.split("").reverse().join("")
}

function check () {
    const value  = input.value;
    const reverse = reverseString(value);

    if(value === reverse){

        alert("This is a Palindrome")
    }

    else{
        alert("Not an Palindrome")
    }
   input.value="";
}