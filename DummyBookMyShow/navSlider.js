
// function navRendering(){
fetch('NavSlider.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_slider");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
 
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

// }





