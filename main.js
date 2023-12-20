const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayPeople(data);
        } else {
            console.error('Произошла ошибка при загрузке данных:', xhr.status);
        }
    });
});

function displayPeople(peopleData) {
    const container = document.getElementById('peopleContainer');
    container.innerHTML = '';

    peopleData.forEach(person => {
        const card = document.createElement('div');
        card.classList.add('card');

        const content = `
          <h3>${person.name}</h3>
          <p>Возраст: ${person.age}</p>
          <p>Профессия: ${person.occupation}</p>
        `;

        card.innerHTML = content;
        container.appendChild(card);
    });
}


const xhr = new XMLHttpRequest();
const url = 'data.json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
        } else {
            console.error('Произошла ошибка:', xhr.status);
        }
    }
};

xhr.open('GET', url);
xhr.send();


