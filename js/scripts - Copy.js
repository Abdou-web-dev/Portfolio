/*!
 * Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
// 



window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Global variables
const Cursor1 = document.querySelector(".cursor1")
const Cursor3 = document.querySelector(".cursor3")
const Cursor4 = document.querySelector(".cursor4")
const Cursor5 = document.querySelector(".cursor5")
const Cursor6 = document.querySelector(".cursor6")


//EXPERIENCE SECTION
const experience = document.querySelector("#experience")

const NavItem2 = document.querySelector(".nav-item2")
const NavItem3 = document.querySelector(".nav-item3")
const NavItem4 = document.querySelector(".nav-item4")
const NavItem5 = document.querySelector(".nav-item5")
const NavItem6 = document.querySelector(".nav-item6")

const Cursor2 = document.querySelector(".cursor2")

//info icons
const infoBulle1 = document.querySelector(".info_bulle1")
const infoBulle2 = document.querySelector(".info_bulle2")
const infoBulle3 = document.querySelector(".info_bulle3")
const infoBulle4 = document.querySelector(".info_bulle4")

// numeros and hashtags in one div
const ProjNum1 = document.querySelector(".project-number1")
const ProjNum2 = document.querySelector(".project-number2")
const ProjNum3 = document.querySelector(".project-number3")
const ProjNum4 = document.querySelector(".project-number4")


//this function is for animating the h1 in exp section
// Wrap every letter in a span
function H1Animation(e) {
    var textWrapper = document.querySelector('.ml33');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.ml33 .letter1',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1)
        }).add({
            targets: '.ml33',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}
H1Animation(); // call the fnct

//showing the proj nums one after one (1s)
experience.addEventListener("mouseover", () => {
    //the anchor on the sidebar
    NavItem2.style.color = "black"
    NavItem2.style.fontSize = "28px"

    //cursor icon
    Cursor2.style.display = "inline-block"


    // apply this (on hover) style (increase of the size of the Experience section) only for big screens
    function MediaFunct1(x) {
        //The value of the matchMedia() method can be any of the media features of the CSS @media rule, like min-height, min-width, orientation, etc.
        if (window.matchMedia("(min-width: 1600px)").matches) { // If media query matches, when the screen is equal or wider than 1600px, increase the size of the EXp section
            experience.style.transform = "scale(1.2)"

        } else {
            experience.style.transform = ""
            experience.style.marginLeft = "20px"
        }
    }
    MediaFunct1(); // call the fnct !!

    function MediaFunct10(e) {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            //for ES6, higher order text...
            document.querySelectorAll(".make-bold").forEach((makeBold) => {
                makeBold.style.fontWeight = "bolder"
            })
            //for the proj numbers
            ProjNum1.style.display = "inline-block"
            setTimeout(() => {
                ProjNum2.style.display = "inline-block"
            }, 500);
            setTimeout(() => {
                ProjNum3.style.display = "inline-block"
            }, 1000);
            setTimeout(() => {
                ProjNum4.style.display = "inline-block"
            }, 1500);
            //for the exper section
            experience.style.transition = "all ease 1s"
            experience.style.marginLeft = "100px"
        }
    }
    MediaFunct10();
})

experience.addEventListener("mouseleave", () => {
    experience.style.transition = "all ease 1s"
    //the active nav anchor
    NavItem2.style.color = ""
    NavItem2.style.fontSize = ""
    Cursor2.style.display = "none"

    function MediaFunct14() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            experience.style.transform = ""
            experience.style.marginLeft = ""
            document.querySelectorAll(".make-bold").forEach((makeBold) => {
                makeBold.style.fontWeight = ""
            })

            ProjNum1.style.display = "none"
            setTimeout(() => {
                ProjNum2.style.display = "none"
            }, 500);
            setTimeout(() => {
                ProjNum3.style.display = "none"
            }, 1000);
            setTimeout(() => {
                ProjNum4.style.display = "none"
            }, 1500);
        }
    }
    MediaFunct14();

})


//showing the light grey BG on hover on the row
//this class wrapContent , is applied 7 times, in exp and educa sections
document.querySelectorAll(".wrapContent").forEach((wrapContent) => {

    wrapContent.addEventListener("mouseover", () => {
        function MediaFunct11() {
            if (window.matchMedia("(min-width: 1000px)").matches) {
                wrapContent.style.transition = "all ease .5s"
                wrapContent.style.background = "#f8f9fa"
                wrapContent.style.padding = "25px"
            }
        }
        MediaFunct11()
    })

    wrapContent.addEventListener("mouseleave", () => {
        function MediaFunct13() {
            if (window.matchMedia("(min-width: 1000px)").matches) {
                wrapContent.style.transition = "all ease .5s"
                wrapContent.style.background = "none"
                wrapContent.style.padding = ""
            }
        }
        MediaFunct13()
    })

})



//showing the bulle info on hover
const wrapContent1 = document.querySelector(".wrapContent1")
const wrapContent2 = document.querySelector(".wrapContent2")
const wrapContent4 = document.querySelector(".wrapContent4")
const wrapContent3 = document.querySelector(".wrapContent3")

const date_of_project1 = document.querySelector(".date_of_project1")
const date_of_project2 = document.querySelector(".date_of_project2")
const date_of_project3 = document.querySelector(".date_of_project3")
const date_of_project4 = document.querySelector(".date_of_project4")


//1st row
wrapContent1.addEventListener("mouseover", () => {

    function MediaFunct9(x) {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            // wrapContent1.style.transition="all ease 1s"
            infoBulle1.style.display = "inline-block" // a div
            date_of_project1.style.color = "black"
            date_of_project1.style.fontSize = "larger"
        }
    }
    MediaFunct9(); // if we dont call the fnct, the code inside it wont be executed
})

wrapContent1.addEventListener("mouseleave", () => {

    function MediaFunct18(params) {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            infoBulle1.style.display = "none" // a div
            date_of_project1.style.color = ""
            date_of_project1.style.fontSize = ""
        }
    }
    MediaFunct18()
})

//for the 2nd row

wrapContent2.addEventListener("mouseover", () => {

    function MediaFunct15() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            infoBulle2.style.display = "inline-block" // a div
            date_of_project2.style.color = "black"
            date_of_project2.style.fontSize = "larger"
        }
    }
    MediaFunct15();

})

wrapContent2.addEventListener("mouseleave", () => {
    function MediaFunct19(params) {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            infoBulle2.style.display = "none" // a div
            date_of_project2.style.color = ""
            date_of_project2.style.fontSize = ""
        }
    }
    MediaFunct19()
})
//3rd row

wrapContent3.addEventListener("mouseover", () => {
    function MediaFunct16() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            infoBulle3.style.display = "inline-block" // a div
            date_of_project3.style.color = "black"
            date_of_project3.style.fontSize = "larger"
        }
    }
    MediaFunct16()
})

wrapContent3.addEventListener("mouseleave", () => {
    function MediaFunct20() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            infoBulle3.style.display = "none" // a div
            date_of_project3.style.color = ""
            date_of_project3.style.fontSize = ""
        }
    }
    MediaFunct20()
})
//4th row

wrapContent4.addEventListener("mouseover", () => {

    function MediaFunct17() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            infoBulle4.style.display = "inline-block" // a div
            date_of_project4.style.color = "black"
            date_of_project4.style.fontSize = "larger"
        }
    }
    MediaFunct17()

})
wrapContent4.addEventListener("mouseleave", () => {
    function MediaFunct21() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            infoBulle4.style.display = "none" // a div
            date_of_project4.style.color = ""
            date_of_project4.style.fontSize = ""
        }
    }
    MediaFunct21()
})

// SIDE NAV SECTION 

//anim text 
// Wrap every letter in a span
var textWrapperSideNav = document.querySelector('.ml3');
let NamePorfolio = document.querySelector('.my_name_porfolio')
let SideNav = document.querySelector("#sideNav")

// js code for sidenav animation ; animje.js libr
textWrapperSideNav.innerHTML = textWrapperSideNav.textContent.replace(/\S/g, "<span class='lettter'>$&</span>"); // what is /\S/g  : It's a regular expression where the \s means "match whitespace" and the g is a flag which means "global", i.e. match all whitespace, not just the first.20 mar. 2011
// Read JS regular Expressions DOCS !
anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml3 .lettter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

//show my name on the sidenav bar on hover
SideNav.addEventListener('mouseover', () => {
    NamePorfolio.style.display = "block"
})


// ABOUT SECTION

const about_paragraph = document.querySelector('.about_paragraph')
const about_section = document.querySelector('#about')
const socialIcon2 = document.querySelector("a.social-icon2") //anchor
const socialIcon4 = document.querySelector("a.social-icon4") //anchor


about_section.addEventListener("mouseover", () => {
    about_paragraph.style.transition = "all ease 1s"
    //for the text
    //media query
    function MediaFunct12(x) {
        if (window.matchMedia("(min-width: 1600px)").matches) { // >= 1600px
            about_paragraph.style.transform = "scale(1.3)"
            about_paragraph.style.marginLeft = "150px"
        } else {
            about_paragraph.style.transform = ""
            about_paragraph.style.marginLeft = "20px"
        }
    }
    MediaFunct12();

    //media query
    function MediaFunct7(params) {
        if (window.matchMedia("(min-width: 1200px)").matches) {

            //for making words bolder
            document.querySelectorAll(".make-bold").forEach((makeBold) => {
                makeBold.style.fontWeight = "bolder"
                makeBold.style.color = "black"
            })

            //social icons,apply the style on anchor html tags , not the icon tags
            socialIcon2.style.transition = "all ease 1s"
            socialIcon2.parentElement.style.padding = "20px"
            socialIcon2.previousElementSibling.style.backgroundColor = "#0077b5" //linkden icon color
            setTimeout(() => {
                socialIcon2.style.backgroundColor = "#211F1F" //github color
            }, 500);
            setTimeout(() => {
                socialIcon2.nextElementSibling.style.backgroundColor = "#00acee" //twitter color

            }, 800);
            setTimeout(() => {
                socialIcon4.style.backgroundColor = "#4267B2" //fb color
            }, 1500);
        }
    }
    MediaFunct7();
    //for the cursor on the sidenav
    Cursor1.style.display = "inline-block"

})

about_section.addEventListener("mouseleave", () => {

    //no need for a media query in mouseleave mouse event
    about_paragraph.style.transition = "all ease 1s"
    document.querySelectorAll(".make-bold").forEach((makeBold) => {
        makeBold.style.fontWeight = ""
        makeBold.style.color = ""
    })
    about_paragraph.style.transform = ""
    about_paragraph.style.marginLeft = ""
    //icon colors on hover
    socialIcon2.previousElementSibling.style.backgroundColor = ""
    setTimeout(() => {
        socialIcon2.style.backgroundColor = "" //github color
    }, 500);
    setTimeout(() => {
        socialIcon2.nextElementSibling.style.backgroundColor = "" //twitter color

    }, 800);
    setTimeout(() => {
        socialIcon4.style.backgroundColor = "" //fb color
    }, 1500);
    //for the cursor on the sidenav
    Cursor1.style.display = "none"
})
about_paragraph.addEventListener("mouseover", () => {

    function MediaFunct8(params) {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            about_paragraph.style.fontSize = "larger"
        }
    }
    MediaFunct8();
})

about_paragraph.addEventListener("mouseleave", () => {
    about_paragraph.style.fontSize = ""
})



//animate.css

// You can detect when an animation ends:

//EdUCATION section

const Education_Section = document.querySelector("#education")
const Education_Section_wrapper = document.querySelector("#education .resume-section-content")
const degreeICon1 = document.querySelector(".degree-icon1")
const degreeICon2 = document.querySelector(".degree-icon2")
const degreeICon3 = document.querySelector(".degree-icon3")

const Education_Section_row1 = document.querySelector("#education .wrapContent1")
const Education_Section_row2 = document.querySelector("#education .wrapContent2")
const Education_Section_row3 = document.querySelector("#education .wrapContent3")
const DegreeDate = document.querySelectorAll("#education .date-of-degree")


Education_Section.addEventListener("mouseover", () => {
    //for the cursor on the sidenav
    Cursor3.style.display = "inline-block"
})
Education_Section.addEventListener("mouseleave", () => {
    //for the cursor on the sidenav
    Cursor3.style.display = "none"
})


//showing the degree icon on hover
Education_Section_row1.addEventListener("mouseover", () => {
    function MediaFunct22() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            Education_Section_row1.style.transition = "all ease 1s"
            degreeICon1.style.display = "block"
            Education_Section_row1.style.padding = "60px"
        }
    }
    MediaFunct22();

})
Education_Section_row1.addEventListener("mouseleave", () => {
    degreeICon1.style.display = "none"
    Education_Section_row1.style.padding = ""
})

Education_Section_row2.addEventListener("mouseover", () => {

    function MediaFunct23() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            Education_Section_row2.style.transition = "all ease 1s"
            Education_Section_row2.style.padding = "60px"
            degreeICon2.style.display = "block"
        }
    }
    MediaFunct23();
})
Education_Section_row2.addEventListener("mouseleave", () => {
    degreeICon2.style.display = "none"
    Education_Section_row2.style.padding = ""
})

Education_Section_row3.addEventListener("mouseover", () => {

    function MediaFunct24() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            Education_Section_row3.style.transition = "all ease 1s"
            Education_Section_row3.style.padding = "60px"
            degreeICon3.style.display = "block"
        }
    }
    MediaFunct24();
})
Education_Section_row3.addEventListener("mouseleave", () => {
    degreeICon3.style.display = "none"
    Education_Section_row3.style.padding = ""
})

//modifiying fontweight of the date on hover...
Education_Section_wrapper.addEventListener("mouseover", () => {

    document.querySelectorAll("#education .date-of-degree").forEach((DegreeDate) => {
        function MediaFunct25() {
            if (window.matchMedia("(min-width: 1000px)").matches) {
                DegreeDate.style.transition = "all ease 1s"
                DegreeDate.style.color = "black"
                DegreeDate.style.fontWeight = "bolder"
                DegreeDate.style.fontSize = "30px"
            }
        }
        MediaFunct25();
    })
})

Education_Section_wrapper.addEventListener("mouseleave", () => {
    document.querySelectorAll("#education .date-of-degree").forEach((DegreeDate) => {
        DegreeDate.style.transition = "all ease 1s"
        DegreeDate.style.color = ""
        DegreeDate.style.fontWeight = ""
        DegreeDate.style.fontSize = ""
    })
})


//SKILLS SECTION
const skills_section = document.querySelector("#skills")
const subheading_parent = document.querySelector("#skills .subheading_parent")
const IconPrg = document.querySelector("#skills .icon-programm")
const arrowDown = document.querySelector("#skills .arrow_down")
//under workflow
const ul_list_skills = document.querySelector("#skills ul.fa-ul")


ul_list_skills.addEventListener("mouseover", () => {

    function MediaFunct26() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            ul_list_skills.style.transition = "all ease 1s"
            ul_list_skills.style.background = "#f8f9fa"
            ul_list_skills.style.padding = "100px"
        }
    }
    MediaFunct26();
})



ul_list_skills.addEventListener("mouseleave", () => {

    function MediaFunct27() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            ul_list_skills.style.transition = "all ease 1s"
            ul_list_skills.style.background = "none"
            ul_list_skills.style.padding = ""
        }
    }
    MediaFunct27();
})


window.addEventListener("scroll", Scroll2, false) //false ?
// this code is executed when the width of the screen is smaller than 1000px; whether the user clicks, hovers, or not...
function Scroll2() {
    if (window.scrollY > 3500) {
        console.log("you are there")
        document.querySelectorAll("#skills ul li span.span_text").forEach((spanText) => {
            function MediaFunct28() {
                if (window.matchMedia("(max-width: 1000px)").matches) {
                    ul_list_skills.style.transition = "all ease 4s" // ul

                    setTimeout(() => {
                        ul_list_skills.children[0].style.background = "#f8f9fa" //1st li
                        ul_list_skills.children[0].style.marginBottom = "20px"
                    }, 500);
                    setTimeout(() => {
                        ul_list_skills.children[1].style.background = "#e9ecef" //2nd li
                        ul_list_skills.children[1].style.marginBottom = "10px"
                    }, 1000);
                    setTimeout(() => {
                        ul_list_skills.children[2].style.background = "#dee2e6" //3rd li
                        ul_list_skills.children[2].style.marginBottom = "15px"
                    }, 1500);
                    setTimeout(() => {
                        ul_list_skills.children[3].style.background = "#ced4da" //4th li
                        spanText.style.color = 'black' //all 4 text spans

                    }, 2000);
                    ul_list_skills.style.backgroundColor = "darkgrey"
                    ul_list_skills.style.padding = "10px"
                    ul_list_skills.style.marginLeft = "10px"
                }
            }
            MediaFunct28();
        })
    }
}

subheading_parent.addEventListener("mouseover", () => {
    subheading_parent.style.transition = "all ease 1s"
    subheading_parent.style.padding = "20px"
    subheading_parent.children[0].style.fontWeight = "bolder"
    IconPrg.style.display = "inline-block"
    setTimeout(() => {
        arrowDown.style.display = "inline-block"
    }, 1000);
    subheading_parent.style.cursor = "pointer"
    subheading_parent.children[0].style.fontSize = "30px"
})
subheading_parent.addEventListener("mouseleave", () => {
    subheading_parent.style.transition = "all ease 1s"
    IconPrg.style.display = "none"
    setTimeout(() => {
        arrowDown.style.display = "none"
    }, 1000);
    subheading_parent.children[0].style.fontWeight = ""
    subheading_parent.style.cursor = ""
    subheading_parent.children[0].style.fontSize = ""
})

//icons and images on big screen
const DevIcons = document.querySelector('#skills .dev-icons')
const html5_img = document.querySelector(".dev-icons .html5_img")
const css3_img = document.querySelector(".dev-icons .css3_img")
const js_img = document.querySelector(".dev-icons .js_img")
const bootstrap_img = document.querySelector(".dev-icons .bootstrap_img")
const sass_img = document.querySelector(".dev-icons .sass_img")
const vue_img = document.querySelector(".dev-icons .vue_img")
const react_img = document.querySelector(".dev-icons .react_img")
const node_img = document.querySelector(".dev-icons .node_img")

const div_icon1 = document.querySelector(".dev-icons div.icon1")
const div_icon2 = document.querySelector(".dev-icons div.icon2")
const div_icon3 = document.querySelector(".dev-icons div.icon3")
const div_icon4 = document.querySelector(".dev-icons div.icon4")
const div_icon5 = document.querySelector(".dev-icons div.icon5")
const div_icon6 = document.querySelector(".dev-icons div.icon6")
const div_icon7 = document.querySelector(".dev-icons div.icon7")
const div_icon8 = document.querySelector(".dev-icons div.icon8")


skills_section.addEventListener("mouseover", () => {
    Cursor4.style.display = "inline-block"
})

skills_section.addEventListener("mouseleave", () => {
    Cursor4.style.display = "none"
})


// hover over the area
DevIcons.addEventListener("mouseover", () => {
    DevIcons.style.transition = "all ease 2s"
    DevIcons.style.padding = "350px"
    DevIcons.style.paddingTop = "150px"
    DevIcons.style.backgroundColor = "#f8f9fa"
    DevIcons.children[3].style.marginBottom = "100px"
    //the divs are displayed as block by default  

    // the children divs
    //hover over the icons one by one and show tech bigger img 
    div_icon1.addEventListener("mouseover", () => {
        div_icon2.style.display = "none"
        div_icon3.style.display = "none"
        div_icon4.style.display = "none"
        div_icon5.style.display = "none"
        div_icon6.style.display = "none"
        div_icon7.style.display = "none"
        div_icon8.style.display = "none"
        html5_img.style.display = "block"
        setTimeout(() => {
            html5_img.style.transition = "all ease .5s"
            html5_img.style.marginTop = "45px"
            html5_img.style.transform = "scale(1.2)"
        }, 250);
    })

    div_icon1.addEventListener("mouseleave", () => {
        div_icon2.style.display = "inline-block"
        div_icon3.style.display = "inline-block"
        div_icon4.style.display = "inline-block"
        div_icon5.style.display = "inline-block"
        div_icon6.style.display = "inline-block"
        div_icon7.style.display = "inline-block"
        div_icon8.style.display = "inline-block"
        html5_img.style.display = "none"
        setTimeout(() => {
            html5_img.style.transition = "all ease .5s"
            html5_img.style.marginTop = ""
            html5_img.style.transform = ""
        }, 250);
    })

    div_icon2.addEventListener("mouseover", () => {

        div_icon1.style.display = "none"
        div_icon3.style.display = "none"
        div_icon4.style.display = "none"
        div_icon5.style.display = "none"
        div_icon6.style.display = "none"
        div_icon7.style.display = "none"
        div_icon8.style.display = "none"
        css3_img.style.display = "block"
        setTimeout(() => {
            css3_img.style.transition = "all ease .5s"
            css3_img.style.marginTop = "45px"
            css3_img.style.transform = "scale(1.2)"
        }, 250);
    })

    div_icon2.addEventListener("mouseleave", () => {
        div_icon3.style.display = "inline-block"
        div_icon4.style.display = "inline-block"
        div_icon5.style.display = "inline-block"
        div_icon6.style.display = "inline-block"
        div_icon7.style.display = "inline-block"
        div_icon8.style.display = "inline-block"
        css3_img.style.display = "none"
        setTimeout(() => {
            css3_img.style.transition = "all ease .5s"
            css3_img.style.marginTop = ""
            css3_img.style.transform = ""
        }, 250);
    })


    div_icon3.addEventListener("mouseover", () => {
        div_icon1.style.display = "none"
        div_icon2.style.display = "inline-block"
        div_icon4.style.display = "none"
        div_icon5.style.display = "none"
        div_icon6.style.display = "none"
        div_icon7.style.display = "none"
        div_icon8.style.display = "none"
        js_img.style.display = "block"
        setTimeout(() => {
            js_img.style.transition = "all ease .5s"
            js_img.style.marginTop = "45px"
            js_img.style.transform = "scale(1.2)"
        }, 250);
    })

    div_icon3.addEventListener("mouseleave", () => {
        div_icon1.style.display = "inline-block"
        div_icon4.style.display = "inline-block"
        div_icon5.style.display = "inline-block"
        div_icon6.style.display = "inline-block"
        div_icon7.style.display = "inline-block"
        div_icon8.style.display = "inline-block"
        js_img.style.display = "none"
        setTimeout(() => {
            js_img.style.transition = "all ease .5s"
            js_img.style.marginTop = ""
            js_img.style.transform = ""
        }, 250);
    })

    div_icon4.addEventListener("mouseover", () => {
        div_icon1.style.display = "none"
        div_icon2.style.display = "inline-block"
        div_icon3.style.display = "inline-block"
        div_icon5.style.display = "none"
        div_icon6.style.display = "none"
        div_icon7.style.display = "none"
        div_icon8.style.display = "none"
        bootstrap_img.style.display = "block"
        setTimeout(() => {
            bootstrap_img.style.transition = "all ease .5s"
            bootstrap_img.style.marginTop = "45px"
            bootstrap_img.style.transform = "scale(1.2)"
        }, 250);
    })

    div_icon4.addEventListener("mouseleave", () => {
        div_icon1.style.display = "inline-block"
        div_icon4.style.display = "inline-block"
        div_icon5.style.display = "inline-block"
        div_icon6.style.display = "inline-block"
        div_icon7.style.display = "inline-block"
        div_icon8.style.display = "inline-block"
        bootstrap_img.style.display = "none"
        setTimeout(() => {
            bootstrap_img.style.transition = "all ease .5s"
            bootstrap_img.style.marginTop = ""
            bootstrap_img.style.transform = ""
        }, 250);
    })

    div_icon5.addEventListener("mouseover", () => {
        div_icon1.style.display = "none"
        div_icon2.style.display = "inline-block"
        div_icon3.style.display = "inline-block"
        div_icon4.style.display = "inline-block"
        div_icon6.style.display = "none"
        div_icon7.style.display = "none"
        div_icon8.style.display = "none"
        sass_img.style.display = "block"
        setTimeout(() => {
            sass_img.style.transition = "all ease .5s"
            sass_img.style.marginTop = "45px"
            sass_img.style.transform = "scale(1.2)"
        }, 250);
    })

    div_icon5.addEventListener("mouseleave", () => {
        div_icon1.style.display = "inline-block"
        div_icon5.style.display = "inline-block"
        div_icon6.style.display = "inline-block"
        div_icon7.style.display = "inline-block"
        div_icon8.style.display = "inline-block"
        sass_img.style.display = "none"
        setTimeout(() => {
            sass_img.style.transition = "all ease .5s"
            sass_img.style.marginTop = ""
            sass_img.style.transform = ""
        }, 250);
    })

    div_icon6.addEventListener("mouseover", () => {
        div_icon1.style.display = "none"
        div_icon2.style.display = "inline-block"
        div_icon3.style.display = "inline-block"
        div_icon4.style.display = "inline-block"
        div_icon5.style.display = "inline-block"
        div_icon7.style.display = "none"
        div_icon8.style.display = "none"
        vue_img.style.display = "block"
        setTimeout(() => {
            vue_img.style.transition = "all ease .5s"
            vue_img.style.marginTop = "45px"
            vue_img.style.transform = "scale(1.2)"
        }, 250);
    })

    div_icon6.addEventListener("mouseleave", () => {
        div_icon1.style.display = "inline-block"
        div_icon7.style.display = "inline-block"
        div_icon8.style.display = "inline-block"
        vue_img.style.display = "none"
        setTimeout(() => {
            vue_img.style.transition = "all ease .5s"
            vue_img.style.marginTop = ""
            vue_img.style.transform = ""
        }, 250);
    })

    div_icon7.addEventListener("mouseover", () => {
        div_icon1.style.display = "none"
        div_icon2.style.display = "inline-block"
        div_icon3.style.display = "inline-block"
        div_icon4.style.display = "inline-block"
        div_icon5.style.display = "inline-block"
        div_icon6.style.display = "inline-block"
        div_icon8.style.display = "none"
        react_img.style.display = "block"
        setTimeout(() => {
            react_img.style.transition = "all ease .5s"
            react_img.style.marginTop = "45px"
            react_img.style.transform = "scale(1.2)"
        }, 250);
    })

    div_icon7.addEventListener("mouseleave", () => {
        div_icon1.style.display = "inline-block"
        div_icon8.style.display = "inline-block"
        react_img.style.display = "none"
        setTimeout(() => {
            react_img.style.transition = "all ease .5s"
            react_img.style.marginTop = ""
            react_img.style.transform = ""
        }, 250);
    })

    div_icon8.addEventListener("mouseover", () => {
        div_icon1.style.display = "none"
        div_icon2.style.display = "inline-block"
        div_icon3.style.display = "inline-block"
        div_icon4.style.display = "inline-block"
        div_icon5.style.display = "inline-block"
        div_icon6.style.display = "inline-block"
        div_icon7.style.display = "inline-block"
        node_img.style.display = "block"
        setTimeout(() => {
            node_img.style.transition = "all ease .5s"
            node_img.style.marginTop = "45px"
            node_img.style.transform = "scale(1.2)"
        }, 250);
    })

    div_icon8.addEventListener("mouseleave", () => {
        div_icon1.style.display = "inline-block"

        node_img.style.display = "none"
        setTimeout(() => {
            node_img.style.transition = "all ease .5s"
            node_img.style.marginTop = ""
            node_img.style.transform = ""
        }, 250);
    })
    //so that the 1st child can appear
    if (div_icon1.style.display == "none") {
        div_icon1.style.display = "inline-block"
    }


})

DevIcons.addEventListener("mouseleave", () => {
    DevIcons.style.transition = "all ease 2s"
    DevIcons.style.padding = ""
    DevIcons.style.backgroundColor = ""
    // document.querySelectorAll("#skills .dev-icons div").forEach((divIcon) => {
    //     divIcon.style.display = "inline-block"
    // })
})




//Projects section
const proj_section = document.querySelector("#projects") //section
const row1 = document.querySelector("#projects .row1") //section
const row1_col2 = document.querySelector("#projects .row1 .col2") //section
const row1_col1 = document.querySelector("#projects .row1 .col1") //section
const row2 = document.querySelector("#projects .row2") //section
const num_one = document.querySelector("#projects .num_one")
const num_two = document.querySelector("#projects .num_two")
const msg_info = document.querySelector("#projects .msg-info")
//proj 1
const project1_info = document.querySelector("#projects .project1_info") //icon 1
const project2_info = document.querySelector("#projects .project2_info") //icon 2
const phono_desktop = document.querySelector("#projects .phono_desktop") //img
const phono_smartphone = document.querySelector("#projects .phono_smartphone") //img
const date_phono = document.querySelector(".date-phono")
const date_phono_start = document.querySelector(".date-phono-start")
const date_phono_end = document.querySelector(".date-phono-end")
const url_title1 = document.querySelector(".url-title1")
const url_title2 = document.querySelector(".url-title2")
const url_phono = document.querySelector(".url-phono")
const url_phono_github = document.querySelector(".url-phono-github")
const wwww_icon = document.querySelector(".wwww_icon")
const github_icon = document.querySelector(".github_icon")


//proj 2
const project2_container = document.querySelector(".project2-container")
const morocco_desktop1 = document.querySelector("#projects .morocco_desktop1") //img
const morocco_smartphone1 = document.querySelector("#projects .morocco_smartphone1") //img
const morocco_desktop2 = document.querySelector("#projects .morocco_desktop2") //img
const morocco_smartphone2 = document.querySelector("#projects .morocco_smartphone2") //img
const video_project = document.querySelector("#projects .video_project") //img
const morocco_smartphone3 = document.querySelector("#projects .morocco_smartphone3") //img
const date_morocco = document.querySelector(".date-morocco")
const date_morocco_start = document.querySelector(".date-morocco-start")
const date_morocco_end = document.querySelector(".date-morocco-end")
const url_title3 = document.querySelector(".url-title3")
const url_title4 = document.querySelector(".url-title4")
const url_morocco = document.querySelector(".url-morocco")
const url_morocco_github = document.querySelector(".url-morocco-github")
const wwww_icon2 = document.querySelector(".wwww_icon2")
const github_icon2 = document.querySelector(".github_icon2")





project2_container.addEventListener("mouseover", () => {
    // row1_col2.style.width="650px"
})


proj_section.addEventListener("mouseleave", () => {
    Cursor5.style.display = "none"
})


proj_section.addEventListener("mouseover", () => {
    Cursor5.style.display = "inline-block"
    //width of row1 on hover increase ++
    row1.style.transition = "all ease 5s"
    project2_container.style.marginRight = "5px"

    //1
    num_one.style.fontSize = "60px"
    num_one.style.color = "black"
    //2
    num_two.style.fontSize = "40px"
    num_two.style.color = "black"
    num_two.style.marginBottom = "50px"
    //hover over the 1st info icon projects
    project1_info.addEventListener("mouseover", () => {
        //1           
        num_one.style.transition = "all ease 3.5s"
        num_one.style.marginLeft = "260px"

        phono_desktop.style.display = "block"
        project1_info.style.marginBottom = "30px"
        //project1
        setTimeout(() => {
            phono_desktop.style.transition = "all ease 3.5s"
            phono_desktop.style.borderRadius = "25px";
            // phono_desktop.style.opacity="0.9"
            phono_desktop.style.border = "thin black solid"
            phono_desktop.style.marginLeft = "40px"
            phono_desktop.style.transform = "scale(1.2)"
        }, 250);

        setTimeout(() => {
            phono_desktop.style.transition = "all ease 2s"
            phono_desktop.style.transform = ""
            phono_desktop.style.display = "none"
        }, 5000);

        phono_smartphone.style.display = "block"

        setTimeout(() => {
            phono_smartphone.style.transition = "all ease 3.5s"
            phono_smartphone.style.borderRadius = "25px";
            // phono_smartphone.style.opacity="0.9"
            phono_smartphone.style.border = "thin black solid"
            phono_smartphone.style.marginLeft = "100px"
            phono_smartphone.style.transform = "scale(1.2)"
            phono_smartphone.style.marginBottom = "30px"
        }, 750);

        setTimeout(() => {
            phono_smartphone.style.transition = "all ease 2s"
            phono_smartphone.style.transform = ""
            phono_smartphone.style.display = "none"

        }, 5250);

    })

    project2_info.addEventListener("mouseover", () => {
        //project2
    })

    project1_info.addEventListener("mouseleave", () => {
        //1
        num_one.style.transition = "all ease 3.5s"
        num_one.style.marginLeft = ""
        setTimeout(() => {
            phono_desktop.style.display = "none"
        }, 2000);
        setTimeout(() => {
            phono_smartphone.style.display = "none"
        }, 2000);
    })

    project2_info.addEventListener("mouseleave", () => {
        //2

    })
})

proj_section.addEventListener("mouseleave", () => {
    row1.style.transition = "all ease 8s"
    //if you want the transition to work on mouselave, dont let the value empty;but specify the initial value ; 1300px
    num_one.style.fontSize = "35px"
    num_one.style.color = ""
    num_two.style.fontSize = "35px"
    num_two.style.color = ""
})

row1.addEventListener("mouseover", () => {

})

row1.addEventListener("mouseleave", () => {

})

row1_col1.addEventListener("mouseover", () => {
    //col1 and col2 , row1

    //  function MediaFunc4(x) {
    //      if(window.matchMedia("(min-width: 1200px)").matches){

    //      }
    //      MediaFunc4();
    //  }



    function MediaFunct2(x) {
        if (window.matchMedia("(min-width: 1200px)").matches) { // If media query matches, when the screen is equal or wider than 1600px, increase the size of the EXp section
            row1_col1.style.transition = "all ease 3s"
            row1_col2.style.transition = "all ease 3s"
            row1_col1.style.width = "800px"
            row1_col2.style.width = "400px"
            //Date
            date_phono.style.transition = "all ease 2s"
            date_phono.style.fontSize = "larger"
            date_phono_start.innerHTML = "'01-06-2021'"
            date_phono_start.style.fontWeight = "bolder"
            date_phono.style.animation = "shake 4s"
            date_phono_end.innerHTML = "'15-07-2021'"
            date_phono_end.style.fontWeight = "bolder"
            //url title
            url_title1.style.transition = "all ease 2s"
            url_title1.style.color = "white"
            url_title1.style.fontSize = "larger"
            url_title1.style.fontWeight = "bolder"
            url_phono.style.transition = "all ease 2s"
            url_phono.style.textDecoration = "none"
            url_phono.style.fontWeight = "bolder"
            url_phono.style.marginLeft = "170px"
            //url address
            url_title2.style.transition = "all ease 2s"
            url_title2.style.color = "white"
            url_title2.style.fontSize = "larger"
            url_title2.style.fontWeight = "bolder"
            url_phono_github.style.transition = "all ease 2s"
            url_phono_github.style.textDecoration = "none"
            url_phono_github.style.fontWeight = "bolder"
            url_phono_github.style.marginLeft = "170px"
            //icons
            wwww_icon.style.display = "inline-block"
            github_icon.style.display = "inline-block"

        } else {

        }
    }
    MediaFunct2(); // call the fnct !!
})

row1_col1.addEventListener("mouseleave", () => {
    //col1 and col2 , row1
    function MediaFunct5(x) {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            row1_col1.style.transition = "all ease 3s"
            row1_col2.style.transition = "all ease 3s"
            row1_col1.style.width = "" //empty or initial value : 650px
            row1_col2.style.width = "" //empty or initial value : 650px
        }
    }
    MediaFunct5();

    //Date
    date_phono.style.transition = "all ease 2s"
    date_phono.style.fontSize = ""
    date_phono_start.innerHTML = "''"
    date_phono_start.style.fontWeight = ""
    date_phono.style.animation = "none"
    date_phono_end.innerHTML = "''"
    date_phono_end.style.fontWeight = ""
    //url title
    url_title1.style.transition = "all ease 2s"
    url_title1.style.color = ""
    url_title1.style.fontSize = ""
    url_title1.style.fontWeight = ""
    url_phono.style.transition = "all ease 2s"
    url_phono.style.textDecoration = "none"
    url_phono.style.fontWeight = ""
    url_phono.style.marginLeft = ""
    //url address
    url_title2.style.transition = "all ease 2s"
    url_title2.style.color = ""
    url_title2.style.fontSize = ""
    url_title2.style.fontWeight = ""
    url_phono_github.style.transition = "all ease 2s"
    url_phono_github.style.textDecoration = "none"
    url_phono_github.style.fontWeight = ""
    url_phono_github.style.marginLeft = ""
    //icons
    wwww_icon.style.display = "none"
    github_icon.style.display = "none"


})


row1_col2.addEventListener("mouseover", () => {


    function MediaFunct3(x) {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            //col1 and col2 , row1
            row1_col1.style.transition = "all ease 3s"
            row1_col2.style.transition = "all ease 3s"
            row1_col1.style.width = "400px"
            row1_col2.style.width = "800px"
            //project 2
            //Date
            date_morocco.style.transition = "all ease 2s"
            date_morocco.style.fontSize = "larger"
            date_morocco_start.innerHTML = "'15-07-2021'"
            date_morocco_start.style.fontWeight = "bolder"
            date_morocco.style.animation = "shake 4s"
            date_morocco_end.innerHTML = "'01-10-2021'"
            date_morocco_end.style.fontWeight = "bolder"
            //url title
            url_title3.style.transition = "all ease 2s"
            url_title3.style.color = "white"
            url_title3.style.fontSize = "larger"
            url_title3.style.fontWeight = "bolder"
            url_morocco.style.transition = "all ease 2s"
            url_morocco.style.textDecoration = "none"
            url_morocco.style.fontWeight = "bolder"
            url_morocco.style.marginLeft = "170px"
            //url address
            url_title4.style.transition = "all ease 2s"
            url_title4.style.color = "white"
            url_title4.style.fontSize = "larger"
            url_title4.style.fontWeight = "bolder"
            url_morocco_github.style.transition = "all ease 2s"
            url_morocco_github.style.textDecoration = "none"
            url_morocco_github.style.fontWeight = "bolder"
            url_morocco_github.style.marginLeft = "170px"
            //icons
            wwww_icon2.style.display = "inline-block"
            github_icon2.style.display = "inline-block"
        }
    }
    MediaFunct3();

})

row1_col2.addEventListener("mouseleave", () => {

    //col1 and col2 , row1
    function MediaFunct6(x) {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            row1_col1.style.transition = "all ease 3s"
            row1_col2.style.transition = "all ease 3s"
            row1_col1.style.width = "650px"
            row1_col2.style.width = "650px"
        }
    }
    MediaFunct6();

    //project 2
    //Date
    date_morocco.style.transition = "all ease 2s"
    date_morocco.style.fontSize = ""
    date_morocco_start.innerHTML = "''"
    date_morocco_start.style.fontWeight = ""
    date_morocco.style.animation = "none"
    date_morocco_end.innerHTML = "''"
    date_morocco_end.style.fontWeight = ""
    //url title
    url_title3.style.transition = "all ease 2s"
    url_title3.style.color = ""
    url_title3.style.fontSize = ""
    url_title3.style.fontWeight = ""
    url_morocco.style.transition = "all ease 2s"
    url_morocco.style.textDecoration = "none"
    url_morocco.style.fontWeight = ""
    url_morocco.style.marginLeft = ""
    //url address
    url_title4.style.transition = "all ease 2s"
    url_title4.style.color = ""
    url_title4.style.fontSize = ""
    url_title4.style.fontWeight = ""
    url_morocco_github.style.transition = "all ease 2s"
    url_morocco_github.style.textDecoration = "none"
    url_morocco_github.style.fontWeight = ""
    url_morocco_github.style.marginLeft = ""
    //icons
    wwww_icon2.style.display = "none"
    github_icon2.style.display = "none"

})


//Interests section
const interests_section = document.querySelector("#interests")
const interests_inner = document.querySelector("#interests .interests-inner")


interests_section.addEventListener("mouseover", functionTest)
function functionTest() {
    Cursor6.style.display = "inline-block"
}

interests_section.addEventListener("mouseleave", () => {
    Cursor6.style.display = "none"
})


//inner section
interests_inner.addEventListener("mouseover", () => {
    interests_inner.style.transition = "all ease 2s"
    // interests_inner.style.backgroundImage = "url('/assets/img/interests-bg.png')" to be removed, css instead 
    interests_inner.style.backgroundRepeat = "no-repeat"
    interests_inner.style.backgroundSize = "cover"
    interests_inner.style.backgroundPosition = "center center"
    interests_inner.style.padding = "200px"

    // divs inside the inner section
    //div1
    interests_inner.children[0].addEventListener("mouseover", test1)
    function test1() {
        interests_inner.style.transition = "all ease 2.5s"
        interests_inner.children[0].style.transition = "all ease 1.5s"
        interests_inner.children[0].style.marginLeft = "20px" // the 1st div
        setTimeout(() => {
            interests_inner.children[0].children[1].style.color = "white" //the p tag in the 1st div
        }, 500);
        interests_inner.style.backgroundImage = "url('/assets/img/sports.png')"
        interests_inner.style.backgroundRepeat = "no-repeat"
        interests_inner.style.backgroundSize = "cover"
        interests_inner.style.backgroundPosition = "center center"
        interests_inner.style.padding = "100px"
    }
    interests_inner.children[0].addEventListener("mouseleave", testt)

    function testt() {
        interests_inner.children[0].style.marginLeft = "" // the 1st div
        interests_inner.children[0].children[1].style.color = "black" //the p tag in the 1st div
        interests_inner.style.backgroundImage = ""
        interests_inner.style.backgroundRepeat = ""
        interests_inner.style.backgroundSize = ""
        interests_inner.style.backgroundPosition = ""
        interests_inner.style.padding = ""
    }
    //div 2
    interests_inner.children[1].addEventListener("mouseover", () => {
        interests_inner.style.transition = "all ease 2.5s"
        interests_inner.children[1].style.transition = "all ease 1.5s"
        interests_inner.children[1].style.transform="scale(1.2)" // the 2 div
        setTimeout(() => {
            interests_inner.children[1].children[1].style.color = "white" //the p tag in the 2nd div
        }, 500);
        interests_inner.style.backgroundImage = "url('/assets/img/books.png')"
        interests_inner.style.backgroundRepeat = "no-repeat"
        interests_inner.style.backgroundSize = "cover"
        interests_inner.style.backgroundPosition = "center center"
        interests_inner.style.padding = "100px"
    })

    interests_inner.children[1].addEventListener("mouseleave", () => {
        interests_inner.children[1].style.marginLeft = "20px" // the 2 div
        interests_inner.children[1].children[1].style.color = "black" //the p tag in the 2nd div
        interests_inner.style.backgroundImage = ""
        interests_inner.style.backgroundRepeat = ""
        interests_inner.style.backgroundSize = ""
        interests_inner.style.backgroundPosition = ""
        interests_inner.style.padding = ""
    })

    //div 3
    interests_inner.children[2].addEventListener("mouseover", () => {
        interests_inner.children[2].style.transition = "all ease 1.5s"
        interests_inner.children[2].style.marginLeft = "20px" // the 2 div
        setTimeout(() => {
            interests_inner.children[2].children[1].style.color = "white" //the p tag in the 2nd div
        }, 500);
        interests_inner.style.backgroundImage = "url('/assets/img/travel.png')"
        interests_inner.style.backgroundRepeat = "no-repeat"
        interests_inner.style.backgroundSize = "cover"
        interests_inner.style.backgroundPosition = "center center"
        interests_inner.style.padding = "100px"
    })

    interests_inner.children[2].addEventListener("mouseleave", () => {
        interests_inner.children[2].style.marginLeft = "" // the 2 div
        interests_inner.children[2].children[1].style.color = "black" //the p tag in the 2nd div
        interests_inner.style.backgroundImage = ""
        interests_inner.style.backgroundRepeat = ""
        interests_inner.style.backgroundSize = ""
        interests_inner.style.backgroundPosition = ""
        interests_inner.style.padding = ""
    })
})


interests_inner.addEventListener("mouseleave", () => {
    interests_inner.style.transition = "all ease 2s"
    interests_inner.style.backgroundImage = ""
    interests_inner.style.backgroundRepeat = ""
    interests_inner.style.backgroundSize = ""
    interests_inner.style.backgroundPosition = ""
    interests_inner.style.backgroundColor = "#f8f9fa"
    interests_inner.style.padding = ""
    //color of p
    interests_inner.children[0].children[1].style.color = "black"
    interests_inner.children[1].children[1].style.color = "black"
    interests_inner.children[2].children[1].style.color = "black"
    //margin of divs
    interests_inner.children[0].style.marginLeft="40px"
    interests_inner.children[1].style.marginLeft="40px"
    interests_inner.children[2].style.marginLeft="40px"
})




































// Code for showing a bg image and toggling the color of 2 spans in skills sections , in viewports smaller than 992px
// repeating the code 100 times

function ChangeBgImage() {

    console.log("JSImg")
    document.querySelector(".dev-icons-sm-screen").style.backgroundImage = "url('/assets/img/js_img.png')"
    document.querySelector(".dev-icons-sm-screen").style.backgroundRepeat = "no-repeat"
    document.querySelector(".dev-icons-sm-screen").style.backgroundSize = "cover"
    document.querySelector(".dev-icons-sm-screen").children[0].style.border = "medium black solid"
    //grand grand child , 1st child of the 1st child of the 3th child of dev icons sm
    // document.querySelector(".dev-icons-sm-screen").children[4].children[0].children[0].style.color="red" 

    setTimeout(() => {
        console.log("HTMLImg")
        document.querySelector(".dev-icons-sm-screen").children[0].style.border = "none"
        document.querySelector(".dev-icons-sm-screen").style.backgroundImage = "url('/assets/img/html5_img.png')"
        document.querySelector(".span1").style.color = "white"
        document.querySelector(".dev-icons-sm-screen").children[1].style.border = "medium black solid"
    }, 1000);

    setTimeout(() => {
        console.log("CssImg")
        document.querySelector(".dev-icons-sm-screen").children[1].style.border = "none"
        document.querySelector(".dev-icons-sm-screen").style.backgroundImage = "url('/assets/img/css3_img.png')"
        document.querySelector(".span1").style.color = "black"
        document.querySelector(".span2").style.color = "white"
        document.querySelector(".dev-icons-sm-screen").children[2].style.border = "medium black solid"
    }, 2000);

    setTimeout(() => {
        console.log("BsImg")
        document.querySelector(".dev-icons-sm-screen").children[2].style.border = "none"
        document.querySelector(".dev-icons-sm-screen").style.backgroundImage = "url('/assets/img/bootstrap_img.png')"
        document.querySelector(".span1").style.color = "white"
        document.querySelector(".span2").style.color = "black"
        document.querySelector(".dev-icons-sm-screen").children[3].style.border = "medium black solid"
    }, 3000);

    setTimeout(() => {
        console.log("SassImg")
        document.querySelector(".dev-icons-sm-screen").children[3].style.border = "none"
        document.querySelector(".dev-icons-sm-screen").style.backgroundImage = "url('/assets/img/sass_img.png')"
        document.querySelector(".span1").style.color = "black"
        document.querySelector(".span2").style.color = "white"
        document.querySelector(".dev-icons-sm-screen").children[6].style.border = "medium black solid"
    }, 4000);

    setTimeout(() => {
        console.log("VueImg")
        document.querySelector(".dev-icons-sm-screen").children[6].style.border = "none"
        document.querySelector(".dev-icons-sm-screen").style.backgroundImage = "url('/assets/img/vue_img.png')"
        document.querySelector(".span1").style.color = "white"
        document.querySelector(".span2").style.color = "black"
        document.querySelector(".dev-icons-sm-screen").children[7].style.border = "medium black solid"

    }, 5000);

    setTimeout(() => {
        console.log("reactImg")
        document.querySelector(".dev-icons-sm-screen").children[7].style.border = "none"
        document.querySelector(".dev-icons-sm-screen").style.backgroundImage = "url('/assets/img/react_img.png')"
        document.querySelector(".span1").style.color = "black"
        document.querySelector(".span2").style.color = "white"
        document.querySelector(".dev-icons-sm-screen").children[8].style.border = "medium black solid"
    }, 6000);

    setTimeout(() => {
        console.log("nodeImg")
        document.querySelector(".dev-icons-sm-screen").children[8].style.border = "none"
        document.querySelector(".dev-icons-sm-screen").style.backgroundImage = "url('/assets/img/node8_img.png')"
        document.querySelector(".span1").style.color = "white"
        document.querySelector(".span2").style.color = "black"
        document.querySelector(".dev-icons-sm-screen").children[9].style.border = "medium black solid"
    }, 7000);
    setTimeout(() => {
        document.querySelector(".dev-icons-sm-screen").children[9].style.border = "none"
    }, 8000);

}
//execute ChangeBgImage() every 1 seconde function, only if the user scroll position of the page is between 3000 and 4000 px,
// meaning he arrived at icons section
window.addEventListener("scroll", BgImg_onHeight_Pos, false);

function BgImg_onHeight_Pos() {
    let body = document.querySelector("body")
    if (window.scrollY > 3000 && window.scrollY < 4000) { //this = window 
        ChangeBgImage()
        console.log("success; the scrollY position is now betwwen 3000 and 4000px")
        window.removeEventListener("scroll", BgImg_onHeight_Pos, false);
        //it is important to remove the event listener once the scroll position is between 3000 and 4000px, INSIDE the if Statement !!
        // otherwise the same ChangeBgImage() code will be excecuted over and over, each 100 px of scrolling !
    } else {
        console.log("the scrollY position is not betwwen 3000 and 4000px")
    }
}




//increase the height of Icons section on click

document.querySelector(".dev-icons-sm-screen").addEventListener("click", () => {
    document.querySelector(".dev-icons-sm-screen").style.transition = "all ease 3s"
    document.querySelector(".dev-icons-sm-screen").style.height = "650px"
    setTimeout(() => {
        document.querySelector(".dev-icons-sm-screen").style.height = ""
    }, 10000);
})












//why not working ?

// let i = 1;
// do {
//     Loop1()
//     console.log("i")
//     i++;
// } while (window.matchMedia("(max-width: 900px)").matches && i < 10)