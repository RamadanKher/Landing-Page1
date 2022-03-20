let section1 = document.getElementById("section1")
let section1Item1 =document.getElementById("section1Item1")
let section1Item2 =document.getElementById("section1Item2")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section3Item = document.querySelectorAll(".section3Item")
let section3ItemRight = document.querySelectorAll(".section3ItemRight")
let section5 = document.getElementById("section5")
let sction5Container = document.getElementById("sction5Container")
let section6 = document.getElementById("section6")

// heder Img Anmation
let mainImg = document.getElementById("mainImg");
window.onload =function () {
    mainImg.style.left="0"
}




window.onscroll=function () {
    if (window.scrollY >= section1.offsetTop-100) {
        section1Item1.style.right="0"
        section1Item2.style.left="0"
        
    }
    if (window.scrollY >= section2.offsetTop-100) {
        section2.style.opacity="1" 
    }
    if (window.scrollY >= section3.offsetTop-100) {
        for (let i = 0; i < section3Item.length&&section3ItemRight.length; i++) {
            section3Item[i].style.right="0" 
            section3Item[i].classList.add("tanformAnmtion")


            section3ItemRight[i].style.left="0"
            section3ItemRight[i].classList.add("tanformAnmtion")
            
        }
        
    }
    if (window.scrollY >= section5.offsetTop-100) {
        sction5Container.style.top="0"
    
        
    }
    if (window.scrollY >= section6.offsetTop-100) {
        section6.style.opacity="1"
    
        
    }
}
