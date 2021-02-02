// var userName = prompt('Welcome to my page, Please enter your name!');


// alert('Hello '+ userName);


// var age = prompt('please enter your age?');
// while(age < 18){
//     age = prompt('Sorry, you must be 18 or above!');
//  }
// if(age >= 18) {
//     alert('your age is ' + age + ', '+'then you\'re welcome');
// } 

// var rating =  prompt('Please rate my website!');


// document.write('<br>'+ 'You gave us ' + rating + ' stars' + '<br/>' );


// for(i=0; i<rating; i++) {
//     document.write('<img src="Images/estrelas-desenho-png-4.png" width= 50px />');
// }

// function myFunction(p1, p2) {
//     return p1 + p2;
//   } 
//   console.log(myFunction(2, 4));
//   document.write(myFunction(4, 4))




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}