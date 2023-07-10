import Link from "next/link";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import { CountryDropdown } from 'react-country-region-selector';
import Section from "../../components/applicant/Section";

const ApplyPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const router = useRouter();
  const { id } = router.query;

    

  if (loading) return (<div className="min-h-screen flex-center-center">
    <div className="loader" />
  </div>);

  return (
    <>
      <button className="btn mb-5 bg-slate-200 hover:bg-slate-300 dark:bg-dark-card dark:hover:bg-hover-color">
        <Link href="/">
          <a className="flex-align-center gap-2">
            <FiChevronLeft />
            <span>home</span>
          </a>
        </Link>
      </button>

      <div className="grid pb-10">
        <div className="md:col-span-2 h-fit md:sticky top-0">          
          <div className="card overflow-hidden mb-4">
            <div className="relative">
              <img
                src="/images/details.png"
                alt=""
                className="h-full sm:h-[200px] object-cover w-full"
              />
            </div>
          </div>

          <h1 className="mb-4">Applicant ID: {id}</h1>
          <form id="applicant_form" className="w-full flex flex-col gap-y-6">
            <div className="flex flex-row gap-4 w-full justify-between">
              <div className="flex flex-col w-1/2 gap-y-4">
                <label htmlFor="app_first_name">
                  First name:
                  <input id="app_first_name" type="text" required />
                </label>
                <label htmlFor="app_last_name">
                  Last name:
                  <input id="app_last_name" type="text" required />
                </label>
                <label htmlFor="email">
                  E-mail address:
                  <input id="email" type="email" required />
                </label>
              </div>

              <div className="flex flex-col w-1/2 gap-y-4">
                <label htmlFor="country">
                  <span className="text-sm">Nationality:</span>
                  <CountryDropdown />
                </label>
                <label htmlFor="country">
                  <span className="text-sm">Country:</span>
                  <CountryDropdown />
                </label>
                <div className="flex flex-row gap-x-2 items-center text-lg h-20">
                  <input id="rules_comply" type="checkbox" required defaultChecked={ false } />
                  <label htmlFor="rules_comply">
                    I have read, understand, and agree to the rules and privacy data
                  </label>
                </div>
              </div>
    
            </div>
            <div className="flex flex-col gap-y-8">
              <h1 className="text-xl w-full border-b-[0.5px]">Recruitment Process</h1>

              <Section step="Step 1 - Get to know Trigan">
                <label htmlFor="app_step1">
                  Lorem ipsum dolor tal quale
                  <textarea id="app_step1" placeholder="Type your answer here" className="p-2 text-black"></textarea>
                </label>
                <div className="flex flex-row gap-4">
                  <button type='file' className="bg-slate-300 p-2 px-4 text-black w-32 text-sm">Send file</button>
                  <button type='file' className="bg-red-300 p-2 px-4 text-black w-32 text-sm">Pass button</button>
                </div>
              </Section>

              <Section step="Step 2 - Joining Reason">
                <label htmlFor="app_step2">
                  Lorem ipsum dolor tal quale
                  <textarea id="app_step2" placeholder="Type your answer here" className="p-2 text-black"></textarea>
                </label>
                <div className="flex flex-row gap-4">
                  <button type='file' className="bg-slate-300 p-2 px-4 text-black w-32 text-sm">Send file</button>
                  <button type='file' className="bg-red-300 p-2 px-4 text-black w-32 text-sm">Pass button</button>
                </div>
              </Section>

              <Section step="Step 3 - Contribution plan">
                <label htmlFor="app_step3">
                  Lorem ipsum dolor tal quale
                  <textarea id="app_step3" placeholder="Type your answer here" className="p-2 text-black"></textarea>
                </label>
                <div className="flex flex-row gap-4">
                  <button type='file' className="bg-slate-300 p-2 px-4 text-black w-32 text-sm">Send file</button>
                  <button type='file' className="bg-red-300 p-2 px-4 text-black w-32 text-sm">Pass button</button>
                </div>
              </Section>

            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyPage;
