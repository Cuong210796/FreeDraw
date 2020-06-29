window.onload = function() {

    // Definitions
    var canvas = document.getElementById("paint-canvas");
    var context = canvas.getContext("2d");
    var boundings = canvas.getBoundingClientRect();
    console.log(document.getElementById("paint-canvas"))

    // Specifications
    var mouseX = 0;
    var mouseY = 0;
    context.strokeStyle = 'black'; // initial brush color: màu ban đầu
    context.lineWidth = 1; // initial brush width: chiều rộng ban đầu
    var isDrawing = false;


    // Handle Colors : xử lý màu sắc
    var colors = document.getElementsByClassName('colors')[0];

    colors.addEventListener('click', function(event) {
        context.strokeStyle = event.target.value || 'black';
    });

    // Handle Brushes: thanh vẽ
    var brushes = document.getElementsByClassName('brushes')[0];

    brushes.addEventListener('click', function(event) {
        context.lineWidth = event.target.value || 1;
    });

    // Mouse Down Event
    canvas.addEventListener('mousedown', function(event) {
        setMouseCoordinates(event);
        isDrawing = true;

        // Start Drawing
        context.beginPath();
        context.moveTo(mouseX, mouseY);
    });

    // Mouse Move Event
    canvas.addEventListener('mousemove', function(event) {
        setMouseCoordinates(event);

        if (isDrawing) {
            context.lineTo(mouseX, mouseY);
            context.stroke();
        }
    });

    // Mouse Up Event
    canvas.addEventListener('mouseup', function(event) {
        setMouseCoordinates(event);
        isDrawing = false;
    });

    // Handle Mouse Coordinates: xử lý tọa độ chuột
    function setMouseCoordinates(event) {
        mouseX = event.clientX - boundings.left;
        mouseY = event.clientY - boundings.top;
    }

    // Handle Clear Button: xử lý nút xóa
    var clearButton = document.getElementById('clear');

    clearButton.addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

};