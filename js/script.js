'use strict'

document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("card-container");
  
    // Function to create a card element
    function createCard() {
      const card = document.createElement("div");
      card.classList.add("w-48", "h-64", "bg-gray-200", "border", "border-gray-300", "m-4", "flex", "justify-center", "items-center");
      card.innerHTML = "<p class='text-lg font-semibold'>Card</p>";
      return card;
    }
  
    // Display 12 cards
    for (let i = 0; i < 12; i++) {
      const card = createCard();
      cardContainer.appendChild(card);
    }
  });
  