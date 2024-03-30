import translationsEN from '../locales/en/translations.json';
import translationsES from '../locales/es/translations.json';
import translationsPTBR from '../locales/pt-BR/translations.json';

export function loadTranslations(locale) {
    switch (locale) {
        case 'en':
            return translationsEN;
        case 'es':
            return translationsES;
        case 'pt-BR':
            return translationsPTBR;
        default:
            // Default to English translations if locale is not found
            return translationsEN;
    }
}