document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const tabPanes = document.querySelectorAll(".tab-pane");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page reload

            // Remove active class from all nav links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Remove active/show class from all tab panes
            tabPanes.forEach(pane => pane.classList.remove("show", "active"));

            // Activate the clicked nav link
            this.classList.add("active");

            // Show the corresponding tab content
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("show", "active");
        });
    });
});