"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapLanguage(lang, reverse = false) {
    if (!reverse) {
        switch (lang) {
            case 'en':
                return 'ENGLISH';
            default:
                return 'POLISH';
        }
    }
    else {
        switch (lang) {
            case 'ENGLISH':
                return 'en';
            default:
                return 'pl';
        }
    }
}
exports.default = mapLanguage;
