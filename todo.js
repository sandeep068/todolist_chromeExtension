const items = [{"item":"my task","status": 0},
{"item":"my task", "status": 1}];

const itemsStr = JSON.stringify(items);

console.log(items);
console.log(itemsStr);


function fetchItems(){
    const itemsList = document.querySelector('ul.todo-items');
    itemsList.innerHTML = '';
    var newItemHTML = '';
    try{
        var items = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(items);
    
        for(vari = 0; i<itemsArr.length; i++){
            var status = '';
            if(itemsArr[i].status == 1)
                status = 'class="done"' ;
        }
        newItemHTML += `< data-itemindex = "${i}"$ {status}>
        <span class="item">${itemsArr[i].item}</span>
        <div><span>✔️</span><span>❌</span</div>
    </li>`;
 }
catch(e){

}
    function saveItems(){
        
    }
}