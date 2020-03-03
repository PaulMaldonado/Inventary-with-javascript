class ProductStock {

    createProduct(product) {
        const name = document.getElementById('product-name').value;
        const date = document.getElementById('product-date').value;
        const description = document.getElementById('product-description').value;
        const stock = document.getElementById('product-stock').value;

        if(this.newProduct === null) {
            this.newProduct.push(product);
        } else {
            this.newProduct = [];
        }
    }

    showProduct(product) {
        const element = document.createElement('div');
        const productUi = document.getElementById('product-ui');

        element.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.date}</p>
                        <h3><strong>${product.description}</strong></h3>
                        <p class="card-text"><strong>${product.stock}</strong></p>

                        <button class="btn btn-danger" name="delete">Eliminar</button>
                    </div>
                </div>
            `;

        productUi.appendChild(element);
    }

    deleteProducts(element) {
        const productUi = document.getElementById('product-ui');

        if(element.name === 'delete') {
            element.parentElement.parentElement.remove();
        }
    }

    clearInputs() {
        const name = document.getElementById('product-name').value = '';
        const date = document.getElementById('product-date').value = '';
        const description = document.getElementById('product-description').value = '';
        const stock = document.getElementById('product-stock').value = '';
    }
}

export default ProductStock;