function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function sortDescending(a, b) {
      return b[1] - a[1];
  }

   function onClick () {
      let restaurantsAsInput = JSON.parse(document.querySelectorAll('#inputs textarea')[0].value)
      let restaurants = {};
   
      for (restInfo of restaurantsAsInput) {
         let [restaurantName, employeeInfo] = restInfo.split(' - ')
         
         employeeInfo = employeeInfo.split(' ')
         
         for (let i = 0; i < employeeInfo.length; i++){
            if (i % 2 === 0) {
               const employee = employeeInfo[i];
               const salary = employeeInfo[i + 1]
               
            if (restaurants.hasOwnProperty(restaurantName)) {
               restaurants[restaurantName].employees.push(employee);
               restaurants[restaurantName].salaries[employee] = parseFloat(salary);
            }else {
               restaurants[restaurantName] = {
                  employees: [employee],
                  salaries: {
                     [employee]: parseFloat(salary)
                  }
               }
            }

            }
            
         }
         
      }
      let bestRestaurant = '';
      let bestAverageSalary = 0;
      let bestPersonSalary = 0;

      for (resName in restaurants) {
         const employeeCount = restaurants[resName].employees.length
         let totalSalary = Object.values(restaurants[resName].salaries).reduce((acc, curr) => acc + curr, 0);
         const averageSalary = totalSalary / employeeCount

         if (bestAverageSalary < averageSalary) {
            bestRestaurant = resName;
            bestAverageSalary = averageSalary.toFixed(2)
         }
      }
      let sortedSalaries = Object.entries(restaurants[bestRestaurant].salaries).sort(sortDescending);

      
      let finalText = [];

      for (array of sortedSalaries) {
         if (bestPersonSalary < array[1]) {
            bestPersonSalary = array[1]
         }
         finalText.push(`Name: ${array[0]} With Salary: ${array[1]}`)
      }

      const bestRestaurantElement = document.getElementById('bestRestaurant')
      const restaurantParagraph = bestRestaurantElement.getElementsByTagName('p')[0]
      restaurantParagraph.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary} Best Salary: ${bestPersonSalary.toFixed(2)}`

      const bestWorkersElement = document.getElementById('workers')
      const workersParagraph = bestWorkersElement.getElementsByTagName('p')[0]
      workersParagraph.textContent = finalText.join(' ')          
}
}


