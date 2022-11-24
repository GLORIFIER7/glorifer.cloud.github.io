console.log("connected");

//Get Access to the button
let button = document.querySelector("#button");

//querySelector method - returns the first element that matches a CSS selector.

//Get Access to the ul tag (parent tag of li tag)
let formContent = document.querySelector("formContent");

// onsubmit Add new task to the new document object.

button.addEventListener("click", () => {
    // addEventlistener() it is a method
    /*
        "click" = event
    */

        let userInput = document.querySelector("#userInput").value;
        if(userInput.length > 5)
        {
            let li = document.createElement("li");


            li.className="todo";

            let node = document.createTextNode(userInput);
            
            li.appendChild(node);

            todoWrapper.appendChild(li);

            document.querySelector("#userInput").value="";
        }
        else
        {
            alert("You must enter 5 letters");
        }
});

//DELETE LIST
document.querySelector("formContent").addEventListener("click", (e) => {
    if (e.target.className === "todo") {
      let msg = confirm(
        `Are you sure you want to delete \n ${e.target.innerText}`
      );

      if (msg == true) {
        document.querySelector("formContent").removeChild(e.target);
      }
    }
  });