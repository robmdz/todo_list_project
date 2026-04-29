function add_tasks(info, tag){
    const max_task = 4

    const task_list = document.getElementById("tasks_list")

    if (max_task >= task_list.children.length){
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

        const importance_tag = task_container.appendChild(document.createElement("span"))
        importance_tag.appendChild(document.createTextNode(tag))
        importance_tag.id = "importance_tag"
        

        const delete_icon = task_container.appendChild(document.createElement("img"))
        delete_icon.src = "/icons and imgs/delete_button_img.svg"
        delete_icon.id = "delete_icon"

        let isClicked = false
        check_icon.addEventListener("click", ()=> {
            isClicked = !isClicked
            check_task(task_text, isClicked)
            })

        delete_icon.addEventListener("click", (e)=> {
            delete_task(e.target.parentElement.parentElement)})
    }
    else{
        alert("Delete a task")
    }
}

const input_information = document.getElementById("new_task")
const btn_send = document.getElementById("img_send")
const task_tag = document.getElementById("task_importance")

btn_send.addEventListener("click", send_task)
input_information.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        send_task();
    }
    })

function send_task(){
    if (input_information.value != ""){
        add_tasks(input_information.value, task_tag.value)
    }
    input_information.value = ""
}



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