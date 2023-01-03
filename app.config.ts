export default defineAppConfig({
  docus: {
    title: 'SlimToolkit',
    description: 'Optimize Your Containerized App Dev Experience. Better, Smaller, Faster and More Secure Containers Doing Less! Slim Docker Container Images by up to 30x.',
    image: '/logo.png',
    url: 'https://slimtoolkit.org',
    socials: {
      github: 'slimtoolkit/slim',
    },
    github: {
      edit: true,
      root: 'content',
      contributors: false
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: true,
      title: 'SlimToolkit',
      showLinkIcon: true
    },
    footer: {
      credits: {
        icon: 'IconSAI',
        text: 'Supported by Slim.AI',
        href: 'https://slim.ai',
      },
      iconLinks: [
      ]
    }
  }
})
