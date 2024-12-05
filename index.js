document.getElementById("1").addEventListener("click", function () {
  const donateInputField = document.getElementById("2");
  const donateInput = parseFloat(donateInputField.value.trim());

  // Validate input
  if (donateInputField.value.trim() === "") {
    alert("Input cannot be empty. Please provide a valid input.");
    return;
  }
  if (isNaN(donateInput) || typeof donateInput !== "number") {
    alert("Please provide a valid numeric input.");
    return;
  }
  if (donateInput <= 0) {
    alert("Donation amount must be greater than zero.");
    return;
  }

  const donateAmountElement = document.getElementById("3");
  const currentAmount = parseFloat(donateAmountElement.innerText);
  const remainingAmountElement = document.getElementById("4");
  let remainingAmount = parseFloat(remainingAmountElement.innerText);

  // Update the donation amount
  const newAmount = currentAmount + donateInput;
  donateAmountElement.innerText = newAmount.toFixed(2);

  // Calculate the remaining amount
  remainingAmount -= donateInput;
  remainingAmountElement.innerText = remainingAmount.toFixed(2);
  donateInputField.value = ""; 

  document.getElementById("my_modal_5").showModal();
});

document.getElementById("5").addEventListener("click", function () {
  const donateInputField = document.getElementById("6");
  const donateInput = parseFloat(donateInputField.value.trim());

  // Validate input
  if (donateInputField.value.trim() === "") {
    alert("Input cannot be empty. Please provide a valid input.");
    return;
  }
  if (isNaN(donateInput) || typeof donateInput !== "number") {
    alert("Please provide a valid numeric input.");
    return;
  }
  if (donateInput <= 0) {
    alert("Donation amount must be greater than zero.");
    return;
  }

  const donateAmountElement = document.getElementById("7");
  const currentAmount = parseFloat(donateAmountElement.innerText);
  const remainingAmountElement = document.getElementById("4");
  let remainingAmount = parseFloat(remainingAmountElement.innerText);

  // Update the donation amount
  const newAmount = currentAmount + donateInput;
  donateAmountElement.innerText = newAmount.toFixed(2);

  // Calculate the remaining amount
  remainingAmount -= donateInput;
  remainingAmountElement.innerText = remainingAmount.toFixed(2);
  donateInputField.value = ""; 

  document.getElementById("my_modal_5").showModal();
});

document.getElementById("8").addEventListener("click", function () {
  const donateInputField = document.getElementById("9");
  const donateInput = parseFloat(donateInputField.value.trim());

  // Validate input
  if (donateInputField.value.trim() === "") {
    alert("Input cannot be empty. Please provide a valid input.");
    return;
  }
  if (isNaN(donateInput) || typeof donateInput !== "number") {
    alert("Please provide a valid numeric input.");
    return;
  }
  if (donateInput <= 0) {
    alert("Donation amount must be greater than zero.");
    return;
  }

  const donateAmountElement = document.getElementById("10");
  const currentAmount = parseFloat(donateAmountElement.innerText);
  const remainingAmountElement = document.getElementById("4");
  let remainingAmount = parseFloat(remainingAmountElement.innerText);

  // Update the donation amount
  const newAmount = currentAmount + donateInput;
  donateAmountElement.innerText = newAmount.toFixed(2);

  // Calculate the remaining amount
  remainingAmount -= donateInput;
  remainingAmountElement.innerText = remainingAmount.toFixed(2);
  donateInputField.value = "";

  document.getElementById("my_modal_5").showModal();
});
