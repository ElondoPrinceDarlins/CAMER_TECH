
  document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
          const item = question.parentNode;
          item.classList.toggle('active');
      });
  });
