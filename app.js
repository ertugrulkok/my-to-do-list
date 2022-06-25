function addtoTheList() {
    var todoInput = document.querySelector(".myTodo");
    var tobedone = document.getElementById("tobedone");
    var entered = document.getElementById("myTodo").value;
    var todoList = document.getElementsByTagName("li");
    var closeButton = document.getElementsByClassName("close");
    var removeBtn = document.getElementById("remove_all")

    if(entered == ""){alert("write something to do")}
    else{
      
    added = document.createElement("li");
    tobedone.appendChild(added);
    added.innerHTML = entered;
    todoInput.value = "";}
      
   for (i=0; i < todoList.length; i++){
        var createSpan = document.createElement("span");
        var closeElement = document.createTextNode("X");
        createSpan.className = "close";
        createSpan.append(closeElement);
        todoList[i].append(createSpan);
        
    }

  

    for(i = 0; i < closeButton.length; i++){
        closeButton[i].addEventListener("click", function() {
            var parent = this.parentElement;
            parent.style.display = "none"
        })
    }
    for(let i = 0; i < todoList.length; i++){
        todoList[i].addEventListener("click", function(){
            todoList[i].classList.toggle("checked")
            })
        }
       
        if(closeButton.length > 0){removeBtn.style.display= "block"

       }

  }

  function remove(){
    tobedone.replaceChildren();
    var removeBtn = document.getElementById("remove_all")
    removeBtn.style.display= "none"

  }
  
 