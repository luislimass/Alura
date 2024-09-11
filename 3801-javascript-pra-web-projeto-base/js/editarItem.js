export  const EditarItem = (elemento) =>{
    let novoItem = prompt("digite o novo nome do item:")

    if(novoItem !== null && novoItem.trim() !== "") {
        const ItemTextoAtualizado = elemento.querySelector("#item-titulo");
        ItemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if(estavaComprado){
            elemento.querySelector(".input-checkbox").checked = true
            elemento.querySelector(".checkbox-customizado").classlist.add("checked");
            ItemTextoAtualizado.style.textDecoration = "line-through";
        }
    }
}