function selectedPlayers() {
  return selectedPlayersField.getElementsByTagName("li").length;
}

function isInputInvalid(id) {
  if (
    isNaN(document.getElementById(id).value) ||
    document.getElementById(id).value < 0 ||
    document.getElementById(id).value == "" ||
    document.getElementById(id).value == " " ||
    document.getElementById(id).value == "  "
  ) {
    return true;
  } else {
    return false;
  }
}

function resetValue(id) {
  document.getElementById(id).value = "";
  document.getElementById("totalCost").innerText = "00";
}

function isPlayerFull() {
  if (selectedPlayers() == 5) {
    return true;
  } else {
    return false;
  }
}

function playerExpenses() {
  return (
    selectedPlayers() *
    parseFloat(document.getElementById("perPlayerCost").value)
  );
}

function totalCost() {
  return (
    playerExpenses() +
    parseFloat(document.getElementById("managerCost").value) +
    parseFloat(document.getElementById("coachCost").value)
  );
}
