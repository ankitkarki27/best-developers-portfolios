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
        "name": "Mohammad Azam",
        "link": "http://www.azamsharp.com",
        "stacks": [
            "Swift",
            "Dart",
            "HTML"
        ]
    },
    {
        "name": "Portfolio Courses",
        "link": "https://portfoliocourses.com",
        "stacks": [
            "C",
            "C++",
            "Python"
        ]
    },
    {
        "name": "Micah Halter",
        "link": "http://mehalter.com",
        "stacks": [
            "HTML", "Bootstrap", "JavaScript"
        ]
    },
    {
        "name": "Ahmet K",
        "link": "https://ahmet.studio/",
        "stacks": [
            "React",
            "Next.js",
            "TailwindCSS"
        ]
    },

    {
        "name": "Victor Eke",
        "link": "https://victoreke.com",
        "stacks": [
            "Nextjs",
            "Sanity",
            "Tailwind CSS",
            "TypeScript",
            "Umami",
            "Vercel"
        ]
    },
    {
        "name": "Kent C. Dodds",
        "link": "https://kentcdodds.com",
        "stacks": [
            "React",
            "TypeScript",
            "Remix",
            "Prisma",
            "Redis",
            "Postgres",
            "CSS"
        ]
    },
    {
        "name": "Brittany Chiang",
        "link": "https://v4.brittanychiang.com",
        "stacks": [
            "React",
            "Gatsby",
            "Styled-components"
        ]
    },
    {
        "name": "Braydon Coyer",
        "link": "https://braydoncoyer.dev",
        "stacks": [
            "React",
            "TypeScript",
            "NextJS",
            "Tailwindcss",
            "Notion API",
            "Supabase"
        ]
    },
    {
        "name": "Tania Rascia",
        "link": "https://taniarascia.com",
        "stacks": [
            "React",
            "Gatsby",
            "CSS",
            "Netlify",
            "NodeJS"
        ]
    },
    {
        "name": "Jemima Abu",
        "link": "https://jemimaabu.com",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Rekhchand Sahu",
        "link": "https://rekhchandsahu.com",
        "stacks": [
            "React",
            "Gatsby",
            "Preact",
            "GSAP"
        ]
    },
    {
        "name": "Olaolu Olawuyi",
        "link": "https://olaolu.dev",
        "stacks": [
            "VueJS",
            "JavaScript",
            "HTML",
            "styled-components",
            "Sass"
        ]
    },
    {
        "name": "Thang Huu Vu",
        "link": "https://thvu.dev",
        "stacks": [
            "React",
            "NextJS",
            "NodeJS",
            "TypeScript",
            "GraphQL",
            "Tailwindcss"
        ]
    },
    {
        "name": "George Francis",
        "link": "https://georgefrancis.dev",
        "stacks": [
            "GSAP",
            "Netlify",
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Aditya Vikram",
        "link": "https://people.umass.edu/avsingh",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Adeola Adeoti",
        "link": "https://adeolaadeoti.site",
        "stacks": [
            "TypeScript",
            "GSAP",
            "NodeJS",
            "NextJS",
            "SCSS"
        ]
    },
    {
        "name": "Dejan Markovic",
        "link": "https://dejan.works",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "Jquery"
        ]
    },
    {
        "name": "Max Böck",
        "link": "https://mxb.dev",
        "stacks": [
            "Eleventy",
            "SCSS",
            "Nunjucks"
        ]
    },
    {
        "name": "David Darnes",
        "link": "https://darn.es",
        "stacks": [
            "Netlify",
            "Jekyll",
            "ETC"
        ]
    },
    {
        "name": "Schulz Daniel",
        "link": "https://iamschulz.com",
        "stacks": [
            "Hugo",
            "Shell",
            "JavaScript"
        ]
    },
    {
        "name": "Rafael Conde",
        "link": "https://rafa.design",
        "stacks": [
            "Nunjucks",
            "JavaScript",
            "CSS"
        ]
    },
    {
        "name": "Bruno Simon",
        "link": "https://bruno-simon.com",
        "stacks": [
            "GSAP",
            "ThreeJS",
            "JavaScript",
            "ETC"
        ]
    },
    {
        "name": "Oluwadare Oluwaseyi",
        "link": "https://seyi.dev",
        "stacks": [
            "HTML",
            "SCSS",
            "JavaScript",
            "GSAP"
        ]
    },
    {
        "name": "Jason Lengstorf",
        "link": "https://jason.energy",
        "stacks": [
            "JavaScript",
            "TypeScript",
            "Nunjucks",
            "CSS"
        ]
    },
    {
        "name": "Deidre Driscoll",
        "link": "https://deidredriscoll.com",
        "stacks": [
            "HTML",
            "JavaScript",
            "CSS",
            "GSAP"
        ]
    },
    {
        "name": "Chris Porter",
        "link": "https://madebyporter.com",
        "stacks": [
            "HTML",
            "Slim",
            "Ruby",
            "SCSS",
            "Shell",
            "JavaScript",
            "CSS"
        ]
    },
    {
        "name": "Louis Hoebregts",
        "link": "https://mamboleoo.be",
        "stacks": [
            "PHP",
            "Parcel"
        ]
    },
    {
        "name": "Adrien Gervaix",
        "link": "https://adriengervaix.com",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    {
        "name": "Peter Tait",
        "link": "https://petertait.com",
        "stacks": [
            "React",
            "Webpack",
            "Radium",
            "Netlify"
        ]
    },
    {
        "name": "Rick Waalders",
        "link": "https://rickwaalders.com",
        "stacks": [
            "NextJS",
            "React",
            "NodeJS",
            "GSAP",
            "Webpack"
        ]
    },
    {
        "name": "Community Pro",
        "link": "https://cpro-portfolio-html",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Ahmed Zougari",
        "link": "https://ahmedzougari.com",
        "stacks": [
            "HTML",
            "SASS",
            "Bootstrap",
            "JavaScript",
            "Vite"
        ]
    },
    {
        "name": "Raj Savaliya",
        "link": "https://rajsavaliya.com",
        "stacks": [
            "NextJS",
            "React",
            "TypeScript",
            "Tailwind CSS"
        ]
    },
    {
        "name": "Israel Mitolu",
        "link": "https://mitolu.dev",
        "stacks": [
            "HTML",
            "SASS",
            "Javascript",
            "GSAP"
        ]
    },
    {
        "name": "Saikat Roy",
        "link": "https://saikatroy.netlify.app",
        "stacks": [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "jQuery"
        ]
    },
    {
        "name": "Anand Baraik",
        "link": "https://anandbaraik.github.io",
        "stacks": [
            "HTML",
            "CSS",
            "React.js"
        ]
    },
    {
        "name": "Nirban Chakraborty",
        "link": "https://nirban-chakraborty.netlify.app",
        "stacks": [
            "ReactJs",
            "JavaScript",
            "SASS",
            "HTML"
        ]
    },
    {
        "name": "Benaiah Alumona",
        "link": "https://benrobo.vercel.app",
        "stacks": [
            "Reactjs",
            "TailwindCss",
            "Next.js",
            "Emailjs",
            "BaayMax"
        ]
    },
    {
        "name": "Md Nayeem Hossain",
        "link": "https://nayeemdev.github.io/",
        "stacks": [
            "HTML",
            "CSS",
            "Bootstrap",
            "Javascript",
            "jQuery"
        ]
    },
    {
        "name": "Sachin Chaurasiya",
        "link": "https://sachinchaurasiya.dev",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "ReactJs",
            "Material UI"
        ]
    },
    {
        "name": "Anish De",
        "link": "https://anishde.dev",
        "stacks": [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Content Layer"
        ]
    },
    {
        "name": "Shourya Shikhar Ghosh",
        "link": "https://shourya.vercel.app",
        "stacks": [
            "Flutter"
        ]
    },
    {
        "name": "Omar Sherif Ali ~OSA",
        "link": "https://osa-portfolio.vercel.app",
        "stacks": [
            "ReactJs",
            "JavaScript",
            "CSS",
            "HTML"
        ]
    },
    {
        "name": "Robby Leonardi",
        "link": "https://rleonardi.com/",
        "stacks": [
            "NextJS",
            "React",
            "NodeJS",
            "GSAP",
            "Webpack"
        ]
    },
    {
        "name": "Serdar Gökhan",
        "link": "https://serdargokhan.dev",
        "stacks": [
            "NextJS",
            "TypeScript",
            "TailwindCSS"
        ]
    },
    {
        "name": "Jeferson Brito",
        "link": "https://jefersonsilva.me/",
        "stacks": [
            "Vue 3.0",
            "Vite"
        ]
    },
    {
        "name": "Trịnh Minh Nhật",
        "link": "https://trinhminhnhat.com",
        "stacks": [
            "React",
            "Tailwindcss"
        ]
    },
    {
        "name": "Yunus Ertürk",
        "link": "https://yunuserturk.com",
        "stacks": [
            "HTML",
            "CSS",
            "React",
            "NextJS"
        ]
    },
    {
        "name": "Phong Nguyen",
        "link": "https://napthedev.com",
        "stacks": [
            "Nextjs",
            "Tailwind",
            "Framer-motion",
            "Locomotive-scroll"
        ]
    },
    {
        "name": "Ismael López",
        "link": "https://ismaellopez.dev",
        "stacks": [
            "Svelte",
            "JavaScript",
            "CSS",
            "HTML",
            "Netlify CMS"
        ]
    },
    {
        "name": "Micah Lindley",
        "link": "https://micahlindley.com",
        "stacks": [
            "Vue 3",
            "Vite"
        ]
    },
    {
        "name": "Tri Dang",
        "link": "https://tri-dang.github.io",
        "stacks": [
            "Ruby",
            "Jekyll",
            "Markdown"
        ]
    },
    {
        "name": "Reza Ghasemzadeh",
        "link": "https://rezaghz.com",
        "stacks": [
            "HTML",
            "CSS",
            "Bootstrap",
            "Javascript",
            "Blade"
        ]
    },
    {
        "name": "Ariful Alam",
        "link": "https://arifszn.github.io/gitprofile",
        "stacks": [
            "React",
            "Vite",
            "Tailwind CSS"
        ]
    },
    {
        "name": "Dale Larroder",
        "link": "https://dalelarroder.com",
        "stacks": [
            "NextJS",
            "Preact",
            "TypeScript",
            "Tailwind",
            "MDX"
        ]
    },
    {
        "name": "Williams Samuel",
        "link": "https://williamssam.netlify.app",
        "stacks": [
            "HTML",
            "CSS",
            "Javascript"
        ]
    },
    {
        "name": "Guillaume Gouessan",
        "link": "https://guillaumegouessan.com",
        "stacks": [
            "GSAP",
            "ThreeJS",
            "JavaScript"
        ]
    },
    {
        "name": "Patrick Heng",
        "link": "https://patrickheng.com",
        "stacks": [
            "Nuxt.js",
            "GSAP",
            "ThreeJS"
        ]
    },
    {
        "name": "Andrew Baisden",
        "link": "https://andrewbaisden.com",
        "stacks": [
            "HTML",
            "CSS",
            "TypeScript",
            "ReactJS"
        ]
    },
    {
        "name": "Aziz Rahman",
        "link": "https://azizstark.com",
        "stacks": [
            "React",
            "Gatsby",
            "Styled-Components",
            "SCSS",
            "AnimeJS"
        ]
    },
    {
        "name": "Leonel Ngoya",
        "link": "https://lndev.me",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Jimmy Soussan",
        "link": "https://cozy-codeur.fr",
        "stacks": [
            "React",
            "Gatsby",
            "Chakra UI",
            "Framer Motion"
        ]
    },
    {
        "name": "Segun Ajibola",
        "link": "https://segunajibola.com",
        "stacks": [
            "HTML",
            "CSS",
            "TailwindCSS",
            "React",
            "SwiperJS"
        ]
    },
    {
        "name": "Hisami Kurita",
        "link": "https://hsmkrt1996.com",
        "stacks": [
            "Vue.js",
            "Nuxt.js",
            "SCSS",
            "ThreeJS",
            "GSAP",
            "ASSCROLL",
            "imagesLoaded"
        ]
    },
    {
        "name": "Dennis Snellenberg",
        "link": "https://dennissnellenberg.com",
        "stacks": [
            "GSAP. JQuery",
            "PHP",
            "VueJS"
        ]
    },
    {
        "name": "Isaac Fayemi",
        "link": "https://fayemi.design",
        "stacks": [
            "Vanilla JS",
            "pug",
            "Prismic CMS",
            "SCSS",
            "ThreeJS",
            "GSAP"
        ]
    },
    {
        "name": "Bhavin Virani",
        "link": "https://bhavinn.xyz",
        "stacks": [
            "HTML",
            "CSS",
            "JS",
            "React.js",
            "Github API"
        ]
    },
    {
        "name": "Patrick Scott",
        "link": "https://pscott.io",
        "stacks": [
            "React.js",
            "Heroku and Github Pages"
        ]
    },
    {
        "name": "Lazar Nikolov",
        "link": "https://nikolovlazar.com",
        "stacks": [
            "Next.js",
            "Chakra UI",
            "MDX",
            "Prisma",
            "PlanetScale"
        ]
    },
    {
        "name": "Reuben Rapose",
        "link": "https://reubence.com",
        "stacks": [
            "HTML",
            "TailwindCSS",
            "React",
            "Javascript",
            "Next.JS",
            "MDX",
            "Mailchimp Newsletter",
            "Gisqus Comments",
            "etc."
        ]
    },
    {
        "name": "M. Shahanwaz",
        "link": "https://mshahanwaz.me",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Nodemailer"
        ]
    },
    {
        "name": "Lee Robinson",
        "link": "https://leerob.io",
        "stacks": [
            "Next.js",
            "PlanetScale",
            "Prisma",
            "Vercel",
            "Sanity",
            "Tailwind CSS"
        ]
    },
    {
        "name": "Parth Desai",
        "link": "https://musing.vercel.app",
        "stacks": [
            "TailwindCSS",
            "React",
            "Javascript",
            "Next.JS",
            "MDX",
            "Mailchimp Newsletter",
            "Gisqus Comments"
        ]
    },
    {
        "name": "Victor Ikechukwu",
        "link": "https://iamvictor.tech",
        "stacks": [
            "Next.js",
            "Tailwind CSS",
            "React Rough Notation",
            "Vivus",
            "Netlify"
        ]
    },
    {
        "name": "Usman Sabuwala",
        "link": "https://usman-s.me",
        "stacks": [
            "NextJS",
            "Chakra UI",
            "Framer Motion"
        ]
    },
    {
        "name": "Zacky Aduoli",
        "link": "https://lookupzach.netlify.app",
        "stacks": [
            "ReactJS",
            "Material UI",
            "SCSS",
            "Styled Components"
        ]
    },
    {
        "name": "Payton Pierce",
        "link": "https://paytonpierce.dev",
        "stacks": [
            "ReactJS",
            "Material UI"
        ]
    },
    {
        "name": "Jacob Valdez",
        "link": "https://jacobfv.github.io",
        "stacks": [
            "HTML",
            "Jekyll"
        ]
    },
    {
        "name": "Walter Teng",
        "link": "https://walterteng.com",
        "stacks": [
            "React",
            "Typescript",
            "Gatsby",
            "Netlify"
        ]
    },
    {
        "name": "Jahidul Islam",
        "link": "https://XahidEx.com",
        "stacks": [
            "Typescript",
            "NextJs",
            "TailwindCSS",
            "Prisma",
            "Contentlayer",
            "React"
        ]
    },
    {
        "name": "Greg Sithole",
        "link": "https://gregsithole.com",
        "stacks": [
            "HTML",
            "CSS",
            "React.js"
        ]
    },
    {
        "name": "Rohit Saini",
        "link": "https://rohit-saini",
        "stacks": [
            "ReactJs",
            "CSS",
            "GSAP",
            "Framer Motion"
        ]
    },
    {
        "name": "Oscar Barajas",
        "link": "https://gndx.io",
        "stacks": [
            "HTML",
            "TailwindCSS"
        ]
    },
    {
        "name": "Phillip Cabrera",
        "link": "https://Portfolio",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "Webpack",
            "ReactJs"
        ]
    },
    {
        "name": "Nahuel Carrizo",
        "link": "https://Portfolio",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Webpack",
            "Github Pages"
        ]
    },
    {
        "name": "Alfaizkhan Pathan",
        "link": "https://alfaizkhan.github.io/",
        "stacks": [
            "Flutter",
            "Dart",
            "Github Pages"
        ]
    },
    {
        "name": "Jatin Kamboj",
        "link": "https://jatinkamboj.me",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "GreenSock"
        ]
    },
    {
        "name": "Leonid Meleshin",
        "link": "https://leon0399.ru",
        "stacks": [
            "ReactJS",
            "Tailwind",
            "CSS",
            "Vercel"
        ]
    },
    {
        "name": "Brayden",
        "link": "https://braydentw.io",
        "stacks": [
            "React",
            "NextJS",
            "TailwindCSS"
        ]
    },
    {
        "name": "Ben",
        "link": "https://nuro.dev",
        "stacks": [
            "React",
            "NextJS",
            "TailwindCSS"
        ]
    },
    {
        "name": "Matthias Kretschmann",
        "link": "https://matthiaskretschmann.com",
        "stacks": [
            "React",
            "Gatsby"
        ]
    },
    {
        "name": "Hamish Williams",
        "link": "https://hamishw.com",
        "stacks": [
            "React",
            "ThreeJS",
            "NextJS"
        ]
    },
    {
        "name": "Çağlar Turalı",
        "link": "https://turali.js.org",
        "stacks": [
            "React",
            "TypeScript"
        ]
    },
    {
        "name": "Pyae Sone",
        "link": "https://pyaesonepsn.github.io",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Efren Martinez",
        "link": "https://efrencodes.com",
        "stacks": [
            "NextJS",
            "TypeScript",
            "TailwindCSS"
        ]
    },
    {
        "name": "Eliaz LR",
        "link": "https://portfolio2.eliaz-lr.dev",
        "stacks": [
            "Vue 3",
            "Vite",
            "TailwindCSS"
        ]
    },
    {
        "name": "Hikmet C. Kufteoglu",
        "link": "https://hicaku.com",
        "stacks": [
            "Vue 3",
            "Pinia",
            "TypeScript"
        ]
    },
    {
        "name": "Ara Oladipo",
        "link": "https://araoladipo.tech",
        "stacks": [
            "HTML",
            "CSS",
            "Javascript",
            "Vue.js",
            "Spline3D"
        ]
    },
    {
        "name": "Anthony Fu",
        "link": "https://antfu.me",
        "stacks": [
            "VueJS",
            "Markdown",
            "TypeScript",
            "CSS",
            "HTML"
        ]
    },
    {
        "name": "Timothy Lin",
        "link": "https://timlrx.com",
        "stacks": [
            "NextJS",
            "MDX",
            "TailwindCSS",
            "JavaScript",
            "SASS"
        ]
    },
    {
        "name": "Ngô Phú Thịnh",
        "link": "https://thinhcorner.com",
        "stacks": [
            "NextJS",
            "TailwindCSS",
            "TypeScript",
            "CSS",
            "React"
        ]
    },
    {
        "name": "Josiah B. Etuk",
        "link": "https://jobenetuk.dev",
        "stacks": [
            "Vanilla JS",
            "Node JS",
            "Prismic CMS",
            "SASS",
            "GSAP"
        ]
    },
    {
        "name": "Stef Ivanov",
        "link": "https://stefivanov.com",
        "stacks": [
            "WordPress",
            "Yoast SEO",
            "MailChimp",
            "PWA",
            "Google Analytics",
            "Sumo"
        ]
    },
    {
        "name": "Erika Senft Miller",
        "link": "https://erikasenftmiller.com",
        "stacks": [
            "Contentful",
            "GSAP",
            "LazySizes",
            "PWA",
            "Google Analytics"
        ]
    },
    {
        "name": "Ruben Kuipers",
        "link": "https://rubenkuipers.design",
        "stacks": [
            "Vue.js",
            "Nuxt.js",
            "Tailwind CSS",
            "scrollreveal",
            "Google Tag Manager",
            "Google Analytics"
        ]
    },
    {
        "name": "Maggie Appleton",
        "link": "https://maggieappleton.com",
        "stacks": [
            "React",
            "Next.js",
            "MDX",
            "Algolia Search",
            "Reach UI",
            "Tippy.js",
            "Framer Motion",
            "styled-components",
            "Lodash"
        ]
    },
    {
        "name": "Moe Dayraki",
        "link": "https://moe.dayrakiarts.com",
        "stacks": [
            "Vue 3",
            "Vite",
            "Cypress",
            "Tailwindcss",
            "Typescript",
            "Pinia",
            "Primevue",
            "magic.css",
            "VueUse"
        ]
    },
    {
        "name": "Truong Phan",
        "link": "https://techika.com",
        "stacks": [
            "Vue 3",
            "Vite",
            "VuePress",
            "Tailwindcss",
            "Tailwind",
            "Lighthouse"
        ]
    },
    {
        "name": "Wasim Baig",
        "link": "https://wasimbaig.com",
        "stacks": [
            "Next JS",
            "Tailwind CSS",
            "Framer-Motion"
        ]
    },
    {
        "name": "Mike Bifulco",
        "link": "https://mikebifulco.com",
        "stacks": [
            "NextJS",
            "React",
            "SCSS",
            "MDX",
            "Vercel"
        ]
    },
    {
        "name": "Shodipo Ayomide",
        "link": "https://shodipoayomide.com",
        "stacks": [
            "Gatsby",
            "React",
            "SCSS",
            "Bootstrap",
            "Jquery"
        ]
    },
    {
        "name": "Damian Watracz",
        "link": "https://watracz.com",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "Swiper"
        ]
    },
    {
        "name": "Franklin Ohaegbulam",
        "link": "https://frankiefab.com",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Samuel Akinosho",
        "link": "https://samuelakinosho.com",
        "stacks": [
            "Webflow",
            "Jquery"
        ]
    },
    {
        "name": "Rutik Wankhade",
        "link": "https://rutikwankhade.dev",
        "stacks": [
            "NextJs",
            "React",
            "NodeJS",
            "TailwindCSS"
        ]
    },
    {
        "name": "Adenekan Wonderful",
        "link": "https://codewonders.dev",
        "stacks": [
            "React",
            "NextJS",
            "Styled-components"
        ]
    },
    {
        "name": "Olamide Sholanke",
        "link": "https://olamide.dev",
        "stacks": [
            "Vue",
            "NuxtJS"
        ]
    },
    {
        "name": "Daniel Ezekiel",
        "link": "https://danielezekiel.me",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Julia Johnson",
        "link": "https://juliacodes.com",
        "stacks": [
            "React",
            "Styled-components"
        ]
    },
    {
        "name": "Rida F'kih",
        "link": "https://rida.dev",
        "stacks": [
            "React",
            "NextJS"
        ]
    },
    {
        "name": "Anand Baraik",
        "link": "https://anandbaraik-folio.netlify.app",
        "stacks": [
            "HTML",
            "CSS"
        ]
    },
    {
        "name": "Abhishek Jha",
        "link": "https://abhishekjha.me",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            
        ]
    },
   
    {
        "name": "Greg Ives",
        "link": "https://gregives.co.uk",
        "stacks": [
            "Vue",
            "NuxtJS",
            "SASS",
            "Netlify"
        ]
    },
    {
        "name": "Collins Enebeli",
        "link": "https://kadet.dev",
        "stacks": [
            "React",
            "Gatsby"
        ]
    },
    {
        "name": "Cole_Solomon",
        "link": "https://colesolomon.me",
        "stacks": [
            "HTML",
            "CSS",
            "SASS",
            "JavaScript",
            "GSAP",
            "W3js",
            "PHP"
        ]
    },
    {
        "name": "Adewale Adeyemi",
        "link": "https://adex.onrender.com",
        "stacks": [
            "Gridsome",
            "GraphQL",
            "Tailwind"
        ]
    },
    {
        "name": "Harsh Singh",
        "link": "https://harshsingh.xyz",
        "stacks": [
            "NextJS",
            "TailwindCSS",
            "TypeScript",
            "Prisma"
        ]
    },
    {
        "name": "Wallace Nascimento",
        "link": "https://portfolio-srnascimento40.vercel.app",
        "stacks": [
            "NextJS",
            "ReactJS",
            "TypeScript",
            "Styled-Components"
        ]
    },
    {
        "name": "Idris Olubisi",
        "link": "https://idrisolubisi.com",
        "stacks": [
            "ReactJs",
            "GatsbyJs",
            "TypedJs",
            "Styled Component"
        ]
    },
    {
        "name": "Aycan Öğüt",
        "link": "https://aycan.dev",
        "stacks": [
            "React",
            "Next",
            "TypeScript",
            "Mantine"
        ]
    },
    {
        "name": "Manish Kumar",
        "link": "https://manishk.dev",
        "stacks": [
            "React",
            "Next",
            "TypeScript",
            "ParticleJS",
            "Firebase",
            "Vercel"
        ]
    },
    {
        "name": "Andrea Toffanello",
        "link": "https://andreatoffanello.com",
        "stacks": [
            "VueJS",
            "ThreeJS",
            "GSAP",
            "Blender"
        ]
    },
    {
        "name": "Chandraprakash Darji",
        "link": "https://chandraprakash.vercel.app",
        "stacks": [
            "Nextjs",
            "Typescript",
            "Tailwindcss",
            "Vercel"
        ]
    },
    {
        "name": "Khaled Mohamed",
        "link": "https://John Doe",
        "stacks": [
            "HTML5",
            "SCSS",
            "Bootstrap5",
            "JavaScript",
            "SwipperJS",
            "Netlify"
        ]
    },
    {
        "name": "Michael Kolesidis",
        "link": "https://michaelkolesidis.com",
        "stacks": [
            "TypeScript",
            "p5.js",
            "Sass",
            "Vite"
        ]
    },
    {
        "name": "Piyush Goyani",
        "link": "https://piyushgoyani.thesourcepedia.org",
        "stacks": [
            "VueJS",
            "Gridsome",
            "TailwindCSS",
            "Firebase"
        ]
    },
    {
        "name": "Vanessa Santana",
        "link": "https://nessajs.com.br",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript and PHP"
        ]
    },
    {
        "name": "Mahmoud Elkariouny",
        "link": "https://clear-sleet.surge.sh",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Antonio Ayola",
        "link": "https://antonioayola.netlify.app",
        "stacks": [
            "React",
            "HTML",
            "CSS",
            "Modules CSS",
            "JavaScript",
            "PWA"
        ]
    },
    {
        "name": "Ajo Alex",
        "link": "https://devpenzil.dev",
        "stacks": [
            "NextJS",
            "Tailwind",
            "GraphCMS"
        ]
    },
    {
        "name": "Erys Mozo",
        "link": "https://erysmozo.vercel.app",
        "stacks": [
            "React",
            "SASS",
            "Vite",
            "AOS"
        ]
    },
    {
        "name": "Peace Jinadu-Paul",
        "link": "https://pjpportfolio.netlify.app",
        "stacks": [
            "React",
            "HTML",
            "CSS",
            "Javascript",
            "Framer Motion",
            "Netlify"
        ]
    },
    {
        "name": "Hari Prasad",
        "link": "https://hariprasd.me",
        "stacks": [
            "React",
            "Tailwind CSS"
        ]
    },
    {
        "name": "Danilo Batson",
        "link": "https://batson-portfolio.vercel.app/",
        "stacks": [
            "TypeScript",
            "JavaScript",
            "Python",
            "React",
            "React Native",
            "Vue",
            "Express",
            "Node",
            "MongoDB",
            "Next JS"
        ]
    },
    {
        "name": "Soumyadeep Das Bhowmick",
        "link": "https://soumyadeeposd.github.io",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Byunggeun Cho",
        "link": "https://bbangjo.kr",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "Threejs",
            "Blender"
        ]
    },
    {
        "name": "James Warner",
        "link": "https://jmswrnr.com",
        "stacks": [
            "NextJS",
            "Sanity",
            "CSS",
            "Preact",
            "NodeJS",
            "ThreeJS"
        ]
    },
    {
        "name": "Maxime Heckel",
        "link": "https://maximeheckel.com",
        "stacks": [
            "NextJS",
            "TypeScript",
            "Stiches/CSS",
            "MDX"
        ]
    },
    {
        "name": "Twan Mulder",
        "link": "https://twanmulder.com",
        "stacks": [
            "React",
            "TailwindCSS",
            "Stripe",
            "Netlify"
        ]
    },
    {
        "name": "Rishi Mohan",
        "link": "https://rishimohan.me",
        "stacks": [
            "Next.js",
            "TailwindCSS",
            "Framer Motion"
        ]
    },
    {
        "name": "Nikhil Rajput",
        "link": "https://nixrajput.nixlab.co.in",
        "stacks": [
            "Next.js",
            "SCSS",
            "Node.js"
        ]
    },
    {
        "name": "Raphaël Chelly",
        "link": "https://raphaelchelly.com/",
        "stacks": [
            "Next.js",
            "TailwindCSS",
            "Vercel"
        ]
    },
    {
        "name": "Damian Demasi",
        "link": "https://damiandemasi.com",
        "stacks": [
            "ReactJS",
            "TailwindCSS",
            "DaisyUI"
        ]
    },
    {
        "name": "Ifedili Onyegbu",
        "link": "https://ifedili.com",
        "stacks": [
            "Angular",
            "TypeScript",
            "SASS"
        ]
    },
    {
        "name": "Daniel Cranney",
        "link": "https://danielcranney.com/",
        "stacks": [
            "NextJS",
            "TailwindCSS",
            "Vercel"
        ]
    },
    
    {
        "name": "Adham Dannaway",
        "link": "https://adhamdannaway.com",
        "stacks": [
            "Wordpress",
            "PHP",
            "jQuery",
            "MySQL"
        ]
    },
    {
        "name": "Khaled Mohamed",
        "link": "https://James Oliver",
        "stacks": [
            "HTML5",
            "CSS3",
            "SCSS",
            "Bootstrap5",
            "TypeScript",
            "SwipperJS",
            "Fontello",
            "PurgeCSS",
            "Netlify"
        ]
    },
    {
        "name": "Glayson Visgueira",
        "link": "https://glaysonvisgueira.vercel.app",
        "stacks": [
            "NextJS",
            "Styled-components",
            "NodeJS",
            "Vercel",
            "Animate.css",
            "Lottiefiles"
        ]
    },
    {
        "name": "Chai Phonbopit",
        "link": "https://devahoy.com",
        "stacks": [
            "NextJS",
            "Preact",
            "Tailwind CSS",
            "NodeJS"
        ]
    },
    {
        "name": "Aravind Balla",
        "link": "https://aravindballa.com",
        "stacks": [
            "NextJS",
            "TypeScript",
            "Tailwind CSS",
            "Vercel"
        ]
    },
    {
        "name": "Khaled Mohamed",
        "link": "https://Thomas David",
        "stacks": [
            "React JS",
            "Tailwind CSS",
            "AOS",
            "SwipperJS",
            "React Scroll",
            "React Icons",
            "React Laze Load Image",
            "PostCSS",
            "Netlify"
        ]
    },
    {
        "name": "Tanishka Yadav",
        "link": "https://tanishka-yadav.netlify.app",
        "stacks": [
            "ReactJS",
            "Javascript",
            "SASS",
            "Framer Motion"
        ]
    },
    {
        "name": "David Obodo",
        "link": "https://davidobodo.com",
        "stacks": [
            "NextJS",
            "Typescript",
            "SASS",
            "GSAP",
            "Jest",
            "Sendgrid",
            "Google Analytics"
        ]
    },
    {
        "name": "Manuel David Gomez",
        "link": "https://manueldavgomez.com",
        "stacks": [
            "ReactJs",
            "Javascript",
            "Css",
            "Bootstrap",
            "Bootstrap Icons",
            "React-Animate-On-Scroll",
            "React-Scroll",
            "Vite",
            "TsParticles"
        ]
    },
    {
        "name": "Olasunkanmi Balogun",
        "link": "https://kanmibalogun.vercel.app",
        "stacks": [
            "NextJS",
            "JavaScript",
            "Tailwind",
            "Framer-motion",
            "vanilla CSS"
        ]
    },
    {
        "name": "Priyankar Pal",
        "link": "https://itspp.vercel.app",
        "stacks": [
            "HTML & SCSS"
        ]
    },
    {
        "name": "Marieflor Bawanan",
        "link": "https://marieflor.dev",
        "stacks": [
            "NextJS",
            "TypeScript",
            "TailwindCSS & GSAP"
        ]
    },
    {
        "name": "Delba Oliviera",
        "link": "https://delba.dev",
        "stacks": [
            "Next.js",
            "MDX",
            "Tailwind",
            "Prisma",
            "Typescript"
        ]
    },
    {
        "name": "Vivek Patel",
        "link": "https://vivek9patel.github.io",
        "stacks": [
            "NextJS",
            "Tailwind CSS",
            "GitHub Pages"
        ]
    },
    {
        "name": "Sarah Dayan",
        "link": "https://sarahdayan.dev",
        "stacks": [
            "NextJS",
            "Tailwind CSS",
            "NodeJS",
            "Vercel"
        ]
    },
    {
        "name": "Theodorus Clarence",
        "link": "https://theodorusclarence.com",
        "stacks": [
            "NextJS",
            "TypeScript",
            "Tailwind CSS",
            "MDX Bundler",
            "Prisma"
        ]
    },
    {
        "name": "Arafat Islam",
        "link": "https://portfolio-khaki-iota-89.vercel.app",
        "stacks": [
            "NextJS",
            "TypeScript",
            "GraphQL",
            "Tailwind CSS"
        ]
    },
    {
        "name": "Siddharth Verma",
        "link": "https://iamdev.netlify.app/home.html",
        "stacks": [
            "Tailwind",
            "Javascript",
            "React",
            "html/CSS"
        ]
    },
    {
        "name": "Abo Ghanbari",
        "link": "https://aboghanbari.com",
        "stacks": [
            "Gatsby",
            "Emotion",
            "GSAP",
            "Preact"
        ]
    },
    {
        "name": "PATRICK T.LO",
        "link": "https://pleaseleaveon.com",
        "stacks": [
            "HTML5",
            "CSS",
            "JavaScript",
            "jQuery"
        ]
    },
    {
        "name": "Travis Fischer",
        "link": "https://transitivebullsh.it",
        "stacks": [
            "NextJS",
            "TypeScript",
            "Notion API",
            "Vercel"
        ]
    },
    {
        "name": "Lynn Fisher",
        "link": "https://lynnandtonic.com",
        "stacks": [
            "HTML5",
            "CSS",
            "JavaScript",
            "SVG",
            "Netlify",
            "GoatCounter",
            "HSTS",
            "Open Graph"
        ]
    },
    {
        "name": "Danny Garcia",
        "link": "https://danny-garcia.com",
        "stacks": [
            "HTML5",
            "CSS",
            "JavaScript",
            "TypeScript",
            "GLSL",
            "Netlify"
        ]
    },
    {
        "name": "Robin Payot",
        "link": "https://robinpayot.com",
        "stacks": [
            "HTML5",
            "CSS",
            "JavaScript",
            "GSAP",
            "Howler.js",
            "Hammer.js",
            "three.js",
            "WebGL",
            "PWA",
            "Open Graph",
            "Apache"
        ]
    },
    {
        "name": "Jesse Zhou",
        "link": "https://jesse-zhou.com",
        "stacks": [
            "HTML5",
            "CSS",
            "JavaScript",
            "GLSL",
            "Howler.js",
            "GSAP",
            "Three.js",
            "Node.js",
            "Vercel"
        ]
    },
    {
        "name": "Rauno Freiberg",
        "link": "https://rauno.me",
        "stacks": [
            "NextJS",
            "NodeJS",
            "Stiches",
            "Vercel"
        ]
    },
    {
        "name": "Anurag Hazra",
        "link": "https://anuraghazra.dev",
        "stacks": [
            "React",
            "Gatsby",
            "Styled-components",
            "Cypress",
            "Jest",
            "TravisCI"
        ]
    },
    {
        "name": "Hardik Gohil",
        "link": "https://hardikgohil.space",
        "stacks": [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Firebase"
        ]
    },
    {
        "name": "Jonathan Toon",
        "link": "https://jonathontoon.com",
        "stacks": [
            "Gulp",
            "EsBuild",
            "postCSS",
            "Nunjuck"
        ]
    },
    {
        "name": "Rafael Derolez",
        "link": "https://derolez.dev",
        "stacks": [
            "NextJS",
            "Sanity",
            "ChakraUI",
            "Emotion"
        ]
    },
    {
        "name": "Chris Williams",
        "link": "https://astro-theme-cactus.netlify.app",
        "stacks": [
            "Astro",
            "Typescript",
            "Tailwind CSS",
            "MDX"
        ]
    },
    {
        "name": "Ben Holmes",
        "link": "https://bholmes.dev",
        "stacks": [
            "Gatsby",
            "Javascript",
            "SCSS",
            "Pug"
        ]
    },
    {
        "name": "Yasio",
        "link": "https://yasio.dev",
        "stacks": [
            "Nuxt.js",
            "Node.js",
        ]
    },

    {
        "name": "Gavin Nelson",
        "link": "https://nelson.co",
        "stacks": [
            "NextJS",
            "Tailwind CSS",
            "Vercel",
            "MDX"
        ]
    },
    {
        "name": "Yinka Adedire",
        "link": "https://yinka.codes",
        "stacks": [
            "Gatsby",
            "ReactJS",
            "Styled-Components"
        ]
    },
    
    {
        "name": "Samuel Imolorhe",
        "link": "https://xkoji.dev",
        "stacks": [
            "Gatsby",
            "GSAP",
            "JavaScript",
            "Netlify"
        ]
    },
    {
        "name": "Abu Said",
        "link": "https://abusaid.netlify.app",
        "stacks": [
            "Next.js",
            "Tailwind CSS",
            "Email.JS"
        ]
    },
    {
        "name": "Quiet Node",
        "link": "https://quiet-node.dev",
        "stacks": [
            "TypeScript",
            "ReactJS",
            "ViteJS",
            "TailwindCSS",
            "Motion Framer"
        ]
    },
    {
        "name": "Daniel Wisky",
        "link": "https://danielwisky.com.br",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "JJ Kasper",
        "link": "https://jjsweb.site",
        "stacks": [
            "NextJS",
            "Vercel",
            "CSS"
        ]
    },
    {
        "name": "Cassidy Williams",
        "link": "https://cassidoo.co",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Jahir Fiquitiva",
        "link": "https://jahir.dev",
        "stacks": [
            "Next.js",
            "Tailwind CSS",
            "MDX",
            "contentlayer",
            "PlanetScale",
            "Vercel",
            "TypeScript"
        ]
    },
    {
        "name": "Stefan Topalovic",
        "link": "https://stefantopalovicdev.vercel.app",
        "stacks": [
            "ReactJS",
            "SCSS",
            "Vercel"
        ]
    },

    {
        "name": "Victor Williams",
        "link": "https://victorwilliams.me",
        "stacks": [
            "React",
            "Next.js",
            "Framer Motion",
        ]
    },
    {
        "name": "Modupe Akanni",
        "link": "https://modupe-akanni.vercel.app",
        "stacks": [
            "React",
            "Next.js",
            "Styled Components",
            "Vercel"
        ]
    },
    {
        "name": "Anuoluwapo Abolarin",
        "link": "https://anuoluwapo.xyz",
        "stacks": [
            "VueJS",
            "SCSS",
            "GSAP",
            "Vite"
        ]
    },
    {
        "name": "Andrew Branch",
        "link": "https://blog.andrewbran.ch",
        "stacks": [
            "Gatsby",
            "TypeScript",
            "Emotion",
            "Netlify"
        ]
    },
    {
        "name": "Max Böck",
        "link": "https://mxb.dev",
        "stacks": [
            "Eleventy",
            "SCSS",
            "Nunjucks"
        ]
    },
    {
        "name": "Shahriar Shafin",
        "link": "https://shahriarshafin.github.io",
        "stacks": [
            "React",
            "Next.js",
            "Tailwind CSS"
        ]
    },
    {
        "name": "Mukul Chugh",
        "link": "https://mukulchugh.com",
        "stacks": [
            "React",
            "Next.js",
            "Styled Components",
            "Netlify"
        ]
    },
    {
        "name": "Vijay Verma",
        "link": "https://vjy.me",
        "stacks": [
            "NextJS",
            "Styled Components",
            "Vercel"
        ]
    },
    {
        "name": "Jhey Tompkins",
        "link": "https://jhey.dev",
        "stacks": [
            "Sanity",
            "Astro",
            "Tailwind CSS",
            "Netlify"
        ]
    },
    {
        "name": "David Heckhoff",
        "link": "https://david-hckh.com/",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "ThreeJS",
            "GSAP",
            "PWA",
            "Howler.js"
        ]
    },
    {
        "name": "Ashish",
        "link": "https://asrvd.me",
        "stacks": [
            "Next.js",
            "tRPC",
            "Tailwind CSS",
            "TypeScript",
            "NextAuth.js",
            "Prisma"
        ]
    },
    {
        "name": "Robb Owen",
        "link": "https://robbowen.digital",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "Netlify"
        ]
    },
    {
        "name": "Josh Comeau",
        "link": "https://joshwcomeau.com",
        "stacks": [
            "NextJS",
            "Styled Components",
            "MDX",
            "MongoDB",
            "Framer Motion",
            "React Spring",
            "Vercel"
        ]
    },
    {
        "name": "Charles Bruyerre",
        "link": "https://itssharl.ee",
        "stacks": [
            "NextJS",
            "ThreeJS",
            "PWA",
            "Vercel"
        ]
    },
    {
        "name": "Patrick David",
        "link": "https://bepatrickdavid.com",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "Plesk",
            "ThreeJS",
            "GSAP",
            "PWA"
        ]
    },
    {
        "name": "Seán Halpin",
        "link": "https://seanhalpin.xyz",
        "stacks": [
            "Svelte",
            "SvelteKit",
            "Vite",
            "PWA",
            "Node.js"
        ]
    },
    {
        "name": "Cyd Stumpel",
        "link": "https://cydstumpel.nl",
        "stacks": [
            "WordPress",
            "PHP",
            "ThreeJS",
            "MySQL",
            "GSAP",
            "Lenis"
        ]
    },
    {
        "name": "Tamal Sen",
        "link": "https://tamalsen.dev",
        "stacks": [
            "WordPress",
            "Elementor",
            "PHP",
            "MySQL",
            "Anime.js"
        ]
    },
    {
        "name": "Aristide Benoist",
        "link": "https://aristidebenoist.com",
        "stacks": [
            "PHP",
            "JavaScript",
            "WebGL",
            "AWS"
        ]
    },
    
    {
        "name": "Robin Mastromarino",
        "link": "https://robinmastromarino.com",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript",
            "WebGL",
            "GSAP",
            "Google Analytics"
        ]
    },
    {
        "name": "Lanre Adelowo",
        "link": "https://lanre.wtf",
        "stacks": [
            "NextJS",
            "CSS Modules",
            "GSAP",
            "Vercel",
            "Hugo"
        ]
    },
    {
        "name": "Prince Muhammad",
        "link": "https://princemuhammad.pro",
        "stacks": [
            "JavaScript",
            "React.js",
            "Next.js",
            "TailwindCSS"
        ]
    },
    {
        "name": "Victor Adeniji",
        "link": "https://codevickk.com",
        "stacks": [
            "Nuxt.js",
            "Vue.js",
            "GSAP",
            "Netlify",
            "Lenis"
        ]
    },
    {
        "name": "Kaung Myat Kyaw",
        "link": "https://barry121.com",
        "stacks": [
            "ReactJS",
            "ThreeJS",
            "TailwindCSS"
        ]
    },
    {
        "name": "Eliaz LR",
        "link": "https://eliaz-lr.dev",
        "stacks": [
            "Astro",
            "TailwindCSS",
            "Vue",
            "DaisyUI"
        ]
    },
    {
        "name": "Danny Johnson",
        "link": "https://mrdannyjohnson.co.uk",
        "stacks": [
            "Astro",
            "Vue",
            "Sanity",
            "Tailwind CSS"
        ]
    },
    {
        "name": "Wahid Ali",
        "link": "https://www.wahidali.dev",
        "stacks": [
            "Svelte",
            "Tailwind CSS",
            "TypeScript",
            "Vercel"
        ]
    },
    {
        "name": "Deepanshu Mehra",
        "link": "https://deeshu2002.github.io/folio",
        "stacks": [
            "HTML",
            "CSS",
            "TypeScript",
            "Vite",
            "PWA"
        ]
    },
    {
        "name": "Brian Lovin",
        "link": "https://brianlovin.com",
        "stacks": [
            "NextJS",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "Planetscale"
        ]
    },
    {
        "name": "Pritish Samal",
        "link": "https://pritishsamal.com",
        "stacks": [
            "Next.js",
            "TypeScript",
            "Emotion",
            "Chakra UI"
        ]
    },
    {
        "name": "Sandeep Kumar",
        "link": "https://eternalfrustation.github.io",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Mike Liu",
        "link": "https://mikeliuu.com",
        "stacks": [
            "NextJS",
            "TypeScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "Vercel"
        ]
    },
    {
        "name": "Bryan Smith",
        "link": "https://multikitty.onrender.com",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Goodness Urama",
        "link": "https://goodie.work",
        "stacks": [
            "Pug",
            "SCSS",
            "Javascript ThreeJS",
            "GSAP",
            "Vercel"
        ]
    },
    {
        "name": "Zai Santillan",
        "link": "https://plskz-me.vercel.app",
        "stacks": [
            "NextJS",
            "TypeScript",
            "Tailwind CSS",
            "DaisyUI"
        ]
    },
    {
        "name": "Ashutosh Hathidara",
        "link": "https://ashutoshhathidara.com",
        "stacks": [
            "HTML5",
            "CSS3",
            "React",
            "NextJS"
        ]
    },
    {
        "name": "Syed Moshin",
        "link": "https://opensource-portfolio.netlify.app",
        "stacks": [
            "HTML5",
            "CSS3",
            "JavaScript"
        ]
    },
    {
        "name": "David Angulo",
        "link": "https://davidangulo.xyz",
        "stacks": [
            "HTML",
            "Jekyl",
            "Ruby",
            "Bootstrap"
        ]
    },
    {
        "name": "George Christeas",
        "link": "https://chr-ge.com",
        "stacks": [
            "Next.js",
            "Typescript",
            "ChakraUI",
            "Vercel"
        ]
    },
    {
        "name": "Julien Thême",
        "link": "https://julien-theme.dev",
        "stacks": [
            "Angular",
            "TailwindCSS",
            "ThreeJs"
        ]
    },
    {
        "name": "Shubh Porwal",
        "link": "https://shubhporwal.me",
        "stacks": [
            "NextJS",
            "ReactJS",
            "Tailwind CSS",
            "GSAP"
        ]
    },
    {
        "name": "Ross Moody",
        "link": "https://rossmoody.com",
        "stacks": [
            "Next.js",
            "Chakra UI",
            "TypeScript",
            "MDX",
            "Netlify"
        ]
    },
    {
        "name": "Rémy Beumier",
        "link": "https://remybeumier.be",
        "stacks": [
            "Next.js",
            "Sass",
            "MDX",
            "AOS"
        ]
    },
    {
        "name": "Anirban Das",
        "link": "https://anirbandas.in",
        "stacks": [
            "Qwik",
            "React",
            "Tailwind CSS"
        ]
    },
    {
        "name": "Rafael Santana",
        "link": "https://rafaelsantana.dev",
        "stacks": [
            "Next.js",
            "Material UI",
            "TypeScript"
        ]
    },
    {
        "name": "Apoorv Maurya",
        "link": "https://apoorv.onrender.com",
        "stacks": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "name": "Sumonta Saha Mridul",
        "link": "https://sumonta056.github.io",
        "stacks": [
            "HTML5",
            "CSS3",
            "JavaScript"
        ]
    },
    {
        "name": "Daniel Coyula",
        "link": "https://portfolio.dctech.dev",
        "stacks": [
            "Flutter"
        ]
    },
    {
        "name": "Shaan Alam",
        "link": "https://shaanalam.vercel.app",
        "stacks": [
            "NextJS",
            "Tailwind",
            "TypeScript & Hygraph"
        ]
    },
    {
        "name": "Gregory Koberger",
        "link": "https://gkoberger.com",
        "stacks": [
            "VueJS",
            "GSAP",
            "NodeJS",
            "Express"
        ]
    },
    {
        "name": "Monica Powell",
        "link": "https://aboutmonica.com",
        "stacks": [
            "Gatsby",
            "Emotion",
            "Netlify"
        ]
    },
    {
        "name": "Ismoilbek Ilxomov",
        "link": "https://ismail.uz",
        "stacks": [
            "NextJS",
            "TailwindCSS",
            "TypeScript",
            "Vercel"
        ]
    },
    {
        "name": "Yu Tian",
        "link": "https://midori-portfolio.vercel.app/",
        "stacks": [
            "TypeScript",
            "JavaScript",
            "MDX"
        ]
    },
    {
        "name": "Jerzy Pawlowski",
        "link": "https://algoquant.github.io/",
        "stacks": [
            "HTML",
            "C++",
            "Python"
        ]
    },
    {
        "name": "Alex Cabal",
        "link": "https://alexcabal.com",
        "stacks": [
            "JavaScript",
            "Python",
            "HTML"
        ]
    },
    {
        "name": "Sang Nguyen",
        "link": "https://sangplus.com",
        "stacks": [
            "PHP",
            "Blade"
        ]
    },
    {
        "name": "KHALED MOHAMED FATHALLAH",
        "link": "https://thekingstar.github.io/self-driving-portfolio/",
        "stacks": [
            "Python",
            "JavaScript"
        ]
    },
    {
        "name": "Johannes",
        "link": "https://profy.dev",
        "stacks": [
            "TypeScript",
            "JavaScript"
        ]
    },
    {
        "name": "Avinash Anish",
        "link": "https://avinash.thecubestar.com",
        "stacks": [
            "TypeScript",
            "Python"
        ]
    },
    {
        "name": "Thomas Parslow",
        "link": "http://tomparslow.co.uk",
        "stacks": [
            "Python",
            "Objective-C",
            "JavaScript"
        ]
    },
    {
        "name": "Regan Green",
        "link": "https://ckdev.org",
        "stacks": [
            "C",
            "C++",
            "HTML"
        ]
    },
    {
        "name": "Eric Dub\u00e9",
        "link": "https://ericdube.com",
        "stacks": [
            "Go",
            "JavaScript",
            "PHP"
        ]
    },
    {
        "name": "Jamie Snape",
        "link": "https://www.jamiesnape.io/",
        "stacks": [
            "C++",
            "C#",
            "Java"
        ]
    },
    {
        "name": "Diego Zamboni",
        "link": "http://zzamboni.org/",
        "stacks": [
            "Elvish",
            "Emacs Lisp",
            "HTML"
        ]
    },
    {
        "name": "Fu-En Wang",
        "link": "https://fuenwang.phd/",
        "stacks": [
            "Python"
        ]
    },
    {
        "name": "CodeDead",
        "link": "https://codedead.com",
        "stacks": [
            "C#",
            "Java",
            "JavaScript"
        ]
    },
    {
        "name": "Zack Weinberg",
        "link": "https://www.owlfolio.org/",
        "stacks": [
            "Python",
            "C",
            "C++"
        ]
    },
    {
        "name": "mid-kid",
        "link": "https://mid-kid.root.sx/git/explore/repos",
        "stacks": [
            "C",
            "C++",
            "Roff"
        ]
    },
    {
        "name": "Marc Hanheide",
        "link": "http://www.hanheide.net",
        "stacks": [
            "Python"
        ]
    },

    {
        "name": "Miles Alan",
        "link": "http://milesalan.com",
        "stacks": [
            "C",
            "CSS",
            "Ruby"
        ]
    },
    {
        "name": "Nabin Khadka",
        "link": "https://nabinkhadka.com.np/",
        "stacks": [
            "Python",
            "HTML",
            "Java"
        ]
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
    <td class="py-3 sm:py-4 px-4 sm:px-6 font-normal text-sm sm:text-base">${portfolio.name}</td>
    <td class="py-3 sm:py-4 px-4 sm:px-6">
      <a href="${portfolio.link}" target="_blank" class="text-gray-700 hover:text-black hover:underline transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
        <i class="fas fa-external-link-alt text-xs"></i>
        <span class="hidden sm:inline">${portfolio.link.replace('https://', '')}</span>
        <span class="sm:hidden">Visit</span>
      </a>
    </td>
  <td class="py-3 sm:py-4 px-4 sm:px-6">
  <div class="flex flex-wrap gap-1 sm:gap-2">
    ${portfolio.stacks
            .map(stack => `
        <span class="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">
          ${stack}
        </span>
      `)
            .join('')}
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