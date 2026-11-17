const shopSection = document.querySelector(".shop-section");
const shopBee = shopSection && shopSection.querySelector(".shop-flying-bee");

if (shopSection && shopBee) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function moveShopBee() {
        const maxLeft = Math.max(0, shopSection.clientWidth - shopBee.offsetWidth);
        const maxTop = Math.max(0, shopSection.clientHeight - shopBee.offsetHeight);

        shopBee.style.left = `${Math.random() * maxLeft}px`;
        shopBee.style.top = `${Math.random() * maxTop}px`;
        shopBee.style.transform = `rotate(${Math.round(Math.random() * 40 - 20)}deg)`;
    }

    function wanderShopBee() {
        if (reducedMotion.matches) {
            return;
        }

        moveShopBee();
        window.setTimeout(wanderShopBee, 2500 + Math.random() * 2500);
    }

    moveShopBee();
    if (!reducedMotion.matches) {
        window.setTimeout(wanderShopBee, 1800);
        window.addEventListener("resize", moveShopBee);
    }
}

const ceoDialog = document.querySelector("#ceo-dialog");
const ceoOpenButton = document.querySelector(".ceo-open");
const ceoCloseButton = document.querySelector(".ceo-close");

const storyDialog = document.querySelector("#story-dialog");
const storyCloseButton = document.querySelector(".story-close");

if (storyDialog instanceof HTMLDialogElement && storyCloseButton) {
    document.querySelectorAll(".story-open").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            storyDialog.showModal();
        });
    });

    storyCloseButton.addEventListener("click", () => storyDialog.close());
    storyDialog.addEventListener("click", (event) => {
        if (event.target === storyDialog) {
            storyDialog.close();
        }
    });
}

if (ceoDialog instanceof HTMLDialogElement && ceoOpenButton && ceoCloseButton) {
    ceoOpenButton.addEventListener("click", () => ceoDialog.showModal());
    ceoCloseButton.addEventListener("click", () => ceoDialog.close());
    ceoDialog.addEventListener("click", (event) => {
        if (event.target === ceoDialog) {
            ceoDialog.close();
        }
    });
}
