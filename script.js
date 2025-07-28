document.addEventListener('DOMContentLoaded', () => {
    const menu = {
        "Starters": [
            {
                "name": "Samosa",
                "description": "Crispy pastry filled with spiced vegetables.",
                "price": "₦500",
                "image": "https://i.imgur.com/3h23bA2.png"
            },
            {
                "name": "Spring Rolls",
                "description": "Deliciously crunchy rolls with a savory filling.",
                "price": "₦500",
                "image": "https://i.imgur.com/sSPSNqj.png"
            }
        ],
        "Main Dishes": [
            {
                "name": "Jollof Rice",
                "description": "Smoky party jollof rice with chicken.",
                "price": "₦2500",
                "image": "https://i.imgur.com/Ua7gS2C.png"
            },
            {
                "name": "Fried Rice",
                "description": "Stir-fried rice with mixed vegetables and shrimp.",
                "price": "₦2500",
                "image": "https://i.imgur.com/8wfy2a7.png"
            }
        ],
        "Soups & Swallows": [
            {
                "name": "Egusi Soup",
                "description": "Rich and savory soup made from melon seeds.",
                "price": "₦2000",
                "image": "https://i.imgur.com/i9D507b.png"
            },
            {
                "name": "Eba",
                "description": "Staple food made from cassava.",
                "price": "₦500",
                "image": "https://i.imgur.com/2jS0a6T.png"
            }
        ],
        "Sides": [
            {
                "name": "Plantain",
                "description": "Fried ripe plantain.",
                "price": "₦500",
                "image": "https://i.imgur.com/9a8J9X2.png"
            },
            {
                "name": "Moi Moi",
                "description": "Steamed bean pudding.",
                "price": "₦500",
                "image": "https://i.imgur.com/8zL5a2s.png"
            }
        ],
        "Today’s Specials": [
            {
                "name": "Ofada Rice",
                "description": "Local rice with a special sauce.",
                "price": "₦3000",
                "image": "https://i.imgur.com/P4ssz5A.png"
            }
        ]
    };

    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryTitle.id = category;
        categoryDiv.appendChild(categoryTitle);

        menu[category].forEach(item => {
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

    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const categories = document.querySelectorAll('.menu-category');

        categories.forEach(category => {
            const menuItems = category.querySelectorAll('.menu-item');
            let categoryVisible = false;

            menuItems.forEach(item => {
                const name = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('p').textContent.toLowerCase();

                if (name.includes(searchString) || description.includes(searchString)) {
                    item.style.display = 'flex';
                    categoryVisible = true;
                } else {
                    item.style.display = 'none';
                }
            });

            if (categoryVisible) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    });
});
