//about
//start our awards section
document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector("#carouselExample .carousel-inner");
    const awardsData = [
        {
            title: "Outstanding Early Childhood Education Award",
            icon: "fa-circle-half-stroke",
            description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            title: "Innovative STEAM Education Award",
            icon: "fa-cloud",
            description: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        },
        {
            title: "Environmental Stewardship Award",
            icon: "fa-bolt",
            description: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        },
        {
            "title": "Excellence in Child Development Award",
            "icon": "fa-child",
            "description": "Honored by the National Child Development Council for our outstanding contributions to fostering emotional, cognitive, and social growth in young learners."
        },
        {
            "title": "Community Engagement Award",
            "icon": "fa-handshake",
            "description": "Recognized by the Local Education Board for our strong commitment to involving families and the community in our students' learning journeys."
        },
        {
            "title": "Safe Learning Environment Award",
            "icon": "fa-shield-alt",
            "description": "Awarded by the Safe Schools Organization for maintaining a secure, inclusive, and supportive atmosphere where children feel safe to explore and learn."
        }
        
    ];

    function createCarouselItems() {
        carouselInner.innerHTML = ""; // Clear previous items
        const screenWidth = window.innerWidth;
        const cardsPerSlide = screenWidth >= 992 ? 3 : 1; // 3 cards for md+, 1 card for sm-

        for (let i = 0; i < awardsData.length; i += cardsPerSlide) {
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("carousel-item");
            if (i === 0) itemDiv.classList.add("active"); // Set first item as active

            let rowDiv = document.createElement("div");
            rowDiv.classList.add("row");

            for (let j = i; j < i + cardsPerSlide && j < awardsData.length; j++) {
                let colDiv = document.createElement("div");
                colDiv.className = screenWidth >= 992 ? "col-md-4" : "col-12";

                colDiv.innerHTML = `
                    <div class="our-awards-item border border-2 border-black p-4 mb-5 d-flex flex-column bg-white text-center">
                        <i class="fa-solid ${awardsData[j].icon} fs-4"></i>
                        <h3 class="mt-2">${awardsData[j].title}</h3>
                        <p>${awardsData[j].description}</p>
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
//end our awards section