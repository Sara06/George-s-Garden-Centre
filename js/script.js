function subscription() {
  "use strict";
  var subscriptionForm = document.getElementById("subscribeForm");
  var emailInput = document.getElementById("emailInput");

  function submit(e) {
    e.preventDefault(); // Prevent default form submission

    var email = emailInput.value.trim();

    // Basic email validation (this can be customized)
    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show the success message as an alert
    alert("Thank you for subscribing! You will receive updates to your email.");

    // Optionally, reset the form
    subscriptionForm.reset();
  }

  // Attach the submit event listener to the form
  subscriptionForm.addEventListener("submit", submit);

  // Simple email validation function
  function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
}

// Call the subscription function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", subscription);

//search functionality

function search() {
  "use strict";
  var searchForm = document.getElementById("searchForm");
  var searchBar = document.getElementById("searchBar");
  var categoryCards = document.querySelectorAll(".card");
  var searchResultsSection = document.getElementById("searchResultsSection");
  var searchResults = document.getElementById("searchResults");

  // Handle the search form submission
  function submit(event) {
    event.preventDefault(); // Prevent form submission
    var query = searchBar.value.trim().toLowerCase();

    // Clear previous search results
    searchResults.innerHTML = "";
    var hasResults = false;

    // Filter cards and append matches to search results
    for (var i = 0; i < categoryCards.length; i++) {
      var card = categoryCards[i];
      var cardTitle = card
        .querySelector(".card-title")
        .textContent.toLowerCase();

      if (cardTitle.includes(query)) {
        hasResults = true;
        var clonedCard = card.cloneNode(true); // Clone the matching card
        var resultCardWrapper = document.createElement("div"); // Add a wrapper for consistent grid layout
        resultCardWrapper.className = "col-12 col-sm-6 col-md-3 mb-4";
        resultCardWrapper.appendChild(clonedCard);
        searchResults.appendChild(resultCardWrapper); // Append the wrapped card to the results container
      }
    }

    // Show the results section if matches are found or display "No results found"
    if (hasResults) {
      searchResultsSection.style.display = "block"; // Show the results section
    } else {
      searchResults.innerHTML =
        "<p class='text-center text-muted'>No results found.</p>";
      searchResultsSection.style.display = "block"; // Show the results section with the message
    }
  }

  // Attach the submit event listener to the form
  searchForm.addEventListener("submit", submit);

  // Optional: Hide results when the search bar is cleared
  function input() {
    if (!searchBar.value.trim()) {
      searchResults.innerHTML = "";
      searchResultsSection.style.display = "none";
    }
  }

  // Attach the input event listener to the search bar
  searchBar.addEventListener("input", input);
}

// Call the search function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", search);

// contact form functionality
document.addEventListener("DOMContentLoaded", function () {
  function contactform() {
    "use strict";

    var form = document.getElementById("contactForm");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var interestSelect = document.getElementById("interest");
    var messageTextarea = document.getElementById("message");

    // Validate form fields on submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Validation checks
      if (!nameInput.value.trim()) {
        alert("Name is required.");
        return;
      }
      if (!emailInput.value.trim()) {
        alert("Email is required.");
        return;
      }
      if (!interestSelect.value) {
        alert("Please select an interest.");
        return;
      }
      if (!messageTextarea.value.trim()) {
        alert("Message is required.");
        return;
      }

      // Simulate form submission success
      alert("Your message has been sent successfully!");

      // Reset the form
      form.reset();
    });
  }

  // Initialize form logic
  contactform();
});

