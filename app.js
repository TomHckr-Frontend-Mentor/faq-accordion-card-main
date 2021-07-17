const toggles = document.querySelectorAll(".toggle");

toggles.forEach(item => {
    item.addEventListener("click", e => {
    expand(item.querySelector(".arrow"), item.querySelector(".expandable"))
})})

console.log(document.querySelector('.woman-mobile').offsetHeight);
document.querySelector('.faq-graphics-mobile').style.height = document.querySelector('.woman-mobile').offsetHeight/2 + "px";
console.log(document.querySelector('.faq-graphics-mobile').offsetHeight);


function expand (arrow, expandable) {
    if (expandable.offsetHeight === 0) {
        const tl = gsap.timeline()
        tl
            .to(expandable, {
            duration: .3,
            lineHeight: 1,
            display: "block"
            })
            .to(expandable, {
                duration: .2,
                opacity: 1
            })
        gsap.to(arrow, {
            duration: .5,
            rotate: "180"
        })
    } else {
        const tl = gsap.timeline()
        tl
            .to(expandable, {
                duration: .2,
                opacity: 0
            })
            .to(expandable, {
                duration: .3,
                lineHeight: 0,
                marginTop: 0
            })
            .to(expandable, {
                display: "none",
            })
            .to(expandable, {
                marginTop: "10px",
            })
        gsap.to(arrow, {
            duration: .5,
            rotate: "0"
        })
    }
}