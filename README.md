
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rohan Shahzad — Full Stack Developer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

<!-- Top bar mimicking an editor window -->
<header class="titlebar">
  <div class="dots"><span></span><span></span><span></span></div>
  <div class="titlebar-name">rohan-shahzad — portfolio</div>
  <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation">☰</button>
</header>

<div class="workspace">

  <!-- Sidebar acting as file explorer / nav -->
  <nav class="sidebar" id="sidebar">
    <div class="sidebar-label">EXPLORER</div>
    <ul class="file-tree">
      <li><button class="file-link active" data-target="hero">home.tsx</button></li>
      <li><button class="file-link" data-target="about">about.md</button></li>
      <li><button class="file-link" data-target="stack">stack.json</button></li>
      <li><button class="file-link" data-target="stats">stats.log</button></li>
      <li><button class="file-link" data-target="contact">contact.sh</button></li>
    </ul>
    <div class="sidebar-footer">
      <span class="status-dot"></span> currently building AI automation workflows
    </div>
  </nav>

  <main class="editor">

    <!-- Tabs -->
    <div class="tabs">
      <div class="tab active" data-tab="hero">home.tsx</div>
      <div class="tab" data-tab="about">about.md</div>
      <div class="tab" data-tab="stack">stack.json</div>
      <div class="tab" data-tab="stats">stats.log</div>
      <div class="tab" data-tab="contact">contact.sh</div>
    </div>

    <!-- HERO -->
    <section id="hero" class="pane active">
      <div class="terminal">
        <div class="terminal-head">
          <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
          <span class="terminal-title">zsh</span>
        </div>
        <div class="terminal-body">
          <p><span class="prompt">rohan@dev</span><span class="path">~</span><span class="cursor-line">$ whoami</span></p>
          <p class="output" id="typedOutput"></p>
          <span class="blink">▍</span>
        </div>
      </div>

      <div class="hero-meta">
        <h1>Rohan Shahzad</h1>
        <p class="role">Full Stack Developer · AI Automation & Chatbots</p>
        <div class="badge-row">
          <span class="badge">3+ yrs experience</span>
          <span class="badge">98% happy clients</span>
          <span class="badge">always on time</span>
        </div>
        <div class="cta-row">
          <button class="btn primary" data-target="contact">Get in touch</button>
          <button class="btn ghost" data-target="stack">View stack</button>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="pane">
      <div class="code-block">
        <div class="line"><span class="ln">1</span><span class="kw">const</span> <span class="var">developer</span> = {</div>
        <div class="line indent"><span class="ln">2</span><span class="key">name</span>: <span class="str">"Rohan Shahzad"</span>,</div>
        <div class="line indent"><span class="ln">3</span><span class="key">role</span>: <span class="str">"Full Stack Developer"</span>,</div>
        <div class="line indent"><span class="ln">4</span><span class="key">experience</span>: <span class="str">"3+ years"</span>,</div>
        <div class="line indent"><span class="ln">5</span><span class="key">focus</span>: [<span class="str">"Web Apps"</span>, <span class="str">"AI Automation"</span>, <span class="str">"Chatbots"</span>, <span class="str">"Vibe Coding"</span>],</div>
        <div class="line indent"><span class="ln">6</span><span class="key">clientSatisfaction</span>: <span class="num">98</span>,</div>
        <div class="line indent"><span class="ln">7</span><span class="key">deliversOnTime</span>: <span class="bool">true</span>,</div>
        <div class="line indent"><span class="ln">8</span><span class="key">currentlyExploring</span>: <span class="str">"AI agent workflows & automation pipelines"</span>,</div>
        <div class="line"><span class="ln">9</span>};</div>
      </div>
      <p class="about-copy">
        I build full stack web applications end-to-end, then extend them with AI automation and
        chatbots that actually save people time. Several projects shipped across web development,
        automation, and AI integration — most clients come back for the next one. Open to freelance
        work, collaborations, and full-time roles.
      </p>
    </section>

    <!-- STACK -->
    <section id="stack" class="pane">
      <h2 class="section-title">// tech stack</h2>

      <div class="stack-group">
        <h3 class="stack-group-title">Languages & Frameworks</h3>
        <div class="chips">
          <span class="chip">HTML5</span><span class="chip">CSS3</span><span class="chip">JavaScript</span>
          <span class="chip">TypeScript</span><span class="chip">React</span><span class="chip">Next.js</span>
          <span class="chip">Node.js</span><span class="chip">Python</span><span class="chip">Tailwind CSS</span>
        </div>
      </div>

      <div class="stack-group">
        <h3 class="stack-group-title">Backend, Databases & Infra</h3>
        <div class="chips">
          <span class="chip">Express.js</span><span class="chip">MongoDB</span><span class="chip">MySQL</span>
          <span class="chip">PostgreSQL</span><span class="chip">Firebase</span><span class="chip">Docker</span>
          <span class="chip">AWS</span><span class="chip">Vercel</span><span class="chip">Git</span>
        </div>
      </div>

      <div class="stack-group">
        <h3 class="stack-group-title">AI, Automation & Commerce</h3>
        <div class="chips">
          <span class="chip">OpenAI API</span><span class="chip">LangChain</span><span class="chip">n8n</span>
          <span class="chip">Zapier</span><span class="chip">Shopify</span><span class="chip">WordPress</span>
          <span class="chip">Stripe</span>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section id="stats" class="pane">
      <h2 class="section-title">// github stats</h2>
      <div class="stats-grid">
        <img src="https://github-readme-stats.vercel.app/api?username=Rohan-3420&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="GitHub stats" loading="lazy">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rohan-3420&layout=compact&theme=tokyonight&hide_border=true" alt="Top languages" loading="lazy">
      </div>
      <img class="streak" src="https://github-readme-streak-stats.herokuapp.com/?user=Rohan-3420&theme=tokyonight&hide_border=true" alt="GitHub streak">
      <img class="snake" src="https://raw.githubusercontent.com/Rohan-3420/Rohan-3420/output/github-contribution-grid-snake.svg" alt="Contribution snake">
    </section>

    <!-- CONTACT -->
    <section id="contact" class="pane">
      <h2 class="section-title">// contact.sh</h2>
      <div class="code-block">
        <div class="line"><span class="ln">1</span><span class="kw">export</span> <span class="var">EMAIL</span>=<span class="str">"me.rohan3420@gmail.com"</span></div>
        <div class="line"><span class="ln">2</span><span class="kw">export</span> <span class="var">WHATSAPP</span>=<span class="str">"+92 335 4581567"</span></div>
        <div class="line"><span class="ln">3</span><span class="comment"># run to reach out</span></div>
        <div class="line"><span class="ln">4</span><span class="fn">./say_hi.sh</span></div>
      </div>
      <div class="contact-buttons">
        <a class="btn primary" href="mailto:me.rohan3420@gmail.com">Email me</a>
        <a class="btn ghost" href="https://wa.me/923354581567" target="_blank" rel="noopener">WhatsApp</a>
      </div>
      <p class="footer-line">⭐ 98% happy clients · always on time · let's build something great</p>
    </section>

  </main>
