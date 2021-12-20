const DevIcons = document.querySelector('#skills .dev-icons')

const div_icon1 = document.querySelector(".dev-icons div.icon1 img")
const div_icon2 = document.querySelector(".dev-icons div.icon2 img")
const div_icon3 = document.querySelector(".dev-icons div.icon3 img")
const div_icon4 = document.querySelector(".dev-icons div.icon4 img")
const div_icon5 = document.querySelector(".dev-icons div.icon5 img")
const div_icon6 = document.querySelector(".dev-icons div.icon6 img")
const div_icon7 = document.querySelector(".dev-icons div.icon7 img")
const div_icon8 = document.querySelector(".dev-icons div.icon8 img")




//Icon2
div_icon2.addEventListener("mouseover", () => {
    div_icon1.style.display = "none"
    div_icon3.style.display = "none"
    div_icon4.style.display = "none"
    div_icon5.style.display = "none"
    div_icon6.style.display = "none"
    div_icon7.style.display = "none"
    div_icon8.style.display = "none"
    // css3_img.style.display = "block"
    // html5_img.style.display = "none"
    // css3_img.style.marginTop = "15px"
})

div_icon2.addEventListener("mouseleave", () => {
    div_icon1.style.display = "inline-block"
    div_icon3.style.display = "inline-block"
    div_icon4.style.display = "inline-block"
    div_icon5.style.display = "inline-block"
    div_icon6.style.display = "inline-block"
    div_icon7.style.display = "inline-block"
    div_icon8.style.display = "inline-block" // css3_img.style.display = "none"
    // html5_img.style.display = "none"
    // css3_img.style.marginTop = ""
})