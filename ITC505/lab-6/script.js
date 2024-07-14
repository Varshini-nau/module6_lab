// Function to handle resetting the spell content
function resetSpell() {
    var contentArea = document.getElementById('interactive-content');
    contentArea.innerHTML = `
        <p>Welcome! Click the button to reveal a spell.</p>
        <button id="action-button">Cast Spell</button>
    `;
    
    // Reattach event listener to the new action-button
    document.getElementById('action-button').addEventListener('click', castSpell);
}

// Function to handle casting the spell
function castSpell() {
    var contentArea = document.getElementById('interactive-content');
    contentArea.innerHTML = `
        <p>Abracadabra! You've cast a spell.</p>
        <button id="reset-content-btn">Reset Spell</button>
    `;

    // Attach event listener to the reset button
    document.getElementById('reset-content-btn').addEventListener('click', resetSpell);
}

// Initial event listener for casting the spell
document.getElementById('action-button').addEventListener('click', castSpell);
