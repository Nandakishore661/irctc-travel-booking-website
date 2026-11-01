
/* ==========================================
   TRAVELGO - COMPLETE WEBSITE JAVASCRIPT
   HTML + CSS + JAVASCRIPT
========================================== */

const today = new Date().toISOString().split("T")[0];

const busData = [
    {
        id: 1,
        name: "Orange Travels",
        type: "AC Sleeper",
        from: "Hyderabad",
        to: "Bangalore",
        departure: "09:00 PM",
        arrival: "07:00 AM",
        duration: "10 Hours",
        price: 850,
        seats: 18,
        rating: 4.5,
        number: "OR101",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000",
        amenities: ["AC", "Charging Point", "Blanket", "Water Bottle"]
    },
    {
        id: 2,
        name: "VRL Travels",
        type: "AC Seater",
        from: "Hyderabad",
        to: "Bangalore",
        departure: "08:00 AM",
        arrival: "06:00 PM",
        duration: "10 Hours",
        price: 650,
        seats: 24,
        rating: 4.3,
        number: "VR202",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000",
        amenities: ["AC", "Charging Point", "Water Bottle"]
    },
    {
        id: 3,
        name: "SRS Travels",
        type: "Non-AC Sleeper",
        from: "Hyderabad",
        to: "Mumbai",
        departure: "07:00 PM",
        arrival: "10:00 AM",
        duration: "15 Hours",
        price: 950,
        seats: 12,
        rating: 4.2,
        number: "SRS303",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000",
        amenities: ["Sleeper Berth", "Water Bottle"]
    },
    {
        id: 4,
        name: "Kaveri Travels",
        type: "AC Sleeper",
        from: "Hyderabad",
        to: "Chennai",
        departure: "09:30 PM",
        arrival: "08:30 AM",
        duration: "11 Hours",
        price: 1100,
        seats: 15,
        rating: 4.6,
        number: "KAV404",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000",
        amenities: ["AC", "Sleeper", "Charging Point"]
    },
    {
        id: 5,
        name: "Morning Star",
        type: "AC Seater",
        from: "Hyderabad",
        to: "Vijayawada",
        departure: "07:00 AM",
        arrival: "12:00 PM",
        duration: "5 Hours",
        price: 450,
        seats: 20,
        rating: 4.1,
        number: "MS505",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000",
        amenities: ["AC", "Charging Point"]
    },
    {
        id: 6,
        name: "Greenline Travels",
        type: "AC Sleeper",
        from: "Bangalore",
        to: "Hyderabad",
        departure: "10:00 PM",
        arrival: "08:00 AM",
        duration: "10 Hours",
        price: 900,
        seats: 16,
        rating: 4.4,
        number: "GR606",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000",
        amenities: ["AC", "Blanket", "Charging Point"]
    }
];

const trainData = [
    {
        id: 101,
        name: "Vande Bharat Express",
        number: "20833",
        from: "Hyderabad",
        to: "Bangalore",
        departure: "06:00 AM",
        arrival: "02:30 PM",
        duration: "8h 30m",
        price: 1450
    },
    {
        id: 102,
        name: "Rajdhani Express",
        number: "12430",
        from: "Delhi",
        to: "Mumbai",
        departure: "04:00 PM",
        arrival: "08:15 AM",
        duration: "16h 15m",
        price: 2100
    },
    {
        id: 103,
        name: "Duronto Express",
        number: "12269",
        from: "Hyderabad",
        to: "Mumbai",
        departure: "08:30 PM",
        arrival: "10:00 AM",
        duration: "13h 30m",
        price: 1250
    }
];

