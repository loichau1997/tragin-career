/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { BiTag } from "react-icons/bi";
import { FaCamera, FaTimes } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const PostJob = () => {

  const [tag, setTag] = useState("react");
  const [tags, setTags] = useState([
    { id: 18179290, tag: "html" },
    { id: 18938347, tag: "css" },
    { id: 43617839, tag: "javascript" },
    { id: 32523642, tag: "react" },
    { id: 13532646, tag: "firebase" },
    { id: 36323526, tag: "graphql" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tag) {
      setTags([...tags, { id: new Date().getTime().toString(), tag }]);
    }
    setTag("");
  };

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <>
      <div className="rounded max-w-3xl w-full mx-auto">
        {/*---------------------------------------- Back to home button------------------------------------- */}
        <button className="btn bg-slate-200 hover:bg-slate-300 dark:bg-dark-card dark:hover:bg-hover-color">
          <Link href="/">
            <a className="flex-align-center gap-2">
              <FiChevronLeft />
              <span>back</span>
            </a>
          </Link>
        </button>


        <h1 className="text-2xl font-bold mt-10">Create A Job Post</h1>
        {/*---------------------------------------- Form------------------------------------- */}

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-8">
          <div className="form-input w-full sm:flex-1 relative">
            <input
              type="text"
              name="name"
              className="input"
              required
            />
            <label htmlFor="name">Job Title</label>
          </div>
          <div className="form-input w-full sm:flex-1 relative">
            <input
              type="text"
              name="cagegory"
              className="input"
              required
            />
            <label htmlFor="name">Category</label>
          </div>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="form-input w-full sm:flex-1 relative">
              <span className="absolute top-2 left-2">
                <BiTag className="opacity-50" />
              </span>
              <input
                type="text"
                className="input !pl-8"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <label htmlFor="name">Add skills</label>
            </div>

            <div className="flex-align-center gap-2 flex-wrap">
              {tags?.map(({ id, tag }) => (
                <div
                  className="flex-center-between gap-2 px-1 py-[1px] bg-slate-200 dark:bg-hover-color"
                  key={id}
                >
                  <span className="text-sm capitalize">{tag}</span>
                  <div
                    className="sm:cursor-pointer"
                    onClick={() => removeTag(id)}
                  >
                    <FaTimes className="text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>



        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-5">
          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="address" className="input" required />
            <label htmlFor="address">Office Location</label>
          </div>

          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="phone" className="input" required />
            <label htmlFor="phone">Experience Level</label>
          </div>

          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="phone" className="input" required />
            <label htmlFor="phone">Position Type</label>
          </div>
        </div>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-5">
          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="address" className="input" required />
            <label htmlFor="address">Assigned</label>
          </div>

          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="phone" className="input" required />
            <label htmlFor="phone">Expiry Date</label>
          </div>

          <div className="form-input w-full sm:flex-1 relative">
            <input type="text" name="phone" className="input" required />
            <label htmlFor="phone">Status</label>
          </div>
        </div>

        <div className="form-input w-full sm:flex-1 relative mt-5">
          <textarea
            name="name"
            className="input !h-28 pt-2"
            required
          ></textarea>
          <label htmlFor="name">Job Description</label>
        </div>
        <div className="input-check">
          <input type="checkbox" name="" id="terms" />
          <label htmlFor="terms">I agree to the terms & conditions</label>
        </div>
        <button className="btn btn-primary w-full my-4">post job</button>
      </div>
    </>
  );
};

export default PostJob;
//
