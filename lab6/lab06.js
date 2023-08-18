function myFunction(){
  location.reload()
  alert("คุณเเน่ใจหรือไม่");
}



let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.transform = 'translateX(0)';
        } else {
          slide.style.transform = 'translateX(100%)';
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    showSlide(currentIndex);


function addFunction(button) {
  var quantityElement = button.parentNode.querySelector(".quantity-value");
  var currentQuantity = parseInt(quantityElement.textContent);

  quantityElement.textContent = 0;
}

var total = 0;
function addFunction(price) {
    total += price;
    var totalElement = document.getElementById("result");

    if (total >= 1000) {
        total = total * 0.9; // Apply 10% discount
        totalElement.textContent = total.toFixed(2) + "฿ (10% discount applied)";
    } else {
        totalElement.textContent = total.toFixed(2) + "฿";
    }
}