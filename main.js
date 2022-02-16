const scriptURL = '************************'
const form = document.forms['google-sheet']




form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(
            // alert("Data Inserted")
            // document.location = "index2.html"
            form.reset(),
            document.getElementById("mess").innerHTML = "Thank you for the form submition"
        )
        .catch(error => console.error('Error!', error.message))

})