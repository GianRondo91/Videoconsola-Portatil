/*function reproducir() {
    let button = document.getElementById("button");
    button.addEventListener('click', presionar, false);
}

function presionar() {
    let video = document.getElementById('video');
    video.play();
}
*/

/********* */

let player;

function onYouTubeIframeAPIReady(params) {
    console.log("hola");
    player = new YT.Player('video');
    player.addEventListener('onReady', 'reproducir');
    player.addEventListener('onStateChange', 'reproducir');
}

function reproducir() {
    console.log("reproduce");

}

function reproducir(event) {
    console.log(event.data);
    if (event.data == YT.PlayerState.PLAYING) {

    }
}