import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { CountryLanguageCode } from './CountryLanguageCode'
// import Cookies from 'js-cookie';
import {ChevronDownIcon} from "@heroicons/react/20/solid";

const LanguageMapping = {
    en: 'English',
    fr: 'French',
    de: 'German',
    es: 'Spanish',
    it: 'Italian',
    ja: 'Japanese',
    ko: 'Korean',
    zh: 'Chinese',
    pt: 'Portuguese',
    ru: 'Russian',
    eu: 'Basque',
    ca: 'Catalan',
}
const LanguageSelector = (flagCode) => {
    const isFlagDisabled = process.env.NEXT_PUBLIC_FLAG_AND_COOKIE_DISABLE === 'true';

    const [langCode, setLangCode] = useState(localStorage.getItem('langCode') || 'EN');
    const [searchedLanguage, setSearchedLanguage] = useState('');

    const googleWidgetTranslater = (lang) => {
        // Cookies.remove('googtrans', { domain: 'trigan.org' });
        // Cookies.remove('googtrans', { domain: '.trigan.org' });
        // Cookies.set('googtrans', `/en/${lang}`);
        window.location.reload();
    };

    const setLanguage = (code) => {
        localStorage.setItem('langCode', code.toUpperCase())
        console.log(code.toUpperCase())
        setLangCode(code.toUpperCase())
        googleWidgetTranslater(code);
    };

    const langArray = CountryLanguageCode[flagCode.flagCode].languages;
    const filteredLanguageArray = langArray.filter(arrFiltered =>
        arrFiltered.toLowerCase().includes(searchedLanguage.toLowerCase())
    );

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button disabled={isFlagDisabled} className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-base font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {langCode}
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items key={0} className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="flex items-center">
                            <div className="flex space-x-1">
                                <input
                                    id="search_input"
                                    className="block w-full px-4 py-2 text-dark bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 shadow-none"
                                    placeholder="Search Language..."
                                    value={searchedLanguage}
                                    onChange={(e) => setSearchedLanguage(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="px-1 py-1">
                            {filteredLanguageArray.map((ele) => (
                                <Menu.Item key={ele}>
                                    {({ active }) => (
                                        <button
                                            className={`flex w-full items-center rounded-lg px-2 py-2 text-gray-800 ${active ? 'bg-gray-200' : ''}`}
                                            onClick={() => setLanguage(ele)}
                                        >
                                            {LanguageMapping[ele]}
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}
                            {filteredLanguageArray.length === 0 && (
                                <p className="px-2 py-2 text-gray-500">No matching language found.</p>
                            )}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default LanguageSelector;