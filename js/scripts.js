function startGame() {
    var shipRotation = 0;
    let game = document.getElementById("map");
    let nave = document.createElement('img');
    nave.src = "../imgs/nave.png";
    nave.height = 100;
    nave.focus();
    nave.onmousedown = function (event) {
        shipRotation += 45;
        console.log(shipRotation);
        nave.style.transform = "rotate(" + shipRotation.toString() + "deg)";
        if (shipRotation >= 360) {
            shipRotation = 0;
        }
    }
    game.appendChild(nave);
}

function buildMap(xLength, yLength) {
    let map = document.getElementById("map");
    map.style.display = "grid";
    /*
    0 - Terreno vacio
    1 - Camino
    2 - Parcela
    3 - Parcela inicio
    4 - Parcela final
    */
    //let grid = mapGenerator(xLength, yLength);
    let grid = [
        [0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        [0, 0, 2, 0, 0, 2, 0, 1, 0, 0],
        [2, 1, 1, 1, 1, 0, 0, 1, 2, 0],
        [0, 1, 2, 0, 1, 0, 0, 1, 0, 0],
        [2, 1, 0, 0, 1, 0, 2, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 2, 0],
        [2, 1, 2, 0, 0, 0, 0, 2, 0, 0],
        [0, 1, 0, 0, 2, 0, 0, 0, 2, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [0, 2, 0, 0, 0, 2, 0, 2, 1, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 3, 0, 0, 0, 2]
    ]
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
            } else if (part == 2) {
                type = "parcell";
            } else if (part == 3) {
                type = "path-start";
            } else if (part == 4) {
                type = "path-end";
            } else {
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

        ) { }
    }

    let position = {
        x: initPoint,
        y: sizeY - 1
    };
    partBuilder(map, position, 1);

    return map;
}

class Enemy {
    constructor(posX, posY, type) {
        this.posX = posX;
        this.posY = posY;
        this.type = type;
        if (type == 1) {
            this.interval = 15;
            this.hp = 40;
            this.image = "../imgs/enemy_1.png";
        }
        else if (type == 2) {
            this.interval = 10;
            this.hp = 80;
            this.image = "../imgs/enemy_2.png";
        }
        else if (type == 3) {
            this.interval = 5;
            this.hp = 100;
            this.image = "../imgs/enemy_3.png";
        }
        this.element = document.createElement("div");
        this.element.style.position = "absolute";

        this.element.innerHTML = '<img src="' + this.image + '" alt="Enemy image">';

        var width = this.element.clientWidth;
        var height = this.element.clientHeight;

        this.element.style.marginLeft = -width + 'px';
        this.element.style.marginTop = -height + 'px';

        console.log("Enemigo inicializado");
        //console.log(this);
    }

    movePosition(moveX, moveY) {
        //console.log("Moviendo");
        this.element.style.left = this.element.getBoundingClientRect().left + moveX + 'px';
        this.element.style.top = this.element.getBoundingClientRect().top + moveY + 'px';
    }

    die() {
        this.element.remove();
    }

    start() {
        document.getElementById("game").appendChild(this.element);
    }
}

class Spawn {
    constructor() {
        this.enemys = [];
        console.log("Spawn inicializado");
        //console.log(this);
    }

    updateEnemies() {
        let enemy;
        let posX;
        let posY;
        for (let i = 0; i < this.enemys.length; i++) {
            enemy = this.enemys[i]
            enemy.movePosition(0, -enemy.interval);
            posX = enemy.element.style.top.slice(0, -2);
            posY = enemy.element.style.left.slice(0, -2);
            if (posX < 0 || posY < 0 || enemy.hp <= 0) {
                enemy.die();
                this.enemys.splice(i, 1);
            }
        }
        return 0;
        //console.log(this.enemys);
    }

    spawnEnemy(enemyNum) {
        let maxType = 3;
        let minType = 1;
        let type;
        let gameLoop;
        for (let i = 0; i < enemyNum; i++) {
            type = Math.floor(Math.random() * maxType) + minType;
            this.enemys.push(new Enemy(5, 5, type));
        }
        for (let i = 0; i < this.enemys.length; i++) {
            this.enemys[i].start();
        }
    }

    loop(gameLoop) {
        if (!gameLoop) {
            gameLoop = setInterval(
                () => this.updateEnemies(),
                1000
            );
        }
    }
}

var spawn = new Spawn();
spawn.loop();

function pruebas() {
    spawn.spawnEnemy(1);
}