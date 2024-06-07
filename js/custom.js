document.querySelector("#navHome").addEventListener("click", (e) => {
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#navAbout").addEventListener("click", (e) => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#navContents").addEventListener("click", (e) => {
  document.querySelector("#Contents").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#navContact").addEventListener("click", (e) => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

document.querySelector('.next i').addEventListener('click', function(){
  document.querySelector('.slider_img').style.transform = 'translateX(-350px)';
  document.querySelector('.silde_netflix').style.display = 'none';
  document.querySelector('.csoul_text').style.display = 'block';
  document.querySelector('.next i').style.display = 'none';  // next 버튼 숨기기
  document.querySelector('.prev i').style.display = 'block'; // prev 버튼 보이기
})

document.querySelector('.prev i').addEventListener('click', function(){
  document.querySelector('.slider_img').style.transform = 'translateX(0)';
  document.querySelector('.csoul_text').style.display = 'none';
  document.querySelector('.silde_netflix').style.display = 'block';
  document.querySelector('.prev i').style.display = 'none';  // prev 버튼 숨기기
  document.querySelector('.next i').style.display = 'block'; // next 버튼 보이기
})

// 초기 상태 설정
document.querySelector('.prev i').style.display = 'none'; // 초기에는 prev 버튼 숨기기
document.querySelector('.next i').style.display = 'block'; // 초기에는 next 버튼 보이기
document.querySelector('.csoul_text').style.display = 'none'; // 초기에는 prev 버튼 숨기기
document.querySelector('.silde_netflix').style.display = 'block'; // 초기에는 next 버튼 보이기


let currentSlide = 0;
const images = ["./img/gallery_1.jpg", "./img/gallery_2.jpg", "./img/gallery_3.jpg"];

function openModal(index) {
    currentSlide = index;
    document.getElementById("modalImage").src = images[currentSlide];
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= images.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }
    document.getElementById("modalImage").src = images[currentSlide];
}
