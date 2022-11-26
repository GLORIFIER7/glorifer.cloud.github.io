console.log("connected");


let addButton = document.querySelector("#addButton");
let todoWrapper = document.querySelector(".todo-wrapper");

addButton.addEventListener("click",()=>{
    
    let userInput = document.querySelector("#userInput").value;

    if(userInput.length > 5){
        
        let li = document.createElement("li");
        let text = document.getElementById("userInput");

        
        li.className = "todo";

       
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id="todo-list";

        
        li.appendChild(checkbox);

       
        li.appendChild(document.createTextNode(text.value));

       
        todoWrapper.appendChild(li);

        
        document.querySelector("#userInput").value = "";

    }

    else {
        alert("It must be greater than 5 characters");
    }
}); 


function deleteItems(){
    let i;

    let ul = document.getElementById("listings");

    let items = ul.getElementsByTagName("li");

    for (i=0; i<items.length; i++){
        if(items[i].firstChild.checked)
        {
            ul.removeChild(items[i]);
            i=i-1;
        }
    }
}