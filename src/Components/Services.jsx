import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const servicesData = [
  {
    id: 1,
    title: "Coloring Car",
    price: "₹8,000",
    description:
      "Car coloring or painting is not just about aesthetics—it also protects the car body from rust, corrosion, and environmental damage. Our expert technicians ensure a flawless finish using high-quality paints and advanced equipment.",
    importance: [
      "Enhances the appearance of your car.",
      "Protects from environmental elements.",
      "Increases resale value.",
    ],
  },
  {
    id: 2,
    title: "Brake Service",
    price: "₹700",
    description:
      "Brakes are one of the most critical safety components of any vehicle. Our brake service includes inspection, replacement of brake pads or shoes, rotor resurfacing, and brake fluid top-up.",
    importance: [
      "Ensures safe stopping.",
      "Prevents brake failure.",
      "Extends brake life.",
    ],
  },
  {
    id: 3,
    title: "Suspension",
    price: "₹8,000",
    description:
      "The suspension system ensures a smooth and comfortable ride. We inspect shock absorbers, struts, and all suspension components, replacing them if necessary.",
    importance: [
      "Improves driving comfort.",
      "Ensures vehicle stability.",
      "Reduces wear on tires and other parts.",
    ],
  },
  {
    id: 4,
    title: "Oil Change",
    price: "₹300",
    description:
      "Regular oil changes keep your engine running smoothly. We use high-quality engine oil and include a filter change if necessary.",
    importance: [
      "Improves engine performance.",
      "Extends engine life.",
      "Enhances fuel efficiency.",
    ],
  },
  {
    id: 5,
    title: "Wheel Alignment",
    price: "₹4,500",
    description:
      "Our computerized wheel alignment ensures wheels are set to the correct angle, reducing uneven tire wear and improving fuel economy.",
    importance: [
      "Increases tire lifespan.",
      "Improves fuel efficiency.",
      "Enhances driving safety.",
    ],
  },
  {
    id: 6,
    title: "Coolant Refilling",
    price: "₹700",
    description:
      "Coolant protects your engine from overheating and extreme temperatures. We flush and refill the system with the appropriate coolant.",
    importance: [
      "Prevents engine overheating.",
      "Protects radiator and water pump.",
      "Maintains engine efficiency.",
    ],
  },
  {
    id: 7,
    title: "Engine Works",
    price: "₹10,000",
    description:
      "We handle everything from diagnostics to full engine overhauls, restoring performance and resolving issues like misfires or poor mileage.",
    importance: [
      "Ensures optimal engine performance.",
      "Fixes power issues.",
      "Increases vehicle longevity.",
    ],
  },
  {
    id: 8,
    title: "Wheel Change",
    price: "₹500",
    description:
      "Need a quick and reliable wheel replacement? We ensure safety and balance in every wheel change service.",
    importance: [
      "Ensures safe driving.",
      "Avoids tire blowouts.",
      "Improves handling and comfort.",
    ],
  },
];

const Services = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Car Services</h2>
      <div className="row">
        {servicesData.map((service) => (
          <div key={service.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {service.title} – <span className="text-success">{service.price}</span>
                </h5>
                <p className="card-text">{service.description}</p>
                <h6>Why It's Important:</h6>
                <ul>
                  {service.importance.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
