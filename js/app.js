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
    document.getElementById("perPlayerCost").value = "";
    document.getElementById("managerCost").value = "";
    document.getElementById("coachCost").value = "";
    document.getElementById("playerExpenses").innerText = "00";
    document.getElementById("totalCost").innerText = "00";

    const li = document.createElement("li");
    li.innerText = event.target.parentNode.childNodes[1].innerText;
    selectedPlayersField.appendChild(li);
    event.target.disabled = true;
    event.target.innerText = "Selected";

    event.target.style.backgroundColor = "gray";
    event.target.style.color = "black";
  });
}

// calculate button click handle
document.getElementById("calculateBtn").addEventListener("click", function () {
  if (isInputInvalid("perPlayerCost")) {
    resetValue("perPlayerCost");
    document.getElementById("playerExpenses").innerText = "00";
    return alert("Input valid per player cost!");
  } else if (selectedPlayers() == 0) {
    resetValue("perPlayerCost");
    document.getElementById("playerExpenses").innerText = "00";
    return alert("please select player first");
  }
  document.getElementById("playerExpenses").innerText = playerExpenses();
});

// calculate total button click handle
document
  .getElementById("calculateTotalBtn")
  .addEventListener("click", function () {
    if (isInputInvalid("perPlayerCost")) {
      resetValue("perPlayerCost");
      document.getElementById("playerExpenses").innerText = "00";
      return alert("Input valid per player cost!");
    } else if (isInputInvalid("managerCost")) {
      resetValue("managerCost");
      return alert("Input valid manager cost!");
    } else if (isInputInvalid("coachCost")) {
      resetValue("coachCost");
      return alert("Input valid coach cost!");
    } else {
      document.getElementById("playerExpenses").innerText = playerExpenses();
      document.getElementById("totalCost").innerText = totalCost();
    }
  });
