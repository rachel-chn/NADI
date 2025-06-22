function filter() {
  let term = document.getElementById("search-result").value.toLowerCase();
  let items = document.querySelectorAll("#doctor-list li");
  items.forEach(li => {
    let text = li.innerText.toLowerCase();
    li.style.display = text.includes(term) ? "" : "none";
  });
}