const destinations = {
    Hyderabad: {
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1400",
        subtitle: "The City of Pearls",
        description: "Explore Hyderabad, a beautiful city known for its historic monuments, rich culture, delicious food and modern lifestyle.",
        places: ["Charminar", "Golconda Fort", "Hussain Sagar", "Ramoji Film City"],
        best: "October to February",
        routes: ["Bangalore", "Mumbai", "Chennai", "Vijayawada"]
    },
    Mumbai: {
        image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1400",
        subtitle: "The City of Dreams",
        description: "Experience Mumbai's beautiful coastline, iconic architecture, busy streets and unforgettable food.",
        places: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Juhu Beach"],
        best: "November to February",
        routes: ["Hyderabad", "Delhi", "Pune", "Goa"]
    },
    Delhi: {
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1400",
        subtitle: "The Heart of India",
        description: "Discover the history, monuments, culture and amazing experiences of India's capital city.",
        places: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple"],
        best: "October to March",
        routes: ["Mumbai", "Jaipur", "Agra", "Chandigarh"]
    },
    Kerala: {
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1400",
        subtitle: "God's Own Country",
        description: "Enjoy beautiful backwaters, green landscapes, beaches, hills and peaceful nature.",
        places: ["Munnar", "Alleppey", "Kochi", "Wayanad"],
        best: "September to March",
        routes: ["Bangalore", "Chennai", "Hyderabad", "Kochi"]
    },
    Jaipur: {
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1400",
        subtitle: "The Pink City",
        description: "Explore Rajasthan's royal heritage, magnificent palaces, colorful markets and forts.",
        places: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"],
        best: "October to March",
        routes: ["Delhi", "Mumbai", "Agra", "Udaipur"]
    },
    Goa: {
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1400",
        subtitle: "Beaches and Adventures",
        description: "Enjoy tropical beaches, scenic sunsets, exciting activities and beautiful coastal experiences.",
        places: ["Baga Beach", "Calangute Beach", "Fort Aguada", "Dudhsagar Falls"],
        best: "November to February",
        routes: ["Mumbai", "Bangalore", "Hyderabad", "Pune"]
    }
};

// Helper functions

function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

function saveBooking(booking) {
    const bookings = JSON.parse(localStorage.getItem("travelBookings") || "[]");
    bookings.push(booking);
    localStorage.setItem("travelBookings", JSON.stringify(bookings));
}

