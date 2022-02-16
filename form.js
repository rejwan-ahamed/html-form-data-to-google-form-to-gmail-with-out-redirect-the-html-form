const scriptURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe51YhmGZXeAXgnoj4Ux8eXsZb6U7D9pSC97TTV0IMmzyEGgw/formResponse'
const form = document.forms['google-sheet']


var email = document.getElementById("email2").value
var name2 = document.getElementById("name1").value


// if (name2 == null || email == null) {

//     document.getElementById("error").innerHTML = "Username or Password incorrect";

// }



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











// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, {
//             method: 'POST',
//             body: new FormData(form)
//         })
//         .then(response => Swal.fire(
//             'Good job!',
//             'Beta submission successful',
//             'success'

//         ))
//         .catch(error => console.error('Error!', error.message))

// })