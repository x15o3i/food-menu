document.addEventListener('DOMContentLoaded', () => {
    const drinksMenu = {
        "Drinks & Smoothies": [
            {
                "name": "Zobo",
                "description": "Hibiscus drink.",
                "price": "₦500",
                "image": "https://i.imgur.com/LdCey8B.png"
            },
            {
                "name": "Mango Smoothie",
                "description": "Fresh mango smoothie.",
                "price": "₦1000",
                "image": "https://i.imgur.com/tCgz2hL.png"
            }
        ],
        "Cocktails": [
            {
                "name": "Chapman",
                "description": "A refreshing Nigerian cocktail.",
                "price": "₦1500",
                "image": "https://i.imgur.com/7oR9d4M.png"
            },
            {
                "name": "Palm Wine",
                "description": "A sweet, traditional Nigerian drink.",
                "price": "₦1000",
                "image": "https://i.imgur.com/v2YwT0s.png"
            }
        ]
    };

    const menuContainer = document.getElementById('drinks-menu');

    for (const category in drinksMenu) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        drinksMenu[category].forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');

            const itemImage = document.createElement('img');
            itemImage.src = item.image;
            itemImage.alt = item.name;
            menuItemDiv.appendChild(itemImage);

            const itemDetails = document.createElement('div');
            itemDetails.classList.add('menu-item-details');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemDetails.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDetails.appendChild(itemDescription);

            const itemPrice = document.createElement('p');
            itemPrice.classList.add('price');
            itemPrice.textContent = item.price;
            itemDetails.appendChild(itemPrice);

            menuItemDiv.appendChild(itemDetails);
            categoryDiv.appendChild(menuItemDiv);
        });

        menuContainer.appendChild(categoryDiv);
    }
});
