console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function (){
    dog4();
    all_dogs();
    letter();
});

let dogs = []
function dog4(){
    let imageUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imageUrl)
        .then(res => res.json())
        .then(res => res.message.forEach(image => {
            addImage(image)
        })) 
        
}

function addImage(dogPicUrl){
let getDiv = document.getElementById("dog-image-container")
let newImage = document.createElement("img")
newImage.src = dogPicUrl
getDiv.appendChild(newImage)
}

function all_dogs(){
    let dogsURL= "https://dog.ceo/api/breeds/list/all"
    fetch(dogsURL)
    .then(res => res.json())
    .then(res => {
        dogs = Object.keys(res.message)
        dogs.forEach(dog => addDog(dog))
  
        console.log("response", res)
        
    })
        
    
}


function addDog(dog){
    let ul = document.querySelector("#dog-breeds")
    let li = document.createElement("li")
    li.innerText = dog
    li.style.cursor = "pointer"
    ul.appendChild(li)
    li.className = "dogName"
    //console.log("name", li.classname)
    li.addEventListener('click', updatecolor)
}

function updatecolor (event){
  const update = event.target.style.color = "blue";

 // makeArray.forEach(dog => ul.id + 1)
  //console.log(event)
}

//get alphabet dogs
// const breedsArray = [];
// 
// getDropDown.addEventListener('change',(event) => {
//     
//     const filter = breedsArray.filter((dog) => dog.startsWith(selectLetter))
//     ul.innerHTML = all_dogs(filter)
// })
function updateBreed (breeds){
    console.log("breeds", breeds)
   const dogBreeds = document.getElementById("dog-breeds")
   removeChildren(dogBreeds)
   breeds.forEach(breed => addDog(breed))

}
function removeChildren(breeds){
    let child = breeds.lastElementChild
    while(child){
        breeds.removeChild(child)
    child = breeds.lastElementChild
    }
}

function filter (letter){
    console.log("letter", letter)
updateBreed(dogs.filter((dog) => dog.startsWith(letter)))
}

function letter (){
    const getDropDown = document.getElementById('breed-dropdown');
    getDropDown.addEventListener('change', function(event){
        filter(event.target.value)
        console.log("event", event.target.value)
    })
    //const selectLetter = event.target.value
}