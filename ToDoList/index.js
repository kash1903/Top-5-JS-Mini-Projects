let items = [];

const itemDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey="items"


function renderItems(){
        itemDiv.innerHTML=null;

    for (const[idx,item] of Object.entries(items)){

        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.textContent=item;
        text.style.display = "inline"
        text.style.marginRight= "10px"


        const button = document.createElement("button")
        button.textContent = "X"
        button.style.backgroundColor = "red"
        button.style.padding="5px"
        button.style.text="white"
        button.onclick = ()=> removeItems(idx)

        container.appendChild(text)
        container.appendChild(button)


        itemDiv.appendChild(container)
    }
}


function loadItems(){
const oldItems = localStorage.getItem(storageKey)
if(oldItems) items = JSON.parse(oldItems)
    renderItems()
}




function saveItems(){

    const stringItems= JSON.stringify(items);
    localStorage.setItem(storageKey,stringItems)
}

function addItem(){

    const value = input.value;
    if(!value){
        alert("Cannot Add Empty Item !")
    }
    items.push(value)
    renderItems()
    input.value="";
    saveItems()

}

function removeItems(idx){
    items.splice(idx,1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded",loadItems);