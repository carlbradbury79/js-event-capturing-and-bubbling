const divs = document.querySelectorAll('.box')
const eProp = document.getElementById('eProp')
const capt = document.getElementById('capt')
const once = document.getElementById('once')
const checkboxes = document.querySelectorAll('.checkboxes')

function logText  (e)  {
    console.log(this.classList.value)
    // If checkbox is ticked, run the event method
    eProp.checked && e.stopPropagation()
}

// Initial Options for the event listener
let options = {
    once: false,
    capture: false
    
}

// Apply ititial event listener to the coloured divs
divs.forEach(div => div.addEventListener('click', logText, options))


function checkHandler(e) {
    // First remove old event listener
    divs.forEach(div => div.removeEventListener('click', logText, options))
    // Create new options object
    options = {
        once: once.checked? true:false,
        capture: capt.checked? true: false
    }
    // Add new event listener, with new options argument
    divs.forEach(div => div.addEventListener('click', logText, options))

}

// When checkboxes are ticked, run the check Handler
checkboxes.forEach(check => check.addEventListener('click', checkHandler))



