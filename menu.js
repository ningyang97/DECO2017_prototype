document.addEventListener('DOMContentLoaded', () => {
    fetchMenuItems();
});

function fetchMenuItems() {
    const menuSection = document.getElementById('menu');

    fetch('menu_data.json')
        .then(response => response.json())
        .then(data => {
            let menuItemsHTML = '';
            data.forEach(item => {
                menuItemsHTML += `
                    <div class="menu-item">
                        <h2>${item.name}</h2>
                        <p>Calories: ${item.calories} kcal</p>
                        <p>Description: ${item.description}</p>
                    </div>
                `;
            });
            menuSection.innerHTML = menuItemsHTML;
        });
}
