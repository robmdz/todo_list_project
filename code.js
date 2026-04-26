function add_tasks(info){
    const task_list = document.getElementById("tasks_list")

    const task_element = task_list.appendChild(document.createElement("li"))
    task_element.id = "task_element"

    const task_container = task_element.appendChild(document.createElement("div"))
    task_container.id = "task_container"

    const check_icon = task_container.appendChild(document.createElement("img"))
    check_icon.src = "/icons and imgs/check_button.svg"
    check_icon.id = "check_icon"

    const task_text = task_container.appendChild(document.createElement("span"))
    task_text.appendChild(document.createTextNode(info))
    task_text.id = "task_text"

    const delete_icon = task_container.appendChild(document.createElement("img"))
    delete_icon.src = "/icons and imgs/delete_button_img.svg"
    delete_icon.id = "delete_icon"

    let isClicked = false
    check_icon.addEventListener("click", ()=> {
        isClicked = !isClicked
        check_task(task_element, isClicked)
        })

    delete_icon.addEventListener("click", (e)=> {
        delete_task(e.target.parentElement)}) 
}

const input_information = document.getElementById("new_task")
const btn = document.getElementById("add_task")

btn.addEventListener("click", ()=>{
    if (input_information.value != ""){
        add_tasks(input_information.value)
    }
    input_information.value = ""
})


function delete_task(task){
    task.remove()

}

function check_task(task, state){
        if (state == true){
        task.style.textDecoration = "line-through" 
        } 
        else{
        task.style.textDecoration = "none" 
        } 
}