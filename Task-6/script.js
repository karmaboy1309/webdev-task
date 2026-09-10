/**
 * Task 6: Contact Form with Client-Side JavaScript & Regex Validation
 * Author: Darshan Makwana (Web Development Intern)
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements Selection
  const form = document.getElementById('contactForm');
  const formCard = document.getElementById('formCard');
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const successModal = document.getElementById('successModal');
  const newSubmissionBtn = document.getElementById('newSubmissionBtn');

  // Input Elements
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const consentInput = document.getElementById('consent');
  const charCounter = document.getElementById('charCounter');

  // Error Containers
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');
  const consentError = document.getElementById('consentError');

  // Summary Containers
  const summaryName = document.getElementById('summaryName');
  const summaryEmail = document.getElementById('summaryEmail');
  const summarySubject = document.getElementById('summarySubject');
  const summaryTime = document.getElementById('summaryTime');

  /**
   * RFC 5322 Standard Compliant Email Regular Expression
   * Validates:
   * - Local part before @ (letters, numbers, dots, hyphens, plus)
   * - Domain part after @ (letters, numbers, hyphens)
   * - Top-level domain (minimum 2 letters, e.g., .com, .org, .co.in)
   * - Disallows whitespace, double dots, or missing domain suffixes
   */
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  /**
   * Name Regular Expression:
   * Permits letters, spaces, hyphens, and apostrophes (min 3 characters)
   */
  const NAME_REGEX = /^[a-zA-Z\s'-]{3,50}$/;

  /* --------------------------------------------------------------------------
     Validation Helper Functions
     -------------------------------------------------------------------------- */

  /**
   * Displays an error message and applies invalid styles
   * @param {HTMLElement} input - Target input element
   * @param {HTMLElement} errorElement - Target error message container
   * @param {string} message - Validation error text
   */
  function showError(input, errorElement, message) {
    if (input) {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
    }
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  /**
   * Clears error and applies valid styles
   * @param {HTMLElement} input - Target input element
   * @param {HTMLElement} errorElement - Target error message container
   */
  function showSuccess(input, errorElement) {
    if (input) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      input.setAttribute('aria-invalid', 'false');
    }
    if (errorElement) {
      errorElement.textContent = '';
    }
  }

  /**
   * Clears all validation states (for reset)
   */
  function clearValidationState(input, errorElement) {
    if (input) {
      input.classList.remove('is-valid', 'is-invalid');
      input.removeAttribute('aria-invalid');
    }
    if (errorElement) {
      errorElement.textContent = '';
    }
  }

  /* --------------------------------------------------------------------------
     Field-Level Validators
     -------------------------------------------------------------------------- */

  function validateFullName() {
    const val = fullNameInput.value.trim();
    if (val === '') {
      showError(fullNameInput, nameError, 'Full name is required.');
      return false;
    }
    if (val.length < 3) {
      showError(fullNameInput, nameError, 'Full name must be at least 3 characters long.');
      return false;
    }
    if (!NAME_REGEX.test(val)) {
      showError(fullNameInput, nameError, 'Name can only contain letters, spaces, hyphens, and apostrophes.');
      return false;
    }
    showSuccess(fullNameInput, nameError);
    return true;
  }

  function validateEmail() {
    const val = emailInput.value.trim();
    if (val === '') {
      showError(emailInput, emailError, 'Email address is required.');
      return false;
    }
    if (!EMAIL_REGEX.test(val)) {
      showError(emailInput, emailError, 'Please enter a valid email address (e.g., name@example.com).');
      return false;
    }
    showSuccess(emailInput, emailError);
    return true;
  }

  function validateSubject() {
    const val = subjectInput.value;
    if (!val || val === '') {
      showError(subjectInput, subjectError, 'Please select a topic from the dropdown.');
      return false;
    }
    showSuccess(subjectInput, subjectError);
    return true;
  }

  function validateMessage() {
    const val = messageInput.value.trim();
    if (val === '') {
      showError(messageInput, messageError, 'Message is required.');
      return false;
    }
    if (val.length < 10) {
      showError(messageInput, messageError, `Message is too short (${val.length}/10 chars minimum).`);
      return false;
    }
    if (val.length > 500) {
      showError(messageInput, messageError, 'Message cannot exceed 500 characters.');
      return false;
    }
    showSuccess(messageInput, messageError);
    return true;
  }

  function validateConsent() {
    if (!consentInput.checked) {
      showError(null, consentError, 'You must agree to the privacy policy before submitting.');
      return false;
    }
    showSuccess(null, consentError);
    return true;
  }

  /* --------------------------------------------------------------------------
     Live Event Listeners (Real-Time Feedback)
     -------------------------------------------------------------------------- */

  // Full Name: validate on input & blur
  fullNameInput.addEventListener('input', () => {
    if (fullNameInput.classList.contains('is-invalid')) {
      validateFullName();
    }
  });
  fullNameInput.addEventListener('blur', validateFullName);

  // Email: validate on input & blur
  emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('is-invalid')) {
      validateEmail();
    }
  });
  emailInput.addEventListener('blur', validateEmail);

  // Subject: validate on change
  subjectInput.addEventListener('change', validateSubject);
  subjectInput.addEventListener('blur', validateSubject);

  // Message: validate on input, blur, and update live character counter
  messageInput.addEventListener('input', () => {
    const length = messageInput.value.length;
    charCounter.textContent = `${length} / 500`;

    if (length >= 500) {
      charCounter.className = 'char-counter limit';
    } else if (length >= 450) {
      charCounter.className = 'char-counter warning';
    } else {
      charCounter.className = 'char-counter';
    }

    if (messageInput.classList.contains('is-invalid')) {
      validateMessage();
    }
  });
  messageInput.addEventListener('blur', validateMessage);

  // Consent checkbox
  consentInput.addEventListener('change', validateConsent);

  /* --------------------------------------------------------------------------
     Form Submission Handler
     -------------------------------------------------------------------------- */

  form.addEventListener('submit', (e) => {
    // 1. Prevent default browser submission (which causes full page reload)
    e.preventDefault();

    // 2. Run all individual validations
    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    const isConsentValid = validateConsent();

    const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid && isConsentValid;

    if (!isFormValid) {
      // Trigger subtle shake animation on the card
      formCard.classList.remove('shake-animation');
      void formCard.offsetWidth; // Force CSS reflow
      formCard.classList.add('shake-animation');

      // Accessibility: Focus the first invalid element
      const firstInvalid = form.querySelector('.is-invalid, input[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // 3. Form is Valid: Simulate submission state with loading feedback
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    setTimeout(() => {
      // Populate confirmation summary
      summaryName.textContent = fullNameInput.value.trim();
      summaryEmail.textContent = emailInput.value.trim();
      summarySubject.textContent = subjectInput.options[subjectInput.selectedIndex].text;
      summaryTime.textContent = new Date().toLocaleString();

      // Switch views: Hide form, show success confirmation
      form.style.display = 'none';
      successModal.hidden = false;

      // Restore submit button state
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      // Scroll to top of card smoothly
      formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 650);
  });

  /* --------------------------------------------------------------------------
     Form Reset Handler
     -------------------------------------------------------------------------- */

  form.addEventListener('reset', () => {
    // Clear all validation styles and messages
    clearValidationState(fullNameInput, nameError);
    clearValidationState(emailInput, emailError);
    clearValidationState(subjectInput, subjectError);
    clearValidationState(messageInput, messageError);
    clearValidationState(null, consentError);

    // Reset character counter
    charCounter.textContent = '0 / 500';
    charCounter.className = 'char-counter';

    // Remove any shake animation
    formCard.classList.remove('shake-animation');
  });

  /* --------------------------------------------------------------------------
     "Send Another Message" Handler
     -------------------------------------------------------------------------- */

  if (newSubmissionBtn) {
    newSubmissionBtn.addEventListener('click', () => {
      form.reset();
      successModal.hidden = true;
      form.style.display = 'flex';
      fullNameInput.focus();
    });
  }
});
