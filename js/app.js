// select button click handle
const selectBtns = document.getElementsByClassName("selectBtn");
for (const btn of selectBtns) {
  btn.addEventListener("click", function (event) {
    const selectedPlayersField = document.getElementById(
      "selectedPlayersField"
    );
    if (isPlayerFull()) {
      return alert("You can not select more than five");
    }
    const li = document.createElement("li");
    li.innerText = event.target.parentNode.childNodes[1].innerText;
    selectedPlayersField.appendChild(li);
    event.target.disabled = true;
  });
}

// calculate button click handle
document.getElementById("calculateBtn").addEventListener("click", function () {
  if (
    isNaN(document.getElementById("perPlayerCost").value) ||
    document.getElementById("perPlayerCost").value < 0 ||
    document.getElementById("perPlayerCost").value == "" ||
    document.getElementById("perPlayerCost").value == " " ||
    document.getElementById("perPlayerCost").value == "  "
  ) {
    document.getElementById("perPlayerCost").value = "";

    return alert("Amounts should be positive numbers!!");
  }
  document.getElementById("playerExpenses").innerText = playerExpenses();
});

// calculate total button click handle
document
  .getElementById("calculateTotalBtn")
  .addEventListener("click", function () {
    if (
      isNaN(playerExpenses()) ||
      document.getElementById("perPlayerCost").value == "" ||
      document.getElementById("perPlayerCost").value == " " ||
      document.getElementById("perPlayerCost").value == "  " ||
      document.getElementById("managerCost").value == "" ||
      document.getElementById("managerCost").value == " " ||
      document.getElementById("managerCost").value == "  " ||
      document.getElementById("coachCost").value == "" ||
      document.getElementById("coachCost").value == " " ||
      document.getElementById("coachCost").value == "  " ||
      isNaN(document.getElementById("managerCost").value) ||
      document.getElementById("managerCost").value < 0 ||
      isNaN(document.getElementById("coachCost").value) ||
      document.getElementById("coachCost").value < 0
    ) {
      document.getElementById("perPlayerCost").value = "";
      document.getElementById("managerCost").value = "";
      document.getElementById("coachCost").value = "";

      return alert("Amounts should be positive numbers!!");
    }
    document.getElementById("playerExpenses").innerText = playerExpenses();

    document.getElementById("totalCost").innerText = totalCost();
  });
