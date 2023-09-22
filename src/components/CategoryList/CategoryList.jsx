import { useEffect, useState } from "react";

 

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("./categories.json")
            .then(res => res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="my-12">
            <div className="space-y-3">
            <h2 className="text-3xl font-bold text-center">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    categories.map(category => <div key={category.id}>
                        <div className="mx-auto bg-gray-100 space-y-3 p-3 mt-5 rounded">
                            <img src={category.logo} alt="" />
                            <h2>{category.category_name}</h2>
                            <h3>{ category.availability}</h3>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryList;