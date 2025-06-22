function filter(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function(card) {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

window.addEventListener("DOMContentLoaded", () => part("all"));