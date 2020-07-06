let animated = [true, false, false, false];

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['landing', 'about', 'skills', 'projects'],
    slidesNavigation: true,
    controlArrows: false,
    loopHorizontal: false,
    navigationTooltips: ['GŁÓWNA', 'O_MNIE', 'DOŚWIADCZENIE', 'PROJEKTY'],
    showActiveTooltip: false,
    lazyLoading: true,
    scrollOverflow: true,

    onLeave: (origin, destination, direction) => {
        const tl = new TimelineMax();
        const old = origin.item;
        const next = destination.item;
        const media = window.matchMedia("(min-width: 1024px)")

        tl.fromTo(old, 0.5, {
            opacity: 1,
        }, {
            opacity: 0,
        })

        if (animated[destination.index] == true) {
            tl.fromTo(next, 0.5, {
                opacity: 0,
            }, {
                opacity: 1,
            })
        }

        if (destination.index === 0) {
            const logo = document.querySelector('header svg');
            const hamburger = document.querySelector('header .hamburger');
            const nav = document.querySelector("#fp-nav");
            const contact = document.querySelector("#contact");

            tl.fromTo(logo, 0.7, {
                    opacity: 1,
                    pointerEvents: 'all',
                    x: 0
                }, {
                    opacity: 0,
                    pointerEvents: 'none',
                    x: '-50'
                }, 0)
                .fromTo(hamburger, 0.7, {
                    opacity: 1,
                    pointerEvents: 'all',
                    x: 0
                }, {
                    opacity: 0,
                    pointerEvents: 'none',
                    x: '50'
                }, 0)
                .fromTo(nav, 0.7, {
                    opacity: 1,
                    pointerEvents: 'all',
                    x: 0
                }, {
                    opacity: 0,
                    pointerEvents: 'none',
                    x: '50'
                }, 0)
                .fromTo(contact, 0.7, {
                    opacity: 1,
                    pointerEvents: 'all',
                    y: 0
                }, {
                    opacity: 0,
                    pointerEvents: 'none',
                    y: '50'
                }, 0)
        }

        if (destination.index === 1 && origin.index === 0) {
            const logo = document.querySelector('header svg');
            const hamburger = document.querySelector('header .hamburger');
            const nav = document.querySelector("#fp-nav");
            const contact = document.querySelector("#contact");

            tl.fromTo(logo, 0.7, {
                    opacity: 0,
                    pointerEvents: 'none',
                    x: '-50'
                }, {
                    opacity: 1,
                    pointerEvents: 'all',
                    x: 0
                }, 0.5)
                .fromTo(hamburger, 0.7, {
                    opacity: 0,
                    pointerEvents: 'none',
                    x: '50'
                }, {
                    opacity: 1,
                    pointerEvents: 'all',
                    x: 0
                }, 0.5)
                .fromTo(nav, 0.7, {
                    opacity: 0,
                    pointerEvents: 'none',
                    x: '50'
                }, {
                    opacity: 1,
                    pointerEvents: 'all',
                    x: 0
                }, 0.3)
                .fromTo(contact, 0.7, {
                    opacity: 0,
                    pointerEvents: 'none',
                    y: '50'
                }, {
                    opacity: 1,
                    pointerEvents: 'all',
                    y: 0
                }, 0.6)
        }

        if (destination.index === 1 && animated[1] == false) {
            const article = destination.item.querySelector('article');
            const svg = destination.item.querySelector('article div svg');
            const h1 = destination.item.querySelector('article div h2');
            const p = destination.item.querySelectorAll('article div p');
            const logo = document.querySelector('header svg');
            const nav = document.querySelector('header .hamburger');

            if (media.matches) {
                tl.fromTo(article, 0.7, {
                        opacity: 0,
                        width: '0%'
                    }, {
                        opacity: 1,
                        width: '80%'
                    })
                    .fromTo(svg, 0.7, {
                        opacity: 0,
                        left: '30%'
                    }, {
                        opacity: 1,
                        left: '35%'
                    }, 1.8)
                    .fromTo(h1, 0.7, {
                        opacity: 0,
                        left: '35%'
                    }, {
                        opacity: 1,
                        left: '40%'
                    }, 2)
                    .fromTo(p, 0.7, {
                        opacity: 0,
                        width: '40%'
                    }, {
                        opacity: 1,
                        width: '60%'
                    }, 2.5)
                    .fromTo(logo, 0.7, {
                        opacity: 0,
                        x: '-50'
                    }, {
                        opacity: 1,
                        x: 0
                    }, 0.5)
                    .fromTo(nav, 0.7, {
                        opacity: 0,
                        x: '50'
                    }, {
                        opacity: 1,
                        x: 0
                    }, 0.5)
            } else {
                tl.fromTo(article, 0.7, {
                        opacity: 0,
                        width: '0%'
                    }, {
                        opacity: 1,
                        width: '80%'
                    })
                    .fromTo(svg, 0.7, {
                        opacity: 0,
                        left: '30%'
                    }, {
                        opacity: 1,
                        left: '35%'
                    }, 1.8)
                    .fromTo(h1, 0.7, {
                        opacity: 0,
                        left: '35%'
                    }, {
                        opacity: 1,
                        left: '40%'
                    }, 2)
                    .fromTo(p, 0.7, {
                        opacity: 0,
                    }, {
                        opacity: 1
                    }, 2.5)
                    .fromTo(logo, 0.7, {
                        opacity: 0,
                        x: '-50'
                    }, {
                        opacity: 1,
                        x: 0
                    }, 0.5)
                    .fromTo(nav, 0.7, {
                        opacity: 0,
                        x: '50'
                    }, {
                        opacity: 1,
                        x: 0
                    }, 0.5)
            }

            animated[1] = true;
        }

        if (destination.index === 2 && animated[2] == false) {
            const article = destination.item.querySelector('article');
            const div = destination.item.querySelectorAll('article div');
            const h1 = destination.item.querySelectorAll('article div h3');
            const p = destination.item.querySelectorAll('article div p');


            if (media.matches) {
                tl.fromTo(article, 0.7, {
                        opacity: 0,
                    }, {
                        opacity: 1,
                    }, 0)
                    .fromTo(div, 0.7, {
                        opacity: 0,
                        width: '0%'
                    }, {
                        opacity: 1,
                        width: '40%'
                    })
                    .fromTo(h1, 0.7, {
                        opacity: 0,
                        top: '5%'
                    }, {
                        opacity: 1,
                        top: '10%'
                    })
                    .fromTo(p, 0.7, {
                        opacity: 0,
                    }, {
                        opacity: 1,
                    }, 1.65)
            } else {
                tl.fromTo(article, 0.7, {
                        opacity: 0,
                    }, {
                        opacity: 1,
                    }, 0)
                    .fromTo(div, 0.7, {
                        opacity: 0,
                        width: '0%'
                    }, {
                        opacity: 1,
                        width: '85%'
                    })
                    .fromTo(h1, 0.7, {
                        opacity: 0,
                        top: '5%'
                    }, {
                        opacity: 1,
                        top: '10%'
                    })
                    .fromTo(p, 0.7, {
                        opacity: 0,
                    }, {
                        opacity: 1,
                    }, 1.65)
            }


            animated[2] = true;
        }

        if (destination.index === 3) {
            const nav_gl = document.querySelector("#fp-nav");
            const contact = document.querySelector("#contact");

            tl.fromTo(nav_gl, 0.7, {
                    opacity: 1,
                    pointerEvents: 'all',
                    x: 0
                }, {
                    opacity: 0,
                    pointerEvents: 'none',
                    x: '50'
                }, 0)
                .fromTo(contact, 0.7, {
                    opacity: 1,
                    pointerEvents: 'all',
                    y: 0
                }, {
                    opacity: 0,
                    pointerEvents: 'none',
                    y: '50'
                }, 0);

        }

        if (destination.index === 3 && animated[3] == false) {
            const bg = destination.item;
            const link = destination.item.querySelector('a');
            const nav = document.querySelector(".fp-slidesNav");

            tl.fromTo(bg, 0.5, {
                    opacity: 0
                }, {
                    opacity: 1
                })
                .fromTo(link, 0.7, {
                    opacity: 0,
                    scale: 0.95
                }, {
                    opacity: 1,
                    scale: 1
                })
                .fromTo(nav, 0.5, {
                    opacity: 0,
                    y: '30'
                }, {
                    opacity: 1,
                    y: 0
                }, 1.5)

            animated[3] = true;
        }

        if (origin.index === 3) {
            const nav_gl = document.querySelector("#fp-nav");
            const contact = document.querySelector("#contact");

            tl.fromTo(nav_gl, 0.7, {
                    opacity: 0,
                    pointerEvents: 'none',
                    x: '50'
                }, {
                    opacity: 1,
                    pointerEvents: 'all',
                    x: 0
                }, 0)
                .fromTo(contact, 0.7, {
                    opacity: 0,
                    pointerEvents: 'none',
                    y: '50'
                }, {
                    opacity: 1,
                    pointerEvents: 'all',
                    y: 0
                }, 0);
        }

    },

    onSlideLeave: (section, origin, destination, direction) => {
        const tl = new TimelineMax();
        const old = origin.item.querySelector('a');
        const next = destination.item.querySelector('a');

        tl.fromTo(old, 0.5, {
                opacity: 1,
                scale: 1
            }, {
                opacity: 0,
                scale: 0.95
            })
            .fromTo(next, 0.5, {
                opacity: 0,
                scale: 0.95
            }, {
                opacity: 1,
                scale: 1
            })
    }
});

