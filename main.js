var won = 0;
var lost = 0;

for(i=1; i<=5;i++)
{
var a = prompt("Do it 5 times.....Enter a number from 1 to 5 :")
var b = Math.floor(Math.random()*5+1);
if (a == b){
    document.write("You Won The Game😍😁🤩" + "<br/>" + "<br/>");
    won++;
}
else{
    document.write("You lost The Game😪" + "<br/>" + "The random number was" +" " + b + "<br/>" + "<br/>");
    lost++
}
}
document.write("Total Number of Won is" + " " + won + " " + "<br/>");
document.write("Total Number of lost is" + " " + lost);
