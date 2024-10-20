import React from "react";
import benefitsData from "../../../data/benefits.json";
import BenefitList from "./components/BenefitList";
import { BenefitsProps } from "../../../interface/interface";

const Benefits: React.FC<BenefitsProps> = () => {
  return (
    <>
      <div className="pb-20">
        <div className="grid grid-cols gap-y-3">
          <h3 className="text-textGray">Tagline</h3>
          <h1 className="text-textBlack font-black text-4xl max-w-2xl leading-tight">
            Unlock Your Career Potential with Our Comprehensive Job Posting
            Services
          </h1>
          <p className="text-textGray">
            Our platform connects job seekers with top employers, streamlining
            the hiring process. We provide tools for candidates to showcase
            their skills and for employers to find the perfect fit. Experience a
            user-friendly interface designed to enhance your job search and
            recruitment efforts.
          </p>
        </div>
        <div className="grid grid-cols gap-y-6 pt-10 md:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            <BenefitList benefit={benefit} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Benefits;
