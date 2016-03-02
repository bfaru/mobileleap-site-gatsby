var IN_BROWSER = typeof window != 'undefined';
import React from 'react';
var browser_supported;
if (IN_BROWSER) {
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
        navigator.userAgent && !navigator.userAgent.match('CriOS');
    var browser_supported = !isSafari;
}
if (IN_BROWSER && browser_supported) {
    var glfx = require('../vendors/glfx.optim')
    var particlesJS = require('../vendors/particles.js')
}

class Header extends React.Component {
    update() {
        if (!this.mounted) return;
        var w = this.video.width;
        var h = this.video.height;
        if (window.devicePixelRatio > 1) {
            w = w/2;
            h = h/2;
        }
        this.texture._.initFromCanvas(w, h, this.video);

        this.canvas.draw(this.texture).tiltShift(0, h*2/3, 10, h*2/3, 15, 200).update();
        requestAnimationFrame(this.update.bind(this));
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    componentDidMount() {
        if (!(IN_BROWSER && browser_supported)) return;
        this.mounted = true;
        new particlesJS('header-background', {
            "particles": {
                "number": {
                    "value": 45,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 7
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": .1,
                        "opacity_min": .1,
                        "sync": true
                    }
                },
                "size": {
                    "value": 5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": .2,
                        "size_min": 1.9,
                        "sync": true
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 240,
                    "color": "#ffffff",
                    "opacity": .2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": .8,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 120,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 73.08694910712113,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        var header_background = document.getElementById('header-background');
        this.canvas = glfx.canvas();
        this.video = header_background.children[0];
        this.context = window.pJSDom[0].pJS.canvas.ctx;
        this.texture = this.canvas.texture(this.video);
        header_background.appendChild(this.canvas);
        requestAnimationFrame(this.update.bind(this));
    }

    render() {
        return (
            <div id="header-background">
            </div>
    );
    }
}

module.exports = Header;