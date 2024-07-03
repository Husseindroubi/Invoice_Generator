const productButtons = document.querySelectorAll('.add-product');
const invoiceItems = document.getElementById('invoice-items');
const totalElement = document.getElementById('total');
let total = 0;
const addedProducts = new Set();

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseInt(button.getAttribute('data-price'));

        if (!addedProducts.has(product)) {
            const item = document.createElement('li');
            item.textContent = `${product} - $${price}`;
            item.style.fontSize = '18px';
            item.style.paddingBottom = '10px';
            item.style.listStyle = 'none';
            invoiceItems.appendChild(item);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.style.color = '#ffffff';
            removeButton.style.borderStyle = 'hidden';
            removeButton.style.backgroundColor = '#1F2937';
            removeButton.style.marginLeft = '20px';
            removeButton.addEventListener('click', () => {
                item.remove();
                addedProducts.delete(product);
                total -= price;
                totalElement.textContent = ` $${total}`;
            });
            item.appendChild(document.createTextNode(' ')); // Add space between item and remove button
            item.appendChild(removeButton);

            addedProducts.add(product);
            total += price;
            totalElement.textContent = ` $${total}`;
            totalElement.style.fontSize = '40px';
        }

    });
});

function send() {
    // no function
}
