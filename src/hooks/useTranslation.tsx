import { useLanguage } from '@/contexts/LanguageContext';
import { es } from '@/translations/es';
import { en } from '@/translations/en';

const translations = {
  es,
  en
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = translations[language];
  
  return { t, language };
};