function getBookings() {
    return JSON.parse(localStorage.getItem("travelBookings") || "[]");
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function makeBookingId() {
    return "TG" + Date.now().toString().slice(-9);
}

function toggleMenu() {
    document.getElementById("navLinks")?.classList.toggle("show");
}


// ==========================================
// 1. HOMEPAGE AND MODE SWITCHING
// ==========================================

function switchMode(mode) {

    const trainPage = document.getElementById("trainPage");
    const busPage = document.getElementById("busPage");

    if (!trainPage || !busPage) return;

    const trainTab = document.getElementById("trainTab");
    const busTab = document.getElementById("busTab");

    trainPage.classList.toggle("hidden", mode !== "train");
    busPage.classList.toggle("hidden", mode !== "bus");

    trainTab.classList.toggle("active", mode === "train");
    busTab.classList.toggle("active", mode === "bus");

    document.body.classList.toggle("bus-mode", mode === "bus");

    document.getElementById("trainResults")?.classList.add("hidden");
    document.getElementById("busResults")?.classList.add("hidden");
}

function swapCities(mode) {

    const prefix = mode === "train" ? "train" : "bus";

    const from = document.getElementById(prefix + "From");
    const to = document.getElementById(prefix + "To");

    if (!from || !to) return;

    const temp = from.value;
    from.value = to.value;
    to.value = temp;
}

function getSearchValues(mode) {

    const prefix = mode === "train" ? "train" : "bus";

    const from = document.getElementById(prefix + "From").value.trim();
    const to = document.getElementById(prefix + "To").value.trim();
    const date = document.getElementById(prefix + "Date").value;

    if (!from || !to || !date) {
        alert("Please enter all journey details.");
        return null;
    }

    if (from.toLowerCase() === to.toLowerCase()) {
        alert("From and To cities cannot be the same.");
        return null;
    }

    if (date < today) {
        alert("Please select a valid future or current date.");
        return null;
    }

    return { from, to, date };
}


// ==========================================
// 2. TRAIN SEARCH
// ==========================================

function searchTrains() {

    const search = getSearchValues("train");
    if (!search) return;

    const results = trainData.filter(train =>
        train.from.toLowerCase() === search.from.toLowerCase() &&
        train.to.toLowerCase() === search.to.toLowerCase()
    );

    const list = document.getElementById("trainResultList");
    const section = document.getElementById("trainResults");

    if (!list || !section) return;

    list.innerHTML = "";

    if (results.length === 0) {
        list.innerHTML = `<div class="empty-state">
            <h3>No trains found</h3>
            <p>Try Hyderabad to Bangalore, Hyderabad to Mumbai or Delhi to Mumbai.</p>
        </div>`;
    }

    results.forEach(train => {

        list.innerHTML += `
            <article class="result-card">
                <div>
                    <h3>${escapeHTML(train.name)}</h3>
                    <p>Train No: ${train.number}</p>
                    <p>${escapeHTML(train.from)} → ${escapeHTML(train.to)}</p>
                </div>
                <div><strong>${train.departure}</strong><p>Departure</p></div>
                <div><strong>${train.arrival}</strong><p>${train.duration}</p></div>
                <div>
                    <h3>₹${train.price}</h3>
                    <button class="book-btn" onclick="openTrainBooking(${train.id})">Book Tickets</button>
                </div>
            </article>
        `;
    });

    section.classList.remove("hidden");
    section.scrollIntoView({ behavior: "smooth" });
}


// ==========================================
// 3. BUS SEARCH AND BUS CARDS
// ==========================================

let currentBusResults = [];

function searchBuses() {

    const search = getSearchValues("bus");
    if (!search) return;

    const type = document.getElementById("busType").value;

    currentBusResults = busData.filter(bus =>
        bus.from.toLowerCase() === search.from.toLowerCase() &&
        bus.to.toLowerCase() === search.to.toLowerCase() &&
        (type === "All Buses" || bus.type === type)
    );

    renderBusResults(currentBusResults);

    document.getElementById("busResults").classList.remove("hidden");

    document.getElementById("busResults").scrollIntoView({
        behavior: "smooth"
    });
}

function renderBusResults(data) {

    const list = document.getElementById("busResultList");
    if (!list) return;

    list.innerHTML = "";

    if (data.length === 0) {
        list.innerHTML = `<div class="empty-state">
            <h3>No buses found</h3>
            <p>Try Hyderabad to Bangalore, Mumbai, Chennai or Vijayawada.</p>
        </div>`;
        return;
    }

    data.forEach(bus => {

        list.innerHTML += `
            <article class="bus-card">

                <img src="${bus.image}" alt="${escapeHTML(bus.name)}"
                     loading="lazy">

                <div class="bus-card-content">
                    <h3>${escapeHTML(bus.name)}</h3>
                    <p><i class="fa-solid fa-bus"></i> ${escapeHTML(bus.type)}</p>
                    <p><i class="fa-solid fa-route"></i>
                        ${escapeHTML(bus.from)} → ${escapeHTML(bus.to)}</p>
                    <p><i class="fa-regular fa-clock"></i>
                        ${bus.departure} – ${bus.arrival} | ${bus.duration}</p>
                    <p>⭐ ${bus.rating} Rating | ${bus.seats} seats available</p>
                    <p><i class="fa-solid fa-wifi"></i>
                        ${bus.amenities.join(" • ")}</p>

                    <div class="bus-card-footer">
                        <div>
                            <small>Starting from</small>
                            <strong>₹${bus.price}</strong>
                        </div>

                        <button onclick="openBusDetails(${bus.id})">
                            View Details
                        </button>
                    </div>
                </div>
            </article>
        `;
    });
}

function filterBuses() {

    const type = document.getElementById("busFilter").value;
    const price = document.getElementById("priceFilter").value;

    let filtered = currentBusResults.filter(bus => {

        const typeMatch = type === "all" || bus.type === type;
        const priceMatch = price === "all" || bus.price < Number(price);

        return typeMatch && priceMatch;
    });

    renderBusResults(filtered);
}


// ==========================================
// 4. BUS DETAILS - OPEN ANOTHER PAGE
// ==========================================

function openBusDetails(id) {
    window.location.href = `bus-details.html?id=${id}`;
}

function renderBusDetails() {

    const container = document.getElementById("busDetailContent");
    if (!container) return;

    const id = Number(getParam("id"));
    const bus = busData.find(item => item.id === id);

    if (!bus) {
        container.innerHTML = `<div class="empty-state">Bus not found.</div>`;
        return;
    }

    container.innerHTML = `
        <div class="detail-hero">
            <img src="${bus.image}" alt="${escapeHTML(bus.name)}">
            <div class="detail-hero-text">
                <h1>${escapeHTML(bus.name)}</h1>
                <p>${escapeHTML(bus.type)} | ⭐ ${bus.rating} Rating</p>
            </div>
        </div>

        <div class="detail-content">
            <div>
                <div class="detail-box">
                    <h2>Bus Information</h2>
                    <p>
                        Operator: ${escapeHTML(bus.name)}<br>
                        Bus Number: ${bus.number}<br>
                        Bus Type: ${escapeHTML(bus.type)}<br>
                        Departure: ${bus.departure}<br>
                        Arrival: ${bus.arrival}<br>
                        Duration: ${bus.duration}<br>
                        Available Seats: ${bus.seats}
                    </p>
                </div>

                <div class="detail-box">
                    <h2>Route Information</h2>
                    <p>
                        <strong>${escapeHTML(bus.from)}</strong>
                        → 
                        <strong>${escapeHTML(bus.to)}</strong>
                    </p>
                    <p>Boarding and dropping point details will be available in the booking process.</p>
                </div>

                <div class="detail-box">
                    <h2>Bus Amenities</h2>
                    <div class="place-list">
                        ${bus.amenities.map(item =>
                            `<div class="place-item">✓ ${escapeHTML(item)}</div>`
                        ).join("")}
                    </div>
                </div>
            </div>

            <div>
                <div class="detail-box">
                    <h2>Book Your Journey</h2>
                    <p>Price per passenger</p>
                    <div class="booking-price">₹${bus.price}</div>
                    <p>⭐ ${bus.rating} | ${bus.seats} available seats</p>
                    <button class="full-btn" onclick="goToBooking('bus', ${bus.id})">
                        Book Bus Tickets
                    </button>
                </div>
            </div>
        </div>
    `;
}


// ==========================================
// 5. DESTINATION DETAILS PAGE
// ==========================================

function renderDestination() {

    const container = document.getElementById("destinationContent");
    if (!container) return;

    const name = getParam("place") || "Hyderabad";
    const place = destinations[name];

    if (!place) {
        container.innerHTML = `<div class="empty-state">Destination not found.</div>`;
        return;
    }

    container.innerHTML = `
        <div class="detail-hero">
            <img src="${place.image}" alt="${name}">
            <div class="detail-hero-text">
                <h1>${escapeHTML(name)}</h1>
                <p>${escapeHTML(place.subtitle)}</p>
            </div>
        </div>

        <div class="detail-content">
            <div>
                <div class="detail-box">
                    <h2>About ${escapeHTML(name)}</h2>
                    <p>${escapeHTML(place.description)}</p>
                    <p><strong>Best time to visit:</strong> ${escapeHTML(place.best)}</p>
                </div>

                <div class="detail-box">
                    <h2>Popular Tourist Places</h2>
                    <div class="place-list">
                        ${place.places.map(item =>
                            `<div class="place-item">
                                <i class="fa-solid fa-location-dot"></i>
                                ${escapeHTML(item)}
                            </div>`
                        ).join("")}
                    </div>
                </div>

                <div class="detail-box">
                    <h2>Popular Routes</h2>
                    <div class="place-list">
                        ${place.routes.map(item =>
                            `<div class="place-item">${escapeHTML(name)} → ${escapeHTML(item)}</div>`
                        ).join("")}
                    </div>
                </div>
            </div>

            <div>
                <div class="detail-box">
                    <h2>Plan Your Journey</h2>
                    <p>Choose your preferred travel option to explore ${escapeHTML(name)}.</p>
                    <button class="full-btn" onclick="bookDestination('${escapeHTML(name)}','train')">
                        <i class="fa-solid fa-train"></i> Book Train Tickets
                    </button>
                    <button class="full-btn" style="background:#087e70"
                        onclick="bookDestination('${escapeHTML(name)}','bus')">
                        <i class="fa-solid fa-bus"></i> Book Bus Tickets
                    </button>
                </div>
            </div>
        </div>
    `;
}

function bookDestination(name, mode) {

    const params = new URLSearchParams({
        mode,
        to: name,
        from: mode === "train" ? "Hyderabad" : "Hyderabad"
    });

    window.location.href = `booking.html?${params}`;
}


// ==========================================
// 6. OPEN BOOKING PAGE
// ==========================================

function goToBooking(mode, id) {

    const params = new URLSearchParams({
        mode,
        id,
        date: today
    });

    window.location.href = `booking.html?${params}`;
}

function openTrainBooking(id) {
    goToBooking("train", id);
}


// ==========================================
// 7. BOOKING PAGE AND SEAT SELECTION
// ==========================================

let activeBooking = null;
let selectedSeats = [];

function renderBookingPage() {

    const container = document.getElementById("bookingContent");
    if (!container) return;

    const mode = getParam("mode") || "bus";
    const id = Number(getParam("id"));
    const from = getParam("from") || "";
    const to = getParam("to") || "";
    const date = getParam("date") || today;

    const vehicle = mode === "bus"
        ? busData.find(item => item.id === id)
        : trainData.find(item => item.id === id);

    if (id && !vehicle) {
        container.innerHTML = `<div class="empty-state">Journey not found. Please search again.</div>`;
        return;
    }

    activeBooking = {
        mode,
        vehicle,
        from: vehicle?.from || from,
        to: vehicle?.to || to,
        date
    };

    selectedSeats = [];

    const price = vehicle?.price || 650;

    container.innerHTML = `
        <div class="section-heading">
            <span class="eyebrow">COMPLETE YOUR BOOKING</span>
            <h2>${mode === "bus" ? "Bus" : "Train"} Ticket Booking</h2>
            <p>Enter your passenger details and select your seats.</p>
        </div>

        <div class="booking-layout">
            <div>
                <div class="detail-box">
                    <h2>Journey Details</h2>
                    <div class="booking-summary">
                        <strong>Travel Mode:</strong> ${mode.toUpperCase()}<br>
                        <strong>Vehicle:</strong> ${escapeHTML(vehicle?.name || "Travel service")}<br>
                        <strong>From:</strong> ${escapeHTML(activeBooking.from)}<br>
                        <strong>To:</strong> ${escapeHTML(activeBooking.to)}<br>
                        <strong>Date:</strong> ${escapeHTML(date)}<br>
                        <strong>Fare:</strong> ₹${price}
                    </div>
                </div>

                <div class="detail-box">
                    <h2>Select Your Seats</h2>
                    <p>Choose your preferred seats below.</p>
                    <div class="seat-grid" id="bookingSeatGrid"></div>
                    <p>🟩 Available &nbsp; 🟥 Booked &nbsp; 🟦 Selected</p>
                    <div class="booking-summary">
                        Selected: <strong id="seatNames">None</strong><br>
                        Total: ₹<strong id="seatTotal">${price}</strong>
                    </div>
                </div>
            </div>

            <div class="detail-box">
                <h2>Passenger Information</h2>
                <form id="passengerForm" onsubmit="confirmFullBooking(event)">

                    <div class="form-group">
                        <label>Full Name</label>
                        <input id="passengerName" required placeholder="Enter your full name">
                    </div>

                    <div class="form-group">
                        <label>Email Address</label>
                        <input id="passengerEmail" type="email" required placeholder="Enter email">
                    </div>

                    <div class="form-group">
                        <label>Mobile Number</label>
                        <input id="passengerPhone" type="tel" pattern="[0-9]{10}"
                            maxlength="10" required placeholder="10 digit mobile number">
                    </div>

                    <div class="form-group">
                        <label>Journey Date</label>
                        <input id="passengerDate" type="date" min="${today}" value="${escapeHTML(date)}" required>
                    </div>

                    <div class="booking-summary">
                        Please check all your passenger details before confirming.
                        This is a frontend demo booking.
                    </div>

                    <button type="submit" class="full-btn">
                        Confirm Demo Booking
                    </button>
                </form>
            </div>
        </div>
    `;

    const seatGrid = document.getElementById("bookingSeatGrid");

    for (let i = 1; i <= 24; i++) {

        const booked = [3, 7, 12, 19].includes(i);

        const button = document.createElement("button");
        button.className = "seat" + (booked ? " booked" : "");
        button.textContent = "S" + i;
        button.disabled = booked;

        if (!booked) {
            button.addEventListener("click", () => selectBookingSeat(i, button));
        }

        seatGrid.appendChild(button);
    }
}

function selectBookingSeat(number, button) {

    if (selectedSeats.includes(number)) {
        selectedSeats = selectedSeats.filter(seat => seat !== number);
        button.classList.remove("selected");
    } else {
        selectedSeats.push(number);
        button.classList.add("selected");
    }

    updateBookingTotal();
}

function updateBookingTotal() {

    const price = activeBooking?.vehicle?.price || 650;

    document.getElementById("seatNames").textContent =
        selectedSeats.length ? selectedSeats.join(", ") : "None";

    document.getElementById("seatTotal").textContent =
        selectedSeats.length ? selectedSeats.length * price : price;
}


// ==========================================
// 8. CONFIRM BOOKING
// ==========================================

function confirmFullBooking(event) {

    event.preventDefault();

    if (!selectedSeats.length) {
        alert("Please select at least one seat.");
        return;
    }

    const name = document.getElementById("passengerName").value.trim();
    const email = document.getElementById("passengerEmail").value.trim();
    const phone = document.getElementById("passengerPhone").value.trim();
    const date = document.getElementById("passengerDate").value;

    if (!date || date < today) {
        alert("Please select a valid journey date.");
        return;
    }

    const price = activeBooking.vehicle?.price || 650;
    const booking = {
        id: makeBookingId(),
        mode: activeBooking.mode,
        vehicle: activeBooking.vehicle?.name || "Travel service",
        from: activeBooking.from,
        to: activeBooking.to,
        date,
        name,
        email,
        phone,
        seats: [...selectedSeats],
        total: price * selectedSeats.length,
        status: "Confirmed",
        createdAt: new Date().toLocaleString()
    };

    saveBooking(booking);

    const container = document.getElementById("bookingContent");

    container.innerHTML = `
        <div class="detail-box" style="max-width:700px;margin:50px auto;text-align:center">
            <i class="fa-solid fa-circle-check"
               style="font-size:65px;color:#16a34a"></i>

            <h2 style="margin:20px 0;color:#15803d">Booking Confirmed!</h2>

            <p>Your demo booking has been saved successfully.</p>

            <div class="booking-summary" style="text-align:left;margin-top:25px">
                <strong>Booking ID:</strong> ${booking.id}<br>
                <strong>Passenger:</strong> ${escapeHTML(name)}<br>
                <strong>Journey:</strong> ${escapeHTML(booking.from)} → ${escapeHTML(booking.to)}<br>
                <strong>Vehicle:</strong> ${escapeHTML(booking.vehicle)}<br>
                <strong>Date:</strong> ${escapeHTML(date)}<br>
                <strong>Seats:</strong> ${booking.seats.join(", ")}<br>
                <strong>Total Amount:</strong> ₹${booking.total}
            </div>

            <a href="my-bookings.html" class="primary-btn" style="margin-top:22px">
                View My Bookings
            </a>
        </div>
    `;
}


// ==========================================
// 9. TRACKING PAGE
// ==========================================

function trackJourney() {

    const type = document.getElementById("trackingType").value;
    const number = document.getElementById("trackingNumber").value.trim().toUpperCase();

    const result = document.getElementById("trackingResult");

    if (!number) {
        alert("Please enter a vehicle number.");
        return;
    }

    const vehicle = type === "bus"
        ? busData.find(item => item.number.toUpperCase() === number)
        : trainData.find(item => item.number.toUpperCase() === number);

    if (!vehicle) {
        result.innerHTML = `
            <div class="empty-state">
                <h3>Vehicle not found</h3>
                <p>Check the number and try again.</p>
                <p>Demo bus numbers: OR101, VR202, SRS303, KAV404, MS505, GR606</p>
                <p>Demo train numbers: 20833, 12430, 12269</p>
            </div>`;
        return;
    }

    const stops = [
        { name: vehicle.from, time: "Journey Started", complete: true },
        { name: "Intermediate Station", time: "In Transit", complete: true },
        { name: vehicle.to, time: "Expected Arrival", complete: false }
    ];

    result.innerHTML = `
        <div class="tracking-result">

            <span class="status-pill">● Demo tracking information</span>

            <h2 style="margin:18px 0">${escapeHTML(vehicle.name)}</h2>

            <p style="color:#64748b;font-size:13px">
                Vehicle Number: ${vehicle.number}
            </p>

            <h3 style="margin-top:20px">
                ${escapeHTML(vehicle.from)} → ${escapeHTML(vehicle.to)}
            </h3>

            <div class="booking-summary" style="margin-top:18px">
                <strong>Departure:</strong> ${vehicle.departure}<br>
                <strong>Arrival:</strong> ${vehicle.arrival}<br>
                <strong>Duration:</strong> ${vehicle.duration}<br>
                <strong>Last updated:</strong> ${new Date().toLocaleString()}<br>
                <strong>Current status:</strong> In Transit (simulated)
            </div>

            <div class="track-line">
                ${stops.map(stop => `
                    <div class="track-stop">
                        <strong>${escapeHTML(stop.name)}</strong>
                        <p>${stop.time}</p>
                    </div>
                `).join("")}
            </div>

            <p style="color:#64748b;font-size:12px">
                This is illustrative tracking data, not a live GPS feed.
            </p>
        </div>
    `;

    result.scrollIntoView({ behavior: "smooth" });
}


// ==========================================
// 10. MY BOOKINGS PAGE
// ==========================================

function renderMyBookings() {

    const container = document.getElementById("myBookingsList");
    if (!container) return;

    const bookings = getBookings();

    if (!bookings.length) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-ticket"></i>
                <h3>No bookings yet</h3>
                <p>Your travel bookings will appear here.</p>
                <a href="index.html" class="primary-btn" style="margin-top:20px">
                    Explore Trips
                </a>
            </div>
        `;
        return;
    }

    container.innerHTML = bookings.map(booking => `
        <article class="my-booking-card">
            <div>
                <span class="status-pill">${escapeHTML(booking.status || "Confirmed")}</span>
                <h3>${escapeHTML(booking.vehicle || booking.name)}</h3>
                <p>Booking ID: ${escapeHTML(booking.id)}</p>
                <p>Passenger: ${escapeHTML(booking.name || booking.passenger)}</p>
                <p>Route: ${escapeHTML(booking.from || "Not specified")} → ${escapeHTML(booking.to || "Not specified")}</p>
                <p>Date: ${escapeHTML(booking.date || "Not specified")}</p>
                <p>Seats: ${escapeHTML((booking.seats || []).join(", ") || "Not specified")}</p>
            </div>
            <div>
                <h3>₹${Number(booking.total || booking.price || 0)}</h3>
                <p>${escapeHTML((booking.mode || booking.type || "Travel").toUpperCase())}</p>
                <a class="primary-btn" href="tracking.html" style="margin-top:12px">
                    Track Journey
                </a>
            </div>
        </article>
    `).join("");
}


// ==========================================
// 11. PAGE INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Set minimum journey dates
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.min = today;
        if (!input.value) input.value = today;
    });

    // Default homepage mode
    switchMode("train");

    // Load destination page
    renderDestination();

    // Load bus details
    renderBusDetails();

    // Load booking page
    renderBookingPage();

    // Load tracking and bookings pages
    renderMyBookings();
});
