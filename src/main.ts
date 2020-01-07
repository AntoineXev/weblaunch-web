import {setHeaderScroll} from './plugins/header';
import {popupClass} from './plugins/popup';
import {meetingForm} from "./plugins/meeting-form";

window.popup = new popupClass();
window.meetingForm = new meetingForm();

function main() {
    setHeaderScroll()
}


main();

