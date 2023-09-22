import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";
 
 

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job=>job.id ===idInt)
    
    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast.success('🦄 you have applied successfully!', {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    return (
        <div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">details coming here soon</h2>
                    <h2>Job Details:{job.job_title} </h2>
                    <p>{ job.company_name}</p>
                    </div>
                <div className="border  ">
                    <h2>side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    <ToastContainer />
                    </div>
            </div>
        </div>
    );
};

 

export default JobDetails;