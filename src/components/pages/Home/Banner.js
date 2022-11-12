import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://cdn0.weddingwire.com/article/0692/3_2/960/jpg/22960-wedding-party-20-mile-house-peyton-rainey-photography.jpeg"
                        className="w-full  h-[600px]"
                        alt=""
                    />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://cdn0.weddingwire.ca/article-real-wedding/687/3_2/1280/jpg/129333.jpeg"
                        className="w-full  h-[600px]"
                        alt=""
                    />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://media.istockphoto.com/id/1429730671/photo/man-and-his-friends-standing-at-the-wedding-altar-waiting-for-the-bride-to-walk-down-the.jpg?b=1&s=170667a&w=0&k=20&c=mYJXkjcWmh-zmQWkUxpCo-4c-D5q5GW848bOAA57Byc="
                        className="w-full  h-[600px]"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">
                    1
                </a>
                <a href="#item2" className="btn btn-xs">
                    2
                </a>
                <a href="#item3" className="btn btn-xs">
                    3
                </a>
            </div>
        </div>
    );
};

export default Banner;