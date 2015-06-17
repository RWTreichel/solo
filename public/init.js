$(document).ready(function() {

  var successAudio = $('.control-panel').find('audio');
  

  $('button[name=submit]').on('click', function(e) {
    e.preventDefault();
    var that = this;

    if (checkSolution(solution)) {
      successAudio.trigger('play');
    } else {
      $(this).text("Try again!");
      setTimeout(function() {
        $(that).text("Check Answer");
      }, 1000);
    }

    console.log(actions);
    actions = [];
  });

  $('button[name=red]').on('click', function(e) {
    e.preventDefault();
    $('.test').css('background-color', 'red');
    actions.push([new Date(),'background-color: red']);
  });

  $('button[name=blue]').on('click', function(e) {
    e.preventDefault();
    $('.test').css('background-color', 'blue');
    actions.push([new Date(),'background-color: blue']);
  });

  $('button[name=green]').on('click', function(e) {
    e.preventDefault();
    $('.test').css('background-color', 'green');
    actions.push([new Date(),'background-color: green']);
  });

  $('button[name=floatleft]').on('click', function(e) {
    e.preventDefault();
    $('.test').css('float', 'left');
    actions.push([new Date(),'float: left']);
  });

  $('button[name=floatright]').on('click', function(e) {
    e.preventDefault();
    $('.test').css('float', 'right');
    actions.push([new Date(),'float: right']);
  });

  $('button[name=floatnone]').on('click', function(e) {
    e.preventDefault();
    $('.test').css('float', 'none');
    actions.push([new Date(),'float: none']);
  });
});

var solution = ["background-color", "rgb(0, 128, 0)"];
var actions = [];

function checkSolution(answer) {
  return $('.test').css(answer[0]) === answer[1];
}