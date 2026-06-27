// Sam's Hotel - Sample JavaScript

// Mobile navigation toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

// Booking form validation
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const roomType = document.getElementById("roomType").value;
    const guests = document.getElementById("guests").value;
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || phone === "" || checkin === "" || checkout === "" || roomType === "" || guests === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill all required fields.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please enter a valid 10-digit mobile number.";
      return;
    }

    if (new Date(checkout) <= new Date(checkin)) {
      formMessage.style.color = "red";
      formMessage.textContent = "Check-out date must be after check-in date.";
      return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! Your room booking enquiry has been submitted.";
    bookingForm.reset();
  });
}

// Room cost calculator
function calculateCost() {
  const roomSelect = document.getElementById("roomSelect");
  const nightsCount = document.getElementById("nightsCount");
  const roomCount = document.getElementById("roomCount");
  const costResult = document.getElementById("costResult");
  if (!roomSelect || !nightsCount || !roomCount || !costResult) return;

  const price = Number(roomSelect.value);
  const nights = Number(nightsCount.value);
  const rooms = Number(roomCount.value);

  if (nights <= 0 || rooms <= 0) {
    costResult.style.color = "red";
    costResult.textContent = "Please enter a valid number of nights and rooms.";
    return;
  }

  const total = price * nights * rooms;
  costResult.style.color = "green";
  costResult.textContent = "Estimated Total Cost: ₹" + total.toLocaleString("en-IN");
}

// Gallery filter
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(function (item) {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}