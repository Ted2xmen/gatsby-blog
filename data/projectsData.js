const projectsData = [
  {
    title: 'Eleventree',
    stack: ['Tailwind', 'Eleventy'],
    description: `Your Bookmark List`,
    imgSrc: '/static/eleventree.png',
    href: 'https://github.com/Ted2xmen/eleventree', // repo
    preview: 'https://eleventree.netlify.app',
  },

  {
    title: 'Fixboard',
    stack: ['Tailwind', 'React', 'Firebase'],
    description: `coming soon`,
    imgSrc: '/static/fixboard.png',
    href: '', // repo
    preview: '',
  },

  {
    title: 'ShowRes',
    stack: ['Tailwind', 'React', 'Github API'],
    description: `Project to show your Github repositories`,
    imgSrc: '/static/showcase.png',
    href: 'https://github.com/Ted2xmen/showcase', // repo
    preview: 'https://showres.vercel.app/',
  },

  {
    title: 'Digital Garden',
    stack: ['Nextjs', 'StyledComponents', 'Raindrop API'],
    description: `Reading List`,
    imgSrc: '/static/digitalgarden.png',
    href: 'https://github.com/Ted2xmen/next-typescript-storybook', // repo
    preview: 'https://read101.netlify.app/',
  },

  {
    title: 'Araştırman v9',
    stack: ['Vue', 'Pinia', 'Tailwind'],
    description: `Araştırmacılar için Kaynaklar`,
    imgSrc: '/static/arastirman.png',
    href: 'https://github.com/Ted2xmen/Arastirmanv9', // repo
    preview: 'https://arastirman.netlify.app/#/',
  },

  {
    title: 'Kronika',
    stack: ['Vue', 'Firebase', 'Bootstrap'],
    description: ``,
    imgSrc: '/static/kronika.png',
    href: 'https://github.com/Ted2xmen/kronika-firebase', // repo
    preview: 'https://kronika-vue2.vercel.app/#/',
  },

  {
    title: 'Ghibli Catalog',
    stack: ['React', 'MaterialUI', 'Ghibli API', 'zustand'],
    description: `Ghibli Movie Catalog`,
    imgSrc: '/static/ghibli.png',
    href: 'https://github.com/Ted2xmen/react-zustand-materialui', // repo
    preview: 'https://quiet-sable-ff6a21.netlify.app/',
  },
  {
    title: 'Online Haçlı Kaynakları Projesi',
    stack: ['React', 'Tailwind'],
    description: ``,
    imgSrc: '/static/online-hacli.png',
    href: 'https://github.com/Ted2xmen/online-hacli-kaynaklari', // repo
    preview: 'https://online-hacli-kaynaklari.netlify.app',
  },
  {
    title: 'Kütüphaneden',
    stack: ['JS', 'Bootstrap'],
    description: ``,
    imgSrc: '/static/kutuphaneden.png',
    href: 'https://github.com/Ted2xmen/kutuphaneden',
    preview: 'https://kutuphaneden.vercel.app/',
  },
  {
    title: 'GYM RAT',
    stack: ['React', 'Tailwind'],
    description: `Exercises DB`,
    imgSrc: '/static/gym-rat.png',
    href: 'https://github.com/Ted2xmen/gym-rat',
    preview: 'https://gym-rat.vercel.app/',
  },
  {
    title: 'Budget Planner',
    stack: ['React', 'Bootstrap'],
    description: `Budget Planner`,
    imgSrc: '/static/budget.png',
    href: 'https://github.com/Ted2xmen/react-budget-planner',
    preview: 'https://ted-budget-app.netlify.app/',
  },
  {
    title: 'This Blog',
    stack: ['React', 'Next JS', 'Tailwind'],
    description: ``,
    imgSrc: '/static/this.png',
    href: 'https://www.ted2xmen.dev/',
    preview: 'https://www.ted2xmen.dev/',
  },
  {
    title: 'gomarx',
    stack: ['Go', 'Hugo', 'Bootstrap'],
    description: `Some of the Best Resources for Learning Golang `,
    imgSrc: '/static/gomarx.png',
    href: 'https://github.com/Ted2xmen/gomarx',
    preview: 'https://gomarx.netlify.app/',
  },
  {
    title: 'ConectoHub Test',
    stack: ['Vue', 'Tailwind'],
    description: ``,
    imgSrc: '/static/conectohub.png',
    href: 'https://github.com/Ted2xmen/conectohub',
    preview: 'https://scintillating-faloodeh-b86c24.netlify.app/',
  },
  {
    title: 'Covid Tracker',
    stack: ['Vue', 'Bootstrap'],
    description: `Covid 19 Tracker`,
    imgSrc: '/static/covid.png',
    href: 'https://github.com/Ted2xmen/covid-19-tracker',
    preview: 'https://track19.vercel.app/',
  },
  {
    title: 'findmentor.clone ',
    stack: ['Vue', 'Bootstrap'],
    description: `findmentor`,
    imgSrc: '/static/findmentor.png',
    href: 'https://github.com/Ted2xmen/findmentor.clone',
    preview: 'https://findmentor-clone.netlify.app/',
  },
  {
    title: 'VueAdvice ',
    stack: ['Vue', 'Tailwind'],
    description: `Daily Advice`,
    imgSrc: '/static/vueadvice.png',
    href: 'https://github.com/Ted2xmen/DailyAdvice',
    preview: 'https://vevice.netlify.app/',
  },
  {
    title: 'DergiBul',
    stack: ['HTML', 'Bootstrap'],
    description: `Sosyal Bilimler Dergi Listesi`,
    imgSrc: '/static/dergibul.png',
    href: 'https://github.com/Ted2xmen/dergibul',
    preview: 'https://dergibul.vercel.app/',
  },
  {
    title: 'Pure Notes',
    stack: ['HTML', 'JS', 'TailwindCSS'],
    description: `Evernotelike Note Taking`,
    imgSrc: '/static/pure-notes.jpg',
    href: 'https://github.com/Ted2xmen/pure-notes',
    preview: 'https://ted2xmen.github.io/pure-notes/',
  },
  {
    title: 'Random Şiirler',
    stack: ['HTML', 'JS'],
    description: ``,
    imgSrc: '/static/siirler.png',
    href: 'https://github.com/Ted2xmen/random-ozel',
    preview: 'https://ted2xmen.github.io/random-ozel/',
  },
  {
    title: 'SearchON',
    stack: ['HTML', 'JS'],
    description: ``,
    imgSrc: '/static/searchon.png',
    href: 'https://github.com/Ted2xmen/SearchON',
    preview: 'https://searchon.vercel.app/',
  },
]

export default projectsData
