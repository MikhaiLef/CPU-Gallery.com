// Данные о процессорах (13 штук) с именами файлов BMP
var processors = [
    { name: "AMD CPU", spec: "24 cores, 32 threads", bmpFile: "1.bmp" },
    { name: "AMD CPU x64", spec: "16 cores, 24 threads", bmpFile: "2.bmp" },
    { name: "Intel celeron CPU", spec: "14 cores, 20 threads", bmpFile: "3.bmp" },
    { name: "Intel Core 2 DUO CPU", spec: "4 cores, 8 threads", bmpFile: "4.bmp" },
    { name: "intel XEON", spec: "16 cores, 32 threads", bmpFile: "5.bmp" },
    { name: "AMD Ryzen ", spec: "12 cores, 24 threads", bmpFile: "6.bmp" },
    { name: "AMD EPYC", spec: "8 cores, 16 threads", bmpFile: "7.bmp" },
    { name: "IBM CPU", spec: "6 cores, 12 threads", bmpFile: "8.bmp" },
    { name: "Intel CORE I3", spec: "56 cores, 112 threads", bmpFile: "9.bmp" },
    { name: "Intel CORE I5", spec: "64 cores, 128 threads", bmpFile: "10.bmp" },
    { name: "Intel CORE I7", spec: "24 cores, 76 GPU cores", bmpFile: "11.bmp" },
    { name: "Intel CORE I9", spec: "12 cores, AI??", bmpFile: "12.bmp" },
    { name: "Intel XEON", spec: "16 cores, server", bmpFile: "13.bmp" }
];

// Функция для создания карточек с BMP изображениями
function renderGrid() {
    var container = document.getElementById('cpuGrid');
    if (!container) return;

    var htmlString = '';
    
    for (var i = 0; i < processors.length; i++) {
        var cpu = processors[i];
        htmlString += 
            '<div class="cpu-card">' +
                '<div class="cpu-image">' +
                    '<img src="' + cpu.bmpFile + '" alt="' + cpu.name + '">' +
                '</div>' +
                '<div class="cpu-name">' + cpu.name + '</div>' +
                '<div class="cpu-spec">' + cpu.spec + '</div>' +
                '<div class="details-btn">Details</div>' +
            '</div>';
    }
    
    container.innerHTML = htmlString;
}

// Обработка ошибок загрузки изображений для IE
function handleImageErrors() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].onerror = function() {
            this.style.display = 'none';
            this.parentNode.innerHTML = '[BMP]';
            this.parentNode.style.fontSize = '24px';
            this.parentNode.style.color = '#0078d4';
            this.parentNode.style.fontWeight = 'bold';
        };
    }
}

// Вызов после загрузки страницы
if (window.addEventListener) {
    window.addEventListener('load', function() {
        renderGrid();
        handleImageErrors();
    });
} else if (window.attachEvent) {
    window.attachEvent('onload', function() {
        renderGrid();
        handleImageErrors();
    });
}