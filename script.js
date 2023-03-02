const boxItem = document.querySelector('#text-area')
const submitButton = document.querySelector('#button')
const result = document.querySelector('.container')

submitButton.addEventListener('click', function(){
    let answer = document.createElement('p')
    answer.innerText = boxItem.value;
    result.appendChild(answer)
    boxItem.value = '';

    answer.addEventListener('click',function(){
        answer.style.textDecoration = 'line-through'
    })
    answer.addEventListener('dblclick',function(){
        answer.style.textDecoration = this.remove();
    })
})