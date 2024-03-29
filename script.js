function addToCart(productName, productDescription, productPrice) {
  window.location.href =
    "product.html?product=" +
    encodeURIComponent(productName) +
    "&description=" +
    encodeURIComponent(productDescription) +
    "&price=" +
    encodeURIComponent(productPrice);
}

function submitForm() {
  var form = document.getElementById("contactForm");
  var formData = new FormData(form);
  var formValues = {};

  // Convert form data to object
  for (var pair of formData.entries()) {
    formValues[pair[0]] = pair[1];
  }

  // Display form values in an alert
  var message = "";
  for (var key in formValues) {
    message += key + ": " + (formValues[key] || "none") + "\n";
  }
  alert(message);
}
