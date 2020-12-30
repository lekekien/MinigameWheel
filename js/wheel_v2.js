
//Thông số vòng quay
let duration = 10; //Thời gian kết thúc vòng quay
let spins = 15; //Quay nhanh hay chậm 3, 8, 15

let theWheel = new Winwheel({
    'numSegments': 10,                // Specify number of segments.
    'outerRadius': 526,              // Set outer radius so wheel fits inside the background.
    'drawText': false,             // Code drawn text can be used with segment images.
    'textFontSize': 16,               // Set text options as desired.
    'textOrientation': 'curved',
    'textAlignment': 'inner',
    'textMargin': 90,
    'textFontFamily': 'monospace',
    'textStrokeStyle': 'black',
    'textLineWidth': 10,
    'textFillStyle': 'white',
    'strokeStyle': "red",
    'lineWidth': 10,
    'drawMode': 'segmentImage',    // Must be segmentImage to draw wheel using one image per segemnt.
    'segments':                    // Define segments including image and text.
        [
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/SorryTryAgain.svg', 'text': 'Bad luck', 'raward' : 1 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/HotDealCars.svg', 'text': 'Hot deal cars', 'raward': 37 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/x3TotalPoint.svg', 'text': 'X 3', 'raward': 73 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/1Ticket.svg', 'text': 'Ticket', 'raward': 109 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/PremiumNewCars.svg', 'text': 'Premium new cars', 'raward': 145 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/PremiumUsedCars.svg', 'text': 'Premium used cars', 'raward': 181 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/Accessories.svg', 'text': 'Accessories', 'raward': 217 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/x2TotalPoint.svg', 'text': 'X 2', 'raward': 253 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/1Ticket02.svg', 'text': 'Ticket', 'raward': 289 },
            { 'image': 'https://philkotse.com/events/common/Scripts/Library/wheel/v2/img/Bonus.svg', 'text': 'Goodluck next time', 'raward': 325 }
        ],
    'animation':           // Specify the animation to use.
    {
        'type': 'spinToStop',
        'duration': duration,
        'spins': spins,
        'callbackFinished': alertPrize //alertPrize
    }
});

//Kiểm tra vòng quay
let wheelSpinning = false;

//Tạo âm thanh và tải tập tin tick.mp3.
let audio = new Audio('..demo_game/images/wheel/Library/wheel/v2/tick.mp3');
function playSound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
};

//stopAngle
function stopAngle(start) {
    //Ta có: 360 độ chia 8 bằng 45 độ cho mỗi giải thưởng.
    //VD: Giải 3 => Có gốc độ từ 91 đến 135.
    //let start = 91;
    let stop = Math.floor((Math.random() * 35)); //Giá trị cao nhất 36
    let stopAt = start + stop;
    theWheel.animation.stopAngle = stopAt;
};

//startSpin
function startSpin(start) {
    resetWheel();
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false) {
        //Đặt kết quả mong muốn
        stopAngle(start);

        //Hàm bắt đầu quay
        theWheel.startAnimation();

        //Khóa vòng quay
        wheelSpinning = true;
    }
};

//Result
function alertPrize(indicatedSegment) {
    alert("Winning : " + indicatedSegment.text);
    //document.getElementById('message').innerHTML = "Chúc mừng bạn trúng: " + indicatedSegment.text;
};

//resetWheel
function resetWheel() {
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
};

function playGame() {
    // 1 OTP
    // 2 Post ajax lấy tọa độ
    // 3 Gọi hàm 

    var start = 37;
    startSpin(start);
};






