const debug_color = document.querySelectorAll("#debugColor");
const debug_button = document.querySelector("#debugButton");

let color = 0;

console.warn(debug_button.checked);

debug_button.addEventListener("change", () => {
    if (debug_button.checked) {
        debug_color.forEach(div => {
            div.style.backgroundColor = `oklch(100% 0.3 ${color})`;
            color = color + 100;
        });
    } else {
        color = 0
        debug_color.forEach(div => {
            div.style.backgroundColor = "transparent";
        });
    }
});
