
function run_code() {
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
function clear_canvas() {
    clearInterval(timer);
    canvas.clearRect(0, 0, canvas.width, canvas.height);  
}
// helper to avoid having to clear about Math.floor() etc in the visible code
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$("#select_lesson").change(function() {
    var lesson = "#" + this.value;
    var code = $(lesson).text();
    editor.setValue(code);
});
// was there a syntax error in the users code?
var is_sad = false;
var timer = 0;

var c = document.getElementById("output_canvas");
// yes, strictly this is not a canvas but the context
var canvas = c.getContext("2d");
// make the life of my students even more easier
canvas.width = c.width;
canvas.height = c.height;
// set some defaults
canvas.font = "20px Verdana";

// get some assets
var smiley = new Image();
smiley.src = "assets/smile.png";
var sad = new Image();
sad.src = "assets/sad.png";


// setup the editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/terminal");
editor.getSession().setMode("ace/mode/javascript");
