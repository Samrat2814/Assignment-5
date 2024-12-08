// // Common Function for Validation
function validateDonation(inputField) {
  const value = inputField.value.trim();
  const numberValue = parseFloat(value);

  if (value === "" || isNaN(numberValue) || numberValue <= 0) {
    alert("Please provide a valid numeric input greater than zero.");
    return null;
  }

  return numberValue;
}

// Event Listeners
document.getElementById("1").addEventListener("click", function () {
  const donateInputField = document.getElementById("2");
  const donateInput = validateDonation(donateInputField);
  if (donateInput === null) return;

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

  const historyItem = document.createElement("div");
  historyItem.className = "border border-gray-400 p-6 mt-6 rounded-xl";
  const currentDate = new Date().toString();
  historyItem.innerHTML = `
   <h1>${donateInput} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <h1>Date : ${currentDate}</h1>
  `;

  const historyContainer = document.getElementById("20");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  document.getElementById("my_modal_5").showModal();
});

document.getElementById("5").addEventListener("click", function () {
  const donateInputField = document.getElementById("6");
  const donateInput = validateDonation(donateInputField);
  if (donateInput === null) return;

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

  const historyItem = document.createElement("div");
  historyItem.className = "border border-gray-400 p-6 mt-6 rounded-xl";
  const currentDate = new Date().toString();
  historyItem.innerHTML = `
   <h1>${donateInput} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
        <h1>Date : ${currentDate}</h1>
  `;

  const historyContainer = document.getElementById("20");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  document.getElementById("my_modal_5").showModal();
});

document.getElementById("8").addEventListener("click", function () {
  const donateInputField = document.getElementById("9");
  const donateInput = validateDonation(donateInputField);
  if (donateInput === null) return;

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

  const historyItem = document.createElement("div");
  historyItem.className = "border border-gray-400 p-6 mt-6 rounded-xl";
  const currentDate = new Date().toString();
  historyItem.innerHTML = `
   <h1>${donateInput} Taka is Donated for Quota movement at Dhaka, Bangladesh</h1>
        <h1>Date : ${currentDate}</h1>
  `;

  const historyContainer = document.getElementById("20");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  document.getElementById("my_modal_5").showModal();
});

// Toggle Sections
document.getElementById("11").addEventListener("click", function () {
  const hiddenAdd = document.getElementById("13");
  hiddenAdd.classList.add("hidden");
  const hiddenFooter = document.getElementById("20");
  hiddenFooter.classList.remove("hidden");
  this.style.backgroundColor = "#B4F461";
  const donationBtn = document.getElementById("12");
  donationBtn.style.backgroundColor = "#F4F4F4";
});

document.getElementById("12").addEventListener("click", function () {
  const hiddenAdd = document.getElementById("13");
  hiddenAdd.classList.remove("hidden");
  this.style.backgroundColor = "#B4F461";
  const donationBtn = document.getElementById("11");
  donationBtn.style.backgroundColor = "#F4F4F4";
});