//cart functionality
var Cart = [
  {
    name: "Boston Fern",
    price: 15.99,
    image: "images/shop/plants/potted plants/boston fern.avif",
    quantity: 1,
  },
  {
    name: "Alocasia Melo",
    price: 25.5,
    image: "images/shop/plants/potted plants/alocasia melo.avif",
    quantity: 2,
  },
  {
    name: "Bay Laurel Tree",
    price: 12.75,
    image: "images/shop/plants/potted plants/bay laurel tree.avif",
    quantity: 1,
  },
  {
    name: "Pink Polka Dot Plant",
    price: 15.99,
    image: "images/shop/plants/potted plants/pink polka dot plant.avif",
    quantity: 1,
  },
  {
    name: "Orange Jessamine",
    price: 25.5,
    image: "images/shop/plants/Fragrant/Orange-Jessamine.jpg",
    quantity: 2,
  },
  {
    name: "Rose",
    price: 12.75,
    image: "images/shop/plants/Fragrant/Rose fragrant.jpg",
    quantity: 1,
  },
  {
    name: "Zephyranthes Candida",
    price: 15.99,
    image: "images/shop/plants/bulbs/zephyranthes-candida.jpg",
    quantity: 1,
  },
  {
    name: "Apple",
    price: 25.5,
    image: "images/shop/plants/Fruits/apple.webp",
    quantity: 2,
  },
  {
    name: "Apricot",
    price: 12.75,
    image: "images/shop/plants/Fruits/Apricots.webp",
    quantity: 1,
  },
  {
    name: "Guava",
    price: 15.99,
    image: "images/shop/plants/Fruits/Guava.jpg",
    quantity: 1,
  },
  {
    name: "Mango",
    price: 25.5,
    image: "images/shop/plants/Fruits/mango.jpg",
    quantity: 2,
  },
  {
    name: "Pawpaw",
    price: 12.75,
    image: "images/shop/plants/Fruits/Pawpaw.jpg",
    quantity: 1,
  },
  {
    name: "Royal Mantle",
    price: 15.99,
    image: "images/shop/plants/groundcover/Royal mantle.jpg",
    quantity: 1,
  },
  {
    name: "Scaevola",
    price: 25.5,
    image: "images/shop/plants/groundcover/scaevola.jpg",
    quantity: 2,
  },
  {
    name: "Myoporum",
    price: 12.75,
    image: "images/shop/plants/groundcover/Myoporum.jpg",
    quantity: 1,
  },
  {
    name: "Buxus Crop",
    price: 15.99,
    image: "images/shop/plants/hedges/Japanese-Buxus-crop.jpg",
    quantity: 1,
  },
  {
    name: "Lillt Pilly",
    price: 25.5,
    image: "images/shop/plants/hedges/lilly-pilly.jpg",
    quantity: 2,
  },
  {
    name: "Basil",
    price: 12.75,
    image: "images/shop/plants/Herbs/Basil.webp",
    quantity: 1,
  },
  {
    name: "Mint",
    price: 15.99,
    image: "images/shop/plants/Herbs/mint.jpg",
    quantity: 1,
  },
  {
    name: "Rosemary",
    price: 25.5,
    image: "images/shop/plants/Herbs/Rosemary.jpg",
    quantity: 2,
  },
  {
    name: "Spider Plant",
    price: 12.75,
    image: "images/shop/plants/indoor plants/spider-plant.jpg",
    quantity: 1,
  },
  {
    name: "Anthurium",
    price: 12.75,
    image: "images/shop/plants/indoor plants/anthurium-red.jpg",
    quantity: 1,
  },
  {
    name: "Peperomia",
    price: 12.75,
    image: "images/shop/plants/indoor plants/peperomia.jpg",
    quantity: 1,
  },
  {
    name: "Mat Blue",
    price: 12.75,
    image: "images/shop/plants/native plants/mat blue.jpg",
    quantity: 1,
  },
  {
    name: "Little John",
    price: 12.75,
    image: "images/shop/plants/native plants/Little-John.jpg",
    quantity: 1,
  },
  {
    name: "Pink Rice Flower",
    price: 12.75,
    image: "images/shop/plants/native plants/pink rice flower.jpg",
    quantity: 1,
  },
  {
    name: "Lemon Scented Myrtle",
    price: 12.75,
    image: "images/shop/plants/native plants/lemon scented myrtle.jpg",
    quantity: 1,
  },
  {
    name: "Bowl Stone Deep Small",
    price: 13.75,
    image: "images/shop/pots/Bowl Stone Deep Small.jpg",
    quantity: 1,
  },
  {
    name: "Gloves",
    price: 25.75,
    image: "images/shop/gifts/gloves.jpeg",
    quantity: 1,
  },
  {
    name: "Blood and Bone Fertiliser",
    price: 20.75,
    image: "images/shop/fertiliser/Blood and Bone based fertiliser.jpeg",
    quantity: 1,
  },
];

localStorage.setItem("cart", JSON.stringify(Cart));
var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  "use strict";
  var cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";
  var subtotal = 0;

  // Check if cart is empty
  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
          <div class="empty-cart-message">
            <h3>Your cart is empty. Add items to the cart.</h3>
          </div>
        `;
    document.getElementById("subtotal").innerText = `$0.00`;
    document.getElementById("total").innerText = `$0.00`;
    return; // Exit the function
  }

  for (var index = 0; index < cartItems.length; index++) {
    var item = cartItems[index];
    subtotal += item.price * item.quantity;

    cartItemsContainer.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
     <div class="cart-item">
       <img src="${item.image}" alt="${item.name}">
       <h5 class="mt-3">${item.name}</h5>
       <p>Price: $${item.price.toFixed(2)}</p>
       <p>Quantity: 
         <input type="number" class="form-control d-inline w-50" min="0" value="${
           item.quantity
         }" onchange="updateQuantity(${index}, this.value)">
       </p>
       <button class="btn btn-danger w-100" onclick="removeItem(${index})">Remove</button>
     </div>
   </div>
 `;
  }

  // Update subtotal and total
  document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
  var tax = subtotal * 0.1; // Assuming 10% tax rate
  var total = subtotal + tax;
  document.getElementById("total").innerText = `$${total.toFixed(2)}`;

  var shippingCost = 5; // Fixed shipping cost
  total = subtotal + shippingCost;
  document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById("total").innerText = `$${total.toFixed(2)}`;
}

function updateQuantity(index, quantity) {
  "use strict";
  cartItems[index].quantity = parseInt(quantity);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCart();
}

function removeItem(index) {
  "use strict";
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  displayCart();
}

document.getElementById("checkout-btn").addEventListener("click", function () {
  // Check if the cart is empty or all quantities are zero
  function isQuantityZero(item) {
    return item.quantity === 0;
}

var isEmptyCart = 
    cartItems.length === 0 || cartItems.every(isQuantityZero);


  if (isEmptyCart) {
    // Show message prompting user to add items to the cart
    alert(
      "Your cart is empty. Please add items to the cart before checking out."
    );
  } else {
    // Proceed with checkout
    alert("Thank you for your purchase! Your order has been placed.");
    cartItems = []; // Clear the cart
    localStorage.setItem("cart", JSON.stringify(cartItems)); // Update local storage
    displayCart(); // Refresh the cart display
  }
});

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  displayCart();
});
