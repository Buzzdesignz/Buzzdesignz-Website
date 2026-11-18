(function () {
  // mobile menu
  var t = document.querySelector('.nav__toggle'), m = document.getElementById('menu');
  if (t && m) {
    t.addEventListener('click', function () {
      var open = m.classList.toggle('is-open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    m.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { m.classList.remove('is-open'); t.setAttribute('aria-expanded', 'false'); }
    });
  }
  // project filter
  var chips = document.querySelectorAll('.chip'), cards = document.querySelectorAll('.card');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var f = c.getAttribute('data-filter');
      chips.forEach(function (x) { var on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      cards.forEach(function (card) { card.classList.toggle('is-hidden', f !== 'all' && card.getAttribute('data-cat') !== f); });
    });
  });
  // currency switch
  var curs = document.querySelectorAll('[data-cur]');
  curs.forEach(function (c) {
    c.addEventListener('click', function () {
      var k = c.getAttribute('data-cur');
      curs.forEach(function (x) { var on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      document.querySelectorAll('[data-ngn]').forEach(function (el) { el.textContent = el.getAttribute('data-' + k); });
    });
  });
  // footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
