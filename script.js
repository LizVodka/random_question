$(function() {
    let questions = [];
    let n;
    let asked = [];
    new_question(questions);
    $.get('questions.txt', function(data) {
        questions = data.split("\n");
        n = questions.length;
    });

    function new_question(questions) {
        do {
            x = Math.floor((Math.random() * n) + 1);
            valid = jQuery.inArray(x, asked) == -1;
        } while (valid == false);
        question = questions[x];
        $("#question").html(question);
        add_to_asked(asked, x);
    }
    
    function add_to_asked(asked, x) {
        asked.push(x);
    }

    $('button').click(function(){
        new_question(questions);
    })
})