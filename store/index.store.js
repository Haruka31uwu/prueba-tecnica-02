import { defineStore } from "pinia";

export const mainStore = defineStore('mainStore', {
    state: () => {
        return {
            theme: 'dark'
        }
    },
    getters: {
        getTheme: state => state.theme
    },
    actions: {
        changeTheme(t) {
            const rootElement = document.documentElement;
            rootElement.style.setProperty('--primary', 'blue');
            if (rootElement) {
                /**
                 *  --EVI-DARK-005: #1c1c24;
                    --EVI400: #f0f0f0;
                    --EVI500:#0193C1;
                 */
                if (t === 'dark') {
                    rootElement.style.setProperty('--EVI-DARK-001', '#13131a');
                    rootElement.style.setProperty('--EVI400', '#f0f0f0');
                    rootElement.style.setProperty('--EVI-DARK-005', '#1c1c24');
                } else {
                    rootElement.style.setProperty('--EVI-DARK-001', '#f0f0f0');
                    rootElement.style.setProperty('--EVI-DARK-005', '#CFCECC');
                    rootElement.style.setProperty('--EVI400', '#13131a');
                }
                this.theme = t;
            }

        }
    },

});