type Product = {
    id: number;
    title: string;
    desc: string;
    brand: string;
    category: string;
};

const productTable = document.querySelector('#tabledata') as HTMLTableElement;
const tbody = productTable.createTBody();

fetch("https://dummyjson.com/products").then((response) => response.json()).then((data) => data.products.forEach((product) => {
    const row = tbody.insertRow();
    row.insertCell().textContent = String(product.id);
    row.insertCell().textContent = product.title;
    row.insertCell().textContent = product.description;
    row.insertCell().textContent = product.brand;
    row.insertCell().textContent = product.category;
}))


document.body.appendChild(productTable);
