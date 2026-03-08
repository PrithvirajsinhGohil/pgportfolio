import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import resumeData from './resume.json'

// --- Data Injection ---
function renderData() {
  // Hero
  const cycles = ['UI/UX', 'Development', 'Strategy'];
  let cycleIndex = 0;
  const cycleEl = document.querySelector('.text-cycle');

  setInterval(() => {
    cycleIndex = (cycleIndex + 1) % cycles.length;
    gsap.to(cycleEl, {
      opacity: 0, duration: 0.5, onComplete: () => {
        cycleEl.textContent = cycles[cycleIndex];
        gsap.to(cycleEl, { opacity: 1, duration: 0.5 });
      }
    });
  }, 3000);

  // About
  document.getElementById('about-description').textContent = resumeData.personal.about;

  // Experience
  const expList = document.getElementById('experience-list');
  resumeData.experience.forEach(job => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="detail-title">${job.role}</div>
      <div class="detail-sub">${job.company} | ${job.duration}</div>
      <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #aaa;">${job.description}</p>
    `;
    expList.appendChild(li);
  });

  // Education
  const eduList = document.getElementById('education-list');
  resumeData.education.forEach(edu => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="detail-title">${edu.degree}</div>
      <div class="detail-sub">${edu.university} | ${edu.year}</div>
    `;
    eduList.appendChild(li);
  });

  // Skills
  const skillsList = document.getElementById('skills-list');
  resumeData.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Projects (Using experience as placeholder projects or mocked)
  const grid = document.getElementById('projects-grid');
  // Mock projects for visual showcase based on reference
  const projects = [
    { title: 'Movie Ticket System', cat: 'PHP / MySQL' },
    { title: 'Eternal Motors Portal', cat: 'Internal Tool' }
  ];

  projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div>
        <h3 class="project-title">${proj.title}</h3>
        <span class="project-role">${proj.cat}</span>
      </div>
      <div style="font-size: 2rem; align-self: flex-end;">→</div>
    `;
    grid.appendChild(card);
  });

  // Footer
  document.getElementById('contact-email').textContent = resumeData.personal.email;
  document.getElementById('contact-email').href = `mailto:${resumeData.personal.email}`;
}

// --- Three.js Background ---
function initThree() {
  const canvas = document.querySelector('#webgl');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Objects
  const geometry = new THREE.IcosahedronGeometry(2, 64); // Detailed sphere
  const material = new THREE.MeshStandardMaterial({
    color: 0xFF5500,
    metalness: 0.1,
    roughness: 0.4,
    wireframe: true
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  camera.position.z = 6;

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    sphere.rotation.y = elapsedTime * 0.1;
    sphere.rotation.x = elapsedTime * 0.05;

    // Slight float effect
    sphere.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

    renderer.render(scene, camera);
  }

  animate();

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderData();
  initThree();
});
