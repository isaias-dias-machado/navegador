const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const shareButton = document.querySelector("[data-share]");
const toast = document.querySelector(".toast");
const newsletterForm = document.querySelector(".newsletter-form");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  mobileMenu.hidden = isOpen;
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }
});

shareButton?.addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: "Help bring Greenhouse Commons to life.",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    toast.hidden = false;
    window.setTimeout(() => {
      toast.hidden = true;
    }, 2400);
  } catch {
    window.prompt("Copy this project link:", window.location.href);
  }
});

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = newsletterForm.querySelector("input");
  if (!input.reportValidity()) return;
  const button = newsletterForm.querySelector("button");
  button.textContent = "✓";
  input.value = "";
  input.placeholder = "Thanks for joining";
});
