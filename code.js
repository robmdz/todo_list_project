function add_tasks(info){
    const task_list = document.getElementById("tasks_list")
    const task_element = task_list.appendChild(document.createElement("li"))
    const task_info = task_element.appendChild(document.createTextNode(info))
    const delete_button = task_element.appendChild(document.createElement("button"))
    delete_button.style.backgroundColor = "red"
    delete_button.style.padding = "8px"
    const check_button = task_element.appendChild(document.createElement("button"))
    check_button.style.backgroundColor = "blue"
    check_button.style.padding = "8px"
    let isClicked = false
    check_button.addEventListener("click", (e)=> {
        isClicked = !isClicked
        check_task(task_element, isClicked)
        })

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

function check_task(task, state){
        if (state == true){
        task.style.textDecoration = "line-through" 
        } 
        else{
        task.style.textDecoration = "none" 
        } 
}