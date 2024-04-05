function loadRepos() {
   const resElement = document.getElementById('res');
   const buttonElement = document.getElementsByTagName('button')[0];

   buttonElement.addEventListener("click", myFunction);

   function myFunction() {
      fetch('https://api.github.com/users/testnakov/repos')
          .then(res => res.text())
          .then(data => {
             resElement.textContent = data;
          })
          .catch(err => console.error(err));
   }
}
