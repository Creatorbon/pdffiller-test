var params = {
    lines: [{
        background: '#00F',
        updateTime: 1000,
        elements: [{
            background: '#00F',
            width: 25
        },
        {
            background: '#00F',
            width: 50
        },
        {
            background: '#00F',
            width: 25
        },
        ]
    },
    {
        background: '#178',
        updateTime: 2000,
        elements: [{
            background: '#178',
            width: 25
        },
        {
            background: '#178',
            width: 50
        },
        {
            background: '#178',
            width: 25
        },
        ]
    },
    {
        background: '#5b7',
        updateTime: 3000,
        elements: [{
            background: '#5b7',
            width: 25
        },
        {
            background: '#5b7',
            width: 50
        },
        {
            background: '#5b7',
            width: 15
        },
        {
            background: '#5b7',
            width: 10
        },
        ]
    },
    {
        background: '#861',
        updateTime: 1500,
        elements: [{
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        {
            background: '#861',
            width: 10
        },
        ]
    }
    ]
}

getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).slice(-3);
}

window.onload = function loadLines() {
    for (var i = 0; i < params.lines.length; i++) {
        var line = document.createElement('div');
        line.className = 'line';

        line.style.height = document.documentElement.clientHeight / params.lines.length + 'px';
        line.style.display = 'flex';

        for (var key in params.lines[i]) {
            switch (key) {
                case 'background':
                    line.style[key] = params.lines[i][key];
                    break;

                case 'elements':
                    for (var j = 0; j < params.lines[i][key].length; j++) {
                        var element = document.createElement('div');

                        element.className = 'element';
                        element.style.height = line.style.height;
                        element.style.background = params.lines[i][key][j].background;
                        element.style.width = params.lines[i][key][j].width + '%';
                        line.appendChild(element);
                    }
                    break;

                default:
                    break;
            }
        }
        document.body.appendChild(line);
    }
    var elements = document.querySelectorAll('.line');

    for (var i = 0; i < elements.length; i++) {
        var updateTime = params.lines[i].updateTime;
        var arr = elements[i].childNodes;
        var newArr = Array.from(arr);

        for (var j = 0; j < newArr.length; j++) {
            setInterval(changeColor(newArr[j]),
                updateTime);
        }
        function changeColor(j) {
            return function () {
                j.style.background = getRandomColor();
            };
        }
    }
}