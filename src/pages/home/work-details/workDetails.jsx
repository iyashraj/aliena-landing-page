import React from "react";
import { AiOutlineNotification } from "react-icons/ai";
import {SlNote} from 'react-icons/sl';
import {SiMaterialdesignicons} from 'react-icons/si'
import {BsCodeSlash} from 'react-icons/bs';
import {MdOutlinePhotoCamera} from 'react-icons/md';
import {CiPlane} from 'react-icons/ci';
import {BsChat} from 'react-icons/bs'
import {TfiHeadphone} from 'react-icons/tfi'
import WorkCard from "../../../components/workcard/workCard";
import "./workdetails.css";

const WorkDetails = () => {
  return (
    <div style={{ width: "100%"}}>
      <div class="custom-shape-divider-top-1673284910 work-details-main">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
        <div className="work-details">
          <div className="work-details-title">
            <p>What We do</p>
            <span></span>
          </div>
          <div className="work-card-wrapper">
            <WorkCard cardLogo={<AiOutlineNotification className="card-logo" />} cardTitle={"MARKETING"} cardBio={"We provide a wide variety of marketing services and proper support included in our templates. This allows you to promote your products and services using Aliena and its features."}/>
            <WorkCard cardLogo={<SlNote className="card-logo" />} cardTitle={"COPYWRITING"} cardBio={"Aliena includes high-quality multipurpose texts, which you can use as a basis for your own website. Our copywriters provided every page of the template with written content."} />
            <WorkCard cardLogo={<SiMaterialdesignicons className="card-logo" />} cardTitle={"GRAPHIC DESIGN"} cardBio={"Graphic design plays a vital role in all our templates. In Aliena, it stands in the first place. Performed by qualified and highly talented designers, this template can impress anyone."}/>
            <WorkCard cardLogo={<BsCodeSlash className="card-logo" />} cardTitle={"DEVELOPMENT"} cardBio={"The developers at TemplateMonster make every effort to enable our templates with unparalleled functionality based on Bootstrap Framework and Advanced UI Kit."}/>
            <WorkCard cardLogo={<MdOutlinePhotoCamera className="card-logo" />} cardTitle={"PHOTO PRODUCTION"} cardBio={"Aliena uses brilliantly looking images to reflect how a customer can use the potential of the template to reach their clients’ attention. All premium images are included with the template."}/>
            <WorkCard cardLogo={<CiPlane className="card-logo" />} cardTitle={"LOGISTICS"} cardBio={"Aliena is the leader in the way of easy delivery and installation. All you have to do is unpack your purchase, and the template you’ve just bought is ready to be used!"}/>
            <WorkCard cardLogo={<BsChat className="card-logo" />} cardTitle={"CONSULTATIONS"} cardBio={"Our support service is known for its 24/7 availability and customer-friendly mood. We are always ready to answer your questions and provide a quick fix for any issue."}/>
            <WorkCard cardLogo={<TfiHeadphone className="card-logo" />} cardTitle={"SOUND DESIGN"} cardBio={"Our templates differ from those of our competitors not only in exceptional design and features but also in the sound design reflected in every video/audio presentation we make."}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
