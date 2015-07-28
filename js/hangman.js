// Globalne premenne
var secret = "HanGman"; // hadane slovo{vyraz}
secret = secret.toUpperCase(); // prekonvertuje hadane slovo na uppercase
var lettersGuessed = ""; // zadane pismeno
// pomocne premenne
var counter = 0; 
var helper = 0;
var n = 5;
var skuska = 0;
var tries = 0;
var bads = 0;

//vytvorenie pola obsahujuceho obrazky
var img = new Array(5);

for(var i = 0; i < 5; i++)
 {
  img[i] = new Image();
  img[i].src = 'images/phase' + i + '.png';
 }

// Sluzi pre pociatocne vykreslenie poctu neznamych pismen
start();
function start()
{
  if(helper == 0)
    {
      var result = "";

  for(var c of secret)
    {
       result += "_";
    }
      first = document.getElementById("secret");
      first.textContent = result;
    }
}

// funkcia getGuessedWord ktora porovnava zadane pismena s hladanym slovom 
function getGuessedWord(secret, lettersGuessed) 
{
  var result = "";

  for(var c of secret)
    {
      if(lettersGuessed.indexOf(c) >= 0) 
        {
          result += c; 
        }
      else
        result += "_";
        }
    
    return result; 
}

// Ak uz raz pouzijem tlacidlo nebudem ho moct viac krat pouzit
function onClick(event) 
{
  var el = event.target; // ktore pismeno bolo stlacene
   
  var hlp = secret.indexOf(el.textContent); // hlada ci je zadane pismeno v "secret"

  if(hlp == -1) // ak zadane pismeno sa nenachadza v "secret"
    {
      bads++; 
      picSwitch(bads)
      console.log(hlp);
    }

  tries++;

  if(bads == 4) // ak prekroci pocet moznych nespravnych pokusov ukonci hru
    {
      alert("Prehral si!!!"); 
      helper = 1;
      lettersGuessed = "";     
      offButtons();
    }

  el.setAttribute("disabled","disabled"); // nastavenie tlacidla na disabled

  lettersGuessed += el.textContent; 

  var pre = getGuessedWord(secret,lettersGuessed);   

  //  pre vypis SECRET na stranke ak uhadnem pismeno
  el = document.getElementById("secret"); 
  el.textContent = pre;

  n = pre.localeCompare(secret) // porovnanie uhadnuteho a zadaneho stringu

  if(n ===  0)  // ak uhadol vypis to ++ restartuj premenne ++ deaktivuj buttons
    {
      alert("Uhadol si!!!"); 
      helper = 1;
      lettersGuessed = "";
      offButtons();         
    }
}

// ak stlacim tlacidlo RESTART ++ zapnem tlacidla ++ volam funkciu "start()"
document.getElementById('restart').onclick = function() 
{  
   helper = 0;   
   start();
   bads = 0;
   picSwitch(bads);
  $('.btn').attr("disabled", false); // zapne tlacidla  
};


buttonPanel();
function buttonPanel() // funkcia pre vytvorenie Button baru
{
 
  for(i = 65 ;i <= 90; i++ )
  {
    var btn = document.createElement("button"); 
    btn.setAttribute("type","button"); 
    btn.setAttribute("class","btn btn-default");

    btn.addEventListener("click",onClick) 

    btn.setAttribute("value",String.fromCharCode(i));
    btn.textContent = String.fromCharCode(i);
   
    var elem = document.getElementById("buttons");    

    elem.appendChild(btn); // pripojenie noveho button elementu k predchadzajucim 
  }

}

// Funkcia pre vypnutie tlacidiel abecedy okrem tlacidla RESTART
function offButtons()
{
  $('.btn').attr("disabled", true); // vypne vsetky buttons
  $('.btn-restart').attr("disabled", false); // okrem RESTART
  tries = 0;
}

// prepinanie obrazkov v poli IMG
function picSwitch(index)
{
 $('#picture').attr('src', img[index].src); 
}

  




