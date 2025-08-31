// 📅 Show current year

document.getElementById("year").textContent = new Date().getFullYear();

// 🌗 Toggle dark mode

document.getElementById("themeBtn").addEventListener("click", function() {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {

    document.body.style.background = "linear-gradient(135deg, #141E30, #243B55)";

    document.body.style.color = "#fff";

  } else {

    document.body.style.background = "";

    document.body.style.color = "#333";

  }

});

// 🎬 Scroll animations for sections

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {

      card.classList.add('show');

    }

  });

});