function addToCart(productName, productDescription, productPrice) {
  window.location.href = 'product.html?product=' + encodeURIComponent(productName) + '&description=' + encodeURIComponent(productDescription) + '&price=' + encodeURIComponent(productPrice);
}