const furniture = [
    {
        id: 1,
        name: "Aster Lounge Chair",
        category: "seating",
        material: "Solid Oak",
        description: "A comfortable handcrafted chair with a simple, timeless frame."
    },
    {
        id: 2,
        name: "Meadow Dining Table",
        category: "tables",
        material: "Walnut",
        description: "A sturdy dining table crafted for everyday family gatherings."
    },
    {
        id: 3,
        name: "Workshop Sideboard",
        category: "storage",
        material: "Oak & Brass",
        description: "Elegant storage with practical space for dining and living areas."
    },
    {
        id: 4,
        name: "Ridge Armchair",
        category: "seating",
        material: "Ash Wood",
        description: "A compact handcrafted armchair combining clean lines and comfort."
    },
    {
        id: 5,
        name: "Foundry Coffee Table",
        category: "tables",
        material: "Reclaimed Wood",
        description: "A characterful coffee table made from carefully selected reclaimed timber."
    },
    {
        id: 6,
        name: "Hearth Bookcase",
        category: "storage",
        material: "Pine",
        description: "Open shelving designed for books, plants and decorative pieces."
    }
];

const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const clearButton = document.getElementById("clearButton");
const emptyClearButton = document.getElementById("emptyClearButton");
const emptyState = document.getElementById("emptyState");
const resultsSummary = document.getElementById("resultsSummary");
const collectionCount = document.getElementById("collectionCount");
const offlineNotice = document.getElementById("offlineNotice");
const statusText = document.getElementById("statusText");
const statusDot = document.querySelector(".status-dot");
const currentYear = document.getElementById("currentYear");


function createFurnitureCard(item) {
    const article = document.createElement("article");
    article.className = "furniture-card";

    const imageArea = document.createElement("div");
    imageArea.className = "furniture-image";
    imageArea.setAttribute("aria-hidden", "true");

    const furnitureShape = document.createElement("div");
    furnitureShape.className = "furniture-shape";
    furnitureShape.textContent = item.name;

    imageArea.appendChild(furnitureShape);


    const content = document.createElement("div");
    content.className = "furniture-content";

    const meta = document.createElement("div");
    meta.className = "card-meta";

    const category = document.createElement("span");
    category.className = "category";
    category.textContent = item.category;

    const material = document.createElement("span");
    material.className = "material";
    material.textContent = item.material;

    meta.appendChild(category);
    meta.appendChild(material);


    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;


    content.appendChild(meta);
    content.appendChild(title);
    content.appendChild(description);

    article.appendChild(imageArea);
    article.appendChild(content);

    return article;
}


function renderGallery(items) {
    galleryGrid.replaceChildren();

    items.forEach(function (item) {
        galleryGrid.appendChild(createFurnitureCard(item));
    });

    const count = items.length;

    resultsSummary.textContent =
        count + (count === 1 ? " piece shown" : " pieces shown");

    emptyState.hidden = count !== 0;
    galleryGrid.hidden = count === 0;
}


function filterFurniture() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categorySelect.value;

    const filteredFurniture = furniture.filter(function (item) {

        const searchableText = (
            item.name + " " +
            item.category + " " +
            item.material + " " +
            item.description
        ).toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    renderGallery(filteredFurniture);
}


function clearFilters() {
    searchInput.value = "";
    categorySelect.value = "all";

    filterFurniture();

    searchInput.focus();
}


function updateConnectionStatus() {
    if (navigator.onLine) {
        statusText.textContent = "Online";
        statusDot.style.background = "var(--success)";
        offlineNotice.hidden = true;
    } else {
        statusText.textContent = "Offline";
        statusDot.style.background = "var(--warning)";
        offlineNotice.hidden = false;
    }
}


function logGalleryInteraction() {
    console.info(
        "[Telemetry] Handcrafted Furniture Workshop Gallery interaction completed."
    );
}


searchInput.addEventListener("input", filterFurniture);

categorySelect.addEventListener("change", filterFurniture);

clearButton.addEventListener("click", clearFilters);

emptyClearButton.addEventListener("click", clearFilters);

window.addEventListener("online", updateConnectionStatus);

window.addEventListener("offline", updateConnectionStatus);

document
    .querySelector(".primary-button")
    .addEventListener("click", logGalleryInteraction);


collectionCount.textContent = furniture.length + " Pieces";

currentYear.textContent = new Date().getFullYear();

updateConnectionStatus();

renderGallery(furniture);
