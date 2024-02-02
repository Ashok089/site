
 let images = document.getElementById("image")
let photos = [ "s2.png" ,"s4.png" ,"s1.png"];

setInterval(function()
{
   
        let random = Math.floor(Math.random()*photos.length);  //  for getting anything random we have to use this function.
        image.src = photos[random]  //  id.src = array[random]
        
    
},3000)


function Menu(e)
{
   let list = document.querySelector('ul')
        e.name === "menu" ? 
        ( e.name = "close" ,list.classList.add('top-[80px]') ,  list.classList.add('opacity-100')) : 
        (e.name = "menu" ,list.classList.remove('top-[80px]') , list.classList.remove('opacity-100') )

              

        
     
}
    


