import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import { FaDiscord, FaFacebookSquare, FaInstagram, FaLinkedin, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'

const Footer = () => {
    return <>
        <footer className="bg-white dark:bg-gray-900">
            <div className="flex flex-wrap ml-10 pt-5">
                <a href="https://trigan.org" className="flex items-center">
                    <img src={"/logo.svg"} className="h-28 max-w-lg" alt="Trigan Logo" />
                </a>
            </div>
            <div className="flex flex-row w-full">
                <div className="flex flex-row pl-5 py-10">
                    <div className="px-8">
                        <a href="https://trigan.org/privacy-policy" className="text-white">
                            Privacy
                        </a>
                    </div>
                    <div className="px-8">
                        <a href="https://trigan.org/terms-conditions" className="text-white">
                            Terms
                        </a>
                    </div>
                    <div className="px-8">
                        <a href="https://trigan.org/faq" className="text-white">
                            FAQ
                        </a>
                    </div>
                    <div className="px-8">
                        <a href="https://trigan.org/blog" className="text-white">
                            Blog
                        </a>
                    </div>
                    <div className="px-8">
                        <a href="https://trigan.org" className="text-white">
                            Contac Us
                        </a>

                    </div>
                </div>
                <div className="flex flex-row space-x-6 pl-20 py-10 ml-50 ">
                    <a href="https://twitter.com/TriganDAO"> <FaTwitter href="https://twitter.com/TriganDAO" className="text-white" /> </a>
                    <a href="https://www.facebook.com/groups/trigan"> <FaFacebookSquare href="https://www.facebook.com/groups/trigan" className="text-white" /> </a>
                    <a href="https://www.instagram.com/trigandao" > <FaInstagram href="https://www.instagram.com/trigandao" className="text-white" /> </a>
                    <a href="https://discord.io/trigandao"> <FaDiscord href="https://discord.io/trigandao" className="text-white" /> </a>
                    <a href="https://www.linkedin.com/company/80976873"> <FaLinkedin href="https://www.linkedin.com/company/80976873" className="text-white" /> </a>
                    <a href="https://www.tiktok.com/@trigandao"> <FaTiktok href="https://www.tiktok.com/@trigandao" className="text-white" /> </a>
                    <a href="https://t.me/triganofficial"> <FaTelegram href="https://t.me/triganofficial" className="text-white" /> </a>
                    <a href="https://medium.com/@trigan" > <BsMedium href="https://medium.com/@trigan" className="text-white" /> </a>
                </div>

            </div>
            <div className="flex flex-row pl-10 pb-5">
                Copyright @ 2023 Trigan LTD - Company Number SC717595, Registered in Scotland.
            </div>
        </footer>
    </>
}

export default Footer