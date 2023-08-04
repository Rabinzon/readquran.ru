function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}

(function () {
  const selectElement = document.querySelector('.js-translation-select');
  console.log(getCookie('translationId'));
  selectElement.value = getCookie('translationId') || 1;

  selectElement.addEventListener('change', ({ target }) => {
    console.log(target.value);
    document.cookie = `translationId=${target.value}`;

    window.location.reload();
  });

  const hash = window.location.hash;

  if (!hash) {
    return;
  }

  const element = document.querySelector(hash);
  if (!element) {
    return;
  }

  element.classList.add('selected');
  console.log(element);
})();
