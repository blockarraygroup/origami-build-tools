'use strict';

module.exports = (name) => {
	return `{
	"description": "component description",
	"keywords": [],
	"origamiType": "module",
	"origamiCategory": "components",
	"origamiVersion": 1,
	"support": "https://github.com/Financial-Times/${name.original}/issues",
	"supportContact": {
		"email": "YOUR-TEAM@ft.com",
		"slack": "financialtimes/YOUR-SLACK-CHANNEL"
	},
	"supportStatus": "experimental",
	"browserFeatures": {},
	"ci": {
		"circle": "https://circleci.com/api/v1/project/Financial-Times/${name.original}"
	},
	"demosDefaults": {
		"sass": "demos/src/demo.scss",
		"js": "demos/src/demo.js",
		"documentClasses": "",
		"dependencies": ""
	},
	"demos": [
		{
			"title": "A Useful Demo",
			"name": "demo",
			"template": "demos/src/demo.mustache",
			"description": "Description of the demo"
		},
		{
			"title": "Pa11y",
			"name": "pa11y",
			"template": "demos/src/pa11y.mustache",
			"description": "Accessibility test will be run against this demo",
			"hidden": true
		}
	]
}`;
};
