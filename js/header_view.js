const category_search = [
  { value: "", title: "All Category"},
  { value: "cars-and-vehicles", title: "Cars and Vehicles"},
  { value: "cars-for-sale", title: "Cars for Sale"},
  { value: "bicycles", title: "Bicycles"},
  { value: "motorcycles-for-sale", title: "Motorcycles for Sale"},
  { value: "vehicles-for-rent", title: "Vehicles for Rent"},
  { value: "car-maintenance-repair", title: "Maintenance & Repair"},
  { value: "lorries-vans-and-tractors", title: "Lorries, Vans & Tractors"},
  { value: "financing-insurance", title: "Financing & Insurance"},
  { value: "tuk-tuk-and-remork", title: "Tuk Tuk & Remork"},
  { value: "car-parts-accessories", title: "Parts & Accessories"},
  { value: "others-vihicles", title: "Others"},
  { value: "mobile-phones-tablets", title: "Phones & Tablets"},
  { value: "phones", title: "Phones"},
  { value: "tablets", title: "Tablets"},
  { value: "smart-watches", title: "Smart Watches"},
  { value: "phone-accessories", title: "Accessories"},
  { value: "phone-numbers", title: "Phone Numbers"},
  { value: "computer-and-accessories", title: "Computers & Accessories"},
  { value: "laptops", title: "Laptops"},
  { value: "desktops", title: "Desktops"},
  { value: "all-in-one-pc", title: "All-In-One"},
  { value: "monitors", title: "Monitors"},
  { value: "printers-and-scanners", title: "Printers & Scanners"},
  { value: "computer-parts-and-accessories", title: "Parts & Accessories"},
  { value: "softwares", title: "Softwares"},
  { value: "electronics-appliances", title: "Electronics & Appliances"},
  { value: "washing-machines-and-dryers", title: "Washing Machines & Dryers"},
  { value: "fridges-and-freezers", title: "Fridges & Freezers"},
  { value: "air-conditioning-and-heating", title: "Air Conditioning & Heating"},
  { value: "tools", title: "Tools"},
  { value: "machinery", title: "Machinery"},
  { value: "consumer-electronics", title: "Consumer Electronics"},
  { value: "security-camera", title: "Security Camera"},
  { value: "lighting", title: "Lighting"},
  { value: "cameras-camcorders", title: "Cameras, camcorders"},
  { value: "tvs-videos-and-audios", title: "TVs, Videos and Audios"},
  { value: "home-appliances", title: "Home appliances"},
  { value: "video-games-consoles-toys", title: "Video games, consoles, toys"},
  { value: "property-housing-rentals", title: "House & Lands"},
  { value: "house-for-sale", title: "House for Sale"},
  { value: "house-for-rent", title: "House for Rent"},
  { value: "condo-for-sale", title: "Condo for Sale"},
  { value: "apartment-for-rent", title: "Apartment for Rent"},
  { value: "land-for-sale", title: "Land for Sale"},
  { value: "land-for-rent", title: "Land for Rent"},
  { value: "commercial-properties-for-sale", title: "Commercial for Sale"},
  { value: "commercial-properties-for-rent", title: "Commercial for Rent"},
  { value: "room-for-rent", title: "Room for Rent"},
  { value: "properties-wanted", title: "Properties Wanted"},
  { value: "agent-services", title: "Agent Services"},
  { value: "others-properties", title: "Others"},
  { value: "jobs", title: "Jobs"},
  { value: "jobs-accounting", title: "Accounting"},
  { value: "jobs-administration", title: "Administration"},
  { value: "jobs-architecture-engineering", title: "Architecture/Engineering"},
  { value: "jobs-assistant-secretary", title: "Assistant/Secretary"},
  { value: "jobs-audit-taxation", title: "Audit/Taxation"},
  { value: "jobs-banking-insurance", title: "Banking/Insurance"},
  { value: "jobs-cashier-receptionist", title: "Cashier/Receptionist"},
  { value: "jobs-catering-restaurant", title: "Catering/Restaurant"},
  { value: "jobs-cleaner-maid", title: "Cleaner/Maid"},
  { value: "jobs-consultancy", title: "Consultancy"},
  { value: "jobs-customer-service", title: "Customer Service"},
  { value: "jobs-design", title: "Design"},
  { value: "jobs-education-training", title: "Education/Training"},
  { value: "jobs-finance", title: "Finance"},
  { value: "jobs-freight-shipping-delivery-warehouse", title: "Freight/Shipping/Delivery/Warehouse"},
  { value: "jobs-hotel-hospitality", title: "Hotel/Hospitality"},
  { value: "jobs-human-resource", title: "Human Resource"},
  { value: "jobs-information-technology", title: "Information Technology"},
  { value: "jobs-lawyer-legal-service", title: "Lawyer/Legal Service"},
  { value: "jobs-management", title: "Management"},
  { value: "jobs-manufacturing", title: "Manufacturing"},
  { value: "jobs-marketing", title: "Marketing"},
  { value: "jobs-media-advertising", title: "Media/Advertising"},
  { value: "jobs-medical-health-nursing", title: "Medical/Health/Nursing"},
  { value: "jobs-merchandising-purchasing", title: "Merchandising/Purchasing"},
  { value: "jobs-operations", title: "Operations"},
  { value: "jobs-project-management", title: "Project Management"},
  { value: "jobs-quality-control", title: "Quality Control"},
  { value: "jobs-resort-casino", title: "Resort/Casino"},
  { value: "jobs-sales", title: "Sales"},
  { value: "jobs-security-driver", title: "Security/Driver"},
  { value: "jobs-technician", title: "Technician"},
  { value: "jobs-telecommunication", title: "Telecommunication"},
  { value: "jobs-translation-interpretation", title: "Translation/Interpretation"},
  { value: "jobs-travel-agent-ticket-sales", title: "Travel Agent/Ticket Sales"},
  { value: "jobs-others", title: "Others"},
  { value: "services", title: "Services"},
  { value: "accounting", title: "Accounting"},
  { value: "financial-services", title: "Financial Services"},
  { value: "travel-and-tourism-services", title: "Travel & Tourism"},
  { value: "automotive", title: "Automotive"},
  { value: "advertising-media", title: "Advertising & Media"},
  { value: "bridal-services", title: "Bridal Services"},
  { value: "cleaning-maid-services", title: "Cleaning & Maid Services"},
  { value: "construction-arch-interiors", title: "Construction, Arch. & Interiors"},
  { value: "education-training", title: "Education & Training"},
  { value: "engineering", title: "Engineering"},
  { value: "insurance", title: "Insurance"},
  { value: "massage-spa", title: "Massage & Spa"},
  { value: "hospitality-travel-tourism", title: "Hospitality, Travel & Tourism"},
  { value: "health-medical-pharma", title: "Health, Medical & Pharma"},
  { value: "it-telecom", title: "IT & Telecom"},
  { value: "interior-design-renovation", title: "Interior Design & Renovation"},
  { value: "legal", title: "Legal"},
  { value: "movers-logistics", title: "Movers & Logistics"},
  { value: "plumbing-electrical", title: "Plumbing & Electrical"},
  { value: "property-real-estate", title: "Property & Real Estate"},
  { value: "science", title: "Science"},
  { value: "supply-chain-logistics", title: "Supply Chain & Logistics"},
  { value: "printing-publishing", title: "Printing & Publishing"},
  { value: "other-services", title: "Other Services"},
  { value: "fashion-beauty", title: "Fashion & Beauty"},
  { value: "womens-fashion", title: "Women's Fashion"},
  { value: "mens-fashion", title: "Men's Fashion"},
  { value: "baby-and-kids-fashion", title: "Baby & Kids"},
  { value: "travel-and-luggage", title: "Travel and Luggage"},
  { value: "fashion-accessories", title: "Fashion Accessories"},
  { value: "beauty-healthcare-products", title: "Beauty & Healthcare"},
  { value: "furniture-decor", title: "Furniture & Decor"},
  { value: "tables-and-desks", title: "Tables & Desks"},
  { value: "chairs-and-sofas", title: "Chairs & Sofas"},
  { value: "wardrobes-and-cabinets", title: "Wardrobes & Cabinets"},
  { value: "shelves-and-drawers", title: "Shelves & Drawers"},
  { value: "beds-and-mattresses", title: "Beds & Mattresses"},
  { value: "curtain-and-carpet", title: "Curtain & Carpet"},
  { value: "other-furniture", title: "Other Furniture"},
  { value: "kitchenware", title: "Kitchenware"},
  { value: "household-items", title: "Household Items"},
  { value: "handicrafts-paintings", title: "Handicrafts Paintings"},
  { value: "books-sports-hobbies", title: "Books, Sports & Hobbies"},
  { value: "musical-instruments", title: "Musical Instruments"},
  { value: "fishing", title: "Fishing"},
  { value: "hike-and-camp", title: "Hike & Camp"},
  { value: "cds-dvds-vhs", title: "CDS, DVDS, VHS"},
  { value: "books", title: "Books"},
  { value: "sports-equipment", title: "Sports Equipment"},
  { value: "others-buy-sell", title: "Others"},
  { value: "pets", title: "Pets"},
  { value: "dogs", title: "Dogs"},
  { value: "cats", title: "Cats"},
  { value: "birds", title: "Birds"},
  { value: "fish", title: "Fish"},
  { value: "pet-food", title: "Pet Food"},
  { value: "pet-accessories", title: "Pet Accessories"},
  { value: "other-pets", title: "Other"},
  { value: "foods", title: "Foods"},
  { value: "meat", title: "Meat"},
  { value: "seafood", title: "Seafood"},
  { value: "fruits", title: "Fruits"},
  { value: "vegetables", title: "Vegetables"},
  { value: "beverages", title: "Beverages"},
  { value: "grocery", title: "Grocery"},
  { value: "bread-and-bakery", title: "Bread & Bakery"},
  { value: "beer-and-wine", title: "Beer & Wine"},
  { value: "rice-and-cereal", title: "Rice & Cereal"},
  { value: "other-foods", title: "Other"},
]

