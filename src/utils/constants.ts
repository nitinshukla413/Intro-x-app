export const pages = {
    'home': 'home',
    'aboutUs': 'about-us',
    'privacyPolicy': 'privacy-policy',
    'TermsAndConditions': 'terms-and-conditions',
    'contactUs': 'contact-us',
    'sitemap': 'sitemap',
    'faq': 'faq',
    'myAccount': 'my-account',
    'dasboard': 'dashboard',
    'profile': 'profile',
    'bussiness-profile': 'business-profile',
    'add-product': 'add-product',
    'leads': 'leads',
    'enquries': 'enquries',
    'coins': 'coins'
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
    [pages.dasboard]: {
        title: 'Dashboard',
        link: `/${pages.dasboard}`,
        metaData: companyName + '| Dashboard'
    },
    [pages.profile]: {
        title: 'Profile',
        link: `/${pages.profile}`,
        metaData: companyName + '| Profile'
    },
    [pages["bussiness-profile"]]: {
        title: 'Business Profile',
        link: `/${pages["bussiness-profile"]}`,
        metaData: companyName + '| Business Profile'
    },
    [pages.leads]: {
        title: 'Leads',
        link: `/${pages.leads}`,
        metaData: companyName + '| Leads'
    },
    [pages["add-product"]]: {
        title: 'Add Product',
        link: `/${pages["add-product"]}`,
        metaData: companyName + '| Add Product'
    },
    [pages.enquries]: {
        title: 'Enquries',
        link: `/${pages.enquries}`,
        metaData: companyName + '| Enquries'
    },
    [pages.coins]: {
        title: 'Coins',
        link: `/${pages.coins}`,
        metaData: companyName + '| Coins'
    },
}
export const mainMenu = [links[pages.home]]
export const selectMenu = [links[pages.dasboard], links[pages.profile], links[pages["bussiness-profile"]], links[pages["add-product"]], links[pages.leads], links[pages.enquries]]
export const quickLinks = [links[pages.myAccount], links[pages.faq], links[pages.myAccount], links[pages.faq], links[pages.myAccount]]
export const information = [links[pages.aboutUs], links[pages.privacyPolicy], links[pages.TermsAndConditions], links[pages.contactUs], links[pages.sitemap]]
export const location = 'Mumbai, Maharastra, India '
export const email1 = 'support@introapp.com'
export const email2 = 'info@introapp.com'
export const phone1 = '8888888888'
export const phone2 = '9999999999'