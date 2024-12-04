let formEl = document.querySelector("form");
let tbodyEl = document.querySelector("tbody");
let tableEl = document.querySelector("table");


let val = document.getElementById("val");


function onAdd(e){
    e.preventDefault();
let item = document.getElementById("item").value;
let price = document.getElementById("price").value;


tbodyEl.innerHTML +=`
<tr>
<td>${item}</td>
<td>${price}</td>
<td><button class = "delbtn"> Delete</button></td>
</tr>
`;

let sum = 0;
for(let i = 1; i<tableEl.rows.length;i++){
    sum = sum + parseInt(tableEl.rows[i].cells[1].innerHTML);
}

val.innerText = `Total cost is: ${sum}`;

}

function onDel(e){
    if(!e.target.classList.contains("delbtn"))
        {
            return;
}
let btn = e.target;
btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAdd);
tableEl.addEventListener("click", onDel);