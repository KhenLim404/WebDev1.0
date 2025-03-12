const screen = document.getElementById('screen')
const btns = document.querySelectorAll('.btn')
const clearBtn = document.getElementById('clear')
const eqBtn = document.getElementById('equal')
const modeBtn = document.getElementById('mode-btn')
const calcBox = document.getElementById('calc')

let exp = ''
let done = false

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    let val = btn.textContent

    if (done && !isNaN(val)) {
      exp = ''
      done = false
    }
    if (val === '=' || btn.id === 'equal') return

    exp += val
    screen.textContent = exp
  })
})

eqBtn.addEventListener('click', () => {
  try {
    if (!exp) return
    let ans = eval(exp)

    if (!isFinite(ans)) {
      screen.textContent = 'Error'
    } else {
      screen.textContent = ans
      exp = ans.toString()
      done = true
    }
  } catch (err) {
    screen.textContent = 'Error'
  }
})

clearBtn.addEventListener('click', () => {
  exp = ''
  screen.textContent = '0'
  done = false
})

modeBtn.addEventListener('click', () => {
  if (calcBox.classList.contains('dark')) {
    calcBox.classList.remove('dark')
    calcBox.classList.add('light')
    modeBtn.textContent = '🌙 Dark Mode'
  } else {
    calcBox.classList.remove('light')
    calcBox.classList.add('dark')
    modeBtn.textContent = '☀️ Light Mode'
  }
})
