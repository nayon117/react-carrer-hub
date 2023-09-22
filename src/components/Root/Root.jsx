import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

 

const Root = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-3 ">
            <Header></Header>
           </div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-4 my-12">
            <Outlet></Outlet>
          </div>
           
            <Footer></Footer>
             
        </div>
    );
};

export default Root;