document.addEventListener('DOMContentLoaded', () => {
    const dietPlanSection = document.getElementById('diet-plan');

    fetch('diet_plan_data.json')
        .then(response => response.json())
        .then(data => {
            let dietPlanHTML = '<h2>Diet Plan</h2>';
            data.forEach(item => {
                dietPlanHTML += `
                    <div class="meal">
                        <h3>${item.name}</h3>
                        <p>Ingredients: ${item.ingredients}</p>
                        <p>Cooking Instructions: ${item.instructions}</p>
                    </div>
                `;
            });
            dietPlanSection.innerHTML = dietPlanHTML;
        });
});
