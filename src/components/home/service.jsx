import React from "react";
import "./service.css";
 
const ServiceItem = ({ title, bulletPoints, className, imageSrc, iconSrc, imageClass }) => (
  <div className={`service-item ${className}`}>
    <div className="service-content">
      <h2>{title}</h2>
      <div className="service-net">
        <ul>
          {bulletPoints.map((point, index) => (
            <li key={index}>
              <img
                src="../img/icon.svg"
                alt="Bullet icon"
                width={16}
                height={16}
                className="bullet-icon"
              />
              {point}
            </li>
          ))}
        </ul>
        {imageSrc && (
          <div className={`service-image ${imageClass}`}>
            <img
              src={imageSrc}
              alt={`${title} illustration`}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);
 
export default function Service() {
  const services = [
    {
      title: "AI and Machine Learning",
      bulletPoints: [
        "AI integration services",
        "Natural language processing (NLP)",
        "Computer vision",
      ],
      imageSrc: "/img/Ai.svg",
      iconSrc: "/img/icon.svg",
      imageClass: "service-image-ai",
    },
    {
      title: "Custom Software Development",
      bulletPoints: [
        "Mobile and web applications",
        "SaaS, ERP, CRM developments",
        "Legacy system modernization",
      ],
      imageSrc: "/img/App.svg",
      iconSrc: "/img/icon.svg",
      imageClass: "service-image-app",
    },
    {
      title: "Maintenance and Support",
      bulletPoints: [
        "Performance monitoring",
        "Development support",
        "System optimization",
      ],
      iconSrc: "/img/icon.svg",
      imageClass: "",
    },
    {
      title: "Engineering and tech integrations",
      bulletPoints: [
        "API development and integration",
        "Cloud migration services",
        "Third party software integration",
      ],
      iconSrc: "/img/icon.svg",
      imageClass: "",
    },
    {
      title: "Ecom and no-code development",
      bulletPoints: [
        "Shopify and wordpress development",
        "Product management",
        "store and system management",
      ],
      iconSrc: "/img/icon.svg",
      imageClass: "",
    },
  ];
 
  return (
    <section className="p-container">
      <h6>WHAT WE DO</h6>
      <h1>Our services</h1>
      <div className="services-wrapper">
        <div className="services-upper">
          {services.slice(0, 2).map((service, index) => (
            <ServiceItem
              key={index}
              className={index === 0 ? "service-primary" : "service-secondary"}
              title={service.title}
              bulletPoints={service.bulletPoints}
              imageSrc={service.imageSrc}
              iconSrc={service.iconSrc}
              imageClass={service.imageClass}
            />
          ))}
        </div>
        <div className="services-lower">
          {services.slice(2).map((service, index) => (
            <ServiceItem
              key={index + 2}
              className="service-secondary"
              title={service.title}
              bulletPoints={service.bulletPoints}
              imageSrc={service.imageSrc}
              iconSrc={service.iconSrc}
              imageClass={service.imageClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 
 
 