//----------------------------------------------------------------------------------LANDING ANIMATION

window.addEventListener('load', () => {
    const napis = document.querySelector(".landing article");
    const hr = document.querySelectorAll(".landing article hr");
    const kod = document.querySelectorAll(".landing article div");
    const adam = document.querySelector(".landing article h1");
    const indicator = document.querySelector(".landing figure");
    const tl = new TimelineMax();
    const media = window.matchMedia("(min-width: 1024px)");


    if (fullpage_api.getActiveSection() != 'landing') {
        fullpage_api.moveTo('landing');
    }

    if (media.matches) {
        tl.fromTo(napis, 0.5, {
                opacity: 0,
                scale: 0.5,
            }, {
                opacity: 1,
                scale: 1,
            }).fromTo(kod, 0.7, {
                opacity: 0,
            }, {
                opacity: 1,
            })
            .fromTo(hr, 0.7, {
                width: 0,
            }, {
                width: '80%',
            }, 0.7)
            .fromTo(adam, 0.5, {
                opacity: 0,
            }, {
                opacity: 1,
            })
            .fromTo(adam, 0.5, {
                textShadow: '0px 0px #ba0001, 0px 0px #565656'
            }, {
                textShadow: '10px 10px #ba0001, -10px -10px #565656'
            }).fromTo(indicator, 1, {
                opacity: 0,
                bottom: '-3%'
            }, {
                opacity: 1,
                bottom: '3%'
            });
    } else {

        tl.fromTo(napis, 0.5, {
                opacity: 0,
                scale: 0.5,
            }, {
                opacity: 1,
                scale: 1,
            }).fromTo(kod, 0.7, {
                opacity: 0,
            }, {
                opacity: 1,
            })
            .fromTo(hr, 0.7, {
                width: 0,
            }, {
                width: '80%',
            }, 0.7)
            .fromTo(adam, 0.5, {
                opacity: 0,
            }, {
                opacity: 1,
            })
            .fromTo(adam, 0.5, {
                textShadow: '0px 0px #ba0001, 0px 0px #565656'
            }, {
                textShadow: '5px 5px #ba0001, -5px -5px #565656'
            }).fromTo(indicator, 1, {
                opacity: 0,
                bottom: '-3%'
            }, {
                opacity: 1,
                bottom: '3%'
            });
    }


})

