//index.html
// start our testimontials section
document.addEventListener("DOMContentLoaded", function () {

    const carouselInner = document.querySelector("#carouselExample .carousel-inner");
    const cardsData = [
        {
            name: "Jennifer B",
            img: "./assets/img/testimontials/JenniferB.png",
            review: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
        },
        {
            name: "David K",
            img: "./assets/img/testimontials/DavidK.png",
            review: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
        },
        {
            name: "Emily L",
            img: "./assets/img/testimontials/EmilyL.png",
            review: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        },
        {
            name: "Michael S",
            img: "./assets/img/testimontials/DavidK.png",
            review: "Praises the school's caring teachers and how his son has gained confidence and knowledge.",
        },
        {
            name: "Sophia W",
            img: "./assets/img/testimontials/JenniferB.png",
            review: "Loves how her daughter enjoys school, has grown socially and academically, and appreciates the warm environment.",
        },
        {
            name: "James R",
            img: "./assets/img/testimontials/EmilyL.png",
            review: "Highly recommends the academy for its safe, nurturing environment, great staff, and engaging curriculum.",
        }
    ];

    function createCarouselItems() {
        carouselInner.innerHTML = ""; // Clear previous items
        const screenWidth = window.innerWidth;
        const cardsPerSlide = screenWidth >= 768 ? 3 : 1; // 3 cards for md+, 1 card for sm-

        for (let i = 0; i < cardsData.length; i += cardsPerSlide) {
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("carousel-item");

            if (i === 0) itemDiv.classList.add("active"); // Set first item as active

            let rowDiv = document.createElement("div");
            rowDiv.classList.add("row");

            for (let j = i; j < i + cardsPerSlide && j < cardsData.length; j++) {
                let colDiv = document.createElement("div");
                colDiv.classList.add("col-md-4", "col-12");

                colDiv.innerHTML = `
                    <div class="our-testimontials-item border border-2 border-black p-4 mb-5 d-flex flex-column bg-white text-center align-items-center">
                        <div class="profile-image border border-1 border-black bg-main-color">
                            <img class="w-100 h-100" src="${cardsData[j].img}" alt="${cardsData[j].name} image"/>
                        </div>
                        <h3 class="mt-2">${cardsData[j].name}</h3>
                        <div class="stars">
                            <img class="w-100 h-100" src="./assets/img/public/5Stars.png" alt="5 stars image"/>
                        </div>
                        <p>${cardsData[j].review}</p>
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
// end our testimontials section

// start FAQ section
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".FAQ .faq-item").forEach(faqItem => {
        let questionDiv = faqItem.querySelector(".question");
        let icon = questionDiv.querySelector("i");
        let questionText = questionDiv.querySelector("h4").innerText.trim();
        const originalBackgroundColor = faqItem.style.backgroundColor;

        // Create the answer div BELOW the question inside the same .faq-item
        let answerDiv = document.createElement("div");
        answerDiv.classList.add("answer","fs-6" ,"p-4", "bg-light", "border-top", "border-1", "border-black", "mt-2", "d-none");
        answerDiv.textContent = getAnswer(questionText);

        // Append answer inside the same .faq-item but after the question
        faqItem.appendChild(answerDiv);

        // Click event for toggling answer visibility & background color
        icon.addEventListener("click", function () {
            answerDiv.classList.toggle("d-none"); // Show/hide answer
            icon.classList.toggle("fa-plus"); // Toggle icon
            icon.classList.toggle("fa-minus");

            // Change background color when expanded
            if (!answerDiv.classList.contains("d-none")) {
                faqItem.style.backgroundColor = "white"; // Set white background
                questionDiv.style.backgroundColor = "white";
            } else {
                questionDiv.style.backgroundColor = originalBackgroundColor;
            }

        });
    });
});

function getAnswer(question) {
    const answers = {
        "What are the school hours at Little Learners Academy?": "Our school hours are from 8:00 AM to 3:00 PM, Monday through Friday.",
        "Is there a uniform policy for students?": "Yes, all students are required to wear the school uniform.",
        "What extracurricular activities are available for students?": "We offer sports, music, drama, and various clubs.",
        "How do you handle food allergies and dietary restrictions?": "We provide special meal options and ensure safety measures.",
        "What is the teacher-to-student ratio at Little Learners Academy?": "The average ratio is 1:10 for personalized attention.",
        "How do you handle discipline and behavior management?": "We use positive reinforcement and structured policies.",
        "How do I apply for admission to Little Learners Academy?": "You can apply online through our website or visit our office."
    };

    return answers[question] || "Answer not available.";
}
// end FAQ section



