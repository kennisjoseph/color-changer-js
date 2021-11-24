const mainButton = document.querySelector(".btn");
const body = document.body;
const colorName = document.querySelector("#kenis")
function randomColorGenerator(){
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);
    const mainColor = `rgb(${red}, ${green}, ${blue})`
    // console.log(mainColor)
    return mainColor;
}
mainButton.addEventListener("click",()=>{
    const mainColor = randomColorGenerator();
    body.style.background= mainColor;
    colorName.textContent = mainColor;
})