//----------------------------------------------------------------------------------NAV ANIMATION

let scrol = true;

const hamburger = document.querySelector("header .hamburger");
const hr = document.querySelectorAll("header .hamburger hr");
const nav = document.querySelector("nav");
const links = document.querySelector(".link");
const a = document.querySelectorAll(".link a");
const hr1 = hr[0];
const hr2 = hr[1];
const tl = new TimelineMax()
    .to(hr1, 0.6, {
        rotation: 45,
        transformOrigin: "center",
        border: '3px solid #ba0001',
        y: '7.65px'
    })
    .to(hr2, 0.6, {
        rotation: -45,
        transformOrigin: "center",
        border: '3px solid #ba0001',
        y: '-7.65px'
    }, 0)
    .reverse();

hamburger.addEventListener('click', () => {
    tl.reversed(!tl.reversed());

    tl.to(document.querySelector("#fp-nav"), 0.5, {
            opacity: 0,
            pointerEvents: 'none',
            x: '30'
        }, 0)
        .to(document.querySelector(".fp-slidesNav"), 0.5, {
            opacity: 0,
            pointerEvents: 'none',
            y: '30'
        }, 0)
        .to(document.querySelector("#contact"), 0.5, {
            opacity: 0,
            pointerEvents: 'none',
            y: '30'
        }, 0)

    const contact = document.querySelector(".contact");
    const h = document.querySelectorAll("nav h1");
    const h1 = h[0];
    const h2 = h[1];

    nav.classList.toggle("open");
    contact.classList.toggle("ani1");
    h1.classList.toggle("ani");
    h2.classList.toggle("ani");
    links.classList.toggle("ani2");

    fullpage_api.setAllowScrolling(!scrol);

    scrol = !scrol;
});

