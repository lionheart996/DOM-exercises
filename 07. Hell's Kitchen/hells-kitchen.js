// function solve() {
//     const input= document.querySelector('#inputs textarea').value;

//     const outputBestRestaurantElement = document.querySelector('#outputs #bestRestaurant p')
//     const outputWorkersElement = document.querySelector('#outputs #workers p')

//     if ( ! input ) return;

//     const restaurants = JSON.parse(input)
//         .reduce((acc,entry) => {

//             const [ name, workersData ] = entry.split(' - ')
            
//             const workers = workersData.split(', ')
//                 .map(workerData => {
                    
//                     const [name, salary] = workerData.split(', ')

//                     return { name, salary: Number(salary) }

//                 });
            
//             acc[name] = {
//                 workers: [...workers],
//             }

//             return acc;

//         }, {} )
    
//     function getAvrSalary(restaurantData){
//         const allSalaries = restaurantData.workers.reduce((allSalaries, w) => allSalaries + w.salary, 0);
//         return allSalaries / restaurantData.workers.length;

//     }
    
//     const [bestRestaurantsKey] = Object.keys(restaurants)
//         .sort((a,b) => getAvrSalary(restaurants[b] - getAvrSalary(restaurants[a]) ) )

//     const bestWorkers = restaurants[bestRestaurantsKey].workers
//         .toSorted((a,b) => b.salary - a.salary);

//     outputBestRestaurantElement.textContent = `Name: {${bestRestourant}} `
//     outputBestRestaurantElement.textContent += `Average Salary: ${getAvrSalary(restaurants[bestRestaurantsKey]).toFixed(2)} `
//     outputBestRestaurantElement.textContent += `Best Salary: ${bestWorkers[0].salary.toFixed(2)}`

//     outputWorkersElement.textContent = bestWorkers.map(w => `Name: ${w.name} With Salary: ${w.salary.toFixed(2)}`).join('')

//  }

function solve() {
    const input = document.querySelector('#inputs textarea').value;

    const outputBestRestaurantElement = document.querySelector('#outputs #bestRestaurant p');
    const outputWorkersElement = document.querySelector('#outputs #workers p');

    if (!input) return;

    const restaurants = JSON.parse(input).reduce((acc, entry) => {
        const [name, workersData] = entry.split(' - ');

        const workers = workersData.split(', ').map(workerData => {
            const [workerName, salary] = workerData.split(' ');
            return { name: workerName, salary: Number(salary) };
        });

        if (!acc[name]) {
            acc[name] = { workers: [] };
        }

        acc[name].workers.push(...workers);

        return acc;
    }, {});

    function getAvrSalary(restaurantData) {
        const totalSalaries = restaurantData.workers.reduce((sum, w) => sum + w.salary, 0);
        return totalSalaries / restaurantData.workers.length;
    }

    const [bestRestaurantKey] = Object.keys(restaurants).sort((a, b) => 
        getAvrSalary(restaurants[b]) - getAvrSalary(restaurants[a])
    );

    const bestRestaurant = restaurants[bestRestaurantKey];
    const bestWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

    outputBestRestaurantElement.textContent = `Name: ${bestRestaurantKey} ` +
        `Average Salary: ${getAvrSalary(bestRestaurant).toFixed(2)} ` +
        `Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;

    outputWorkersElement.textContent = bestWorkers
        .map(w => `Name: ${w.name} With Salary: ${w.salary.toFixed(2)}`)
        .join('\n');
}