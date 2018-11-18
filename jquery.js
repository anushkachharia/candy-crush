
var play=false;
var score;
var life;
var fruits=['apple','cherry','grapes','mango','pear','pineapple'];
var step;
var action;

$(function(){
$("#startreset").click(function(){
    if(play == true){
        location.reload();
    }
    else{
        play = true;
        score=0;
        $("#update").html(score);
        $("#life").show();
        life=3;
        addHeart();
        $("#gameover").hide();
        $("#startreset").html("Reset Game");

        startFruits();
    }
});

$("#fruit1").mouseover(function(){
    score++;
    $("#update").html(score);
    $("#slice")[0].play();
    clearInterval(action);
    $("#fruit1").hide("explode",500);
    setTimeout(startFruits,500);

});




function addHeart(){
    $("#life").empty();
    for(i=0;i<life;i++){
        $("#life").append('<img src="images/LogoMakr_9tGnXN.png" class="heart">');
    }
}

function startFruits(){
    $("#fruit1").show();
    choosefruit();
    $("#fruit1").css({
        'left': Math.round(450*Math.random()),
        'top':-50
    });
    step = 1 + Math.round(4*Math.random());
    action = setInterval(function(){
        $("#fruit1").css('top',$("#fruit1").position().top + step);
        console.log($("#fruit1").css('top',$("#fruit1").position().top ));
        if($("#fruit1").position().top > $("#display").height()){
            if(life > 1){
                $("#fruit1").show();
                choosefruit();
                $("#fruit1").css({
                    'left':Math.round(450*Math.random()),
                    'top':-50
                });
                step = 1 + Math.round(4*Math.random());
                life -- ;
                addHeart();
            }else{
                play = false;
                $("#startreset").html("Start Game");
                $("#gameover").show();
                $("#gameover").html('<p>Game Over!</p><p>your score is '+ score +'</p>');
                $("#life").hide();
                stopAction();
            }
        }
    },9);
} 

function choosefruit(){
    $("#fruit1").attr('src','images/' + fruits[Math.round(5*Math.random())] + '.png');
    console.log( $("#fruit1").attr('src'));
}

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}

});