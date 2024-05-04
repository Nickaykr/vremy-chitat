const modal = document.getElementById("myModal");
const btnOpenModal = document.getElementById("korsina");
const btnCloseModal = document.getElementById("closeModal");
const btnOpenModal1 = document.getElementById("salekn");
const modal1 = document.getElementById("myModal1");
// Открытие модального окна при клике на кнопку "Корзина"
btnOpenModal.onclick = function () {
    modal.style.display = "block";
};

// Закрытие модального окна при клике на кнопку закрытия
btnCloseModal.onclick = function () {
    modal.style.display = "none";
};

// Закрытие модального окна при клике вне его области
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

btnOpenModal1.onclick = function () {
    modal1.style.display = "block";
};

// Закрытие модального окна при клике на кнопку закрытия
// btnCloseModal1.onclick = function () {
//     modal1.style.display = "none";
// };



document.getElementById("master").addEventListener("click", function() {
    var totalPrice = 320;
    var sale = 40;
    var discountedPrice = 280; 
    var totalElement = document.getElementById("total");
    var saleElement = document.getElementById("sale");
    var discountedTotalElement = document.getElementById("discountedTotal");
    
    totalElement.textContent = "Итого: " + totalPrice + " ₽";
    saleElement.textContent = "Скидка: " + sale + " ₽";
    discountedTotalElement.textContent = "Итого со скидкой: " + discountedPrice + " ₽";
});

document.addEventListener("DOMContentLoaded", function() {
    var korsinaButton = document.getElementById("master");

    
korsinaButton.onclick = function () {
        kn1.style.display = "flex";
    };
});
