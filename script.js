const input = document.getElementById("input-box");
const list = document.getElementById("to-do-list");
const modal = document.getElementById("modal");
const okBtn = document.getElementById("okClose");

function addTask(){
    if(input.value ===""){
        //alert("Write a task to do. You must write something!");
        
       modal.style.display = "flex";
    }

    else{
        let listItem = document.createElement("li");
        listItem.innerText = input.value;
        list.appendChild(listItem);

        let close = document.createElement("span");
        close.innerHTML="\u00d7";

        listItem.appendChild(close);

        input.value ="";

        
    }

    saveContent();
}

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        
        if(input.value ===""){
        //alert("Write a task to do. You must write something!");
            modal.style.display = "flex";
        }

        else{
            let listItem = document.createElement("li");
            listItem.innerText = input.value;
            list.appendChild(listItem);

            let close = document.createElement("span");
            close.innerHTML="\u00d7";

            listItem.appendChild(close);

            input.value ="";

            
        }

        saveContent();
    }
});


okBtn.addEventListener("click", function(){
    modal.style.display = "none";
});


modal.addEventListener("click", function(e){
    if(e.target === modal){
        e.target.style.display = "none";
    }
});


list.addEventListener("click", function(e){
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveContent();
    }

    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveContent();
    }
});

function saveContent(){
    localStorage.setItem("data", list.innerHTML);
}

function showContent(){
    list.innerHTML = localStorage.getItem("data");
}

showContent();