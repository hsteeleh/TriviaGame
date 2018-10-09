$("#start").on("click" , function(){
    game.start();
    // console.log ("Me hiciste click");
    // //$("#subwrapper").remove();
    // $("#start").remove();
    // for (var i=0; i<questions.length;i++){
    //     $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
    //     for(var j=0; j<questions[i].answers.length; j++){
    //         $("#subwrapper").append("<input type = 'radio' name='question -" 
    //                                 +i+ "'value=' " + questions[i].answers[j] 
    //                                 + " '>" + questions[i].answers[j])
        
    //     }
    // }
});

//
$(document).on("click" , "#end" , function(){
    game.done();
});

var panel = $("#subwrapper")

var questions = [{
    question: "What is the third largest country in South America?" ,
    answers:["Ecuador" , "Peru" , "Argentina" , "Uraguay"],
    correctAnswer:"Peru",
}, {
    question: "What are the official languages of Peru?" ,
    answers:["Spanish and English" , "Spanish, Ayamara, and Quechua" , "English, Spanish, Ayamara, and Quechua" , "Spanish Only"],
    correctAnswer:"Spanish, Ayamara, and Quechua",

}, {
    question: "In what shape was the city of Cusco designed?" ,
    answers:["Puma" , "Snake" , "Circle" , "Sun"],
    correctAnswer: "Puma",

}, {
    question:  "__________ discovered Machu Picchu in the Amazon Jungle" ,
    answers:[ "Martín Vizcarra" , "Hiram Bingam" , "Francisco Pizarro" , "John Cabot"],
    correctAnswer:"Hiram Bingam",

}, {
    question:  "Why is Peru dry in the winter and wet in the summer?",
    answers:["An Incan curse was used to drive the Spanish out and it has been that way ever since" , "Peru is in the Southern Hemisphere" , "Peru is coastal and close to the Equator" , "Urcuchillay drinks all the water, leaving the land dry in winter, but returns the water as rain during the summer"],
    correctAnswer:"Urcuchillay drinks all the water, leaving the land dry in winter, but returns the water as rain during the summer",

}, {
    question:  "True or false: Peruvian textiles are the greatest in the world",
    answers:["False" , "True"],
    correctAnswer: "True",
}, {
    question:  "According to Incan beliefs, are you ever alone?",
    answers:["Yes, being alone brings wisdom" , "No, Pacchamama is always with you"],
    correctAnswer:"No, Pacchamama is always with you",
},{
    question:  "What animal is sacred and what does it represent?",
    answers:["Condor: Heaven" , "Puma: Earth" , "Snake: Underworld " ,"All of the Above"],
    correctAnswer:"All of the Above",
},{
    question: "The earliest inhabitants arrived in Peru about ____ years ago" ,
    answers:["15,000" , "17,000" , "10,000" , "50,000"],
    correctAnswer:"15,000",
},{
    question: "The potato is originally from Peru, and there are approximately 3,000 different varieties. Peruvians use the phrase “Soy mas Peruano que la papa,” meaning - What does that mean?" ,
    answers:["I am a potato" , "Potatos are Peruvian" , "Peru is shaped like a Potato" , "I am more Peruvian than a potato"],
    correctAnswer:"I am more Peruvian than a potato",

}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 5,

    countDown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter === 0){
            console.log ("Time is Up!");
            game.done();
        }
    },

    start: function(){
        timer = setInterval(game.countDown, 1000); //timer running
        $("#subwrapper").prepend("<h2>Time Remaining: <span id = 'counter'>60</span> Seconds</h2>"); //ISSUE
        $("#start").remove();

        for (var i = 0; i < questions.length; i++){
            panel.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++){
                panel.append("<input type='radio' name='question-" 
                                        + i + "'value='" + questions[i].answers[j] 
                                        + "' '>" + questions[i].answers[j]);
            }
        }
        //DONE BUTTON
        $("#subwrapper").append('<br><button id= "end">DONE</button>'); 
    },
    //make one for each questions
    done: function(){
        $.each($("input[name='question-0]':checked"), function(){ 
            console.log('hi we made it here!') //ISSUE
            if ($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1]':checked"), function(){
            if($(this).val() === questions[1].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2]':checked"), function(){
            if($(this).val() === questions[2].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3]':checked"), function(){
            if($(this).val() === questions[3].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4]':checked"), function(){
            if($(this).val() === questions[4].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5]':checked"), function(){
            if($(this).val() === questions[5].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6]':checked"), function(){
            if($(this).val() === questions[6].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7]':checked"), function(){
            if($(this).val() === questions[7].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8]':checked"), function(){
            if($(this).val() === questions[8].correctAnswer){
                game.correct++;
            }
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9]':checked"), function(){
        if($(this).val() === questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
//RESULTS SCREEN
     this.result();
    },
    result: function(){
        clearInterval(timer);
        $("#subwrapper h2").remove();

        $("#subwrapper").html ("<h2>All done!</h2>");
        $("#subwrapper").append("<h3>Correct Answers: ' + this.correct + '</h3>" );
        $("#subwrapper").append("<h3>Incorrect Answers: ' + this.incorrect + '</h3>" );
        $("#subwrapper").append("<h3> Unanswered: ' + (questions.length (this.incorrect + this.correct)) + '</h3>");
    }
}


