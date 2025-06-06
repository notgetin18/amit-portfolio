import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/constant";

const Services = () => {
  return (
    <div>
      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specializing in MERN stack development to deliver high-quality web
              solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Web Application Development",
                description:
                  "Custom web applications tailored to your specific business needs.",
              },
              {
                title: "API Development and Integration",
                description:
                  "Building robust APIs and integrating them seamlessly into your applications.",
              },
              {
                title: "Performance Optimization",
                description:
                  "Improving the speed and efficiency of your existing web applications.",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
