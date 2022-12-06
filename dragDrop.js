let item = document.querySelector('.item')
let placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', event => {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
})

item.addEventListener('dragend', event => event.target.className = 'item')

for (let placeholder of placeholders) {
  placeholder.addEventListener('dragover', event => event.preventDefault())
  placeholder.addEventListener('dragenter', event => event.target.classList.add('hovered'))
  placeholder.addEventListener('dragleave', event => event.target.classList.remove('hovered'))
  placeholder.addEventListener('drop', event => event.target.append(item))
}