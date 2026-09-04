/**
 * Task 5: GitHub Pages Portal & Terminal Script
 * Author: Darshan Makwana (Web Development Intern)
 */

document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyBtn');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeToCopy = `git clone https://github.com/karmaboy1309/webdev-task.git
cd webdev-task
git add .
git commit -m "feat: deploy static website using GitHub Pages"
git push origin main`;

      navigator.clipboard.writeText(codeToCopy).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✔';
        copyBtn.style.backgroundColor = '#10b981';
        copyBtn.style.color = '#ffffff';

        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.backgroundColor = '';
          copyBtn.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy to clipboard', err);
      });
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
