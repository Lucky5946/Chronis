    // Získání aktuálního data
    let currentDate = new Date();

    // Funkce pro zobrazení měsíce
    function renderCalendar() {
      const monthNameElement = document.getElementById('month-name');
      const calendarDaysElement = document.getElementById('calendar-days');
      
      // Seznam názvů měsíců
      const monthNames = [
        'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 
        'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
      ];
    
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
    
      // Nastavit název měsíce
      monthNameElement.textContent = `${monthNames[month]} ${year}`;
    
      // Získat první den měsíce
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const firstDayOfWeek = firstDayOfMonth.getDay();
      const lastDateOfMonth = lastDayOfMonth.getDate();
    
      // Vyčistit dny v kalendáři
      calendarDaysElement.innerHTML = '';
    
      // Přidat prázdné dny pro první týden
      for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day');
        calendarDaysElement.appendChild(emptyCell);
      }
    
      // Vytvořit dny v měsíci
      for (let day = 1; day <= lastDateOfMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
    
        // Přidat den
        const dayText = document.createElement('span');
        dayText.textContent = day;
        dayCell.appendChild(dayText);
    
        // Přidat událost, pokud existuje (příklad)
        if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5 || day === 8|| day === 9|| day === 10|| day === 11|| day === 12|| day === 15) {
          const event = document.createElement('div');
          event.classList.add('event');
          event.textContent = 'Vývoj aplikace - DOCHAZKA';
          dayCell.appendChild(event);
        }
    
        // Přidat den do kalendáře
        calendarDaysElement.appendChild(dayCell);
      }
    }
    
    // Funkce pro přechod na předchozí měsíc
    document.getElementById('prev-month').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });
    
    // Funkce pro přechod na následující měsíc
    document.getElementById('next-month').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });
    
    // Zavolání funkce pro inicializaci kalendáře
    renderCalendar();
    document.addEventListener("DOMContentLoaded", function() {
      const eventsList = document.getElementById('events-list');
      
      // Příklad událostí
      const events = [
        { date: '2024-12-01', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-02', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-03', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-04', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-05', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-08', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-09', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-10', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-11', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-12', description: 'Vývoj aplikace - DOCHAZKA' },
        { date: '2024-12-15', description: 'Vývoj aplikace - DOCHAZKA' }
      ];
    
      // Funkce pro zobrazení událostí ve formátu seznamu
      function displayEvents() {
        // Vyprázdnění seznamu, pokud již nějaké události existují
        eventsList.innerHTML = '';
    
        // Iterace přes události a přidání každé do seznamu
        events.forEach(event => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<strong>${event.date}</strong>: ${event.description}`;
          eventsList.appendChild(listItem);
        });
      }
    
      // Zavolání funkce pro zobrazení událostí
      displayEvents();
    });
    