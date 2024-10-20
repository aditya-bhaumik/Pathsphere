document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordions__item');

  accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordions__control');
      const content = self.querySelector('.accordions__content');

      // Close all other open accordions
      accordions.forEach((otherEl) => {
        if (otherEl !== self && otherEl.classList.contains('open')) {
          const otherControl = otherEl.querySelector('.accordions__control');
          const otherContent = otherEl.querySelector('.accordions__content');
          
          otherEl.classList.remove('open');
          otherControl.setAttribute('aria-expanded', false);
          otherContent.setAttribute('aria-hidden', true);
          otherContent.style.maxHeight = null;

          // Reset styles for closed items
          const otherIcon = otherEl.querySelector('.accordions__icon');
          const otherTitle = otherEl.querySelector('.accordions__title');
          const otherNumber = otherEl.querySelector('.accordions__number');
          if (otherIcon) otherIcon.style.color = 'black';
          if (otherTitle) otherTitle.style.color = 'black';
          if (otherNumber) otherNumber.style.color = 'black';
        }
      });

      // Toggle the clicked accordion
      self.classList.toggle('open');
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';

        // Change colors for the opened item
        const icon = self.querySelector('.accordions__icon');
        const title = self.querySelector('.accordions__title');
        const number = self.querySelector('.accordions__number');
        if (icon) icon.style.color = 'white';
        if (title) title.style.color = 'white';
        if (number) number.style.color = 'white';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
        // Reset styles for closed item
        const icon = self.querySelector('.accordions__icon');
        const title = self.querySelector('.accordions__title');
        const number = self.querySelector('.accordions__number');
        if (icon) icon.style.color = 'black';
        if (title) title.style.color = 'black';
        if (number) number.style.color = 'black';
      }
    });
  });
});
