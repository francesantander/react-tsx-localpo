import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div>
        <div className="h-full py-32 grid grid-cols-2">
          <div>
            <div className="grid grid-cols">
              <h1 className="font-bold text-textBlack text-4xl">
                Connecting Talent with Opportunities: Your Gateway to Career
                Success
              </h1>
              <p className="text-textGray text-lg">
                We are dedicated to simplifying the job search process for both
                employers and candidates. Our platform empowers job seekers to
                find their ideal roles and allows companies to discover top
                talent effortlessly.
              </p>
            </div>
            <div className="flex gap-x-3">
              <div>
                <h1 className="font-bold text-textBlack text-2xl">
                  Our Mission
                </h1>
                <p className="text-textGray">
                  Our mission is to simplify hiring and job searching by
                  providing an intuitive platform that empowers both employers
                  and candidates. We are dedicated to creating a job market that
                  works for everyone, where talents meet opportunities
                  seamlessly.
                </p>
              </div>
              <div>
                <h1 className="font-bold text-textBlack text-2xl">
                  Why Choose Us
                </h1>
                <p className="text-textGray">
                  We provide an unparalleled job search experience through our
                  user-friendly platform, trusted by thousands of companies and
                  job seekers alike. With powerful tools for both employers and
                  candidates, we simplify the hiring process from start to
                  finish.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default About;
