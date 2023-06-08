document.addEventListener('DOMContentLoaded', () => {
    const sampleData = {
        name: 'Sam',
        dailyCaloricNeed: 2000,
        breakfast: 500,
        lunch: 800,
        dinner: 700
    };

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        const userCaloricNeed = calculateCaloricNeed(userData.weight, userData.height, userData.age, userData.gender);
        const userDiet = calculateUserDiet(userCaloricNeed);

        displayUserData(userData);
        displayUserDiet(userDiet);
    } else {
        displaySampleData(sampleData);
    }
});

function calculateCaloricNeed(weight, height, age, gender) {
    let bmr;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    return bmr * 1.2; // 假设习惯是久坐不运动
}

function calculateUserDiet(caloricNeed) {
    const breakfast = caloricNeed * 0.25;
    const lunch = caloricNeed * 0.35;
    const dinner = caloricNeed * 0.4;

    return {
        breakfast,
        lunch,
        dinner
    };
}

function displaySampleData(data) {
    const sampleDataSection = document.getElementById('sample-data');
    sampleDataSection.innerHTML = `
        <h2>Sample Data</h2>
        <p>Name: ${data.name}</p>
        <p>Daily Caloric Need: ${data.dailyCaloricNeed} kcal</p>
        <p>Breakfast: ${data.breakfast} kcal</p>
        <p>Lunch: ${data.lunch} kcal</p>
        <p>Dinner: ${data.dinner} kcal</p>
    `;
}

function displayUserData(userData) {
    const userDataSection = document.getElementById('user-data');
    userDataSection.innerHTML = `
        <h2>User Data</h2>
        <p>Name: ${userData.name}</p>
        <p>Gender: ${userData.gender}</p>
        <p>Age: ${userData.age}</p>
        <p>Height: ${userData.height}</p>
        <p>Weight: ${userData.weight}</p>
    `;
}

function displayUserDiet(userDiet) {
    const userDataSection = document.getElementById('user-data');
    userDataSection.innerHTML += `
        <p>Daily Caloric Need: ${userCaloricNeed.toFixed(2)} kcal</p>
        <p>Breakfast: ${userDiet.breakfast.toFixed(2)} kcal</p>
        <p>Lunch: ${userDiet.lunch.toFixed(2)} kcal</p>
        <p>Dinner: ${userDiet.dinner.toFixed(2)} kcal</p>
    `;
}
