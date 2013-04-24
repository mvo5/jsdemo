
function run_code() {
    init_canvas();
    clearInterval(timer);
    var code = editor.getValue();
    try {
        if(is_sad)
            clear_canvas();
        eval(code);
        is_sad = false;
    } catch(e) {
        clear_canvas();
        var padding = 5;
        canvas.drawImage(sad, padding, padding);
        canvas.fillText("Autsch: " + e, padding+sad.width+5, sad.height);
        is_sad = true;
    }
}
function init_canvas() {
    // set some defaults
    canvas.font = "20px Verdana";
    canvas.fillStyle = "black";
}
function clear_canvas() {
    clearInterval(timer);
    init_canvas();
    canvas.save();
    canvas.fillStyle = "white";
    canvas.clearRect(0, 0, canvas.width, canvas.height);
    canvas.restore();
}
// helper to avoid having to clear about Math.floor() etc in the visible code
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// another helper to make life easier
function get_mouse_pos(event) {
    var rect = canvas_element.getBoundingClientRect();
    return { x: event.clientX - rect.left,
             y: event.clientY - rect.top
           }
}
$("#select_lesson").change(function() {
    var lesson = "#" + this.value;
    var code = $(lesson).text();
    editor.setValue(code);
});
// was there a syntax error in the users code?
var is_sad = false;
var timer = 0;

var canvas_element = document.getElementById("output_canvas");
// yes, strictly this is not a canvas but the context
var canvas = canvas_element.getContext("2d");
// make the life of my students even more easier
canvas.width = canvas_element.width;
canvas.height = canvas_element.height;
init_canvas();

// get some assets
var smiley = new Image();
smiley.src = "assets/smile.png";
var sad = new Image();
sad.src = "assets/sad.png";
var herz = new Image();
herz.src = "assets/herz.png";
var wolke = new Image();
wolke.src = "assets/wolke.png";
var star = new Image();
star.src = "assets/star.png";
var mist = new Image();
mist.src = "assets/poop.png";


// setup the editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/terminal");
editor.getSession().setMode("ace/mode/javascript");
