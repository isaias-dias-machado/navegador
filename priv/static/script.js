const shareButton = document.querySelector("[data-share]");
const toast = document.querySelector(".toast");
const newsletterForm = document.querySelector(".newsletter__form");

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
  const input = newsletterForm.querySelector(".newsletter__input");
  if (!input.reportValidity()) return;
  const button = newsletterForm.querySelector(".newsletter__submit");
  button.textContent = "✓";
  input.value = "";
  input.placeholder = "Thanks for joining";
});
