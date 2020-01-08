import {meetingForm} from "./meeting-form";

export class popupClass {
    private container = document.getElementById('popup-container')
    public isOpen = false;
    private analytics : any;

    constructor() {
        document.onkeypress = this.onEscPress;
    }

    toggle(form? :meetingForm) {
        if (form) {
            form.reset();
        }
        if (!this.isOpen) {
            this.container.classList.remove('hidden');
            this.isOpen = true;
            this.analytics.logEvent('open_popup');
            return;
        } else {
            this.container.classList.add('hidden');
            this.isOpen = false;
            this.analytics.logEvent('close_popup');
            return;
        }
    }
    onEscPress(evt: KeyboardEvent) {
        if (evt.key === "Escape" || evt.key === "Esc") {
            if (this.isOpen) {
                this.toggle()
            }
        }
    }

    setAnalytics(analytics: any) {
        this.analytics = analytics;
    }
}
