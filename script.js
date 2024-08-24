
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";

}

function closemenu() {
    sidemenu.style.right = "-200px"
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwSQ4Msfgdjqdtl9Zo2Tx7IVNHDO2nvuv2uMZZ1pOPgLY4uJ3tsnHjd31Xz22YS3nKTsQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

