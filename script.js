const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQRCode = document.querySelector('#imgQRCode');
const wrapper = document.querySelector('.wrapper');

let valueDefault;

// QR Code API
// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();
    if(!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR Code...'
    imgQRCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    imgQRCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = 'Gerar QRCode'
    })
})