// Portfolio data
const portfolios = [
  {
    name: "Brittany Chiang",
    link: "https://brittanychiang.com",
    stacks: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    name: "Ayush Sharma",
    link: "https://ayushsharma.dev",
    stacks: ["React", "Framer Motion", "TailwindCSS"],
  },
  {
    name: "Joshua's Portfolio",
    link: "https://joshua.dev",
    stacks: ["Vue", "SCSS", "Vite"],
  },
  {
    name: "Lydia Hallie",
    link: "https://lydiahallie.io",
    stacks: ["Next.js", "Styled Components", "Animations"],
  },
  {
    name: "Lee Robinson",
    link: "https://leerob.io",
    stacks: ["Next.js", "TailwindCSS", "Vercel"],
  },
  {
    name: "Cassie Evans",
    link: "https://cassie.codes",
    stacks: ["CSS", "SVG", "Animation"],
  },
  {
    name: "Addy Osmani",
    link: "https://addyosmani.com",
    stacks: ["JavaScript", "Web Performance"],
  },
  {
    name: "Sarah Drasner",
    link: "https://sarah.dev",
    stacks: ["Vue.js", "SVG", "Animation"],
  }
];

//sort portfolios alphabetically by name
portfolios.sort((a, b) => a.name.localeCompare(b.name));
// Populate table
const tableBody = document.getElementById('portfolioTable');

portfolios.forEach((portfolio, index) => {
  const row = document.createElement('tr');
  row.className = 'hover:bg-gray-50 transition-all duration-300';
  
  row.innerHTML = `
    <td class="py-3 sm:py-4 px-4 sm:px-6 text-gray-600 text-sm sm:text-base">${index + 1}</td>
    <td class="py-3 sm:py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base">${portfolio.name}</td>
    <td class="py-3 sm:py-4 px-4 sm:px-6">
      <a href="${portfolio.link}" target="_blank" class="text-gray-700 hover:text-black hover:underline transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
        <i class="fas fa-external-link-alt text-xs"></i>
        <span class="hidden sm:inline">${portfolio.link.replace('https://', '')}</span>
        <span class="sm:hidden">Visit</span>
      </a>
    </td>
    <td class="py-3 sm:py-4 px-4 sm:px-6">
      <div class="flex flex-wrap gap-1 sm:gap-2">
        ${portfolio.stacks.map(stack => 
          `<span class="bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium border border-gray-200">${stack}</span>`
        ).join('')}
      </div>
    </td>
  `;
  
  tableBody.appendChild(row);
});

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    mobileMenu.classList.remove('open');
  }
});