a.forEach(link => {
    link.addEventListener('click', () => {
        tl.reversed(!tl.reversed());

        tl.to(document.querySelector("#fp-nav"), 0.5, {
                opacity: 0,
                x: '30'
            }, 0)
            .to(document.querySelector(".fp-slidesNav"), 0.5, {
                opacity: 0,
                y: '30'
            }, 0)
            .to(document.querySelector("#contact"), 0.5, {
                opacity: 0,
                pointerEvents: 'none',
                y: '30'
            }, 0)

        const contact = document.querySelector(".contact");
        const links = document.querySelector(".link");
        const h = document.querySelectorAll("nav h1");
        const h1 = h[0];
        const h2 = h[1];

        nav.classList.toggle("open");
        contact.classList.toggle("ani1");
        h1.classList.toggle("ani");
        h2.classList.toggle("ani");
        links.classList.toggle("ani2");

        fullpage_api.setAllowScrolling(!scrol);

        scrol = !scrol;
    });
})

//----------------------------------------------------------------------------------SLIDE SCROLLING

let lastSection = fullpage_api.getActiveSection();
let check = false;

window.addEventListener('wheel', (e) => {
    const newSection = fullpage_api.getActiveSection();
    const slide = fullpage_api.getActiveSlide();

    if (lastSection.anchor == "projects" && newSection.anchor == "projects") {

        if (slide.index == 0 && check == true) {
            fullpage_api.setAllowScrolling(true, 'up');
            if (e.deltaY > 0) {
                fullpage_api.moveSlideRight();
            } else {
                fullpage_api.moveSectionUp();
                lastSection.anchor = "skills";
            }
        } else {
            fullpage_api.setAllowScrolling(false, 'up');
            if (e.deltaY > 0) {
                fullpage_api.moveSlideRight();
            } else {
                fullpage_api.moveSlideLeft();
            }
        }
        check = true;
    } else {
        check = false;
        lastSection = newSection;
    }
})
