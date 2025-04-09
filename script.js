// DOM Elements
const dynamicText = document.getElementById('dynamic-text');
const styleText = document.getElementById('style-text');
const elementsContainer = document.getElementById('elements-container');

// Buttons
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');

// Sample texts for dynamic change
const texts = [
    'JavaScript is awesome!',
    'DOM manipulation is fun!',
    'Learning web development!',
    'Coding is amazing!'
];
let currentTextIndex = 0;

// Function to change text content
changeTextBtn.addEventListener('click', () => {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    dynamicText.textContent = texts[currentTextIndex];
});

// Function to modify CSS styles
let isStyleChanged = false;
changeStyleBtn.addEventListener('click', () => {
    if (isStyleChanged) {
        styleText.style.color = 'black';
        styleText.style.fontSize = '16px';
        styleText.style.fontWeight = 'normal';
    } else {
        styleText.style.color = '#2196F3';
        styleText.style.fontSize = '24px';
        styleText.style.fontWeight = 'bold';
    }
    isStyleChanged = !isStyleChanged;
});

// Function to add new element
addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.className = 'added-element';
    newElement.textContent = `New element added at ${new Date().toLocaleTimeString()}`;
    elementsContainer.appendChild(newElement);
});

// Function to remove last added element
removeElementBtn.addEventListener('click', () => {
    const elements = elementsContainer.children;
    if (elements.length > 0) {
        elementsContainer.removeChild(elements[elements.length - 1]);
    }
});