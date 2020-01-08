import {setHeaderScroll, toggleBurgerMenu} from './plugins/header';
import {popupClass} from './plugins/popup';
import {meetingForm} from "./plugins/meeting-form";
import * as firebase from "firebase/app";
import 'firebase/analytics';


var firebaseConfig = {
    apiKey: "AIzaSyCq9ijM_Bk5BjyBI4Rl3kc6xeWHp52begM",
    projectId: "weblaunch-web",
    appId: "1:502099382203:web:1e50a38d59ae9a48e57e9e",
    measurementId: "G-WY0JTMKCCV"
};

window.popup = new popupClass();
window.meetingForm = new meetingForm();
window.toggleBurgerMenu = toggleBurgerMenu;

function main() {
    firebase.initializeApp(firebaseConfig);
    const analytics = firebase.analytics();
    window.popup.setAnalytics(analytics);
    window.meetingForm.setAnalytics(analytics);
    setHeaderScroll()
}


main();

