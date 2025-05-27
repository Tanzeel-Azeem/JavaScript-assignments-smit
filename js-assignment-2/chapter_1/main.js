alert("Welcome to the Website")
var pass = prompt("Please enter your password (hint: 123): ")
var home = document.getElementById("home");
 home.style.display = 'none';

if (pass === "123"){
    alert(`Welcome to JS land 
        happy coding!`)
    home.style.display = 'block';
}else{
   
    alert("please enter a valid password")
}