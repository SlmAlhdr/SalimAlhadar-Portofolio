const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const profilePhoto = document.querySelector('#profile-photo');
const profile = window.portfolioProfile;
if (profilePhoto && profile && profile.image) {
  profilePhoto.src = profile.image;
  profilePhoto.alt = profile.alt || 'Foto profil';
  profilePhoto.hidden = false;
}
const projectGrid = document.querySelector('#project-grid');
const projects = window.portfolioProjects || [];
function addText(parent, tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}
function addProjectLink(parent, url, label) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = label;
  parent.append(link);
}
function renderProject(project, index) {
  const card = document.createElement('article');
  card.className = 'project-card' + (index === 0 ? ' project-large' : '');
  const visual = document.createElement(project.liveUrl ? 'a' : 'div');
  visual.className = 'project-visual ' + ['visual-lime', 'visual-blue', 'visual-peach'][index % 3];
  if (project.liveUrl) {
    visual.href = project.liveUrl;
    visual.target = '_blank';
    visual.rel = 'noreferrer';
    visual.setAttribute('aria-label', 'Buka demo ' + project.title);
  }
  addText(visual, 'span', 'visual-label', project.title || 'Proyek ' + (index + 1));
  if (project.image) {
    const image = document.createElement('img');
    image.className = 'project-image';
    image.src = project.image;
    image.alt = project.imageAlt || 'Gambar ' + (project.title || 'proyek');
    image.loading = 'lazy';
    visual.append(image);
  } else {
    const artwork = document.createElement('span');
    artwork.className = 'visual-shape ' + ['shape-window', 'shape-poster', 'shape-orbit'][index % 3];
    artwork.setAttribute('aria-hidden', 'true');
    visual.append(artwork);
  }
  addText(visual, 'span', 'visual-arrow', '↗').setAttribute('aria-hidden', 'true');
  card.append(visual);
  const info = document.createElement('div');
  info.className = 'project-info';
  const description = document.createElement('div');
  addText(description, 'h3', '', project.title || 'Proyek ' + (index + 1));
  addText(description, 'p', '', project.summary || 'Tambahkan ringkasan proyek di portfolio-data.js.');
  info.append(description);
  addText(info, 'span', 'project-type', [project.category, project.year].filter(Boolean).join(' · '));
  card.append(info);
  const links = document.createElement('div');
  links.className = 'project-links';
  if (project.liveUrl) addProjectLink(links, project.liveUrl, 'Lihat demo ↗');
  if (project.sourceUrl) addProjectLink(links, project.sourceUrl, 'Lihat kode ↗');
  if (links.childElementCount) card.append(links);
  return card;
}
if (projectGrid) projects.forEach((project, index) => projectGrid.append(renderProject(project, index)));
