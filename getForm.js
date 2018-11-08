

const form = Document.querySelector('form.block');
const data = form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form);
    const myInput = formData.get('myChoice');
    console.log(myInput);
})
