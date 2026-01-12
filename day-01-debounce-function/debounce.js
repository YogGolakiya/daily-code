console.log("debounce.js loaded");

function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}
const handleSearch = debounce((text) => {
    console.log("Searching for:", text);
}, 500);
