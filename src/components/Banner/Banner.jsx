 import bannerImg from "../../assets/images/user.png";

const Banner = () => {
    return (
        <div  style={{ minHeight: `calc(100vh - 74px)` }} >
             <div className="flex flex-col md:flex-row items-center gap-10 ">
            <div className="flex-1 space-y-3">
                <h2 className="text-5xl fond-bold">One Step <br /> Closer To Your <br /> <span className="text-blue-500">Dream Job</span></h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                <button className="btn btn-primary">Get Started</button>
             </div>
            <div className="flex-1">
                <img src={bannerImg} alt="" />
             </div>
        </div>
        </div>
       
    );
};

export default Banner;