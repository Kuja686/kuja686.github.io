const inputSolution1 = document.getElementById('solution1')

inputSolution1.onkeyup = function(){
    document.getElementById('printSolution1').innerHTML = inputSolution1.value;
}

const inputSolution2 = document.getElementById('solution2')

inputSolution2.onkeyup = function(){
    document.getElementById('printSolution2').innerHTML = inputSolution2.value;
}

const inputSolution3 = document.getElementById('solution3')

inputSolution3.onkeyup = function(){
    document.getElementById('printSolution3').innerHTML = inputSolution3.value;
}

function check(){
    part1 = document.getElementById('solution1').value
    part2 = document.getElementById('solution2').value
    part3 = document.getElementById('solution3').value

    if (part1.toLowerCase().trim() == '10' && part2.toLowerCase().trim() == 'welt' && part3.toLowerCase().trim() == 'ausstellung') {
        window.scrollTo(0,0);
        canvas = document.getElementById('fireworks')
        canvas.classList.remove('inv')
    } else {
        alert('Das stimmt leider nicht :(')
    }
}

function getPos(event, id) {
    let x = event.clientX
    let y = event.clientY
    
    var element = document.getElementById(id);
    offset = window.scrollY
    y = y+offset

    element.style.left = x+'px'
    element.style.top = y+'px'
}

function make_visible(id){
    var element = document.getElementById(id);
    element.classList.remove('inv');
}

function make_invisible(id){
    var element = document.getElementById(id);
    element.classList.add('inv');
}

const detectMobile = () => {
    if(window.innerWidth <= 800 || window.innerHeight <= 600) {
        return true;
      } else {
        return false;
      }
};

if (detectMobile()) {
    window.location = "/falsches-geraet.html";
}