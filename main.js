window.addEventListener('load', ()=> {
    var form = document.querySelector(".new-task-input");
    var input = document.querySelector(".ToDo");
    var list = document.querySelector(".Tasks");
    var finishTime = document.querySelector(".finish-time");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        var task = input.value;
        var finishtime = finishTime.value;


        var newTask = document.createElement("div");
        newTask.classList.add("Task");       /*新增一個class為Task的div*/
        

        var newContent = document.createElement("div");
        newContent.classList.add("Content");  /*新增一個Content為Task的div*/
        newTask.appendChild(newContent); /* 把newContent放到newTask的子節點 */


        var newInput = document.createElement("input");  /* 新增一個input class為text input為text value是.todo裡的字 只讀(readonly) */
        newInput.classList.add("text");
        newInput.type= "text";
        newInput.value = task;
        newInput.setAttribute("readonly","readonly");
        newContent.appendChild(newInput);       /* 在newContent的子節點新增newInput */


        var newTime = document.createElement("input");
        newTime.classList.add(".time");
        newTime.type = "date";
        newTime.value = finishtime;
        newTime.setAttribute("readonly","readonly");
        newContent.appendChild(newTime);


        var newActions = document.createElement("div"); /* 新增一個class為actions的div */
        newActions.classList.add("actions");


        var newEdit = document.createElement("button"); /*新增一個class為edit的button*/
        newEdit.classList.add("edit");
        newEdit.innerText = "修改";
        var newDelete = document.createElement("button"); /*新增一個class為delete的button*/
        newDelete.classList.add("delete");
        newDelete.innerText = "完成";
        newActions.appendChild(newEdit);        /*在actions的子節點新增 edit和delete*/
        newActions.appendChild(newDelete);

        newTask.appendChild(newActions);    /*在Task子節點新增Actions*/


        list.appendChild(newTask);         /*在Tasks子節點新增Task*/


        input.value="";          /* 把input裡的值清除 */
        finishTime.value="";


        newEdit.addEventListener('click',(e) => {
            if(newEdit.innerText == "修改"){
                newEdit.innerText = "儲存";
                newInput.removeAttribute("readonly","readonly");
                newInput.focus();
                newTime.removeAttribute("readonly","readonly");
            }
            else{
                newEdit.innerText="修改";
                newEdit.setAttribute("readonly","readonly");
                newTime.setAttribute("readonly","readonly");
            }
        });


        newDelete.addEventListener('click',(e) => {
            list.removeChild(newTask);
        });
    }) ;
});



