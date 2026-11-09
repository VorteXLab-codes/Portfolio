const menu = document.getElementById("menu");
const roll = document.getElementById("roll");

menu.addEventListener('click', () => {
roll.classList.toggle("grid-rows-[1fr]");
roll.classList.toggle("grid-rows-[0fr]");
roll.classList.toggle("opacity-100");
roll.classList.toggle("opacity-0");
})
const copyBtn = document.getElementById("copyBtn");
const originaltext = copyBtn.innerHTML
copyBtn.addEventListener("click", () => {
    const text = "emmanuelalabi997@gmail.com";
    navigator.clipboard.writeText(text).then(() => {
        if(true){
        console.log("Copied!");
        copyBtn.innerHTML = "Copied!"

        setTimeout(() => {
            copyBtn.innerHTML = originaltext
        }, 2000
        )}
        // if(!true){
        //     console.error();
        // }
    })
});
const viewmore = document.getElementById("MoreProjects");
const view = document.getElementById("View");
const whole = document.getElementById("whole");
const detail = document.getElementById("detail");
const viewtext = document.getElementById("viewtext");



view.addEventListener("click", () => {
    viewmore.classList.toggle("block");
    viewmore.classList.toggle("hidden");
    detail.textContent = detail.textContent === "More projects, same standard of work" ? 
    "interest in my work? check my github": "More projects, same standard of work";
    viewtext.textContent = viewtext.textContent === "View more projects" ? 
    "Return": " View more projects";
})