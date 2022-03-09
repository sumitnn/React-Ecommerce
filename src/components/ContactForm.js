import React from "react";


const ContactForm = () => {


    return (
        <div className="container contact-div" >
            <div className="shadow border p-5">
                <h1 className="text-center">Contact Form</h1>
                <form>
                    <div className="mb-3 pt-0">
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <textarea
                            placeholder="Your message"
                            name="message"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-0">
                        <button
                            className="btn btn-outline-warning p-2"
                            type="submit"
                        >
                            Send a message
                        </button>
                    </div>
                </form>


            </div>

        </div>
    );
};

export default ContactForm;