import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
// import Cookies from 'js-cookie'
import { CountryLanguageCode } from './CountryLanguageCode'
import { LanguageSelector } from './LanguageSelector'

const CountrySelector = () => {
  const [isOpen, setOpen] = useState(false)
  const isFlagDisabled = process.env.NEXT_PUBLIC_FLAG_AND_COOKIE_DISABLE == 'true' ? true : false;
  const [flagCode, setFlagCode] = useState(
    'GB'
  )
  const [searchedFlag, setSearchedFlag] = useState('')

  const languageArray = [
    {
      id: 1, cntry: 'United Kingdom', lang: 'GB', img: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'
    },
    {
      id: 2, cntry: 'Spain', lang: 'ES', img: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg'
    },
    {
      id: 3, cntry: 'France', lang: 'FR', img: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg'
    },
    {
      id: 4, cntry: 'Germany', lang: 'DE', img: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg'
    },
    {
      id: 5, cntry: 'Italy', lang: 'IT', img: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg'
    },
    {
      id: 6, cntry: 'Japan', lang: 'JP', img: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg'
    },
    {
      id: 7, cntry: 'United States', lang: 'US', img: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
    }
  ]

  const googleWidgetTranslater = (lang) => {
    // Cookies.remove('googtrans', { domain: 'trigan.org' });
    // Cookies.remove('googtrans', { domain: '.trigan.org' });
    // Cookies.set('googtrans', `/en/${lang}`)
    window.location.reload()
  };

  const setLanguage = (countryCode) => {
    setFlagCode(countryCode)
    localStorage.setItem('countryCode', countryCode)
    localStorage.setItem(
        'content-language',
        (CountryLanguageCode)[countryCode].languages[0]
    )
    localStorage.setItem('langCode', (CountryLanguageCode)[countryCode].languages[0].toUpperCase())
    googleWidgetTranslater((CountryLanguageCode)[countryCode].languages[0])
  }

  const filteredLanguageArray = languageArray.filter(arrFilterd => arrFilterd.cntry.toLowerCase().includes(searchedFlag.toLowerCase()));

  return (
      <>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button disabled={isFlagDisabled} className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <img
                  className="h-5 w-5"
                  alt={''}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${flagCode}.svg`}
              />
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
                      placeholder="Search country..."
                      value={searchedFlag}
                      onChange={(e) => setSearchedFlag(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-1 py-1">
                {filteredLanguageArray.map((ele) => (
                    <Menu.Item key={ele.id}>
                      {({ active }) => (
                          <button
                              className={`flex w-full items-center rounded-lg px-2 py-2 text-gray-800 ${active && 'bg-gray-200'}`}
                              onClick={() => setLanguage(ele.lang)}
                          >
                            <img
                                className="mr-2 h-5 w-5"
                                alt={''}
                                src={ele.img}
                            />
                            {ele.cntry}
                          </button>
                      )}
                    </Menu.Item>
                ))}
                {filteredLanguageArray.length === 0 && (
                    <p className="px-2 py-2 text-gray-500">No matching countries found.</p>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* <LanguageSelector flagCode={flagCode}></LanguageSelector> */}
      </>
  )
}

export default CountrySelector