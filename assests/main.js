// placeholder
window.onload = function(){
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var chances=11;
    var score=0;
    var losses=0;
    play = function(){
        letter = alphabet[Math.floor(Math.random()*alphabet.length)]
        console.log(letter);
    }
play();
document.onkeyup = function(event){
    console.log(event);
    var guess = event.key.toLowerCase();
    if(chances>0){
        if(letter === guess){
            score++
            chances--
            console.log("you got a point.");
            document.getElementById("wins")

        }
        else{
            console.log("Try again.")
            losses--
            chances--
        };
    }
    else{
        console.log("Gameover")
    }



}


































}
