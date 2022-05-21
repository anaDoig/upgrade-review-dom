const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const images = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const list = document.createElement('ul');
list.className = 'countriesList';

const body = document.querySelector('body');
const removeMe = document.querySelector('.fn-remove-me');
const carsList = document.createElement('ul');
const carsContainer = document.querySelector('[data-function="printHere"]');

const imagesList = document.createElement('div');
imagesList.className = 'imagesList';

const imageTitle = document.createElement('h4');
const removeButton = document.createElement('button');
removeButton.textContent = 'Eminina el último';

const removeThisButton = document.querySelector('.remove-this-element-js');

removeMe.remove();

body.appendChild(list);
carsContainer.appendChild(carsList);
body.appendChild(imagesList);

function generateList(array, list) {
    array.forEach(function(element) {
        let listItem = document.createElement('li');
        listItem.textContent = element;
        list.appendChild(listItem);
    })
};

function generateContainers() {
    for (let key in images) {
        const title = document.createElement('h4');
        const image = document.createElement('img');
        const imageContainer = document.createElement('div');
        const removeThisElement = document.createElement('button');
        
        image.setAttribute('src', images[key].imgUrl);
        title.textContent = images[key].title;
        removeThisElement.textContent = 'Eliminame';
        removeThisElement.setAttribute('class', 'remove-this-element-js');
        
        imageContainer.appendChild(title);
        imageContainer.appendChild(image);
        imagesList.appendChild(imageContainer);
        imageContainer.appendChild(removeThisElement);

        removeThisElement.addEventListener('click', removeThisDiv);
    }
}

function removeLastItem() {
    lastChild = imagesList.lastChild;
    lastChild.remove();
}

function removeThisDiv(event) {
    this.parentNode.remove();
}


body.appendChild(removeButton);

generateList(countries, list);
generateList(cars, carsList);
generateContainers();

removeButton.addEventListener('click', removeLastItem);