const header_view_container = document.getElementById("header");

const container_1 = document.createElement("div");
container_1.className = "my-container header-content";

const nav_container = document.createElement("nav");
nav_container.className = "navbar row";

// logo
const logo_view = document.createElement("a");
logo_view.href = "";
logo_view.className = "navbar-brand";
const img = document.createElement("img");
img.height = "50";
img.width = "163";
img.src = "https://www.khmer24.com/v1.0.2/template/img/khmer24.gif";
logo_view.appendChild(img);
nav_container.appendChild(logo_view);

const ul_container = document.createElement("ul");
ul_container.className = "nav nav-pills justify-content-end right-nav";
// login
const li_login = document.createElement("li");
li_login.className = "nav-item item-wide-screen";
const a_login = document.createElement("a");
a_login.className = "nav-link";
a_login.href = "../pages/login.html";
a_login.textContent = "Log in";
li_login.appendChild(a_login);
ul_container.appendChild(li_login);

// or
const li_or = document.createElement("li");
li_or.className = "nav-item item-wide-screen";
const sapn = document.createElement("sapn");
sapn.textContent = "Or";
sapn.className = "nav-link disabled pl-0 pr-0";
li_or.appendChild(sapn);
ul_container.appendChild(li_or);

// register
const li_register = document.createElement("li");
li_register.className = "nav-item item-wide-screen";
const a_register = document.createElement("a");
a_register.className = "nav-link";
a_register.href = "../pages/registerForm.html";
a_register.textContent = "Register";
li_register.appendChild(a_register);
ul_container.appendChild(li_register);

