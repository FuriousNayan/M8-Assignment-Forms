window.onload = function() {
  document.getElementById("myForm").addEventListener("submit", (event) => {
      event.preventDefault();

    const fieldValue = document.getElementById("inputField")

    const alphanumericInput = /^[a-zA-Z0-9]+$/;

    if (alphanumericInput.test(fieldValue.value)) {
      fieldValue.setCustomValidity("");
      alert("Form submitted successfully!");
      document.getElementById("myForm").submit();
    } else {
      fieldValue.setCustomValidity("Please enter only alphanumeric characters.");
    }
  });
};