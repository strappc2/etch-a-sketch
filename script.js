const container = document.querySelector('#container');

function createGrid(rows, columns, container) {
    for (let i = 0; i < rows; i++) {
        var row = document.createElement('div');
        row.classList.add('grid-row')
        container.appendChild(row)
        for (let j = 0; j < columns; j++) {
            var div = document.createElement('div');
            div.classList.add("grid-item")
            row.appendChild(div)
        }
        
    }
    
}

createGrid(10, 10, container);

