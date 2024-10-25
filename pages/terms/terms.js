document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordions__item");

  accordions.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector(".accordions__control");
      const content = self.querySelector(".accordions__content");

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const accordionsIcon = document.querySelector(".accordions__icon");

//   accordionsIcon.addEventListener("click", function () {
//     accordionsIcon.style.color = "white";
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const accordionsIcons = document.querySelectorAll(".accordions__icon");

  accordionsIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const parentItem = icon.closest(".accordions__item");
      const accordionsTitle = parentItem.querySelector(".accordions__title");
      const accordionsNumber = parentItem.querySelector(".accordions__number");

      if (parentItem.classList.contains("open")) {
        icon.style.color = "white";
        if (accordionsTitle) {
          accordionsTitle.style.color = "white";
        }
        if (accordionsNumber) {
          accordionsNumber.style.color = "white";
        }
      } else {
        icon.style.color = "black";
        if (accordionsTitle) {
          accordionsTitle.style.color = "black";
        }
        if (accordionsNumber) {
          accordionsNumber.style.color = "black";
        }
      }
    });
  });

  const accordionsItems = document.querySelectorAll(".accordions__item");
  accordionsItems.forEach((item) => {
    item.addEventListener("click", function () {
      const icon = item.querySelector(".accordions__icon");
      const accordionsTitle = item.querySelector(".accordions__title");
      const accordionsNumber = item.querySelector(".accordions__number");

      if (item.classList.contains("open")) {
        icon.style.color = "white";
        if (accordionsTitle) {
          accordionsTitle.style.color = "white";
        }
        if (accordionsNumber) {
          accordionsNumber.style.color = "white";
        }
      } else {
        icon.style.color = "black";
        if (accordionsTitle) {
          accordionsTitle.style.color = "black";
        }
        if (accordionsNumber) {
          accordionsNumber.style.color = "black";
        }
      }
    });
  });
});
