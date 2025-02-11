import Image from 'next/image';
import React from 'react';
import SectionHeading from '../../../components/SectionHeading';
import ServiceBlock from './ServiceBlock';

type FeatureData = {
  classIco: string;
  title: string;
};

type SecOurFeaturesProps = {
  data: FeatureData[];
  imgPhone: string;
  Rings: string;
};

const SecOurFeatures: React.FC<SecOurFeaturesProps> = ({ data, imgPhone, Rings }) => {
  return (
    <section className="features section-padding-100">
      <SectionHeading title="Our Mobile Application" text="" />
      <div className="container-fluid">
        <div className="row">
          <div className="services-column col-lg-5 col-lg-offset-1 col-md-10 offset-md-1 col-xs-10 offset-xs-1">
            {data &&
              data.map((item, key) => (
                <ServiceBlock key={key} classIco={item.classIco} title={item.title} />
              ))}
          </div>
          <div className="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
            <div className="image-box">
            <Image
                src={imgPhone}
                className="center-block img-responsive phone-img"
                alt="Phone"
                layout="fill"
              />
            <Image
                src={Rings}
                className="center-block img-responsive rings"
                alt="Rings"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecOurFeatures;
