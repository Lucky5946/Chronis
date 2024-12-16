document.getElementById('submit-button').addEventListener('click', function() {
    document.getElementById('employee-form').submit();
});

const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

function updateDays() {
    const year = parseInt(yearSelect.value);
    const month = parseInt(monthSelect.value);

    if (!year || !month) return;

    const daysInMonth = new Date(year, month, 0).getDate(); // Počet dní v měsíci
    daySelect.innerHTML = '<option value="" disabled selected>Vyberte den</option>'; // Reset

    for (let i = 1; i <= daysInMonth; i++) {
        daySelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

monthSelect.addEventListener("change", updateDays);
yearSelect.addEventListener("change", updateDays);