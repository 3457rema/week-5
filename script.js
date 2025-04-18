// Task 1: Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = "The text has been changed!";
});

// Task 2: Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById('change-style-btn');

changeStyleBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';  // Changes background color
    document.body.style.color = 'darkblue';  // Changes text color
});

// Task 3: Add or remove an element when a button is clicked
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const itemList = document.getElementById('item-list');

// Add new list item
addElementBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    itemList.appendChild(newItem);
});

// Remove the last list item
removeElementBtn.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastChild);
    }
});
