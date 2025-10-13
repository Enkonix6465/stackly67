import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from './theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' }
];

export function LanguageSelector({ variant = 'default' }) {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { theme } = useTheme();

  const currentLanguageData = languages.find(lang => lang.code === currentLanguage) || languages[0];
  
  // Different styles for different variants
  const getButtonStyles = () => {
    if (variant === 'login') {
      return `inline-flex items-center gap-2 transition-colors px-3 py-2 rounded-md ${
        theme === 'dark' 
          ? 'text-white hover:text-red-300 hover:bg-white/10' 
          : 'text-gray-700 hover:text-red-600 hover:bg-gray-200'
      }`;
    }
    return "inline-flex items-center gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={getButtonStyles()}>
          <Globe className="h-5 w-5" />
          {variant !== 'login' && variant !== 'icon-only' && (
            <>
              <span className="text-sm">{currentLanguageData.flag}</span>
              <span className="text-sm">{t('common.language')}</span>
            </>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`flex items-center gap-3 ${
              currentLanguage === language.code 
                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' 
                : ''
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="flex-1">{language.name}</span>
            {currentLanguage === language.code && (
              <span className="text-indigo-600 dark:text-indigo-400">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
