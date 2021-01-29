var userName = prompt('Welcome to my page, Please enter your name!');


alert('Hello '+ userName);


var age = prompt('please enter your age?');
while(age < 18){
    age = prompt('Sorry, you must be 18 or above!');
 }
if(age >= 18) {
    alert('your age is ' + age + ', '+'then you\'re welcome');
} 

var rating = prompt('Please rate my website!');

document.write('<br>'+ 'You gave us ' + rating + ' stars' + '<br/>' );

for(i=0; i<rating; i++) {
    document.write('<img src="Images/estrelas-desenho-png-4.png" width= 50px />');
}


// var t1 = prompet('write any number')

// function testing(t1) {
//     return(t1 + 'age');
// }

// document.write(testing)




