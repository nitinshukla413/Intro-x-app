export const pages = {
    'home': 'home',
    'aboutUs': 'about-us',
    'privacyPolicy': 'privacy-policy',
    'TermsAndConditions': 'terms-and-conditions',
    'contactUs': 'contact-us',
    'sitemap': 'sitemap',
    'faq': 'faq',
    'myAccount': 'my-account',
}
export const companyName = 'Introapp'
export const links = {
    [pages.home]: {
        title: 'Home',
        link: `/`,
        metaData: companyName,
    },
    [pages.aboutUs]: {
        title: 'About us',
        link: `/${pages.aboutUs}`,
        metaData: companyName + '| About US'
    },
    [pages.privacyPolicy]: {
        title: 'Privacy Policy',
        link: `/${pages.privacyPolicy}`,
        metaData: companyName + '| Privacy policy'
    },
    [pages.TermsAndConditions]: {
        title: 'Terms & Conditions',
        link: `/${pages.TermsAndConditions}`,
        metaData: companyName + '| Terms and conditions'
    },
    [pages.contactUs]: {
        title: 'Contact us',
        link: `/${pages.contactUs}`,
        metaData: companyName + '| Contact us'
    },
    [pages.faq]: {
        title: 'Faq',
        link: `/${pages.faq}`,
        metaData: companyName + '| Faq'
    },
    [pages.myAccount]: {
        title: 'My Account',
        link: `/${pages.myAccount}`,
        metaData: companyName + '| My Account'
    },


}
export const quickLinks = [links[pages.myAccount], links[pages.faq], links[pages.myAccount], links[pages.faq], links[pages.myAccount]]
export const information = [links[pages.aboutUs], links[pages.privacyPolicy], links[pages.TermsAndConditions], links[pages.contactUs], links[pages.sitemap]]
export const location = 'Mumbai, Maharastra, India '
export const email1 = 'support@introapp.com'
export const email2 = 'info@introapp.com'
export const phone1 = '8888888888'
export const phone2 = '9999999999'