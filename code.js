function add_tasks(info){

    task = document.createElement("label")
    task_checkbox = document.createElement("input")
    task_checkbox.type = "checkbox"
    task_information = document.createTextNode(info)
    document.body.append(task_checkbox)
     document.body.append(task_information)

};
const input_information = document.getElementById("new_task")
const btn = document.getElementById("add_task");
btn.addEventListener("click", ()=>{
    add_tasks(input_information.value)
})