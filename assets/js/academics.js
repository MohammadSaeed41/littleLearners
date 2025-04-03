// start our rooms gallery section

// star classrooms section
/* document.addEventListener("DOMContentLoaded", function () {

    const carouselInner = document.querySelector("#carouselExample .carousel-inner");
    const cardsData = [
        {
            img: "./assets/img/rooms/classroom1.png"
        },
        {
            img: "./assets/img/rooms/classroom2.png"
        },
        {
            img: "./assets/img/rooms/classroom3.png"
        },
        {
            img: "./assets/img/rooms/classroom4.png"
        },
        {
            img: "./assets/img/rooms/classroom1.png"
        },
        {
            img: "./assets/img/rooms/classroom2.png"
        },
        {
            img: "./assets/img/rooms/classroom3.png"
        },
        {
            img: "./assets/img/rooms/classroom4.png"
        }
    ];

    function createCarouselItems() {
        carouselInner.innerHTML = ""; // Clear previous items
        const screenWidth = window.innerWidth;
        const cardsPerSlide = screenWidth >= 768 ? 4 : 1; // 4 cards for md+, 1 card for sm-

        for (let i = 0; i < cardsData.length; i += cardsPerSlide) {
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("carousel-item");
            itemDiv.classList.add("bg-transparent");

            if (i === 0) itemDiv.classList.add("active"); // Set first item as active

            let rowDiv = document.createElement("div");
            rowDiv.classList.add("row");

            for (let j = i; j < i + cardsPerSlide && j < cardsData.length; j++) {
                let colDiv = document.createElement("div");
                colDiv.classList.add("col-md-3", "col-12");

                colDiv.innerHTML = `
                        <div class="room-image w-100 h-100">
                            <img class="w-100 h-100" src="${cardsData[j].img}" alt="room image"/>
                        </div>
                `;
                rowDiv.appendChild(colDiv);
            }

            itemDiv.appendChild(rowDiv);
            carouselInner.appendChild(itemDiv);
        }
    }
    
    createCarouselItems();
    window.addEventListener("resize", createCarouselItems); // Rebuild carousel when resizing
});
// end classrooms section
*/
document.addEventListener("DOMContentLoaded", () => {
    // Render all sections when the page loads
    renderSections("all", sectionsData);
});

document.querySelector("#nav-all-tab").addEventListener("click", () => {
    // Render all sections when "All" tab is clicked
    renderSections("all", sectionsData);
});

document.querySelector("#nav-classrooms-tab").addEventListener("click", () => {
    renderSections("classrooms", [sectionsData[0]]);
});

document.querySelector("#nav-library-tab").addEventListener("click", () => {
    renderSections("library", [sectionsData[1]]);
});

document.querySelector("#nav-science-lab-tab").addEventListener("click", () => {
    renderSections("scienceLab", [sectionsData[2]]);
});

document.querySelector("#nav-computer-lab-tab").addEventListener("click", () => {
    renderSections("computerLab", [sectionsData[3]]);
});

document.querySelector("#nav-garden-tab").addEventListener("click", () => {
    renderSections("garden", [sectionsData[4]]);
});

// Function to render sections
function renderSections(category, sectionsData) {
    const sectionsContainer = document.querySelector("#sections-container");
    sectionsContainer.innerHTML = ""; // Clear previous content

    let sectionsToRender = category === "all" ? sectionsData : sectionsData.filter(section => section.id.toLowerCase().includes(category.toLowerCase()));

    sectionsToRender.forEach(section => {
        let sectionHTML = `
            <div class="rooms py-5">
                <div class="container g-0 position-relative bg-white d-flex flex-column justify-content-end border border-2 border-black">
                    <div class="rooms-images w-100">
                        <div id="${section.id}" class="carousel slide w-100">
                            <div class="carousel-inner px-5 position-relative"></div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${section.id}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon border border-1 border-black" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${section.id}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div class="rooms-content px-5">
                        <h3>${section.title}</h3>
                        <p>${section.description}</p> 
                    </div>
                </div>
            </div>`;

        sectionsContainer.innerHTML += sectionHTML;

        // Populate carousel with images
        populateCarousel(section.id, section.images);
    });
}

