function changeQty(button, delta) {
  const card = button.closest('.med-card')
  const qtyEl = card.querySelector('.qty')
  let qty = parseInt(qtyEl.textContent)
  qty += delta
  if (qty < 0) qty = 0
  qtyEl.textContent = qty
  updateTotal()
}

function updateTotal() {
  let total = 0
  document.querySelectorAll('.med-card').forEach(card => {
    const qty = parseInt(card.querySelector('.qty').textContent)
    const price = parseInt(card.getAttribute('data-price'))
    total += qty * price
  })
  document.getElementById('total').textContent = total.toLocaleString('id-ID')
}

function purchase() {
  alert('You successfully purchased the medicine!')
  document.querySelectorAll('.qty').forEach(span => {
    span.textContent = '0'
  })
  updateTotal()
}
