"use client";

const services = [
  {
    title: "Mining Operations",
    description: "Professional mining operations with state-of-the-art equipment and experienced personnel for optimal resource extraction.",
    image: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg"
  },
  {
    title: "Technical Consulting",
    description: "Expert technical consulting services for mining projects, feasibility studies, and operational optimization.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
  },
  {
    title: "Safety Management",
    description: "Comprehensive safety management systems and training programs to ensure workplace safety and regulatory compliance.",
    image: "https://images.pexels.com/photos/2882634/pexels-photo-2882634.jpeg"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive mining services with a focus on safety, efficiency, and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => window.location.href = '/services'}
            className="btn btn-primary text-lg"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
