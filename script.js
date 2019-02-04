

let victory_line = document.getElementById("victory_line");

let krestik = [];
let nolik = [];

for (let i = 1; i < 10; i++){
    krestik[i] = document.getElementById( "krestik" + i );
    nolik[i] = document.getElementById( "nolik" + i );
    document.getElementById( "field_" + i ).addEventListener("click", clickButton);
}

document.getElementById("play_again_button").addEventListener("click", playAgain);

function clickButton() {
    let id_number = this.id.charAt(this.id.length - 1);
    let krestik_here = 'krestik' + id_number;
    let nolik_here = 'nolik' + id_number;

    for (let i = 1; i < 10; i++){
        document.getElementById( "field_" + i ).removeEventListener("click", clickButton);
    }

    document.getElementById( "human_turn" ).hidden = true;
    document.getElementById( "computer_turn" ).hidden = false;

    setTimeout(function () {
        document.getElementById( "human_turn" ).hidden = false;
        document.getElementById( "computer_turn" ).hidden = true;
    }, 500);

    if((document.getElementById( krestik_here ).hidden === false) ||
        (document.getElementById( nolik_here ).hidden === false)) {

        for (let i = 1; i < 10; i++){
            document.getElementById( "field_" + i ).addEventListener("click", clickButton);
        }
        return;
    }

    document.getElementById( krestik_here ).hidden = false;

    if (checkHumanWin()) {
        humanWins();
    } else {
        setTimeout(() => {
            if (!checkTie()) {
                computerMove();
                if (checkComputerWin()) {
                    computerWins();
                } else {
                    for (let i = 1; i < 10; i++){
                        document.getElementById( "field_" + i ).addEventListener("click", clickButton);
                    }
                }
            }
        }, 500)
    }
}

function checkHumanWin(){

    switch(true) {

		case ((krestik[1].hidden === false) && (krestik[2].hidden === false) && (krestik[3].hidden === false)) :

            addClassName("horizontal_line1");
            return true;

        case ((krestik[4].hidden === false) && (krestik[5].hidden === false) && (krestik[6].hidden === false)) :

            addClassName("horizontal_line2");
            return true;

        case ((krestik[7].hidden === false) && (krestik[8].hidden === false) && (krestik[9].hidden === false)) :

            addClassName("horizontal_line3");
            return true;

        case ((krestik[1].hidden === false) && (krestik[4].hidden === false) && (krestik[7].hidden === false)) :

            addClassName("vertical_line1");
            return true;

        case ((krestik[2].hidden === false) && (krestik[5].hidden === false) && (krestik[8].hidden === false)) :

            addClassName("vertical_line2");
            return true;

        case ((krestik[3].hidden === false) && (krestik[6].hidden === false) && (krestik[9].hidden === false)) :

            addClassName("vertical_line3");
            return true;

        case ((krestik[1].hidden === false) && (krestik[5].hidden === false) && (krestik[9].hidden === false)) :

            addClassName("left_to_right");
            return true;

        case ((krestik[3].hidden === false) && (krestik[5].hidden === false) && (krestik[7].hidden === false)) :

            addClassName("right_to_left");
            return true;

        default: return false;
    }
}

function checkComputerWin(){

    switch(true) {

        case ((nolik[1].hidden === false) && (nolik[2].hidden === false) && (nolik[3].hidden === false)) :

            addClassName("horizontal_line1");
            return true;

        case ((nolik[4].hidden === false) && (nolik[5].hidden === false) && (nolik[6].hidden === false)) :

            addClassName("horizontal_line2");
            return true;

        case ((nolik[7].hidden === false) && (nolik[8].hidden === false) && (nolik[9].hidden === false)) :

            addClassName("horizontal_line3");
            return true;

        case ((nolik[1].hidden === false) && (nolik[4].hidden === false) && (nolik[7].hidden === false)) :

            addClassName("vertical_line1");
            return true;

        case ((nolik[2].hidden === false) && (nolik[5].hidden === false) && (nolik[8].hidden === false)) :

            addClassName("vertical_line2");
            return true;

        case ((nolik[3].hidden === false) && (nolik[6].hidden === false) && (nolik[9].hidden === false)) :

            addClassName("vertical_line3");
            return true;

        case ((nolik[1].hidden === false) && (nolik[5].hidden === false) && (nolik[9].hidden === false)) :

            addClassName("left_to_right");
            return true;

        case ((nolik[3].hidden === false) && (nolik[5].hidden === false) && (nolik[7].hidden === false)) :

            addClassName("right_to_left");
            return true;

        default: return false;
    }
}

