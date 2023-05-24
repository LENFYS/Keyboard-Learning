const input = document.querySelector('#inputField')
const output = document.querySelector('#output')
const good = document.querySelector('#good')
const bad = document.querySelector('#bad')

result = char.charAt(Math.floor(Math.random() * char.length))
input.focus();
input.setAttribute('placeholder', result)

input.addEventListener('input', (e) => {
    input.focus();
    output.innerHTML = 'Last symbol: ' + e.data;
    if (result === e.data) {
        result = char.charAt(Math.floor(Math.random() * char.length));
        output.style.color = 'green';
        input.value = '';
        counter = counter + 1;
        counterGood = counterGood + 1;
        console.log(counter, counterGood, counterWrong)
        input.setAttribute('placeholder', result)

    }

    else{
        input.focus();
        result = char.charAt(Math.floor(Math.random() * char.length));
        output.style.color = 'red';
        input.value = '';
        counter = counter + 1;
        counterWrong = counterWrong + 1;
        console.log(counter, counterGood, counterWrong)
        input.setAttribute('placeholder', result)
    }
})