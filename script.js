function buildGrid(x) {
    for(i=0; i<x; i++){
        for(y=0; y<x; y++){
            const makeDiv = document.querySelector('#container');
            const newDiv = document.createElement('div');
            newDiv.classList.add('box');
            makeDiv.appendChild(newDiv);
        }
    }
}

buildGrid(16);
