import i18n from 'i18next';
import { initReactI18next, useTranslation, UseTranslationResponse } from 'react-i18next'

import EN_TRANSLATION from '../locales/en.json'
import FR_TRANSLATION from '../locales/fr.json'

const DEFAULT_LANGUAGE = 'fr'

i18n
	.use(initReactI18next)
	.init({
		resources: {
			'fr': {
				translation: FR_TRANSLATION
			},
			en: {
				translation: EN_TRANSLATION
			},
		},
		lng: DEFAULT_LANGUAGE,
		fallbackLng: DEFAULT_LANGUAGE,
});

export const useIntl = useTranslation;
export type TranslationResponse = UseTranslationResponse<string>


export default i18n;
