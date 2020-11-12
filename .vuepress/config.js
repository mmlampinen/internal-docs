

module.exports = {
	
	import VueHotjar from '/plugins/hotjar';

Vue.use(VueHotjar, { 
  id: '2075663',
  sv: '6' // optional, defaults to 6
});

	title: 'Prifina Internal',
	description: 'Resources for Working with Prifina',
	themeConfig: {
		logo: '/img/logo.svg',
		nav: [
			{ text: 'Prifina.com', link: 'https://www.prifina.com/' },
			{
				text: 'For Developers',
				items: [
					{ text: 'Developers Main', link: 'https://dev.prifina.com/' },
					{ text: 'Github', link: 'https://github.com/libertyequalitydata' },
					{ text: 'Slack', link: 'prifinadev.slack.com' }
				]
			}
		],
		
		sidebar: [
			
			{
				title: 'Prifina, a Summary',
				path: '/'
			},
			
				'/getting-started/',
				'/product-development-overview/',
				'/component-development/',
				'/data-modeling/',
				'/user-stories/',	
				'/documenting/',
				'/contribute/',
				 '/faq/',
		
		],
	    sidebarDepth: 1,
	}
}
