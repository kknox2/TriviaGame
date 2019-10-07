$(document).ready(function() {

    function initialScreen() {
        startScreen = "<p class='text-center quiz-container'><a class='btn btn-danger btn-lg btn-block start-button' href='#' role='button'>Start</a></p>";
        $(".main").html(startScreen);
    }
    initialScreen();
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  
        generateHTML();
        timer();
        myMusic = new sound ("./assets/Freddy_Krueger_-_A_Nightmare_on_Elm_Street_theme_song_(mp3.pm).mp3");
        myMusic.play();
        
    }); 
    
    $("body").on("click", ".answer", function(event){
        playerAnswer = $(this).text();
        if(playerAnswer === answerKey[questionCounter]) {
            clearInterval(theClock);
            generateWin();
        }
        else {
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    }); 
    
    });  
    
    function generateLossDueToTimeOut() {
        unanswered++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Out of time! You're Dead! The correct answer was: " + answerKey[questionCounter] + "</p>";
        $(".main").html(gameHTML);
        setTimeout(wait, 3000);  
    }
    
    function generateWin() {
        correctAnswers++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You Survived! The answer is: " + answerKey[questionCounter] + "</p>";
        $(".main").html(gameHTML);
        setTimeout(wait, 3000); 
    }
    
    function generateLoss() {
        incorrectAnswers++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong Choice! You're Dead! The right answer is: "+ answerKey[questionCounter] + "</p>";
        $(".main").html(gameHTML);
        setTimeout(wait, 3000); 
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='text-center first-answer answer'>A. " + multipleChoice[questionCounter][0] + "</p><p class='text-center answer'>B. "+multipleChoice[questionCounter][1]+"</p><p class='text-center answer'>C. "+multipleChoice[questionCounter][2]+"</p><p class='text-center answer'>D. "+multipleChoice[questionCounter][3]+"</p>";
        $(".main").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 14) {
        questionCounter++;
        generateHTML();
        counter = 15;
        timer();
        }
        else {
            resultScreen();
        }
    }
    
    function timer() {
        theClock = setInterval(stopwatch, 1000);
        function stopwatch() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function resultScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Results" + "</p>" + "<p class='text-center'>Correct Answers: " + correctAnswers + "</p>" + "<p class='text-center'>Wrong Answers: " + incorrectAnswers + "</p>" + "<p class='text-center'>Unanswered: " + unanswered + "</p>" + "<p class='text-center'><a class='btn btn-danger btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".main").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        counter = 15;
        generateHTML();
        timer();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 15;

    // questions
    var questionArray = ["What was used for blood in the movie Psycho?", "The movie When a Stranger Calls is based on which urban legend?", "In the movie Carrie, how does Carrie kill her mother?", "What was the name of the boy who drown in Friday the Thirteenth?", "What horror movie featured a gourmet cannibal?", "Which movie, starring Brad Pitt, featured the Seven Deadly Sins from the Bible?", "What Horror movie makes you believe that everyone has died, when they have not?", "Who was the first to play Frankenstein in the movies, in 1931?", "Who was the first to play Dracula in the movies?", "What movie is a musical spin off of the movie Frankenstein?", "What famous villain stalks children in their dreams?", "In which Steven King movie do the characters battle a clown named Pennywise?", "How many times has the movie Texas Chainsaw Massacre been made?", "Who was the psycho in the movie Halloween?", "In which movie were the characters at Camp Crystal Lake?"];


    // multiple choice
    var multipleChoice = [["Catsup", "Corn Syrup and food coloring", "Chocolate Syrup", "Real Blood"], ["Some one hiding in your backseat", "The kidney thief", "The Babysitter and the Stranger Upstairs", "The ever ringing telephone"], ["Burns her", "Hangs her", "Knifes her", "Shoots her"], ["Billy Scott", "Jeremy Willis", "Jason Vorhees", "Mikey Riese"], ["Friday the 13th", "Texas Chainsaw Massacre", "Silence of the Lambs", "Burnt Offerings"], ["Fear No Evil", "Seven", "I Know What You Did Last Summer", "Saw"], ["Friday the 13th", "Nightmare on Elm Street", "April Fool's Day", "Carrie"], ["Boris Karloff", "Bela Lugosi", "Charles Ogle", "Charlie Chaplin"], ["Charlie Chaplin", "Boris Karloff", "Charles Ogle", "Bela Lugosi"], ["Frankenstein's Daughter", "Son of Frankenstein", "Bride of Frankenstein","Rocky Horror Picture Show"], ["Jason Vorhees", "Leatherface", "Freddy Kreuger", "Hannibal Lector"], ["Carrie", "Christine", "It", "Tommyknockers"], ["3", "4", "2", "1"], ["Freddy Kreuger", "Pennywise", "Jason Vorhees", "Micheal Myers"], ["Nightmare on Elm Street", "Friday the 13th","Halloween", "I Know What You Did Last Summer"]];
  
    
    // right answers
    var answerKey = ["C. Chocolate Syrup", "C. The Babysitter and the Stranger Upstairs", "C. Knifes her", "C. Jason Vorhees", "C. Silence of the Lambs", "B. Seven", "C. April Fool's Day", "A. Boris Karloff", "D. Bela Lugosi", "D. Rocky Horror Picture Show", "C. Freddy Kreuger", "C. It", "C. 2", "D. Micheal Myers", "B. Friday the 13th"]
    

    var questionCounter = 0;
    var playerAnswer;
    var theClock;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var myMusic = ("./assets/Freddy_Krueger_-_A_Nightmare_on_Elm_Street_theme_song_(mp3.pm).mp3");
   
    
    
    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }    
    }
    