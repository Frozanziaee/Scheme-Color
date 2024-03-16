const button = document.querySelector("button")

const url = "https://www.thecolorapi.com/scheme?"

document.addEventListener("click", (e) => {
    if(e.target === button){
        fetchColors()
    }
    else if (e.target.dataset.color) {
        navigator.clipboard.writeText(e.target.dataset.color)
        getCopyColor()
    }
})
function fetchColors() {
    const inputColor = document.querySelector(".seed-color").value.slice(1)
    const selectMode = document.querySelector(".select-mode").value

    const endpoint = `${url}mode=${selectMode}&hex=${inputColor}`

    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderColors(data.colors)
    })
}

function renderColors(colors){
    let feedHtml = ``
    colors.forEach((color) => {
        const colorCode = color.hex.value
    
    feedHtml += `
    <div class="color" data-color="${colorCode}">
        <div class="color-div " style="background-color: ${colorCode}" data-color="${colorCode}"></div>
        <p class="color-code" data-color="${colorCode}">${colorCode}</p>
    </div>
   `
document.querySelector("main").innerHTML = feedHtml
})
}

function getCopyColor(){
    const copyColor = document.querySelector(".copy-color")
    copyColor.style.display = "block"
    setTimeout(()=> {
        copyColor.style.display = "none"
    }, 2000)
    
}


       
     
