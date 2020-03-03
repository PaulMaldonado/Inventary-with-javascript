import Stock from './stock';
import ProductStock from './product-stock';

let productStock = 0;

const sendForm = document.getElementById('send-form');

sendForm.addEventListener('submit', e => {
    const name = document.getElementById('product-name').value;
    const date = document.getElementById('product-date').value;
    const description = document.getElementById('product-description').value;
    const stock = document.getElementById('product-stock').value;
    const counterProducts = document.getElementById('stock-products');

    if(productStock === 0) {
       productStock += +stock;

       counterProducts.textContent = productStock;
    } 

    if(name === '' || date === '' || description === '' || description.length >= 40 || stock === '' || stock <= 0) {
        alert('Verifica los campos del formulario');

        return;
    }

    const stockProducts = new Stock(name, date, description, stock);
    const StockUi = new ProductStock();

    StockUi.createProduct(stockProducts);
    StockUi.showProduct(stockProducts);
    StockUi.clearInputs();

    const deleteProduct = document.getElementById('product-ui');
    
    deleteProduct.addEventListener('click', e => {
        const StockUi = new ProductStock();
        StockUi.deleteProducts(e.target);

        e.preventDefault();
    });

    e.preventDefault();
});