function checkTie(){
    if ( ((nolik[1].hidden === false) || (krestik[1].hidden === false)) &&
         ((nolik[2].hidden === false) || (krestik[2].hidden === false)) &&
         ((nolik[3].hidden === false) || (krestik[3].hidden === false)) &&
         ((nolik[4].hidden === false) || (krestik[4].hidden === false)) &&
         ((nolik[5].hidden === false) || (krestik[5].hidden === false)) &&
         ((nolik[6].hidden === false) || (krestik[6].hidden === false)) &&
         ((nolik[7].hidden === false) || (krestik[7].hidden === false)) &&
         ((nolik[8].hidden === false) || (krestik[8].hidden === false)) &&
         ((nolik[9].hidden === false) || (krestik[9].hidden === false)) ) {

        setTimeout(function () {
            document.getElementById('play_again_button').hidden = false;
        }, 500);
        return true;
    }
    return false;
}

function addClassName( classname ){
    setTimeout(() => {
        victory_line.classList.add( classname );
    }, 500);
}

function computerWins(){

    setTimeout(function () {
       document.getElementById('fail_image').hidden = false;
    }, 1000);

    setTimeout(function () {
        document.getElementById('play_again_button').hidden = false;
    }, 2000);

}

function humanWins() {

    setTimeout(function () {
        document.getElementById('header_element').hidden = true;
        document.getElementById('main_element').hidden = true;
        document.getElementById('body_element').style.background = 'url("img/bluescreen.png")';
        document.getElementById('body_element').style.backgroundSize = 'cover';
    }, 1000);

    setTimeout(function () {
        document.getElementById('play_again_button').hidden = false;
    }, 2000);

}

function playAgain() {

    document.getElementById('fail_image').hidden = true;
    document.getElementById('play_again_button').hidden = true;
    document.getElementById('header_element').hidden = false;
    document.getElementById('main_element').hidden = false;
    document.getElementById('body_element').style.background = '';
    document.getElementById('body_element').style.backgroundSize = '';

    for (let i = 1; i < 10; i++) {
        krestik[i].hidden = true;
        nolik[i].hidden = true;
        document.getElementById( "field_" + i ).addEventListener("click", clickButton);
    }

    victory_line.classList = "";

}

