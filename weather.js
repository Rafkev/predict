// Function to simulate weather prediction
function predictWeather() {
    // Define weather conditions and their probabilities
    const weatherConditions = ['Sunny', 'Cloudy', 'Rainy', 'Stormy'];
    const probabilities = [0.4, 0.3, 0.2, 0.1]; // Adjust these probabilities as needed

    // Generate a random number between 0 and 1
    const random = Math.random();

    // Calculate the cumulative probability
    let cumulativeProbability = 0;
    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProbability += probabilities[i];
        if (random < cumulativeProbability) {
            return weatherConditions[i]; // Return the corresponding weather condition
        }
    }
}

// Example usage
const predictedWeather = predictWeather();
console.log("Predicted Weather:", predictedWeather);
