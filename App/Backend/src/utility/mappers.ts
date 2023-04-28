function mapLanguage(lang: string): string {
    switch(lang) {
        case 'en': 
            return 'ENGLISH';
            break; 
        default:
            return 'POLISH';
            break;
    }
}

export default mapLanguage;