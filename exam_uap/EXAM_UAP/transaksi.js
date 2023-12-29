class Kasir {
    constructor (){
        this.total = 0 ;
    }
    addProduct (){
        const productName = document.getElementById("product").value ;
        const productPrice = parseFloat(document.getElementById("price").value) ;

        if (productName && !isNaN (productPrice)&& productPrice > 0 ){
            const cartItem = document.createElement("Li");
            cartItem.innerHTML = '{productName}-{productPrice}';
            document.getElementById("cart-list").appendChild(cartItem);

            this.total += productPrice;
            document.getElementById("total").textContent = `Total: {this.total.toFixed(2)}`;

            document.getElementById("product").value = "";
            document.getElementById("price").value = "" ;

        }else{
            alert ("Masukkan Nama dan Harga Barang ! ");
        }
    }

    calculateTotal(){
        const payment = parseFloat(document.getElementById("payment").value);

        if (!isNaN(payment) && payment >= this.total) {
            const change = payment - this.total;
            document.getElementById("change").textContent = `Kembalian: {change.toFixed(2)}`;
        } else {
            alert("Pembayaran tidak valid atau kurang!");
        }
    }
}
const kasir = new Kasir();