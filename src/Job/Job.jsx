import PropTypes from "prop-types";
import { MdLocationOn } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const {
      id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact mt-8 py-2 bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-4 py-2 border rounded font-bold text-blue-500 border-blue-500">
            {remote_or_onsite}
          </button>
          <button className="px-4 py-2 border rounded font-bold text-blue-500 border-blue-500 ml-4">
            {job_type}
          </button>
        </div>
        <div className="flex items-center gap-5 my-3">
          <h2 className="flex items-center">
            <MdLocationOn className="mr-2 text-xl"></MdLocationOn>
            {location}
          </h2>
          <h2 className="flex items-center">
            <BiDollarCircle className="mr-2 text-xl"></BiDollarCircle>
            {salary}
          </h2>
        </div>
        <div className="card-actions ">
          <Link to= {`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
