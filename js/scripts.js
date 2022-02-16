function startGame() {
    var shipRotation = 0;
    let game = document.getElementById("map");
    let nave = document.createElement('img');
    nave.src = "../imgs/nave.png";
    nave.height = 100;
    nave.focus();
    nave.onmousedown = function(event) {
        shipRotation += 45;
        console.log(shipRotation);
        nave.style.transform = "rotate(" + shipRotation.toString() + "deg)";
        if (shipRotation >= 360) {
            shipRotation = 0;
        }
    }
    game.appendChild(nave);
}

function buildMap() {
    let map = document.getElementById("map");
    let grid = [
        [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 7, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 7, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 7, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 7, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 7, 0, 0, 0, 7, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 2, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 2, 7, 2, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 0, 0, 0, 2, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0]
    ]

    for (line in grid) {
        for 
    }
}

function buildMap(xLength, yLength) {
    let map = document.getElementById("map");
    map.style.display = "grid";
    /*
    0 - Terreno vacio
    1 - Camino
    2 - Parcela
    */
    let grid = mapGenerator(xLength, yLength);
    let x = grid[0].length;
    let y = grid.length;
    map.style.gridTemplateColumns = "50px ".repeat(x);

    let idIteration = 0;
    let mapPart;
    for (let i in grid) {
        let line = grid[i];
        for (let j in line) {
            let part = line[j];
            let type;
            if (part == 1) {
                type = "path";
            }else if (part == 2) {
                type = "parcell";
            }else {
                type = "void";
            }
            mapPart = buildPart(type);
            mapPart.setAttribute("id", idIteration);
            map.appendChild(mapPart);
            idIteration++;
        }
    }
}

function inRange(x, min, max) {
    return ((x - min) * (x - max) <= 0);
}

function buildPart(type) {
    let parcell = document.createElement("div");
    parcell.className = type;

    return parcell;
}

function mapGenerator(sizeX, sizeY) {
    let map = [];
    let line;
    for (let i = 0; i < sizeY; i++) {
        line = [];
        for (let j = 0; j < sizeX; j++) {
            line.push(0);
        }
        map.push(line);
    }

    let initPoint;
    if (sizeX > 0 && sizeY > 0) {
        initPoint = parseInt(sizeX / 2);
    }

    function partBuilder(map, position, value) {
        map[position.y][position.x] = value;
    }

    function checkZone(map, position, value, direction) {
        if (map.length < position.y) {
            position.y = map.length;
        }
        if (map[0].length < position.x) {
            position.x = map[0].length;
        }

        if (map[0].length < direction.x + position.x || direction.x + position.x < 0) {
            direction.x = 0;
        }
        if (map.length < direction.y + position.y || direction.y + position.y < 0) {
            direction.y = 0;
        }

        if (
            inRange(position.y, 0, map.length)
            
        ) {}
    }

    let position = {
        x: initPoint,
        y: sizeY - 1
    };
    partBuilder(map, position, 1);
    
    return map;
}