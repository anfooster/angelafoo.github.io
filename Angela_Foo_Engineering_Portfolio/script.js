(() => {
  'use strict';
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{const isOpen=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(isOpen));});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}));
  }
  if(document.body.dataset.page!=='generic-project') return;
  const wrap=document.getElementById('generic-project-content');
  const id=new URLSearchParams(location.search).get('project');
  if(id==='injection-mold'){location.replace('injection.html');return;}
  const p=window.CLASS_PROJECTS?.[id];
  const escapeText=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  if(!p){wrap.innerHTML='<a class="back-to" href="index.html#projects">← ALL PROJECTS</a><h1>Project not found.</h1><p>Please return to the project list.</p>';return;}
  document.title=`${p.title} — Angela Foo`;
  wrap.innerHTML=`
    <a class="back-to" href="index.html#projects">← &nbsp; ALL PROJECTS</a>
    <p class="eyebrow">${escapeText(p.course)} / ${escapeText(p.category)}</p>
    <h1 class="generic-title">${escapeText(p.title)}<span class="accent-dot">.</span></h1>
    <p class="generic-intro">${escapeText(p.summary)}</p>
    <div class="unfilled-media" role="note"><div><span>PROJECT ${escapeText(p.number)}</span><strong>Photography &amp; CAD<br>coming soon.</strong></div><p>Placeholder reserved for original project imagery.</p></div>
    <div class="generic-grid"><aside><p class="eyebrow">PROJECT OVERVIEW</p><h2>Behind the build.</h2><p class="tools-label">TOOLS & PROCESSES</p><p>${escapeText(p.tools)}</p></aside><div class="generic-main"><h2>Overview</h2><p>${escapeText(p.overview)}</p><h2>Project work</h2><ul>${p.details.map(d=>`<li>${escapeText(d)}</li>`).join('')}</ul><h2>Workflow</h2><div class="process-steps">${p.process.map((step,index)=>`<div><span>${String(index+1).padStart(2,'0')}</span><p>${escapeText(step)}</p></div>`).join('')}</div><p class="fineprint">${escapeText(p.note)}</p></div></div>
    <div class="generic-end"><a class="text-link" href="index.html#projects">← Back to selected projects</a></div>`;
})();
