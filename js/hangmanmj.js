
// Vytvorte funkciu getGuessedWord(secret, lettersGuessed), ktorá
// bude mať dva parametre: secret - slovo, ktoré má byť uhádnuté, 
// a lettersGuessed - reťazec reprezentovaný písmenami, ktoré už boli úhadnuté
// vráti reťazec, ktorý vznikne z reťazca secret nahradením všetkých neuhádnutých písmen (tie, ktoré sa nenachádzajú v reťazci lettersGuessed) znakom ‘_’
// Príklad použitia:
// console.log( getGuessedWord("container", "arpxtxgoieyu") )
// "_o_tai_er"
var secret = "jano";
var lettersGuessed = '';
// getGuessedWord()
function getGuessedWord(secret, lettersGuessed)
{
  var result='';
  for(var c of secret)
    {
      if(lettersGuessed.indexOf(c)>=0)
        {
          result+=c;
        }
      else
        result+='_';
    }
  return result;
}
var element = document.getElementById("secret");
element.textContent = getGuessedWord(secret,lettersGuessed);

function onClick(event){
	var element = event.target;
	console.log(element.textContent);
}

//deactivate button
el.setAtribute('disabled','disabled');

//update letters guessed
lettersGuesse += el.textContent;

alphabet();
function alphabet()
{


 for(i = 65 ;i <= 90; i++ )
 {

   ///vytvor nasvat vsetko hnoda kde a napchat append to div
   
 
   //document.body.appendChild(btn);
   

   
   var btn = document.createElement("button"); // vytvorim tlacidlo
   btn.setAttribute("type","button"); // nastavim typ a hodnotu
   btn.setAttribute("class","btn btn-default");

   btn.addEventListener("click",onClick)


   btn.setAttribute("value",String.fromCharCode(i));
   btn.textContent = String.fromCharCode(i);
 
   var elem = document.getElementById("buttonn");
   

   elem.appendChild(btn);



  // console.log(String.fromCharCode(i));

 }



}
