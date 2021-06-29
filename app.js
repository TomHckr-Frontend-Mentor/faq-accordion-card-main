const arrows = document.querySelectorAll(".arrow");

arrows.forEach(item => {
    item.addEventListener("click", e => {
    expand(item, item.parentElement.querySelector(".expandable"))
})})

function expand (arrow, expandable) {
    const timeline = gsap.timeline({ paused: true });
    timeline
        .to(expandable, {
            duration: 0,
            lineHeight: 0,
            display: "",
            opacity: 0
        })
        .to(expandable, {
            duration: .3,
            lineHeight: 1
        })
        .to(expandable, {
            duration: .2,
            opacity: 1
        })
        .to(arrow, {
            duration: .5,
            rotate: "180"
        })
    timeline.pause()
    if (expandable.style.display === "none") {
        gsap.to(arrow, {
        rotate: "180deg"
        })
        timeline.resume();
        console.log(expandable.display)
    } else if (expandable.style.display === "") {
        timeline.restart();
    }
}