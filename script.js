$(document).ready(function(){
 
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["unlikely", "the answer you seek is beyond the horizon", "unclear", "outlook good", "don't count on it", "absolutely", "if you persist", "perhaps- the end is still unwritten", "ask again later", "outlook not good", "the power is within you"];
    
    $("#answer").hide();
    
    magic8Ball.announceProphecy = function (question)
    {
        var randomNumber = Math.random();
        var randomNumberArray = randomNumber * 	this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberArray);
        var answer = this.listOfAnswers[randomIndex];
    
        $("#8ball").effect( "shake" );
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        console.log("I show answer side immediately!");
       
      setTimeout(
          function() {
              console.log("I wait 1 second, then show answer text!");
          }, 1000);
          $("#answer").fadeIn(4000);
        $("#answer").text( answer );
         setTimeout(
          function() {
              console.log("I show answer text for 5 seconds!");
          }, 5000);
          $("#answer").fadeOut(4000); 
        console.log(question);
        console.log (answer);
    };
    
    var onClick = function() {
        var question = prompt("Ask and you shall be answered!","Enter a YES/NO queston");
        magic8Ball.announceProphecy(question);
        // $("#answer").fadeIn(4000); can also go here //
    };
    
    $("#answer").hide();   
    $("#questionButton").click( onClick );
    
        
    // magic8Ball.announceProphecy("Will I ever get my head around JavaScript?!"); //
    // original code in place of onclick function... alongside prompt in announceProphecy function above var
    // prompt("Ask and you shall be answered!","Enter a YES/NO queston");
    
    // $("#questionButton").click(magic8Ball.announceProphecy); 
    // worked to engage prompt but kept getting an error to return answer in text space
     
    });