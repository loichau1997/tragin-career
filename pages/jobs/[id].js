/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import JobSkillTags from "../../components/common/JobSkillTags";
import { BiBookmark, BiCircle, BiShareAlt } from "react-icons/bi";
import RelatedJobs from "../../components/singleJob/RelatedJobs";
import { useRouter } from "next/router";
import useFetch from "../api/useFetch";
import { server } from "../../config";
import Swal from "sweetalert2";
import moment from "moment";
import { FiChevronLeft } from "react-icons/fi";

const SingleJob = () => {
  const router = useRouter();
  const { id } = router.query;
  // console.log("id check", id)
  const { data: job, loading } = useFetch(`${server}/api/v1/hiring-role/get/${id}?apiKey=g436739d6734gd6734`);
  // console.log("loading test", loading)
  // console.log("only job from single job", job)
  // console.log("env test", process.env.KEY)



  // const {
  //   title,
  //   category,
  //   working_type,
  //   tag,
  //   experience_level,
  //   position_type,
  //   salary_range,
  //   experience,
  //   description,
  //   requirements_and_responsibilities,
  //   logo_url,
  // } = job;

  // const {
  //   title = "",
  //   category = "",
  //   working_type = "",
  //   tag = "",
  //   experience_level = "",
  //   position_type = "",
  //   salary_range = "",
  //   experience = "",
  //   description = "",
  //   requirements_and_responsibilities = "",
  //   logo_url = "",
  // } = job;

  const {
    title,
    category,
    working_type,
    tag,
    experience_level,
    position_type,
    salary_range,
    experience,
    description,
    requirements_and_responsibilities,
    logo_url,
  } = job || {};

  const { data: jobs } = useFetch(`${server}/api/v1/hiring-role/get?apiKey=g436739d6734gd6734`);

  // const jobs = jobsData.data

  // console.log("job test on id", jobs)

  const relatedJobs = jobs?.filter(
    (job) =>
      !id.includes(job.id) && // this will exclude the jobs that have the same id as the current job
      (job?.title === title || job?.category === category)
  );

  const alertHandalar = () => {
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Sorry you can’t apply now. Very soon you will be able to apply. For now, you can only see job posts and enjoy multi-stage filtering and view details of the job. Thank you.',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, got it!'
    })
  }


  return !loading ? (
    <>
  
  <button className="btn mb-5 bg-slate-200 hover:bg-slate-300 dark:bg-dark-card dark:hover:bg-hover-color">
          <Link href="/">
            <a className="flex-align-center gap-2">
              <FiChevronLeft />
              <span>home</span>
            </a>
          </Link>
        </button>


    <div className="grid md:grid-cols-3 gap-x-14">



      <div className="md:col-span-2 h-fit md:sticky top-0">
        <div className="card overflow-hidden">
          <div className="relative">
            <img
              src="/images/details.png"
              alt=""
              className="h-full sm:h-[200px] object-cover w-full"
            />
            {/* <img
              src={logo_url || "/images/photo-3.jpg"}
              alt=""
              className="w-16 left-10 -bottom-8 absolute rounded-xl"
            /> */}
          </div>
          <div className="pt-10 px-6 pb-6">
            <div className="flex-center-between">
              <h1 className="text-xl font-semibold">{job?.title}</h1>
              <div className="flex-align-center gap-x-2">
                <div className="icon-box card-shadow dark:shadow-none card-bordered !rounded-md">
                  <BiBookmark />
                </div>
                <div className="icon-box card-shadow dark:shadow-none card-bordered !rounded-md">
                  <BiShareAlt />
                </div>
              </div>
            </div>
            <div className="flex-center-between gap-x-2 mt-1">
              <p className="text-sm">
                {/* <span className="text-primary">{category}</span>{" "} */}
                <span className="text-primary capitalize">{job?.working_type}</span>
              </p>

              <span className="text-sm ">
                <span className="text-muted mr-4">Posted <span className="mr-1">  </span> {moment(job?.created_at).startOf('day').fromNow()}</span> 98
                Applicants
              </span>
            </div>

            {/*---------------------------------------- Skills------------------------------------- */}
            <div className="mt-8">
              <JobSkillTags tag={job?.tag} />
            </div>

            {/*---------------------------------------- About ------------------------------------ */}
            <div className="mt-5">
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:flex-center-between">
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      Experience
                    </span>
                    <h1 className="capitalize">{job?.experience}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      work level
                    </span>
                    <h1 className="capitalize">{job?.experience_level}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      employee type
                    </span>
                    <h1 className="capitalize">{job?.position_type}</h1>
                  </div>
                  <div className="w-full h-[1px] sm:h-16 sm:w-[1px] bg-slate-200 dark:bg-hover-color"></div>
                  <div className="p-2">
                    <span className="text-sm capitalize text-muted">
                      work type
                    </span>
                    <h1 className="capitalize">{job?.working_type}</h1>
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------------------- Job Overview--------------------------------------------- */}
            <div className="mt-4">
              <h1 className="text-lg font-semibold">Overview</h1>
              <p className="leading-7">{job?.description}</p>
            </div>

            {/*---------------------------------------- Job Description And Others------------------------------------- */}
            <div className="mt-4">
              <h1 className="text-lg font-semibold">
                Requirements
              </h1>
              <div className="mt-3">
                {job?.requirement?.map((res, i) => (
                  <div className="flex-align-center gap-x-2 mt-3" key={i}>
                    <BiCircle className="text-xs text-primary flex-shrink-0" />
                    <p className="text-sm">{res}</p>
                  </div>
                ))}
              </div>

              <h1 className="text-lg mt-3 font-semibold">
                Responsibilities
              </h1>
              <div className="mt-3">
                {job?.responsibility?.map((res, i) => (
                  <div className="flex-align-center gap-x-2 mt-3" key={i}>
                    <BiCircle className="text-xs text-primary flex-shrink-0" />
                    <p className="text-sm">{res}</p>
                  </div>
                ))}
              </div>




              <div className="flex justify-end mt-3">
                {/* <button
                onClick={alertHandalar}
                  className="btn btn-primary flex-shrink-0"
                >
                  apply now
                </button> */}
                <Link
                  href="/jobs/apply/[id]" as={`/jobs/apply/${job?.id}`}
                  className="btn btn-primary flex-shrink-0"
                >
                  apply now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-1 h-fit md:sticky top-0">
        <RelatedJobs jobs={relatedJobs} />
      </div>
    </div>
    </>
  ) : (
    <div className="min-h-screen flex-center-center">
      <div className="loader" />
    </div>
  );
};

export default SingleJob;
