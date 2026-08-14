(function(){
  "use strict";

  /* ---------- Route strip ---------- */
  function renderRoute(){
    const el = document.getElementById("route");
    if(!el) return;
    el.innerHTML = ROUTE.map((s, i) => `
      <span class="route__stop">
        <span class="route__dot"></span>
        <span class="route__city">${s.city}</span>
        <span class="route__year">${s.year}</span>
      </span>
      ${i < ROUTE.length - 1 ? '<span class="route__sep"></span>' : ''}
    `).join("");
  }

  /* ---------- Projects ---------- */
  function renderProjects(){
    const el = document.getElementById("projects");
    if(!el) return;
    el.innerHTML = PROJECTS.map(p => `
      <article class="project">
        <span class="project__tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
      </article>
    `).join("");
  }

  /* ---------- Books ---------- */
  function renderBooks(){
    const el = document.getElementById("books");
    if(!el) return;
    el.innerHTML = BOOKS.map(b => `
      <article class="book">
        <span class="book__label">${b.label}</span>
        <h3>${b.title}</h3>
        <p>${b.meta}</p>
        ${b.prize ? `<div class="book__prize">&#9733; ${b.prize}</div>` : ""}
      </article>
    `).join("");
  }

  /* ---------- Publications list (articles / chapters / datasets) grouped by year ---------- */
  function groupByYear(items){
    const map = new Map();
    items.forEach(it => {
      if(!map.has(it.year)) map.set(it.year, []);
      map.get(it.year).push(it);
    });
    return [...map.entries()].sort((a,b) => b[0]-a[0]);
  }

  function itemMarkup(it, n, kind){
    const venueLine = kind === "dataset"
      ? (it.doi ? `<a href="${it.doi}" target="_blank" rel="noopener">${it.doi.replace('https://doi.org/','doi: ')}</a>` : "")
      : (it.doi ? `${it.venue}. <a href="${it.doi}" target="_blank" rel="noopener">doi</a>` : it.venue);
    return `
      <li class="pub-item">
        <span class="pub-item__num">${String(n).padStart(2,"0")}</span>
        <div>
          <p class="pub-item__title">${it.authors ? it.authors + ". " : ""}${it.title}</p>
          <p class="pub-item__meta">${venueLine}</p>
        </div>
      </li>`;
  }

  function renderGroupedList(containerId, items, kind, initialYears){
    const el = document.getElementById(containerId);
    if(!el) return;
    const groups = groupByYear(items);
    let n = items.length;
    let html = "";
    groups.forEach(([year, list], idx) => {
      const hide = initialYears && idx >= initialYears ? ' style="display:none"' : "";
      html += `<div class="pub-year-block" data-extra="${initialYears ? (idx >= initialYears ? "1" : "0") : "0"}"${hide}>`;
      html += `<h3 class="pub-year">${year}</h3><ul class="pub-list">`;
      list.forEach(it => { html += itemMarkup(it, n, kind); n--; });
      html += `</ul></div>`;
    });
    el.innerHTML = html;

    if(initialYears && groups.length > initialYears){
      const btnWrap = document.createElement("div");
      btnWrap.className = "pub-more";
      btnWrap.innerHTML = `<button class="btn" type="button">Show all ${items.length} entries</button>`;
      el.parentNode.insertBefore(btnWrap, el.nextSibling);
      btnWrap.querySelector("button").addEventListener("click", function(){
        el.querySelectorAll('.pub-year-block[data-extra="1"]').forEach(b => b.style.display = "");
        btnWrap.remove();
      });
    }
  }

  /* ---------- Tabs ---------- */
  function setupTabs(){
    const tabs = document.querySelectorAll(".pub-tab");
    const panels = document.querySelectorAll(".pub-panel");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.setAttribute("aria-selected","false"));
        tab.setAttribute("aria-selected","true");
        const target = tab.getAttribute("data-target");
        panels.forEach(p => p.style.display = (p.id === target ? "" : "none"));
      });
    });
  }

  /* ---------- Teaching ---------- */
  function renderTeaching(){
    const el = document.getElementById("teaching-list");
    if(!el) return;
    el.innerHTML = TEACHING.map(t => `
      <li>
        <span class="yr">${t.yr}</span>
        <span>
          <div class="course">${t.course}</div>
          <div class="course-meta">${t.meta}</div>
        </span>
      </li>
    `).join("");
  }

  /* ---------- Scroll reveal ---------- */
  function setupReveal(){
    const targets = document.querySelectorAll(".reveal");
    if(!("IntersectionObserver" in window)){
      targets.forEach(t => t.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(t => io.observe(t));
  }

  /* ---------- Footer year ---------- */
  function setYear(){
    const el = document.getElementById("year");
    if(el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function(){
    renderRoute();
    renderProjects();
    renderBooks();
    renderGroupedList("articles-list", ARTICLES, "article", 4);
    renderGroupedList("chapters-list", CHAPTERS, "chapter", null);
    renderGroupedList("datasets-list", DATASETS, "dataset", null);
    renderTeaching();
    setupTabs();
    setupReveal();
    setYear();
  });
})();
