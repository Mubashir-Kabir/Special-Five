function selectedPlayers() {
  return selectedPlayersField.getElementsByTagName("li").length;
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
