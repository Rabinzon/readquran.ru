function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

(function () {
  const selectElement = document.querySelector('.js-translation-select');

  selectElement.value = getCookie('translationId') || 1;

  selectElement.addEventListener('change', ({ target }) => {
    document.cookie = `translationId=${target.value}`;

    window.location.reload();
  });

  document
    .querySelector('html')
    .setAttribute(
      'data-bs-theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    );

  const hash = window.location.hash;

  if (!hash) {
    return;
  }

  const element = document.querySelector(hash);
  if (!element) {
    return;
  }

  element.classList.add('selected');
})();
