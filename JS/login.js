function validateLogin(event) {
    event.preventDefault(); // Zabrání odeslání formuláře
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kontrola přihlašovacích údajů
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'domov.html'; // Přesměrování na jinou stránku
    } else {
        alert('Nesprávné uživatelské jméno nebo heslo!');
    }
}