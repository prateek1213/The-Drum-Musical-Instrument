let element=document.querySelectorAll("button");
for(let i=0;i<element.length;i++)
{
    element[i].addEventListener("click",function(event){
        playSound(this.innerHTML);
        decoration(this.innerHTML);
    });
}
document.addEventListener("keydown",function(event){
    let temp=event.key;
    playSound(temp);
    decoration(temp);
    
    
});
function decoration(btn)
{
    let element=document.querySelector('.'+btn);
    element.classList.add('pressed');
    
    setTimeout(function(){
        element.classList.remove('pressed');
    },100);
}

function playSound(key){
    let audio;
        switch(key)
        {
            case 'w':
                 audio=new Audio('sounds/crash.mp3');
                audio.play();
                document.querySelector(".heading").innerHTML=key;
                break;

            case 'a':
                 audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                document.querySelector(".heading").innerHTML=key;
                break;

            case 'd':
                 audio=new Audio('sounds/snare.mp3');
                audio.play();
                document.querySelector(".heading").innerHTML=key;
                break;

            case 'j':
                 audio=new Audio('sounds/tom-1.mp3');
                audio.play();
                document.querySelector(".heading").innerHTML=key;
                break;

            case 'k':
                 audio=new Audio('sounds/tom-2.mp3');
                audio.play();
                document.querySelector(".heading").innerHTML=key;
                break;

            case 's':
                 audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                document.querySelector(".heading").innerHTML=key;
                break;

            case 'l':
                 audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                document.querySelector(".heading").innerHTML=key;
                break;

            default: break;
}
}