</div>

<script src="script.js"></script>
</body>
</html>

<style>
:root{
  --bg: #0d1117;
  --bg-panel: #10141c;
  --bg-elevated: #161b22;
  --border: #232a35;
  --text: #e6edf3;
  --text-dim: #8b949e;
  --accent-green: #7ee787;
  --accent-blue: #79c0ff;
  --accent-orange: #ffa657;
  --accent-purple: #d2a8ff;
  --accent-red: #ff7b72;
  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Inter', sans-serif;
}

*{ box-sizing: border-box; margin:0; padding:0; }

html{ scroll-behavior: smooth; }

body{
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  min-height: 100vh;
}

/* Titlebar */
.titlebar{
  height: 44px;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: sticky;
  top: 0;
  z-index: 50;
}
.dots{ display:flex; gap:7px; }
.dots span{ width:11px; height:11px; border-radius:50%; display:inline-block; }
.dots span:nth-child(1){ background:#ff5f56; }
.dots span:nth-child(2){ background:#ffbd2e; }
.dots span:nth-child(3){ background:#27c93f; }
.titlebar-name{
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-dim);
}
.menu-toggle{
  margin-left: auto;
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 18px;
  cursor: pointer;
}

/* Workspace layout */
.workspace{
  display: flex;
  min-height: calc(100vh - 44px);
}

/* Sidebar */
.sidebar{
  width: 240px;
  flex-shrink: 0;
  background: var(--bg-panel);
  border-right: 1px solid var(--border);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
}
.sidebar-label{
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--text-dim);
  padding: 0 20px 12px;
}
.file-tree{ list-style: none; }
.file-link{
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 13.5px;
  padding: 8px 20px;
  cursor: pointer;
  border-left: 2px solid transparent;
  transition: background .15s, color .15s;
}
.file-link:hover{ background: rgba(255,255,255,0.03); color: var(--text); }
.file-link.active{
  color: var(--accent-blue);
  border-left-color: var(--accent-blue);
  background: rgba(121,192,255,0.06);
}
.sidebar-footer{
  margin-top: auto;
  padding: 16px 20px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--text-dim);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 8px;
}
.status-dot{
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent-green);
  box-shadow: 0 0 6px var(--accent-green);
  flex-shrink: 0;
  animation: pulse 2s infinite;
}
@keyframes pulse{
  0%,100%{ opacity: 1; }
  50%{ opacity: .4; }
}

/* Editor */
.editor{ flex: 1; min-width: 0; }

.tabs{
  display: flex;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
}
.tab{
  padding: 12px 20px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-dim);
  border-right: 1px solid var(--border);
  cursor: default;
  white-space: nowrap;
  opacity: .5;
}
.tab.active{
  background: var(--bg);
  color: var(--text);
  opacity: 1;
  border-top: 2px solid var(--accent-blue);
}

