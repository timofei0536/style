import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { modals } from "./modules/modals";
import { config } from "./config";
import { peoples } from "./modules/peoples";
import { more } from "./modules/more";
import { reviews } from "./modules/reviews-slider";
import { best } from "./modules/best";
import { tw } from "./modules/tw";
import { rates } from "./modules/rates";
import { how } from "./modules/how";
import { popup } from "./modules/popup";

var thanks = document.querySelectorAll('.thank-link');
for (var i = 0; i < thanks.length; i++) {
	thanks[i].addEventListener('click', function() {
		location.href = '/thank.html';
	});
}


var App = () => {};

App.prototype.init = () => {

	defaults.init();
	forms.init();
	modals.init();

	config.log('app init')
	
};

export { App };