// post free ad
const li_post_free_ad = document.createElement("li");
li_post_free_ad.className = "nav-item ml-2";
const a_post_free_ad = document.createElement("a");
a_post_free_ad.className = "nav-link btn-post btn-warning long-tex";
a_post_free_ad.href = "";
a_post_free_ad.textContent = "Post free ad";
li_post_free_ad.appendChild(a_post_free_ad);
ul_container.appendChild(li_post_free_ad);

nav_container.appendChild(ul_container);
container_1.appendChild(nav_container);
header_view_container.appendChild(container_1);

//-----------------------------------------------------
// search container
const search_container = document.createElement("div");
search_container.id = "header-search";

//form container
const form = document.createElement("form");
form.className = "form-inline form-mini-search p-0 pb-2 mr-auto";
form.method = "get";

// input text field
const input_field = document.createElement("input");
input_field.className = "form-control col-12 pr-4 input-keyword";
input_field.type = "search";
input_field.placeholder = "What are you looking for...";
input_field.ariaLabel = "What are you looking for...";
input_field.value = "";
input_field.name = "q";

form.appendChild(input_field);

// search categories
const select_category = document.createElement("select");
select_category.name = "category";
select_category.className = "form-control select-category";

category_search.forEach((value) => {
    const option = document.createElement('option');
    option.value = value.value;
    option.textContent = value.title;
    select_category.appendChild(option);
})
form.appendChild(select_category);

search_container.appendChild(form);

container_1.appendChild(search_container);
