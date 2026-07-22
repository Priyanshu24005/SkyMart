import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Sarah Williams",
    role: "Head of Design",
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "David Miller",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    name: "Emma Brown",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/300?img=48",
  },
];

const Team = () => {
  return (
    <section>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Meet Our <span className="text-lime-400">Team</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Behind SkyMart is a passionate team dedicated to building the best
          shopping experience for everyone.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#171717] border border-gray-800 rounded-3xl overflow-hidden hover:border-lime-400 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="h-72 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover hover:scale-105 duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>

              <p className="text-lime-400 mt-2">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-6">
                <button className="w-10 h-10 rounded-full bg-[#252525] hover:bg-lime-400 hover:text-black transition flex items-center justify-center">
                  <FaLinkedin size={18} />
                </button>

                <button className="w-10 h-10 rounded-full bg-[#252525] hover:bg-lime-400 hover:text-black transition flex items-center justify-center">
                  <FaGithub size={18} />
                </button>

                <button className="w-10 h-10 rounded-full bg-[#252525] hover:bg-lime-400 hover:text-black transition flex items-center justify-center">
                  <FaXTwitter size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
