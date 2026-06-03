// ===== EMAILJS INIT =====
    emailjs.init("S7JZnuBLirYBBeueH");

    // ===== PROJECT DATA =====
    const projects = {
      ecommerce: {
        image: 'food.png',
        emoji: '🍽️',
        bg: 'linear-gradient(135deg,#1a0a2e,#2e0a1a)',
        title: 'Online Food Ordering Platform',
        screenshots: [
          'Onlinefood.png',
          'image1.jpg',
          'image2.png',
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        desc: 'A fully responsive online food shopping website built from scratch using HTML, CSS, and JavaScript. Features include a food selecting  with filtering, an interactive shopping cart with real-time updates, a checkout form with validation, and a clean modern UI. The project helped me understand DOM manipulation, local storage, and dynamic content rendering.',
        meta: [
          { label: 'Type', val: 'Frontend Web App' },
          { label: 'Status', val: '✅ Completed' },
          { label: 'Duration', val: '3 weeks' },
          { label: 'Features', val: 'Product filter, Cart, Checkout, Responsive layout' },
        ],
        github: '#',
        live: '#'
      },
      sms: {
        image: 'student.png',
        emoji: '📝',
        bg: 'linear-gradient(135deg,#0a1a2e,#0a2e1a)',
        screenshots: ['sms-screenshot.png'],
        title: 'Student Complaint Management System',
        tags: ['Python', 'MySQL'],
        desc: 'A desktop-based Student Management System developed using Java and MySQL. The application allows administrators to add new students, update existing records, delete students, and search by roll number or name. It uses JDBC for database connectivity and Java Swing for the graphical user interface. Great project for learning database operations and OOP concepts.',
        meta: [
          { label: 'Type', val: 'Desktop Application' },
          { label: 'Status', val: '✅ Completed' },
          { label: 'Duration', val: '4 weeks' },
          { label: 'Features', val: 'Add / Update / Delete / Search students, MySQL backend' },
        ],
        github: '#',
        live: null
      },
      weather: {
        image: 'weather.png',
        emoji: '🌤️',
        bg: 'linear-gradient(135deg,#0a1e2e,#1a2e0a)',
        screenshots: ['weather-screenshot.png'],
        title: 'Weather App',
        tags: ['Python', 'API', 'OpenWeather', 'Tkinter'],
        desc: 'A weather application built with Python that fetches real-time weather data for any city in the world using the OpenWeather API. The app displays temperature, humidity, wind speed, and weather conditions with a clean GUI built using Tkinter. This project taught me how to work with REST APIs, handle JSON responses, and build Python GUIs.',
        meta: [
          { label: 'Type', val: 'Python App' },
          { label: 'Status', val: '✅ Completed' },
          { label: 'Duration', val: '1 week' },
          { label: 'Features', val: 'Real-time data, City search, Weather icons, Temp units' },
        ],
        github: '#',
        live: '#'
      },
      smart: {
        image: 'smart.png',
        bg: 'linear-gradient(135deg,#2e1a0a,#0a2e28)',
        screenshots: [
          's_image1.png',
          's_image2.png',
          's_image4.png',
          's_image5.png',
          's_image6.png',
          's_image7.png',
          's_image8.png',
          's_image9.png',
        ],
        title: 'Smart Attendance Management System',
        tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'Python', 'Flask', 'SQLite', 'QR Code Library', 'Werkzeug Security'],
        desc: 'A modern and secure attendance management web application buit using Python Flask, SQLite, HTML, CSS and Javascript.  The system provides role-based access for admin, Teacher, and Student users. Teacher can mark attendance using Normal Attendance, OTP Verification , and OR Code Verification, While students can view their attendance records and reports. The application also includes class management, student enrollment, attendance analytics, and secure authentication.',
        meta: [
          { label: 'Type', val: 'attendance Management Web Application' },
          { label: 'Status', val: '✅ Completed' },
          { label: 'Duration', val: '15 Days' },
          { label: 'Features', val: 'Admin Dashboard, Teacher & Student Management, Class Management, Student Enrollment, Normal Attendance, OTP Attendance, QR Code Attendance, ATTendance Reports, Attendaance Analytics, Secure Login System, Password Hashing, Role-Based Access Control, SQLite Database, OR Code Generation, Local Storage of Attendance Records' },
        ],
        github: 'https://github.com/kanhaiyakumar10219-star/smart-attendance-system',
        live: 'https://smart-attendance-system-production-69ca.up.railway.app',
      }
    };

    function openModal(key) {
    const p = projects[key];
     if (!p) return;

     // Modal top section
     document.getElementById('mThumb').style.background = p.bg;
     if (p.image) {
    document.getElementById('mThumb').innerHTML =
        `<img src="${p.image}" alt="${p.title}" class="modal-hero-img">`;
      } else {
    document.getElementById('mThumb').textContent = p.emoji;
     }

    // Remove old screenshot section
    const existingShot = document.getElementById('mScreenshot');
    if (existingShot) existingShot.remove();

    // Title
    document.getElementById('mTitle').textContent = p.title;

    // Tags
    document.getElementById('mTags').innerHTML = p.tags.map(tag =>
    `<span class="tag-pill">${tag}</span>`
    ).join('');

    // Description
    document.getElementById('mDesc').textContent = p.desc;

    // Meta Data
    document.getElementById('mMeta').innerHTML = p.meta.map(item =>
     `<div class="modal-meta-row">
      <strong>${item.label}</strong>
      <span>${item.val}</span>
      </div>`
      ).join('');

  // ===== SCREENSHOT SECTION =====
  if (p.screenshots && p.screenshots.length > 0) {

    const shotDiv = document.createElement('div');

    shotDiv.id = 'mScreenshot';
    shotDiv.className = 'modal-screenshot';

    shotDiv.innerHTML = `
      <h3 class="screenshot-title">
      <span>Screen</span><span class="shot-text">Shots</span>
      </h3>

      <p class="screenshot-subtitle">
        Preview of my project interface and design
      </p>

      <div class="screenshot-grid">
        ${p.screenshots.map(img => `
          <img 
            src="${img}" 
            alt="${p.title} Screenshot"
            onclick="openImageViewer('${img}')"
            onerror="this.style.display='none';"
          >
        `).join('')}
      </div>
    `;

    document.querySelector('.modal-content').appendChild(shotDiv);
  }

  // ===== LINKS =====
  let links = `
    <a href="${p.github}" target="_blank" class="modal-link-btn ml-outline">
      <i class="fab fa-github"></i>
      View Code
    </a>
  `;

  if (p.live) {
    links += `
      <a href="${p.live}" target="_blank" class="modal-link-btn ml-primary">
        <i class="fas fa-external-link-alt"></i>
        Live Demo
      </a>
    `;
  }

  document.getElementById('mLinks').innerHTML = links;

  // Open modal
  document.getElementById('modalOverlay').classList.add('open');

  // Body scroll off
  document.body.style.overflow = 'hidden';
}

   

    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
      const shot = document.getElementById('mScreenshot');
      if (shot) shot.remove();
    }

    function closeModalOutside(e) {
      if (e.target === document.getElementById('modalOverlay')) closeModal();
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // ===== EMAILJS SEND =====
    function sendMessage() {
      const name    = document.getElementById('cname').value.trim();
      const email   = document.getElementById('cemail').value.trim();
      const message = document.getElementById('cmsg').value.trim();
      const result  = document.getElementById('formResult');
      const btn     = document.getElementById('submitBtn');

      result.className = '';
      result.style.display = 'none';

      if (!name || !email || !message) {
        result.className = 'error';
        result.innerHTML = '⚠️ Please fill in all fields before sending.';
        result.style.display = 'block';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        result.className = 'error';
        result.innerHTML = '⚠️ Please enter a valid email address.';
        result.style.display = 'block';
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      emailjs.send("service_0pm4kkl", "template_lms9gba", {
        name: name,
        email: email,
        message: message,
        title: "Portfolio Contact from " + name,
        time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      })
      .then(() => {
        result.className = 'success';
        result.innerHTML = '✅ Message sent successfully! ';
        result.style.display = 'block';
        document.getElementById('cname').value = '';
        document.getElementById('cemail').value = '';
        document.getElementById('cmsg').value = '';
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      })
      .catch((err) => {
        result.className = 'error';
        result.innerHTML = '❌ Failed to send message. Please try again or email directly.';
        result.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        console.error('EmailJS error:', err);
      });
    }

    // ===== SCROLL FADE IN =====
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), 80);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ===== SKILL BAR =====
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach(bar => {
            const w = bar.getAttribute('data-width');
            setTimeout(() => { bar.style.width = w + '%'; }, 250);
          });
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('#skills').forEach(el => skillObserver.observe(el));

    // ===== RESUME CHECK =====
    document.getElementById('resumeBtn').addEventListener('click', function(e) {
      fetch('resume.pdf', { method: 'HEAD' })
        .then(res => {
          if (!res.ok) {
            e.preventDefault();
            alert('Resume not found!\nAdd resume.pdf in the same folder as this HTML file.');
          }
        })
        .catch(() => {
          e.preventDefault();
          alert('Add your resume.pdf in the same folder as this HTML file.');
        });
    });

    // ===== ACTIVE NAV =====
    const allSections = document.querySelectorAll('section');
    const allNavLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      allSections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 180) current = sec.id;
      });
      allNavLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    });

    // Open Image Viewer
    function openImageViewer(imgSrc) {
    document.getElementById('viewerImg').src = imgSrc;
    document.getElementById('imageViewer').classList.add('open');
    }

    function closeImageViewer() {
    document.getElementById('imageViewer').classList.remove('open');
    document.getElementById('viewerImg').src = '';
    }