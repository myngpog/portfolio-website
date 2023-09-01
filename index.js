// Scroll counter
console.log("hi")

window.onload = (event) => {
  console.log("page is fully loaded");
};

$( document ).ready(function() {
    const massiveContainer = document.querySelector('.main-visual');
    if ($(window).width() <= $(window).height()){
       massiveContainer.style.backgroundImage = `var(--v1)`;
       massiveContainer.stlye.backgroundAttachment = 'scroll';
       massiveContainer.style.backgroundSize = 'cover';
       
    }
});

// changes background based on scrolling ig
window.addEventListener("scroll", (event) => {
    const massiveContainer = document.querySelector('.main-visual');
    const lastKnownScrollPosition = window.scrollY
    const lastKnownScrollPositionVH = pxtovhConversion(lastKnownScrollPosition)
    console.log(Math.round(lastKnownScrollPositionVH))
    // mobile devices (when height > width)
    if ($(window).width() <= $(window).height()){
        var imageNumber = vhtoImageMobile(lastKnownScrollPositionVH)
        massiveContainer.style.backgroundImage = `var(--v${imageNumber})`;
        massiveContainer.style.transition = "all 0.35s";
    }
    // regular device
    else{
        var imageNumber = vhtoImage(lastKnownScrollPositionVH)
        massiveContainer.style.backgroundImage = `var(--${imageNumber})`;}
        massiveContainer.style.transition = "all 0.35s";
});

// remove hash if at the bottom
history.scrollRestoration = "manual";

const removeAnchor = () => {
  setTimeout(() => {
    window.history.replaceState({}, "", window.location.href.split("#")[0]);
  }, 100);
};

function pxtovhConversion(y){
    vhUnit = 100*(y/window.innerHeight)
    return vhUnit
}

function vhtoImageNEW(vh){
    // image = Math.round(vh/7.19)
    image = Math.round(vh/31.86)
    if (image == 0){
        image = 1
    }
    return image
}

function vhtoImage(vh){
    image = Math.round(vh/6.45)
    if (image == 0){
        image = 1
    }
    return image
}

function vhtoImageMobile(vh) {
    image = Math.round(vh/33.33)
    if (image == 0){
        image = 1
    }
    return image
}