var videoEl = document.querySelector('.hero__video');
var typed =  new Typed('.typing', {
    strings: ['Te vejo em outra vida <br> quando nós dois <br> formos gatos!'],
    typeSpeed: 50,
    startDelay: 1500,
    showCursor: false
});
    
videoEl.addEventListener("timeupdate", function () {
    console.log('checking time...');
    if (videoEl.currentTime > videoEl.duration - 1.5) {
        videoEl.pause();
    }
});
