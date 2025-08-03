// search cards
function searchTeam() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase();
    var cards = document.getElementsByClassName("team-card");

    for (var i = 0; i < cards.length; i++) {
    var text = cards[i].innerText.toLowerCase();

    if (text.indexOf(filter) > -1) {
        cards[i].style.display = "block";
    } else {
        cards[i].style.display = "none";
    }
    }
}

//scroll button
const scrollBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//animation on scroll
const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach((entry) =>
            {
                console.log(entry);
                if (entry.isIntersecting)
                {
                    entry.target.classList.add('show');
                }else
                    {
                        entry.target.classList.remove('show');
                }
        })
})

const hiddenElmt = document.querySelectorAll('.team-card');
hiddenElmt.forEach((el) => observer.observe(el));

//model popup
function openModal(name) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

