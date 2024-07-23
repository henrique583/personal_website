document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".contact-button");
    const modal = document.getElementById("contact-modal");
    const closeButton = document.querySelector(".close-button");

    // When the user clicks the button, open the modal
    btn.addEventListener("click", () => {
        modal.showModal();
        setTimeout(() => {
            modal.classList.add("show");
        }, 10); // Add a slight delay to trigger the transition
    });

    // When the user clicks on the close button, close the modal
    closeButton.addEventListener("click", () => {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.close();
        }, 300); // Wait for the transition to complete before hiding
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.close();
            }, 300); // Wait for the transition to complete before hiding
        }
    });
});
