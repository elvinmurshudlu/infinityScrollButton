let container = document.querySelector(".container")
let loadMore = document.querySelector("button")

function imageAdd(imagesNumber=10,screenPosition=0){
    let i =0
    while(i<imagesNumber){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((random) => random.json())
        .then((data)=>{
            let img = document.createElement("img")
            img.src = data.message
            container.appendChild(img)
            window.scrollTo(0,screenPosition)
        })
        i++
    }

    
}

imageAdd()

window.addEventListener("scroll",()=>{ 
    console.log("Window Scroll",window.scrollY)   
    console.log("Window InnerHigth",window.innerHeight)   
      
    // if(
    //     window.innerHeight +window.scrollY
    //     >=document.documentElement.scrollHeight-1)
    //     {
            
    //     setTimeout(()=>imageAdd(),3000)
    // }

})
loadMore.addEventListener("click",()=>imageAdd(10,(window.scrollY-(window.scrollY%10))))
// loadMore.addEventListener("click",()=>imageAdd())