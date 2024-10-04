const btnHamburger = document.querySelector(".fa-bars");

const nav = document.getElementById("nav");

btnHamburger.addEventListener("click", () => {
  if (nav.classList.contains("navOpen")) {
    nav.classList.remove("navOpen");
  } else {
    nav.classList.add("navOpen");
  }
});

const btnTheme = document.getElementById("toggleTheme");

btnTheme.addEventListener("click", () => {
  if (document.body.classList.contains("body-light")) {
    document.body.classList.add("body-dark");
    document.body.classList.remove("body-light");
  } else {
    document.body.classList.add("body-light");
    document.body.classList.remove("body-dark");
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const experienceItems = document.querySelectorAll(".duration");
  
    experienceItems.forEach((item) => {
      const startDate = item.getAttribute("data-start-date");
      const endDate = item.getAttribute("data-end-date"); // Optional, for finished jobs
  
      if (startDate) {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date(); // Use the end date if provided, otherwise use the current date
  
        // Calculate the difference in months
        let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
        totalMonths -= start.getMonth();
        totalMonths += end.getMonth();
  
        // Ensure totalMonths is never negative
        totalMonths = totalMonths > 0 ? totalMonths : 0;
  
        // Calculate years and remaining months
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
  
        // Construct the duration string
        let durationText = '';
        if (years > 0) {
          durationText += years + (years === 1 ? ' yr' : ' yrs'); // Singular for 1 year
        }
        if (months > 0) {
          if (years > 0) {
            durationText += ' '; // Add space between years and months
          }
          durationText += months + (months === 1 ? ' mo' : ' mos'); // Singular for 1 month
        }
  
        // If there are no years or months, set it to "0 mos"
        if (durationText === '') {
          durationText = '0 mos';
        }
  
        // Update the .months-worked span with the calculated value
        item.querySelector(".months-worked").textContent = durationText;
      }
    });
  });
  