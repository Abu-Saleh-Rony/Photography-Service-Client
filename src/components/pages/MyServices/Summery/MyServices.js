import React from "react";
import { useLoaderData } from "react-router-dom";
import MyServiceSummery from "./MyServiceSummery";


const MyServices = () => {
    const services = useLoaderData();

    return (
        <div>
            <p className="text-center text-xl my-3">Find out the all services</p>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 text-center">
                {services.map((service) => (
                    <MyServiceSummery service={service} />
                ))}
            </div>
        </div>
    );
};

export default MyServices;