// Function to populate the carousel
function populateCarousel(carouselId, images) {
    const carouselInner = document.querySelector(`#${carouselId} .carousel-inner`);
    carouselInner.innerHTML = ""; // Clear previous items

    const screenWidth = window.innerWidth;
    const cardsPerSlide = screenWidth < 768 ? 1 : 4; // 1 image per slide for small screens, 4 for large

    for (let i = 0; i < images.length; i += cardsPerSlide) {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("carousel-item", "bg-transparent");

        if (i === 0) itemDiv.classList.add("active"); // First slide is active

        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row", "justify-content-center");

        for (let j = i; j < i + cardsPerSlide && j < images.length; j++) {
            let colDiv = document.createElement("div");

            if (screenWidth < 768) {
                colDiv.classList.add("col-12", "d-flex", "justify-content-center");
            } else {
                colDiv.classList.add("col-md-3", "col-12");
            }

            colDiv.innerHTML = `
                <div class="room-image w-100 h-100">
                    <img class="w-100 h-100" src="${images[j]}" alt="room image"/>
                </div>
            `;
            rowDiv.appendChild(colDiv);
        }

        itemDiv.appendChild(rowDiv);
        carouselInner.appendChild(itemDiv);
    }
}

// Ensure carousels update on window resize
window.addEventListener("resize", () => {
    sectionsData.forEach(section => populateCarousel(section.id, section.images));
});

// Sections data
const sectionsData = [
    {
        id: "carouselClassrooms",
        title: "Classrooms",
        description: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
        images: [
            "./assets/img/rooms/classroom1.png",
            "./assets/img/rooms/classroom2.png",
            "./assets/img/rooms/classroom3.png",
            "./assets/img/rooms/classroom4.png",
            "./assets/img/rooms/classroom1.png",
            "./assets/img/rooms/classroom2.png",
            "./assets/img/rooms/classroom3.png",
            "./assets/img/rooms/classroom4.png"
        ]
    },
    {
        id: "carouselLibrary",
        title: "Library",
        description: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
        images: [
            "./assets/img/rooms/library1.png",
            "./assets/img/rooms/library2.png",
            "./assets/img/rooms/library3.png",
            "./assets/img/rooms/library4.png",
            "./assets/img/rooms/library1.png",
            "./assets/img/rooms/library2.png",
            "./assets/img/rooms/library3.png",
            "./assets/img/rooms/library4.png"
        ]
    },
    {
        id: "carouselScienceLab",
        title: "Science Lab",
        description: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
        images: [
            "./assets/img/rooms/scienceLab1.png",
            "./assets/img/rooms/scienceLab2.png",
            "./assets/img/rooms/scienceLab3.png",
            "./assets/img/rooms/scienceLab4.png",
            "./assets/img/rooms/scienceLab1.png",
            "./assets/img/rooms/scienceLab2.png",
            "./assets/img/rooms/scienceLab3.png",
            "./assets/img/rooms/scienceLab4.png"
        ]
    },
    {
        id: "carouselComputerLab",
        title: "Computer Lab",
        description: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
        images: [
            "./assets/img/rooms/computerLab1.png",
            "./assets/img/rooms/computerLab2.png",
            "./assets/img/rooms/computerLab3.png",
            "./assets/img/rooms/computerLab4.png",
            "./assets/img/rooms/computerLab1.png",
            "./assets/img/rooms/computerLab2.png",
            "./assets/img/rooms/computerLab3.png",
            "./assets/img/rooms/computerLab4.png"
        ]
    },
    {
        id: "carouselGarden",
        title: "Garden and Nature Area",
        description: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
        images: [
            "./assets/img/rooms/garden1.png",
            "./assets/img/rooms/garden2.png",
            "./assets/img/rooms/garden3.png",
            "./assets/img/rooms/garden4.png",
            "./assets/img/rooms/garden1.png",
            "./assets/img/rooms/garden2.png",
            "./assets/img/rooms/garden3.png",
            "./assets/img/rooms/garden4.png"
        ]
    }
];
// end our rooms gallery section