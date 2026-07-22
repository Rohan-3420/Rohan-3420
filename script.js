// ---- Navigation: sidebar + tabs switch panes together ----
const fileLinks = document.querySelectorAll('.file-link');
const tabs = document.querySelectorAll('.tab');
const panes = document.querySelectorAll('.pane');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');

function activatePane(target){
  panes.forEach(p => p.classList.toggle('active', p.id === target));
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === target));
  fileLinks.forEach(f => f.classList.toggle('active', f.dataset.target === target));
  sidebar.classList.remove('open');
}

fileLinks.forEach(link => {
  link.addEventListener('click', () => activatePane(link.dataset.target));
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => activatePane(tab.dataset.tab));
});

// Buttons inside panes that jump to another pane (e.g. hero CTAs)
document.querySelectorAll('[data-target]').forEach(el => {
  if (!el.classList.contains('file-link') && !el.classList.contains('tab')) {
    el.addEventListener('click', () => activatePane(el.dataset.target));
  }
});

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// ---- Terminal typing effect ----
const typedOutputEl = document.getElementById('typedOutput');
const fullText = "rohan-shahzad — full stack developer building web apps, AI automation & chatbots.";
let i = 0;

function typeChar(){
  if (i <= fullText.length){
    typedOutputEl.textContent = fullText.slice(0, i);
    i++;
    setTimeout(typeChar, 35);
  }
}

// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion){
  typedOutputEl.textContent = fullText;
} else {
  typeChar();
}
