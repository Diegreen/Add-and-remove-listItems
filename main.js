const shoppingList  = document.getElementById("list");
const input = document.getElementById("input");
const addButton = document.getElementById("add");
addButton.innerText = "Adicionar"
const resetButton = document.getElementById("reset");
resetButton.innerText = "Limpar lista"

let arrayList = [];

function reloadList (arrayList) {

    shoppingList.innerHTML = ""
    
    for(let i = 0; i < arrayList.length; i++) {

        let currentElement = arrayList[i];
        currentElement.id = i;
        shoppingList.append(currentElement);
    }
}

reloadList(arrayList)


function buttonRemove () {
    
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    
    removeButton.addEventListener("click", function(e) {
        let newList = [];
        
        for(i = 0; i < arrayList.length; i++) {
            if(i !== Number(e.composedPath()[1].id)) {
                newList.push(arrayList[i]);
            }
        }
        
        arrayList = newList;
        reloadList(arrayList);
    });
    return removeButton;
}



buttonRemove()

function addButtonOnClick () {
    let newItem = document.createElement('li');
    let paragraph = document.createElement('p');
    let removeButton = buttonRemove();
    if(input.value) {
        paragraph.innerText = input.value;
        
        newItem.appendChild(paragraph) 
        newItem.appendChild(removeButton) ;
        
        input.value = "";
        
        arrayList.push(newItem)
        
        reloadList(arrayList)
    }
}

addButton.addEventListener("click", addButtonOnClick);

function onClickResetFunction () {
    shoppingList.innerHTML = "";
    
    arrayList = [];
}

resetButton.addEventListener('click', onClickResetFunction);

