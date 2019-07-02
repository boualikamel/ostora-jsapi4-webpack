define([
	"./nls/local",
], function (i18n) {

	return {
		menus: [
			//simple menu
			{
				type: 'simple',
				title: i18n.root.Example,
				icon: '',
				widget: {
					title: i18n.root.Example,
					icon: '<i class="fa fa-clone"></i>',
					path: '../app/widgets/example/example'
				}
			}
			//dropdown menu
			// {
			// 	type: 'dorpdown',
			// 	title: i18n.root.drawTitleMenu,
			// 	icon: '',
			// 	submenus: [{
			// 		title: i18n.root.drawTitle,
			// 		icon: '',
			// 		widget: {
			// 			title: i18n.root.drawTitle,
			// 			icon: '<i class="fas fa-pencil-alt"></i>',
			// 			path: '../app/widgets/draw/draw'
			// 		}
			// 	}]
			// }
		]


	}
});