.pane{
  display: none;
  padding: 56px 48px;
  max-width: 980px;
  animation: fadeIn .35s ease;
}
.pane.active{ display: block; }
@keyframes fadeIn{ from{ opacity:0; transform: translateY(6px);} to{opacity:1; transform:none;} }

/* Hero */
#hero{ display: none; }
#hero.active{ display: flex; flex-wrap: wrap; gap: 48px; align-items: center; }

.terminal{
  flex: 1 1 420px;
  background: #0a0e14;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 60px -20px rgba(0,0,0,0.6);
}
.terminal-head{
  background: var(--bg-elevated);
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 1px solid var(--border);
}
.dot{ width: 10px; height: 10px; border-radius: 50%; }
.dot.red{ background: #ff5f56; }
.dot.yellow{ background: #ffbd2e; }
.dot.green{ background: #27c93f; }
.terminal-title{
  margin-left: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-dim);
}
.terminal-body{
  padding: 22px;
  font-family: var(--font-mono);
  font-size: 14.5px;
  line-height: 1.9;
  min-height: 180px;
}
.prompt{ color: var(--accent-green); }
.path{ color: var(--accent-blue); margin: 0 6px; }
.cursor-line{ color: var(--text); }
.output{
  color: var(--accent-orange);
  white-space: pre-wrap;
  display: inline;
}
.blink{
  color: var(--accent-green);
  animation: blink 1s step-start infinite;
}
@keyframes blink{ 50%{ opacity: 0; } }

.hero-meta{ flex: 1 1 380px; }
.hero-meta h1{
  font-family: var(--font-mono);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.role{
  color: var(--text-dim);
  font-size: 16px;
  margin-bottom: 20px;
}
.badge-row{ display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
.badge{
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--accent-green);
  background: rgba(126,231,135,0.06);
}
.cta-row{ display: flex; gap: 12px; flex-wrap: wrap; }
.btn{
  font-family: var(--font-mono);
  font-size: 13.5px;
  padding: 11px 22px;
  border-radius: 6px;
  border: 1px solid var(--border);
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: transform .15s, border-color .15s;
}
.btn:hover{ transform: translateY(-2px); }
.btn.primary{
  background: var(--accent-blue);
  color: #041018;
  border-color: var(--accent-blue);
  font-weight: 700;
}
.btn.ghost{
  background: transparent;
  color: var(--text);
}
.btn.ghost:hover{ border-color: var(--accent-blue); }

/* Section titles */
.section-title{
  font-family: var(--font-mono);
  color: var(--accent-green);
  font-size: 15px;
  margin-bottom: 24px;
}

/* Code block (about / contact) */
.code-block{
  background: var(--bg-panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 0;
  font-family: var(--font-mono);
  font-size: 13.5px;
  line-height: 1.85;
  margin-bottom: 28px;
  overflow-x: auto;
}
.line{ padding: 0 20px; white-space: pre; }
.line.indent{ padding-left: 40px; }
.ln{
  display: inline-block;
  width: 22px;
  color: #3b4351;
  margin-right: 14px;
  user-select: none;
}
.kw{ color: var(--accent-purple); }
.var{ color: var(--accent-blue); }
.key{ color: var(--accent-blue); }
.str{ color: var(--accent-green); }
.num{ color: var(--accent-orange); }
.bool{ color: var(--accent-orange); }
.fn{ color: var(--accent-orange); }
.comment{ color: var(--text-dim); }

.about-copy{
  color: var(--text-dim);
  font-size: 15.5px;
  line-height: 1.75;
  max-width: 640px;
}

/* Stack chips */
.stack-group{ margin-bottom: 32px; }
.stack-group-title{
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent-purple);
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.chips{ display: flex; flex-wrap: wrap; gap: 10px; }
.chip{
  font-family: var(--font-mono);
  font-size: 13px;
  padding: 8px 14px;
  border-radius: 6px;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  color: var(--text);
  transition: border-color .15s, transform .15s;
}
.chip:hover{
  border-color: var(--accent-blue);
  transform: translateY(-2px);
}

/* Stats */
.stats-grid{
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
}
.stats-grid img{ max-width: 100%; height: auto; border-radius: 8px; }
.streak, .snake{ max-width: 100%; height: auto; display: block; margin-bottom: 16px; border-radius: 8px; }

/* Contact */
.contact-buttons{ display: flex; gap: 12px; margin: 24px 0; flex-wrap: wrap; }
.footer-line{
  font-family: var(--font-mono);
  color: var(--text-dim);
  font-size: 13px;
  margin-top: 24px;
}

/* Responsive */
@media (max-width: 820px){
  .menu-toggle{ display: block; }
  .sidebar{
    position: fixed;
    top: 44px;
    left: 0;
    bottom: 0;
    z-index: 40;
    transform: translateX(-100%);
    transition: transform .25s ease;
  }
  .sidebar.open{ transform: translateX(0); }
  .pane{ padding: 36px 22px; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  *{ animation: none !important; transition: none !important; }
}
</style>

<script>
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
</script>
