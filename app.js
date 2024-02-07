// app.js

// Sample freelancers array
const freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 }
    // Add more freelancers as needed
];

// Function to render freelancers on the page
function renderFreelancers() {
    const freelancersList = document.getElementById('freelancers-list');
    freelancersList.innerHTML = '';

    freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement('div');
        freelancerDiv.innerHTML = `<strong>${freelancer.name}</strong> - ${freelancer.occupation} - $${freelancer.startingPrice}`;
        freelancersList.appendChild(freelancerDiv);
    });
}

// Function to calculate the average starting price
function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalPrices / freelancers.length || 0;
    return averagePrice.toFixed(2);
}

// Function to update the average price on the page
function updateAveragePrice() {
    const averagePriceElement = document.getElementById('average-price');
    averagePriceElement.textContent = `Average Starting Price: $${calculateAveragePrice()}`;
}

// Function to add a new random freelancer
function addRandomFreelancer() {
    const occupations = ['Programmer', 'Designer', 'Marketing Specialist'];
    const randomName = 'New Freelancer'; // You can generate random names too
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100

    freelancers.push({
        name: randomName,
        occupation: randomOccupation,
        startingPrice: randomStartingPrice
    });

    renderFreelancers();
    updateAveragePrice();
}

// Initial rendering
renderFreelancers();
updateAveragePrice();

// Add a new random freelancer every 5 seconds (5000 milliseconds)
setInterval(addRandomFreelancer, 5000);
