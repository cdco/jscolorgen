$(document).ready(function() {
    //change words on hover
    $('.button').mouseover(function() {
        //Change content
        $('.button').html("Seriously, don't");
    });

    $('.button').mouseleave(function() {
        //Change Content
        $('.button').html("Don't click me");
    })
    var button = $('.button');

    // Change color on click
    button.click(function() {
        //change words on hover
        $('.button').mouseover(function() {
            //Change content
            $('.button').html("Please don't click me AGAIN!");
        });

        $('.button').mouseleave(function() {
            //Change Content
            $('.button').html('I TOLD YOU NOT TO CLICK ME');
        })



        setInterval(function() {

            var colorString = randomColor();
            $('.boom').attr('style', 'background-color:' + colorString);
            colorString = randomColor();
            $('.button').attr('style', 'background-color:' + colorString);
        }, 250);



    });

});

function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var colorString = 'rgb(';
    colorString += r.toString() + ',';
    colorString += g.toString() + ',';
    colorString += b.toString() + ')';

    return colorString;

}
