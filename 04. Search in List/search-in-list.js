function solve() {
   const towns = document.querySelectorAll('#towns li'); // Select all towns

   const searchString = document.querySelector('#searchText').value.toLowerCase();

   const resultElement = document.querySelector('#result');

   if (searchString === '') {
      return;
   }

   let matchCount = 0; // Counter for matches

   towns.forEach(town => {
      // Reset styles
      town.classList.remove('match');
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';

      // Highlight matches
      if (town.textContent.toLowerCase().includes(searchString)) {
         town.classList.add('match');
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchCount++;
      }
   });

   resultElement.textContent = `${matchCount} matches found`;
}
