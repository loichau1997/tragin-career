import Link from "next/link";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { CountryDropdown } from 'react-country-region-selector';
import Section from "../../components/applicant/Section";

const ApplyPage = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState({ nationality: '', country: '' })
  const [info, setInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const handleData = (e) => {
    setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const getData = async () => {
    setLoading(true);
    await fetch(`https://test1.trigan.org/api/v1/hiring-role-applicant/get/${id}?apiKey=g436739d6734gd6734`)
      .then((response) => response.json())
      .then(({ Data }) => {
        setInfo(Data);
        setCountries({ nationality: Data?.nationality, country: Data?.country })
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    setInfo(prev => ({ ...prev, country: countries.country, nationality: countries.nationality }));
  }, [countries])

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
          <form id="applicant_form" className="w-full flex flex-col">
            <div className="flex flex-row gap-4 w-full justify-between">
              <div className="flex flex-col w-1/2 gap-y-4">
                <label htmlFor="first_name">
                  First name:
                  <input id="first_name" type="text" defaultValue={info?.first_name} onChange={(e) => handleData(e)} required />
                </label>
                <label htmlFor="last_name">
                  Last name:
                  <input id="last_name" type="text" defaultValue={info?.last_name} onChange={(e) => handleData(e)} required />
                </label>
                <label htmlFor="email">
                  E-mail address:
                  <input id="email" type="email" defaultValue={info?.email} onChange={(e) => handleData(e)} required />
                </label>
              </div>

              <div className="flex flex-col w-1/2 gap-y-4">
                <label htmlFor="nationality">
                  <span className="text-sm">Nationality:</span>
                  <CountryDropdown
                    value={countries.nationality}
                    onChange={(e) => setCountries(prev => ({ ...prev, nationality: e }))}
                  />
                </label>
                <label htmlFor="country">
                  <span className="text-sm">Country:</span>
                  <CountryDropdown
                    name='country'
                    value={countries.country}
                    onChange={(e) => setCountries(prev => ({ ...prev, country: e }))}
                  />
                </label>
                <div className="flex flex-row gap-x-2 items-center text-lg h-20">
                  <input id="rules_comply" type="checkbox" required defaultChecked={false} />
                  <label htmlFor="rules_comply">
                    I have read, understand, and agree to the rules and privacy data
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-6">
              <label htmlFor="skill">
                Skill:
                <input
                  name="skill"
                  type="text"
                  value={info?.skill}
                  onChange={(e) => handleData(e)}
                />
              </label>
              <label htmlFor="qualification">
                Qualification:
                <input
                  name="qualification"
                  type="text"
                  value={info?.qualification}
                  onChange={(e) => handleData(e)}
                />
              </label>
            </div>

            <div className="flex flex-col gap-y-8 mt-10">
              <h1 className="text-xl w-full border-b-[0.5px]">Recruitment Process</h1>

              <Section step="Step 1 - Get to know Trigan">
                <label htmlFor="known_about_trigan">
                  Lorem ipsum dolor tal quale
                  <textarea
                    id='known_about_trigan'
                    name='known_about_trigan'
                    placeholder="Type your answer here"
                    className="p-2 text-black"
                    defaultValue={info?.known_about_trigan}
                    onChange={(e) => handleData(e)}
                  >
                  </textarea>
                </label>
                <div className="flex flex-row gap-4">
                  <button type='file' className="bg-slate-300 p-2 px-4 text-black w-32 text-sm">Send file</button>
                  <button type='file' className="bg-red-300 p-2 px-4 text-black w-32 text-sm">Pass button</button>
                </div>
              </Section>

              <Section step="Step 2 - Joining Reason">
                <label htmlFor="joining_reason">
                  Lorem ipsum dolor tal quale
                  <textarea
                    id='joining_reason'
                    name='joining_reason'
                    placeholder="Type your answer here"
                    className="p-2 text-black"
                    defaultValue={info?.joining_reason}
                    onChange={(e) => handleData(e)}
                  >
                  </textarea>
                </label>
                <div className="flex flex-row gap-4">
                  <button type='file' className="bg-slate-300 p-2 px-4 text-black w-32 text-sm">Send file</button>
                  <button type='file' className="bg-red-300 p-2 px-4 text-black w-32 text-sm">Pass button</button>
                </div>
              </Section>

              <Section step="Step 3 - Contribution plan">
                <label htmlFor="contribution_plan">
                  Lorem ipsum dolor tal quale
                  <textarea
                    id='contribution_plan'
                    name='contribution_plan'
                    placeholder="Type your answer here"
                    className="p-2 text-black"
                    defaultValue={info?.contribution_plan}
                    onChange={(e) => handleData(e)}
                  >
                  </textarea>
                </label>
                <div className="flex flex-row gap-4">
                  <button type='file' className="bg-slate-300 p-2 px-4 text-black w-32 text-sm">Send file</button>
                  <button type='file' className="bg-red-300 p-2 px-4 text-black w-32 text-sm">Pass button</button>
                </div>
              </Section>

              <Section step="Step 4 - Interested topic">
                <label htmlFor="interested_topic">
                  Lorem ipsum dolor tal quale
                  <textarea
                    id='interested_topic'
                    name='interested_topic'
                    placeholder="Type your answer here"
                    className="p-2 text-black"
                    defaultValue={info?.interest_topic}
                    onChange={(e) => handleData(e)}
                  >
                  </textarea>
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
