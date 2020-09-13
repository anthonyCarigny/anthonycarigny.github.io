import fr from './default.json';
import en from './default.en.json';
import header_fr from '../../components/header/locales/default.json';
import header_en from '../../components/header/locales/default.en.json';
import about_fr from '../../components/about/locales/default.json';
import about_en from '../../components/about/locales/default.en.json';
import resume_fr from '../../components/resume/locales/default.json';
import resume_en from '../../components/resume/locales/default.en.json';
fr['fr'].header = header_fr['fr'];
en['en'].header = header_en['en'];
fr['fr'].about = about_fr['fr'];
en['en'].about = about_en['en'];
fr['fr'].resume = resume_fr['fr'];
en['en'].resume = resume_en['en'];

export {
  fr,
  en,
};
