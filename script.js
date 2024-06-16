let userInput = document.querySelector('.container .user-input');
let generateBtn = document.querySelector('.container .generate-btn');
let QrCode = document.querySelector('.container .qr-code-box .qr-code');
let qrCodeBox = document.querySelector('.container .qr-code-box');
let container = document.querySelector('.container');

generateBtn.addEventListener('click',() => {
    if (userInput.value != ''){
        generateQrCode(userInput.value);
    }
});

let generateQrCode = (value) => {
    let url = `https:/api.qrserver.com/v1/create-qr-code/?size=150*150&data=${value}`;
    QrCode.src = url;
    qrCodeBox.classList.add('show');
    container.computedStyleMap.height = '447px';
}
