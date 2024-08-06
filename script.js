document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { name: 'Item 1', price: 100, shipping: 'Same Day Shipping' },
        { name: 'Item 2', price: 10, shipping: 'Same Day Shipping' },
        { name: 'Item 3', price: 130, shipping: '' },
        { name: 'Item 4', price: 230, shipping: '' },
        { name: 'Item 5', price: 230, shipping: '' },
        { name: 'Item 6', price: 230, shipping: '' }
    ];

    const itemList = document.getElementById('item-list');
    const gridContainer = document.getElementById('grid-container');
    const searchInput = document.querySelector('.search-input');
    const filterButton = document.querySelector('.filter-button');
    const addItemForm = document.getElementById('add-item-form');

    function renderItems(filteredItems) {
        itemList.innerHTML = '';
        gridContainer.innerHTML = '';

        filteredItems.forEach(item => {
            addItemToList(item);
            addItemToGrid(item);
        });
    }

    function addItemToList(item) {
        const listItem = document.createElement('li');
        listItem.className = 'item';
        listItem.innerHTML = `
            <div class="item-box"></div>
            <div class="item-name-price">
                <div class="item-name">${item.name}</div>
                <div class="item-details">
                    <span>MRP: ₹${item.price}</span><br>
                    <span>${item.shipping}</span>
                </div>
            </div>
        `;
        itemList.appendChild(listItem);
    }

    function addItemToGrid(item) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `
            <div class="item-box-2"></div>
            <div class="item-name-price">
                <div class="item-name">${item.name}</div>
                <div class="item-details">
                    <span>₹${item.price}</span>
                </div>
            </div>
        `;
        gridContainer.appendChild(gridItem);
    }

    function filterItems() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredItems = items.filter(item => {
            const matchesName = item.name.toLowerCase().includes(searchTerm);
            return matchesName;
        });
        renderItems(filteredItems);
    }

    searchInput.addEventListener('input', filterItems);
    filterButton.addEventListener('click', filterItems);

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const itemName = document.getElementById('item-name').value;
        const itemPrice = document.getElementById('item-price').value;
        const shippingMethod = document.getElementById('shipping-method').value;

        const newItem = {
            name: itemName,
            price: itemPrice,
            shipping: shippingMethod
        };

        items.push(newItem); 
        filterItems();

        addItemForm.reset();
    });

    // Initial render of items
    renderItems(items);
});