function computerMove() {

    switch(true) {

        // Заявка победу Компьютера
        // Field_1
        case ( (nolik[2].hidden === false)
            && (nolik[3].hidden === false)
            && (krestik[1].hidden === true) ):

            nolik[1].hidden = false;
            return;

        case ( (nolik[4].hidden === false)
            && (nolik[7].hidden === false)
            && (krestik[1].hidden === true) ):

            nolik[1].hidden = false;
            return;

        case ( (nolik[5].hidden === false)
            && (nolik[9].hidden === false)
            && (krestik[1].hidden === true) ):

            nolik[1].hidden = false;
            return;

        // Field_2
        case ( (nolik[1].hidden === false)
            && (nolik[3].hidden === false)
            && (krestik[2].hidden === true) ):

            nolik[2].hidden = false;
            return;

        case ( (nolik[5].hidden === false)
            && (nolik[8].hidden === false)
            && (krestik[2].hidden === true) ):

            nolik[2].hidden = false;
            return;

        // Field_3
        case ( (nolik[1].hidden === false)
            && (nolik[2].hidden === false)
            && (krestik[3].hidden === true) ):

            nolik[3].hidden = false;
            return;

        case ( (nolik[6].hidden === false)
            && (nolik[9].hidden === false)
            && (krestik[3].hidden === true) ):

            nolik[3].hidden = false;
            return;

        case ( (nolik[5].hidden === false)
            && (nolik[7].hidden === false)
            && (krestik[3].hidden === true) ):

            nolik[3].hidden = false;
            return;

        // Field_4
        case ( (nolik[5].hidden === false)
            && (nolik[6].hidden === false)
            && (krestik[4].hidden === true) ):

            nolik[4].hidden = false;
            return;

        case ( (nolik[1].hidden === false)
            && (nolik[7].hidden === false)
            && (krestik[4].hidden === true) ):

            nolik[4].hidden = false;
            return;

        // Field_6
        case ( (nolik[4].hidden === false)
            && (nolik[5].hidden === false)
            && (krestik[6].hidden === true) ):

            nolik[6].hidden = false;
            return;

        case ( (nolik[3].hidden === false)
            && (nolik[9].hidden === false)
            && (krestik[6].hidden === true) ):

            nolik[6].hidden = false;
            return;

        // Field_7
        case ( (nolik[1].hidden === false)
            && (nolik[4].hidden === false)
            && (krestik[7].hidden === true) ):

            nolik[7].hidden = false;
            return;

        case ( (nolik[8].hidden === false)
            && (nolik[9].hidden === false)
            && (krestik[7].hidden === true) ):

            nolik[7].hidden = false;
            return;

        case ( (nolik[3].hidden === false)
            && (nolik[5].hidden === false)
            && (krestik[7].hidden === true) ):

            nolik[7].hidden = false;
            return;

        // Field_8
        case ( (nolik[7].hidden === false)
            && (nolik[9].hidden === false)
            && (krestik[8].hidden === true) ):

            nolik[8].hidden = false;
            return;

        case ( (nolik[2].hidden === false)
            && (nolik[5].hidden === false)
            && (krestik[8].hidden === true) ):

            nolik[8].hidden = false;
            return;

        // Field_9
        case ( (nolik[7].hidden === false)
            && (nolik[8].hidden === false)
            && (krestik[9].hidden === true) ):

            nolik[9].hidden = false;
            return;

        case ( (nolik[3].hidden === false)
            && (nolik[6].hidden === false)
            && (krestik[9].hidden === true) ):

            nolik[9].hidden = false;
            return;

        case ( (nolik[1].hidden === false)
            && (nolik[5].hidden === false)
            && (krestik[9].hidden === true) ):

            nolik[9].hidden = false;
            return;

        // Предотвращение победы Хумана
        // Field_1
        case ( (krestik[2].hidden === false)
            && (krestik[3].hidden === false)
            && (nolik[1].hidden === true) ):

            nolik[1].hidden = false;
            return;

        case ( (krestik[4].hidden === false)
            && (krestik[7].hidden === false)
            && (nolik[1].hidden === true) ):

            nolik[1].hidden = false;
            return;

        case ( (krestik[5].hidden === false)
            && (krestik[9].hidden === false)
            && (nolik[1].hidden === true) ):

            nolik[1].hidden = false;
            return;

        // Field_2
        case ( (krestik[1].hidden === false)
            && (krestik[3].hidden === false)
            && (nolik[2].hidden === true) ):

            nolik[2].hidden = false;
            return;

        case ( (krestik[5].hidden === false)
            && (krestik[8].hidden === false)
            && (nolik[2].hidden === true) ):

            nolik[2].hidden = false;
            return;

        // Field_3
        case ( (krestik[1].hidden === false)
            && (krestik[2].hidden === false)
            && (nolik[3].hidden === true) ):

            nolik[3].hidden = false;
            return;

        case ( (krestik[6].hidden === false)
            && (krestik[9].hidden === false)
            && (nolik[3].hidden === true) ):

            nolik[3].hidden = false;
            return;

        case ( (krestik[5].hidden === false)
            && (krestik[7].hidden === false)
            && (nolik[3].hidden === true) ):

            nolik[3].hidden = false;
            return;

        // Field_4
        case ( (krestik[5].hidden === false)
            && (krestik[6].hidden === false)
            && (nolik[4].hidden === true) ):

            nolik[4].hidden = false;
            return;

        case ( (krestik[1].hidden === false)
            && (krestik[7].hidden === false)
            && (nolik[4].hidden === true) ):

            nolik[4].hidden = false;
            return;

        // Field_6
        case ( (krestik[4].hidden === false)
            && (krestik[5].hidden === false)
            && (nolik[6].hidden === true) ):

            nolik[6].hidden = false;
            return;

        case ( (krestik[3].hidden === false)
            && (krestik[9].hidden === false)
            && (nolik[6].hidden === true) ):

            nolik[6].hidden = false;
            return;

        // Field_7
        case ( (krestik[1].hidden === false)
            && (krestik[4].hidden === false)
            && (nolik[7].hidden === true) ):

            nolik[7].hidden = false;
            return;

        case ( (krestik[8].hidden === false)
            && (krestik[9].hidden === false)
            && (nolik[7].hidden === true) ):

            nolik[7].hidden = false;
            return;

        case ( (krestik[3].hidden === false)
            && (krestik[5].hidden === false)
            && (nolik[7].hidden === true) ):

            nolik[7].hidden = false;
            return;

        // Field_8
        case ( (krestik[7].hidden === false)
            && (krestik[9].hidden === false)
            && (nolik[8].hidden === true) ):

            nolik[8].hidden = false;
            return;

        case ( (krestik[2].hidden === false)
            && (krestik[5].hidden === false)
            && (nolik[8].hidden === true) ):

            nolik[8].hidden = false;
            return;

        // Field_9
        case ( (krestik[7].hidden === false)
            && (krestik[8].hidden === false)
            && (nolik[9].hidden === true) ):

            nolik[9].hidden = false;
            return;

        case ( (krestik[3].hidden === false)
            && (krestik[6].hidden === false)
            && (nolik[9].hidden === true) ):

            nolik[9].hidden = false;
            return;

        case ( (krestik[1].hidden === false)
            && (krestik[5].hidden === false)
            && (nolik[9].hidden === true) ):

            nolik[9].hidden = false;
            return;

        // First Move
        case ( ( (krestik[1].hidden === false) && (nolik[5].hidden === true) && (krestik[5].hidden === true) ) ||
               ( (krestik[2].hidden === false) && (nolik[5].hidden === true) && (krestik[5].hidden === true) ) ||
               ( (krestik[3].hidden === false) && (nolik[5].hidden === true) && (krestik[5].hidden === true) ) ||
               ( (krestik[4].hidden === false) && (nolik[5].hidden === true) && (krestik[5].hidden === true) ) ||
               ( (krestik[6].hidden === false) && (nolik[5].hidden === true) && (krestik[5].hidden === true) ) ||
               ( (krestik[7].hidden === false) && (nolik[5].hidden === true) && (krestik[5].hidden === true) ) ||
               ( (krestik[8].hidden === false) && (nolik[5].hidden === true) && (krestik[5].hidden === true) ) ||
               ( (krestik[9].hidden === false) && (nolik[5].hidden === true) && (krestik[5].hidden === true) ) ):

            nolik[5].hidden = false;
                return;

        case ( (krestik[5].hidden === false) &&
               (nolik[1].hidden === true) &&
               (nolik[3].hidden === true) &&
               (nolik[7].hidden === true) &&
               (nolik[9].hidden === true) ) :

            while(true){
                switch ( getRandom() ) {
                    case 1 : nolik[1].hidden = false;
                        return;
                    case 3 : nolik[3].hidden = false;
                        return;
                    case 7 : nolik[7].hidden = false;
                        return;
                    case 9 : nolik[9].hidden = false;
                        return;
                }
            }

        default:
            let random;
            let random_krestik;
            let random_nolik;

            while(true) {
                random = Math.floor(Math.random()*9)+1;

                random_krestik = "krestik" + random;
                random_nolik = "nolik" + random;

                if ( (document.getElementById( random_krestik ).hidden === true)
                    && (document.getElementById( random_nolik ).hidden === true) ) {
                    document.getElementById( random_nolik ).hidden = false;
                    return;
                }
            }
    }
}

function getRandom() {
    let random;
    random = Math.floor(Math.random()*9)+1;
    return random;
}

// Random calculating for easy game!

// function computerMove() {
//         let random;
//         let random_krestik;
//         let random_nolik;
//
//         while(true) {
//             random = Math.floor(Math.random()*9)+1;
//
//             random_krestik = "krestik" + random;
//             random_nolik = "nolik" + random;
//
//             if ( (document.getElementById( random_krestik ).hidden === true)
//                 && (document.getElementById( random_nolik ).hidden === true) ) {
//                 document.getElementById( random_nolik ).hidden = false;
//                 return;
//             }
//         }
// }