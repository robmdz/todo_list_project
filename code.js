function add_tasks(info){
    const task_list = document.getElementById("tasks_list")
    const task_element = task_list.appendChild(document.createElement("li"))
    task_element.appendChild(document.createTextNode(info))
    const delete_button = task_element.appendChild(document.createElement("button"))
    delete_button.style.backgroundColor = "red"
    delete_button.style.padding = "8px"
    delete_button.addEventListener("click", (e)=> {
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