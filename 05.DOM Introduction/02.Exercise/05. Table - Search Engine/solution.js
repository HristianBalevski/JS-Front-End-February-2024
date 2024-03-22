function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedInfo = document.getElementById('searchField').value.toLowerCase();
      const tableBody = document.getElementsByTagName('tbody')[0];
      const rows = tableBody.children;

      for (let i = 0; i < rows.length; i++) {
         const tds = rows[i].querySelectorAll('td');

         rows[i].classList.remove('select')

         for (let j = 0; j < tds.length; j++) {
            const td = tds[j].textContent.toLowerCase();

            if (td.includes(searchedInfo)) {
               rows[i].classList.add('select');
            }

         }
      }
      document.getElementById('searchField').value = '';

   }
}


