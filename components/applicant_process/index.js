import Section from "../applicant/Section"
import { BiFile, BiLink } from "react-icons/bi";
import YoutubeEmbed from "../../pages/utils/YoutubeEmbed";
const ApplicantProcess = (prop) => {
    const { process } = prop
    return (
        <Section is_passed={process?.user_profile?.is_passed} step={`Step ${process.step_order}: ${process.name}`}>
            <label htmlFor="known_about_trigan">
                {process.description}
                
            </label>
            {process?.media_link && <YoutubeEmbed link={process?.media_link}/>}
            {process?.is_input_text && <div className="w-full py-5">
                    <h1 className="text-xs w-full">Input Submit</h1>
                    <textarea
                        id='known_about_trigan'
                        name='known_about_trigan'
                        placeholder="Type your answer here"
                        className="p-2 text-black dark:bg-blue-200 w-full"
                        defaultValue={process?.known_about_trigan}
                        onChange={(e) => handleData(e)}
                    />
                </div>
                }
                {process?.is_submit_file &&
                    <div className="w-full py-5">
                        <h1 className="text-xs w-full">File Submit</h1>
                        <button
                            className="btn flex-align-center text-slate-300 gap-2 bg-dark-card hover:bg-hover-color pt-5"
                            onClick={() => fileInput.current.click()}
                        >
                            <BiLink />
                            <span>Attach File</span>
                        </button>
                    </div>
                }
            
                {!process?.user_profile?.is_passed && <div className="flex flex-row gap-4 pt-10"><button type='file' className={`${!process.is_passed ? "bg-[#CCCCCC]" : "bg-[#7e22ce]" } btn btn-primary flex-shrink-0`}>Submit </button> </div>} 
        </Section>
    )
}

export default ApplicantProcess