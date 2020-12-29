function loader(columns,rows) {
    for(y=0;y<rows;y++) {
        let row = document.createElement("div");
        row.setAttribute("id", "r" + (y+1));
        row.setAttribute("class","row");
        for(x=0;x<columns;x++){
            let cell = document.createElement("div");
            cell.setAttribute("id",row.id + "c" + (x+1));
            cell.setAttribute("class","cell");
            row.appendChild(cell);
        }
        document.getElementById("eas-canvas").appendChild(row);
    }
    $(".cell").click((e)=> {
        $(e.target).toggleClass("active-cell");
    })
}

function clearCells(){
    let cells = prompt("How many rows or columns should your new board be?\n\n Your response must be a single number between 1 and 100","10");
    cells = parseInt(cells);
    if(isNaN(cells)) {
        alert("Response must be a number")
    } else {
        $(".row").remove();
        cells = Math.min(cells,100);
        cells = Math.max(0,cells);
        loader(cells,cells)
    }
}