import {setHeaderScroll, toggleBurgerMenu} from './plugins/header';
import {popupClass} from './plugins/popup';
import {meetingForm} from "./plugins/meeting-form";

window.popup = new popupClass();
window.meetingForm = new meetingForm();
window.toggleBurgerMenu = toggleBurgerMenu;
function main() {
    setHeaderScroll()
}


main();

