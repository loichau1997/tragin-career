import Link from "next/link";
import { useRouter } from "next/router";
import { FiChevronLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { CountryDropdown } from 'react-country-region-selector';
import YoutubeEmbed from "../utils/YoutubeEmbed";
import MiniSpinner from "../utils/MiniSpinner";
import APIService from "../api_v2";
import Swal from "sweetalert2";
import ApplicantProcess from "../../components/applicant_process";
import DatetimeConverter from "../utils/DateConverter";

const ApplyPage = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState({ nationality: '', country: '' })
  const [process, setProcess] = useState([]);
  const [info, setInfo] = useState(null);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter();
  const { id } = router.query;
  const handleData = (e) => {
    setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleCountry = (value) => {
    setInfo(prev => ({ ...prev, "country": value }))
  }

  const handleNationality = (e) => {
    setInfo(prev => ({ ...prev, "nationality": value }))
  }

  const updateProfile = async () => {
    setIsUpdatingProfile(true)
    if (info !== null && info !== undefined) {
      await APIService.applicant.UpdateApplicantProfile(info.id, info)
        .then((response) => {
          const status = response.status
          if (status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Profile Updated',
              showConfirmButton: false,
              position: 'top-end',
              toast: true,
              timer: 2000
            })
          }
        })
    }
    setIsUpdatingProfile(false)
  }

  const getData = async () => {
    setLoading(true);
    if (id !== undefined) {
      await APIService.applicant.GetApplicantByKey(id, false)
        .then((response) => response.data)
        .then((responseDetail) => {
          const { Data } = responseDetail
          if (Data?.hiring_role_process_step !== undefined) {
            setProcess(Data?.hiring_role_process_step)
          }
          const { id, created_at, updated_at, first_name, last_name, email, nationality, skill, qualification } = Data
          setInfo({ id, created_at, updated_at, first_name, last_name, email, nationality, skill, qualification });
          setCountries({ nationality: Data?.nationality, country: Data?.country })
        })
        .finally(() => setLoading(false));
    }
  }

  useEffect(() => {
    getData();
  }, [id])

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
          <div className="flex flex-row gap-4 w-full justify-between pb-5">
              <div className="flex flex-col w-1/2 gap-y-4">
                <label>Created At {DatetimeConverter(info?.created_at)}</label>
              </div>
              <div className="flex flex-col w-1/2 gap-y-4">
                <span>Updated At {DatetimeConverter(info?.created_at)}</span>
              </div>
            </div>
          <form id="applicant_form" className="w-full flex flex-col">
            <div className="flex flex-row gap-4 w-full justify-between">
              <div className="flex flex-col w-1/2 gap-y-4">
                <label htmlFor="first_name">
                  First name:
                  <input className="dark:bg-blue-200" id="first_name" type="text" defaultValue={info?.first_name} onChange={(e) => handleData(e)} required />
                </label>
                <label htmlFor="last_name">
                  Last name:
                  <input className="dark:bg-blue-200" id="last_name" type="text" defaultValue={info?.last_name} onChange={(e) => handleData(e)} required />
                </label>
                <label htmlFor="email">
                  E-mail address:
                  <input disabled={true} className="dark:bg-blue-200" id="email" type="email" defaultValue={info?.email} onChange={(e) => handleData(e)} required />
                </label>
              </div>

              <div className="flex flex-col w-1/2 gap-y-4">
                <label htmlFor="nationality">
                  <span className="text-sm">Nationality:</span>
                  <CountryDropdown
                    className="dark:bg-blue-200"
                    value={info?.country}
                    onChange={(e) => handleCountry(e)}
                  />
                </label>
                <label htmlFor="country">
                  <span className="text-sm">Country:</span>
                  <CountryDropdown
                    className="dark:bg-blue-200"
                    name='country'
                    value={info?.nationality}
                    onChange={(e) => handleNationality(e)}
                  />
                </label>
                {/* <div className="flex flex-row gap-x-2 items-center text-lg h-20">
                  <input className="dark:bg-blue-200" id="rules_comply" type="checkbox" required defaultChecked={false} />
                  <label htmlFor="rules_comply">
                    I have read, understand, and agree to the rules and privacy data
                  </label>
                </div> */}
              </div>
            </div>

            <div className="flex pt-5 flex-col gap-y-6">
              <label htmlFor="skill">
                Skill:
                <input
                  id="skill"
                  className="dark:bg-blue-200"
                  name="skill"
                  type="text"
                  value={info?.skill}
                  onChange={(e) => handleData(e)}
                />
              </label>
              <label htmlFor="qualification">
                Qualification:
                <input
                  id="qualification"
                  className="dark:bg-blue-200"
                  name="qualification"
                  type="text"
                  value={info?.qualification}
                  onChange={(e) => handleData(e)}
                />
              </label>
            </div>
            <div className="flex flex-row gap-4 pt-5">
              <button onClick={updateProfile} type='button' className="btn btn-primary flex-shrink-0 dark:hover:bg-[#7e22ce]">Update my profile</button>
              {isUpdatingProfile && <MiniSpinner />}
            </div>

            <div className="flex flex-col gap-y-8 mt-10">
              <h1 className="text-xl w-full border-b-[0.5px]">Recruitment Process</h1>
              {process.map((value) => (
                <ApplicantProcess process={value} />
              ))
              }
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyPage;
