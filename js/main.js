let player;
/*Funcion invocada por la API de youtube */
function onYouTubeIframeAPIReady(params) {
    /*Creo player */
    player = new YT.Player('video', {
        videoId: 'jcD2ZWHx0K8',
        playerVars: {
            controls: 0
        }
    });
    /*Obtengo el elemento del botón */
    let button = document.getElementById("play-button");

    button.addEventListener('click', reproducir, false);
}

function reproducir() {
    /*Si el estado es playing, hace lo siguiente */
    if (player.getPlayerState() == YT.PlayerState.PLAYING) {
        player.stopVideo();
    } else {
        player.playVideo();
    }
}