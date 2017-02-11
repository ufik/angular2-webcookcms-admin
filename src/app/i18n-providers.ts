import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import {TRANSLATION_CS} from "../locale/messages.cs";

export function getTranslationProviders(): Promise<Object[]> {
    // Get the locale id from the global
    const locale = document['locale'] as string;
    
    // return no providers if fail to get translation file for locale
    const noProviders: Object[] = [];

    // No locale or U.S. English: no translation providers
    if (!locale || locale === 'en') {
        return Promise.resolve(noProviders);
    }

    return Promise.resolve([
            { provide: TRANSLATIONS, useValue: TRANSLATION_CS },
            { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
            { provide: LOCALE_ID, useValue: locale }
        ]);
}