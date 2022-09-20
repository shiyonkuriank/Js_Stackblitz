// Import stylesheets
import './index.css';

// Write Javascript code
(function (w) {
  // literal variables
  let welcomeEl = document.getElementById('welcome-el');
  welcomeEl.innerText = 'Hi Shiyon';
  welcomeEl.innerText += '👑';
  let count = document.getElementById('count-el');
  let value = 0;

  let prevEl = document.getElementById('prev-count-el');
  prevEl.textContent = 'Previous Counts: ';

  // abs() function - returning the absolute value of a number
  var increment = function () {
    value = value + 1;
    count.textContent = value;
  };

  function myLogger() {
    console.log(42);
  }

  function save() {
    prevEl.textContent += value + ' - ';
    value = 0;
    count.textContent = value;
  }

  myLogger();

  w.increment = increment;
  w.save = save;
})(window);

/* exposing the function to the global namespace
  so onclick attribute of an HTML element can access
  and trigger it. */
