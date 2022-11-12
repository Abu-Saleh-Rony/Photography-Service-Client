import React from 'react';

const Header = () => {
    return (
        <div>
            <section>
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
                            Welcome to Best Moments Photography!
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
                            Best Moments photography has the highest number of fan following among Bangladeshi wedding photography Facebook pages. Among many other achievements we recognize this as the most important one as it directly indicates how many people are relating with us personally. Their likes and comments inspire us to do better every day.
                        </p>
                        <div className="flex flex-wrap justify-center">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
                            >
                                See More
                            </button>
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
                            >
                                About me
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    src="https://media.istockphoto.com/photos/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-picture-id1190043570?b=1&k=20&m=1190043570&s=612x612&w=0&h=z06nHUTgtA7oIqsaOVuQVxgTw-r24El_XDeismUGMLY="
                    alt=""
                    className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
                />
            </section>
        </div>
    );
};

export default Header;