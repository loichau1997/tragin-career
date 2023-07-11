/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { BiFile, BiLink } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import useFetch from "../../api/useFetch";
import { server } from "../../../config";
import moment from "moment";

const Appy = () => {


    const router = useRouter();
    const { id } = router.query;
    console.log("id check from apply ", id)

    const { data: job, loading } = useFetch(`${server}/api/v1/hiring-role/get/${id}?apiKey=g436739d6734gd6734`);
    console.log("loading test from apply", loading)
      console.log("only job from single job from apply", job?.working_type)



  const fileInput = useRef(null);
  const [file, setFile] = useState("");

  const alertHandalar = ()=>{
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

  return (
    <>
      <div className="rounded max-w-3xl w-full mx-auto">
        {/*---------------------------------------- Back to home button------------------------------------- */}
        <button className="btn bg-slate-200 hover:bg-slate-300 dark:bg-dark-card dark:hover:bg-hover-color">
          <Link href="/">
            <a className="flex-align-center gap-2">
              <FiChevronLeft />
              <span>home</span>
            </a>
          </Link>
        </button>

        <div className="relative mt-5">
          <img
            src="/images/job.jpg"
            alt=""
            className="h-[200px] object-cover w-full rounded-tl-xl rounded-tr-xl"
          />
  
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-semibold">{job?.title}</h1>
          <p className="text-sm">
            <span className="mr-4 capitalize">{job?.working_type}</span>
            {/* <span className="mr-4">California, USA</span> */}
            {/* <span>3 days ago</span> */}
            <span>{moment(job?.created_at).startOf('day').fromNow()}</span>
          </p>
        </div>
        <div className="py-4 mt-3 border-y dark:border-hover-color">
          <h1 className="font-bold capitalize">submit your application</h1>
        </div>
        <div className="py-4 border-b dark:border-hover-color">
          <div className="flex-align-center gap-5">
            <div>
              <p>LinkedIn Profile</p>
              <button className="btn bg-[#1275B1] hover:bg-[#0f6397] text-white">
                <a href="" className="flex-align-center gap-2">
                  <FaLinkedin />
                  <span>Apply with LinkedIn</span>
                </a>
              </button>
            </div>

            {/*---------------------------------------- File upload------------------------------------- */}
            <div>
              <input
                type="file"
                hidden
                ref={fileInput}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <p>Resume / CV*</p>
              <button
                className="btn flex-align-center text-slate-300 gap-2 bg-dark-card hover:bg-hover-color"
                onClick={() => fileInput.current.click()}
              >
                <BiLink />
                <span>Attach Resume / CV</span>
              </button>
            </div>
          </div>
          {file && (
            <div className="flex-align-center gap-2 mt-3 text-primary">
              <BiFile />{" "}
              <p>
                {file.name.length > 20
                  ? file.name.split(".")[0].slice(0, 20) +
                    "..." +
                    file.name.split(".")[1]
                  : file.name}
              </p>
            </div>
          )}
        </div>

        {/*---------------------------------------- Form------------------------------------- */}
        <form className="mt-8">
          <div className="flex-align-center flex-col sm:flex-row gap-4">
            <div className="form-input w-full sm:flex-1 relative">
              <input
                type="text"
                name="name"
                className="input"
                required
              />
              <label htmlFor="name">First Name</label>
            </div>
            <div className="form-input w-full sm:flex-1 relative">
              <input
                type="text"
                name="name"
                className="input"
                required
              />
              <label htmlFor="name">Last Name</label>
            </div>
          </div>
          <div className="flex-align-center flex-col sm:flex-row gap-4 mt-5">
            <div className="form-input w-full sm:flex-1 relative">
              <input type="text" name="email" className="input" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-input w-full sm:flex-1 relative">
              <input type="text" name="Country" className="input" required />
              <label htmlFor="email">Country</label>
            </div>
            {/* <div className="form-input w-full sm:flex-1 relative">
              <select className="input" required>
                <option value="uganda">UK</option>
                <option value="uganda">USA</option>
                <option value="uganda">Vietnam</option>
                <option value="uganda">Bangladesh</option>
                <option value="uganda">Pakistan</option>
                <option value="uganda">India</option>
              </select>
              <label htmlFor="name">Country</label>
            </div> */}
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <input
              type="text"
              name="skills"
              className="input"
             
              
              required
            />
            <label htmlFor="skill">Skills</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <input
              type="text"
              name="qualification"
              className="input"
             
              
              required
            />
            <label htmlFor="qualification">Qualification</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <textarea
              name="abouttrigan"
              className="input !h-20 pt-2"
              required
            ></textarea>
            <label htmlFor="about">About Trigan</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <textarea
              name="joiningreson"
              className="input !h-20 pt-2"
              required
            ></textarea>
            <label htmlFor="joining">Joining Reason</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <textarea
              name="contributionplan"
              className="input !h-20 pt-2"
              required
            ></textarea>
            <label htmlFor="contributionplan">Contribution Plan</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <textarea
              name="interestedtropic"
              className="input !h-20 pt-2"
              required
            ></textarea>
            <label htmlFor="intrestedtropic">Interested Tropic</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative mt-5">
            <textarea
              name="timespend"
              className="input !h-20 pt-2"
              required
            ></textarea>
            <label htmlFor="timespend">Time Spend</label>
          </div>
          <div className="input-check">
            <input type="checkbox" name="" id="terms" />
            <label htmlFor="terms">I agree to the terms & conditions</label>
          </div>
          <button onClick={alertHandalar} className="btn btn-primary w-full my-4 dark:hover:bg-[#7e22ce]">
            submit application
          </button>
        </form>
      </div>
    </>
  );
};

export default Appy;
