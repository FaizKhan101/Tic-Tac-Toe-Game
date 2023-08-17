function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block'
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    if (!enteredPlayerName) {
        errorOutputElement.textContent = 'Please enter a valid name!'
        event.target.firstElementChild.classList.add('error');
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer -1].name = enteredPlayerName;

    closePlayerConfig()
}