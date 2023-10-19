const title= document.getElementById("title") ;
const description= document.getElementById("description");
const form= document.querySelector("form");
const container= document.querySelector(".container");

 const tasks= localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")):[] ;
 showAllTasks() ;
// const tasks= [];

function showAllTasks(){
    tasks.forEach((value, index)=>{
      const div= document.createElement("div");
      div.setAttribute("class","task");

      const innerDiv= document.createElement("div");
      innerDiv.setAttribute("class","items");
      div.append(innerDiv);

      const h3= document.createElement("h3");
      h3.innerText= value.title ;
      innerDiv.append(h3);

      const p= document.createElement("p");
      p.innerText= value.description ;
      innerDiv.append(p);

      const button= document.createElement("button");
      button.setAttribute("class","btn");
      button.innerText= "Remove" ;

      button.addEventListener("click", ()=>{
        removeTasks();
        tasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showAllTasks();
      })
      div.append(button);

      container.append(div);
    })  
}

function removeTasks(){
    tasks.forEach(()=>{
        const div= document.querySelector(".task");
        div.remove() ;
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks() ;
    tasks.push({
        title: title.value ,
        description: description.value
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks() ;

})