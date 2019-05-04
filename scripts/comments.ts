const addCommentForm = document.querySelector('#addComment');
const inputNameEl = document.querySelector('#inputName') as HTMLInputElement;
const inputTextEl = document.querySelector('#inputText') as HTMLInputElement;


addCommentForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let name: string = inputNameEl.value;
    let text: string = inputTextEl.value;
    if (name.length < 6) {

        inputNameEl.className = 'form-control is-invalid';
        return;
    }
    if (text.length < 10) {
        inputTextEl.className = 'form-control is-invalid';
        return;
    }
    console.log(text);
    const msg = document.createElement('div');
    msg.innerHTML = `
    <span class="h5">Сообщение будет добавлено на сайт после проверки, спасибо за отзыв!</span>
    `;
    addCommentForm.appendChild(msg);
    inputNameEl.value = '';
    inputTextEl.value = '';
    inputNameEl.className = 'form-control';
    inputTextEl.className = 'form-control'
});
