
import { aboutInfo, assets } from "../../assets/assets";
import {  motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* HEadings */}
        <h2 className="text-3xl font-bold text-center mb-4 ">
          About
          <span className="text-purple">ME</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>
        {/* img plus my journey */}
        <div className="flex flex-col  md:flex-row items-center gap-12">
          <div className=" md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false,amount:0.2}}
              className="w-full h-full object-cover  "
              src={assets.profileImg} alt="Profile"
            />
          </div>
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false,amount:0.2}}
              className="md:w-1/2 "
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
               I'm a passionate React developer and MCA graduate who enjoys building modern, responsive, and user-friendly web applications. My journey started with learning HTML, CSS, and JavaScript, and gradually evolved into creating dynamic applications using React, Redux Toolkit, Tailwind CSS, and REST APIs. I love transforming ideas into interactive digital experiences and writing clean, maintainable code.</p>
                <p className="text-gray-300 mb-12">As I continue to grow, I'm expanding my expertise into full-stack development by learning technologies like Node.js, Express, and databases. I'm driven by curiosity and a commitment to continuous learning, always exploring new tools and best practices to build scalable and impactful solutions. When I'm not coding, you'll find me working on personal projects and staying up to date with the latest trends in web development. </p>
           
              {/* cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  aboutInfo.map((data,index)=>(
                    <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer ">
                        <div className="text-purple text-4xl mb-4 ">
                          <data.icon />

                        </div>
                        <h3 className="text-xl font-semibold mb-3  ">{data.title}</h3>
                        <p  className="text-gray-400">{data.description}</p>
                    </div>
                  ))
                }

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
