var userName = prompt('Welcome to my page, Please enter your name!');


alert('Hello '+ userName);


var age = prompt('please enter your age?');
while(age < 18){
    age = prompt('Sorry, you must be 18 or above!');
 }
if(age >= 18) {
    alert('your age is ' + age + ', '+'then you\'re welcome');
} 

var rating =  prompt('Please rate my website!');


document.write('<br>'+ 'You gave us ' + rating + ' stars' + '<br/>' );


// // rating = typeof 55

// while( rating != typeof 6) {
//     rating = prompt('Please enter only numbers!');
// }


for(i=0; i<rating; i++) {
    document.write('<img src="Images/estrelas-desenho-png-4.png" width= 50px />');
}

function myFunction(p1, p2) {
    return p1 + p2;
  } 
  console.log(myFunction(2, 4));
  document.write(myFunction(4, 4))




