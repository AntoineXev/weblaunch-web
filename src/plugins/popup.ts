import {meetingForm} from "./meeting-form";

export class popupClass {
    private container = document.getElementById('popup-container')
    public isOpen = false;

    constructor() {}

    toggle(form? :meetingForm) {
        if (form) {
            form.reset();
        }
        if (!this.isOpen) {
            this.container.classList.remove('hidden');
            this.isOpen = true;
            return;
        } else {
            this.container.classList.add('hidden');
            this.isOpen = false;
            return;
        }
    }

}
