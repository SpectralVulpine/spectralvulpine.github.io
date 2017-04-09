function onFate() {
    $accept.remove();
    $challenge.remove();
}

function acceptFate(e) {
    onFate();
    $('body').append($acceptVideo);
}

function challengeFate(e) {
    onFate();
    var $body = $('body');
    var audio = document.getElementsByTagName('audio')[0];
    audio.play();
    var $fateChallenged = $('<h1 id="challenged">FATE CHALLENGED</h1>');
    $body.append($fateChallenged);
    $body.append($image);
    $image.on('click', function() {audio.play();});
}
var $accept = $('#accept');
var $acceptVideo = $('<iframe width="854" height="480" src="https://www.youtube.com/embed/zGOS2xYu-Eg" ' +
        'frameborder="0" allowfullscreen></iframe>');
var $challenge = $('.challenge');
var $image = $('<img src="../resources/images/lucina_cut_in.png" width="512" height="256" id="lucina"/>');

$accept.on('click', acceptFate);
$challenge.on('click', challengeFate);
