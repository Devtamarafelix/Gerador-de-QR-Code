const caixa = document.querySelector(".caixa"),
qrInput = caixa.querySelector(".form input"),
generateBtn = caixa.querySelector(".form button"),
qrImg = caixa.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Gerando QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        caixa.classList.add("active");
        generateBtn.innerText = "Gerando QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        caixa.classList.remove("active");
        
    }
});
