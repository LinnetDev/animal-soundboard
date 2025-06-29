for (var i=0; i<document.querySelectorAll(".letter").length; i++) {

    document.querySelectorAll(".letter")[i].addEventListener("click", function () { 
    
        var buttonInnerHTML = this.innerText.toLowerCase(); //Аби читалась як маленька toLowerCase
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key.toLowerCase())          //Аби читалась як маленька toLowerCase
});

function makeSound(key) {
    
     const button = document.querySelector(`.letter.${key}`);
  if (button) {
    button.classList.add("active");
    setTimeout(() => {
      button.classList.remove("active");
    }, 150);
  }


    switch (key) {
        case "a":
             var alligator = new Audio ("sounds/alligator.mp3");
            alligator.play();
            break;
        case "b":
            var bird = new Audio ("sounds/bird.mp3");
            bird.play();
        break;
        
        case "c":
            var cat = new Audio ("sounds/cat.mp3");
            cat.play();
        break;

        case "d":
            var dog = new Audio ("sounds/dog.mp3");
            dog.play();
        break;
            
        case "e":
            var elephant = new Audio ("sounds/elephant.mp3");
            elephant .play();
        break;

        case "f":
            var frog = new Audio ("sounds/frog.mp3");
            frog.play();
        break;
            
        case "g":
            var giraffe  = new Audio ("sounds/giraffe.mp3");
            giraffe.play();
        break;
        case "h":
            var horse  = new Audio ("sounds/horse.mp3");
            horse.play();
        break;
        case "i":
            var ibis = new Audio ("sounds/ibis.mp3");
            ibis.play();
        break;
        case "j":
            var jaguar  = new Audio ("sounds/jaguar.mp3");
            jaguar.play();
        break;
        case "k":
            var kiwi  = new Audio ("sounds/kiwi.mp3");
            kiwi .play();
        break;
        case "l":
            var lion = new Audio ("sounds/lion.mp3");
            lion.play();
        break;
        case "m":
            var monkey  = new Audio ("sounds/monkey.mp3");
            monkey.play();
        break;
        case "n":
            var nightingale  = new Audio ("sounds/nightingale.mp3");
            nightingale.play();
        break;

        case "o":
            var owl  = new Audio ("sounds/owl.mp3");
            owl.play();
        break;
        case "p":
            var pig  = new Audio ("sounds/pig.mp3");
            pig.play();
        break;
        case "q":
            var quail  = new Audio ("sounds/quail.mp3");
            quail.play();
        break;
        case "r":
            var rhinoceros  = new Audio ("sounds/rhinoceros.mp3");
            rhinoceros.play();
        break;
        case "s":
            var squirrel = new Audio ("sounds/squirrel.mp3");
            squirrel.play();
        break;
        case "t":
            var tiger = new Audio ("sounds/tiger.mp3");
            tiger.play();
        break;
        case "u":
            var urchin = new Audio ("sounds/urchin.mp3");
            urchin.play();
        break; 
        case "v":
            var vulture = new Audio ("sounds/vulture.mp3");
            vulture.play();
        break;
        case "w":
            var wolf = new Audio ("sounds/wolf.mp3");
            wolf.play();
        break;
        case "x":
            var xantus = new Audio ("sounds/xantus.mp3");
            xantus.play();
        break;
        case "y":
            var yak = new Audio ("sounds/yak.mp3");
            yak.play();
        break;
        case "z":
            var zebra = new Audio ("sounds/zebra.mp3");
            zebra.play();
        break;

        console.log("No sound for key:", key);
    }

}
