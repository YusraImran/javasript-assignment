                        
                        //javasript task assignment
                        
                        //Task 1:

//Calculate the zakat value, first, create a variable named "zakatPercentage" andstore the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//named "userInput" and take the input from the user using the prompt. Make sure the input value is of a type number by converting the input string to a numberusing a suitable method. Then, create a variable named "result" and assign its value
//to the multiplication of the zakat percentage and user input. Finally, use an alert
//message to display the calculated zakat value. The message should look like this:"Your zakat value is xxx"?//

                       //Answer=1

//total savings
//var totalsavings = prompt("Enter your total savings");
//var ZakatAmount = (Number(Enter your totalsavings)) * 0.025;
//Zakat Amount
//ZakatAmountString = ZakatAmount.toFixed(2);
//final value
//alert("your Zakat Amount is: RS" + ZakatAmountString);


                         //TASK no 2

//Calculate the fitrah amount, first, ask the user to enter the total number of familymembers using the prompt and store the value in a variable called"familyMembers". Next, ask the user to choose a fitrah method by providing themoptions using the prompt, and store the selected method and its price in variables.
//Then, use an if-else block to check the user's input and calculate the fitrah amount by multiplying the selected method's price with the number of family members.Finally, display the calculated fitrah amount using an alert message.

                          //Answer= 2

//var Flour = 250
//var Raisin = 2800
//var Dates = 2100
//var Barley = 450
/*var userinput1 = prompt("Enter the total number of family members");
var userinput2 = prompt("choose your fitrah type: 1. flour = 250 2. Raisin = 2800 3. Dates = 2100 4. Barley = 450");
var fitrahprice;
if(userinput2 === "Flour" || userinput2 === "1" ) 
{userinput2 = 250;}
else if(userinput2 ==="Rasin" || userinput2 ==="2")
{userinput2 = 2800;}
else if(userinput2 ==="Dates" || userinput2 === "3"){userinput2 = 2100;}
else if(userinput2 ==="Barley" || userinput2==="4"){userinput2 = 450;}
var fitrahprice = userinput2 * userinput1;
alert("The Fitrah Amount for " + userinput1 + " Family Members by "  + userinput2 + " method is Rs " + fitrahprice);*/


                             //Task no 3

//Create a program that generates a random number between 1 and 10 and stores itin a variable called "secretNumber". Then, ask the user to enter a guess for the
//secret number using a prompt.Use an if-else statement to check if the user's guess matches the secret number. Ifthe guess is correct, display a message using an alert saying "Congratulations! You
//guessed the secret number". Otherwise, if the guess is too high or too low, display
//an appropriate message informing the user to guess again?



                              //Answer=3

//var secretNumber= 6;
//var guess = Number(prompt("Guess the secret number between (1 and 10):"));
//if(guess == secretNumber) 
//{
//alert("Congratulations!you won.");
//}
//else if(guess<secretNumber)
//{
 //alert("your guess is too closed please guess again.");
 //console.log("your guess is closed.please guess again.");
//}
//else{
//alert ("your guess is too high. please guess again.");
//console.log("your guess is too high. please guess again.")
//}


                               //Task 4:

//Create a program that asks the user to enter a name,
// and then prints out the namewith the first letter capitalized (Make your name in capitalized case).//

                             //Answer =4

//var userName = prompt('write down Your Name');
 //var uppperCase = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
 //alert(uppperCase);
                              //Task 5:

//In this task, you will be creating two empty arrays called "contactNumbers"and"contactNames". Using the prompt, you will ask the user to enter a contact number
 //and contact name. You will then push these values into their respective arraysusing the push method. After adding all the contacts, you will display the contact
 //numbers and names in the console. To do this, you will need to use a for loop toiterate through both arrays and log each element to the console?//

                             //Answer=5


/*var UserInfo1=prompt('enter the contact name')
var UserInfo2=prompt('enter the contact number')
var UserInfo3=prompt('enter the contact name')
var UserInfo4= +prompt('enter the contact number')
var UserInfo5=+prompt('enter the contact name')
var UserInfo6=+prompt('enter the contact number')
ContactNames.push (UserInfo1,UserInfo2,UserInfo3);
ContactNumbers.push(UserInfo4,UserInfo5,UserInfo6);
alert(ContactNames+ ":"+ ContactNumbers)*/

                         //Task 6:

//Create an Array that contains different products, and get input from the user in which you
//ask your user to give the position of that element he/she wants. Now remove that Item
//from your array and console the removed item, Also display the remaining items in the
//array and total number of items remaining.

                             //Answer=6

/*var products=["sooper","prince","rio","oreo","marie","gluco","chocolate chip","gala"]

console.log(products);
var inputUser=+ prompt("Which biscuit position do you want?");
var removedProduct=products.splice(inputUser,1);
console.log("The removed item is:"+removedProduct);
console.log(`The remaining items in the arry are:${products}`);
console.log(`Total number of items remaining:${products.length}`)*/



                               //Task 7:

//Create a program that asks the user for their nationality, gender, and age using the prompt
//function. The program should then use nested if-else statements to determine if the
//person is eligible to vote.First, the program should check if the person is Pakistani or Indian. If they are not, the
//program should display a message saying they are not eligible to vote.If they are Pakistani or Indian,
// the program should then check their gender. If the person ismale and over the age of 18, they are eligible to vote.
//If the person is female and over theIf the person is under 18, the program should display a message saying they are not eligibleto vote?

                              //Answer= 7

// var nationality=prompt ("please write down your nationality")
//if(nationality =='pakistani'|| nationality == 'indian') {
   // var gender=prompt ("enter your gender please")
    //if(gender=== "Female","Male") { var age =prompt("Enter your age please") }
    //if(age<=18){alert ("you are not eligible to vote")}
   // if(age>=18){alert ("you are eligible to vote")}
   // var married=prompt ("your married")
    //if (married =='yes'){alert ("you are  eligible to vote")}
    //if (married =='no'){ alert ("you are not eligible to vote") }
    //}

                              

                               //Task 8

//You have an array of that contains the name of Pakistani Teams Player selected forWorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
//India, So make an array of final team players (11 Players) that will be playing in tomorrowsmatch from the WorldCupSquad arry?

                              //Answer=8

//var WorldCupSquad =["Player01","Player02","Player03","Player04","Player05","Player06","Player07","Player08", "Player 09" ,"Player10","Player11","Player12","Player13","Player14","Player15"]
//var FinalTeam = WorldCupSquad.slice(2,14)
//console.log(WorldCupSquad)
//console.log(FinalTeam)






