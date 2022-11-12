import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner";
import Getup from "./Getup";
import Header from "./Header";
import HomeSummery from "./HomeSummery";

const Home = () => {
    useTitle('home')
    const services = useLoaderData();

    return (
        <div>
            <Header />
            <p className="text-4xl text-center my-3 text-danger">Package Service</p>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 justify-center">
                {services.map((service) => (
                    <HomeSummery service={service} />
                ))}
            </div>
            <Link to={"/myServices"} className="flex justify-center my-5">
                <button className="btn btn-outline w-[200px]">See all</button>
            </Link>

            <div>
                <p className="text-center text-xl my-3 bg-warning w-[200px] mx-auto p-3 rounded-2xl">
                    Standard Package
                </p>
                <Banner />
            </div>

            <Getup />
        </div>
    );
};

export default Home;
