(() => {
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton = document.getElementById('motionToggle');
  let userPaused = false;
  try { userPaused = localStorage.getItem('portfolio-motion') === 'paused'; } catch {}
  function syncMotion() {
    const paused = userPaused || reducedMotion.matches;
    root.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = reducedMotion.matches ? 'Reduced motion on' : paused ? 'Resume motion ▷' : 'Pause motion Ⅱ';
    motionButton.disabled = reducedMotion.matches;
  }
  motionButton.addEventListener('click', () => {
    userPaused = !userPaused;
    try { localStorage.setItem('portfolio-motion', userPaused ? 'paused' : 'on'); } catch {}
    syncMotion();
  });
  reducedMotion.addEventListener('change', syncMotion);
  syncMotion();
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  function closeMenu() { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', () => { burger.setAttribute('aria-expanded', String(menu.classList.toggle('open'))); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); burger.focus(); } });
  matchMedia('(min-width: 821px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    root.classList.add('motion-enabled');
  }
  const navLinks = [...document.querySelectorAll('#deskNav a')];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
  const progress = document.querySelector('.reading-progress');
  const toTop = document.getElementById('toTop');
  let framePending = false;
  function updateScroll() {
    const max = root.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0})`;
    toTop.classList.toggle('show', scrollY > 600);
    let current = -1;
    sections.forEach((section, i) => { if (section && section.getBoundingClientRect().top <= 160) current = i; });
    navLinks.forEach((link, i) => { link.classList.toggle('active', i === current); if (i === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    framePending = false;
  }
  function scheduleScroll() { if (!framePending) { requestAnimationFrame(updateScroll); framePending = true; } }
  addEventListener('scroll', scheduleScroll, { passive: true });
  addEventListener('resize', scheduleScroll);
  if ('ResizeObserver' in window) new ResizeObserver(scheduleScroll).observe(document.body);
  updateScroll();
  toTop.addEventListener('click', () => { document.querySelector('.nav-brand').focus({ preventScroll: true }); scrollTo({ top: 0, behavior: root.classList.contains('motion-paused') ? 'instant' : 'smooth' }); });
  const projects = [...document.querySelectorAll('.proj-row[data-category]')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const count = document.getElementById('projectCount');
  function filterProjects(filter) {
    let visible = 0;
    projects.forEach(project => { project.hidden = filter !== 'all' && !project.dataset.category.split(' ').includes(filter); if (!project.hidden) { visible++; project.classList.add('in'); } });
    filters.forEach(button => { const selected = button.dataset.filter === filter; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
    count.textContent = `${visible} projects`;
    scheduleScroll();
  }
  count.textContent = `${projects.length} projects`;
  filters.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
  function revealLinkedProject() { const project = projects.find(project => '#' + project.id === location.hash); if (project && project.hidden) filterProjects('all'); }
  addEventListener('hashchange', revealLinkedProject);
  document.querySelectorAll('.now-items a').forEach(link => link.addEventListener('click', () => { const target = document.querySelector(link.hash); if (target?.hidden) filterProjects('all'); }));
  revealLinkedProject();
  const scene = document.querySelector('.workspace-scene');
  const message = document.getElementById('terminalMessage');
  const messages = ['hey there! glad you stopped by :)', 'currently debugging. probably a missing semicolon.', 'good systems start with good questions.', 'turning curiosity into working software'];
  let helloIndex = 0;
  let greetingTimer;
  document.getElementById('helloBtn').addEventListener('click', () => {
    message.textContent = messages[helloIndex++ % messages.length];
    scene.classList.add('greeting');
    clearTimeout(greetingTimer);
    greetingTimer = setTimeout(() => scene.classList.remove('greeting'), 1400);
  });
})();
