(function(){
  "use strict";

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link').forEach(function(link){
    link.addEventListener('click', function(){
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- Typing animation ---------- */
  var phrases = ["Frontend Developer", "React Enthusiast", "UI Craftsman", "Lifelong Learner"];
  var typeEl = document.getElementById('typeText');
  var pIndex = 0, cIndex = 0, deleting = false;

  function tick(){
    var current = phrases[pIndex];
    if(!deleting){
      cIndex++;
      typeEl.textContent = current.slice(0, cIndex);
      if(cIndex === current.length){
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      cIndex--;
      typeEl.textContent = current.slice(0, cIndex);
      if(cIndex === 0){
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  tick();

  /* ---------- Particles ---------- */
  var field = document.getElementById('particles');
  var particleCount = window.innerWidth < 640 ? 14 : 26;
  for(var i=0; i<particleCount; i++){
    var p = document.createElement('div');
    p.className = 'particle';
    var size = 2 + Math.random()*3;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random()*100 + 'vw';
    p.style.bottom = '-10px';
    p.style.animationDuration = (12 + Math.random()*14) + 's';
    p.style.animationDelay = (Math.random()*14) + 's';
    if(i % 3 === 1){ p.style.background = 'var(--violet)'; }
    if(i % 3 === 2){ p.style.background = 'var(--amber)'; }
    field.appendChild(p);
  }

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll('.reveal, .skill-card, .project-row, .timeline-item');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(function(el){ io.observe(el); });

  /* ---------- Data: Skills ---------- */
  var skills = [
    { name:"HTML", tag:"markup", icon:"🔶", level:90 },
    { name:"CSS", tag:"styling", icon:"🎨", level:85 },
    { name:"Bootstrap", tag:"framework", icon:"🅱️", level:80 },
    { name:"JavaScript", tag:"language", icon:"⚡", level:80 },
    { name:"React", tag:"library", icon:"⚛️", level:75 },
    { name:"PHP", tag:"backend", icon:"🐘", level:65 },
    { name:"MySQL", tag:"database", icon:"🗄️", level:65 },
    { name:"Git & GitHub", tag:"version control", icon:"🔧", level:80 }
  ];
  var skillsGrid = document.getElementById('skillsGrid');
  skills.forEach(function(s){
    var card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.style.setProperty('--lvl', s.level + '%');
    card.innerHTML =
      '<span class="skill-icon">'+s.icon+'</span>'+
      '<div class="skill-name">'+s.name+'</div>'+
      '<div class="skill-tag">'+s.tag+'</div>'+
      '<div class="skill-bar"><span></span></div>';
    skillsGrid.appendChild(card);
    io.observe(card);
  });

  /* ---------- Data: Projects ---------- */
  var projects = [
    {
      name: "E-Commerce UI Concept",
      desc: "A responsive storefront concept with product filtering, cart interactions and a clean checkout flow.",
      tech: ["React", "JavaScript", "CSS"],
      colors: ["#5EEAD4", "#A78BFA"],
      live: "#",
      code: "#"
    },
    {
      name: "Task Management App",
      desc: "A drag-and-drop task board with local persistence, built to practice component architecture and state.",
      tech: ["React", "JavaScript", "Bootstrap"],
      colors: ["#A78BFA", "#FBBF24"],
      live: "#",
      code: "#"
    },
    {
      name: "Portfolio Dashboard",
      desc: "An admin-style dashboard layout with charts, tables and a fully responsive sidebar navigation.",
      tech: ["HTML", "CSS", "JavaScript"],
      colors: ["#FBBF24", "#5EEAD4"],
      live: "#",
      code: "#"
    },
    {
      name: "Student Records System",
      desc: "A full-stack CRUD app for managing student records, with a PHP & MySQL backend.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      colors: ["#5EEAD4", "#FBBF24"],
      live: "#",
      code: "#"
    }
  ];
  var projectsList = document.getElementById('projectsList');
  projects.forEach(function(p, idx){
    var row = document.createElement('div');
    row.className = 'project-row reveal';
    row.innerHTML =
      '<div class="project-media">'+
        '<div class="glow-shape" style="background:'+p.colors[0]+'; top:-10%; left:-10%;"></div>'+
        '<div class="glow-shape" style="background:'+p.colors[1]+'; bottom:-15%; right:-10%;"></div>'+
        '<div class="mockup">'+p.name+'</div>'+
      '</div>'+
      '<div class="project-info">'+
        '<div class="proj-num">0'+(idx+1)+'</div>'+
        '<div class="project-name">'+p.name+'</div>'+
        '<p class="project-desc">'+p.desc+'</p>'+
        '<div class="tech-list">'+p.tech.map(function(t){ return '<span class="tech-pill">'+t+'</span>'; }).join('')+'</div>'+
        '<div class="project-actions">'+
          '<a href="'+p.live+'" class="link-btn live" target="_blank" rel="noopener">Live Demo</a>'+
          '<a href="'+p.code+'" class="link-btn code" target="_blank" rel="noopener">GitHub</a>'+
        '</div>'+
      '</div>';
    projectsList.appendChild(row);
    io.observe(row);
  });

  /* ---------- Data: Education ---------- */
  var education = [
    {
      period: "2023 — Present",
      title: "Self-Directed Web Development",
      place: "Independent study & project-based learning",
      desc: "Learning modern frontend development through hands-on projects, covering HTML, CSS, JavaScript, React and backend fundamentals."
    },
    {
      period: "2021 — 2023",
      title: "Intermediate / High School",
      place: "Add your school name here",
      desc: "Completed foundational education, later moving toward a focus on computer science and technology."
    }
  ];
  var eduTimeline = document.getElementById('eduTimeline');
  education.forEach(function(e){
    var item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.innerHTML =
      '<div class="edu-card">'+
        '<div class="edu-period">'+e.period+'</div>'+
        '<div class="edu-title">'+e.title+'</div>'+
        '<div class="edu-place">'+e.place+'</div>'+
        '<div class="edu-desc">'+e.desc+'</div>'+
      '</div>';
    eduTimeline.appendChild(item);
    io.observe(item);
  });

  /* ---------- Data: Socials ---------- */
  var socials = [
    { label:"GitHub", sub:"github.com/muhammadhammad", href:"https://github.com/", icon:'<svg viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/></svg>' },
    { label:"LinkedIn", sub:"linkedin.com/in/muhammadhammad", href:"https://linkedin.com/", icon:'<svg viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>' },
    { label:"Email", sub:"hammad@example.com", href:"mailto:hammad@example.com", icon:'<svg viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 13 22 6.01V6H2Zm0 12h20V8.24l-9.4 6.1a1 1 0 0 1-1.2 0L2 8.24V18Z"/></svg>' },
    { label:"Twitter / X", sub:"@muhammadhammad", href:"https://twitter.com/", icon:'<svg viewBox="0 0 24 24" fill="currentColor" class="social-icon"><path d="M18.9 2H22l-7.6 8.68L23.4 22h-7.1l-5.6-6.9L4.3 22H1.2l8.2-9.36L1 2h7.3l5.06 6.3L18.9 2Zm-1.25 18h1.75L7.4 3.9H5.55L17.65 20Z"/></svg>' }
  ];
  var socialList = document.getElementById('socialList');
  var footerSocials = document.getElementById('footerSocials');
  socials.forEach(function(s){
    var a = document.createElement('a');
    a.className = 'social-link';
    a.href = s.href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = s.icon + '<span><span class="social-label">'+s.label+'</span><br><span class="social-sub">'+s.sub+'</span></span>';
    socialList.appendChild(a);

    var fa = document.createElement('a');
    fa.href = s.href;
    fa.target = '_blank';
    fa.rel = 'noopener';
    fa.setAttribute('aria-label', s.label);
    fa.innerHTML = s.icon;
    footerSocials.appendChild(fa);
  });

  /* ---------- Contact form (demo only, no backend) ---------- */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = "✓ Message ready — connect a backend or emailjs to actually send it.";
    form.reset();
    setTimeout(function(){ status.textContent = ""; }, 5000);
  });

})();