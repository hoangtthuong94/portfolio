$(document).ready(function () {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', './app/data/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
})