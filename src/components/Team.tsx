import React from "react";
import TeamCard from "./TeamCard";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import teamImg1 from "assets/images/teamImg1.png";
import teamImg2 from "assets/images/teamImg2.png";
import teamImg3 from "assets/images/teamImg3.png";

function Team() {
  return (
    <div>
      <div className="container-2">
        <h1 className="text-center text-white font-display text-[50px] font-black mb-[60px]">
          Team
        </h1>

        <div className="flex space-x-5">
          <TeamCard
            title="Tufayel Khan"
            designation="The CEO"
            img={teamImg1}
            links={[
              {
                icon: <FaFacebookF color="black" size={15} />,
                link: "#",
                target: "_blank",
              },
              {
                icon: <FaTwitter color="black" size={15} />,
                link: "#",
                target: "_blank",
              },
            ]}
          />
          <TeamCard
            title="NIROS"
            designation="Creative Director"
            img={teamImg2}
            links={[
              {
                icon: <FaFacebookF color="black" size={15} />,
                link: "#",
                target: "_blank",
              },
              {
                icon: <FaTwitter color="black" size={15} />,
                link: "#",
                target: "_blank",
              },
            ]}
          />
          <TeamCard
            title="Tufayel Khan"
            designation="The CEO"
            img={teamImg3}
            links={[
              {
                icon: <FaFacebookF color="black" size={15} />,
                link: "#",
                target: "_blank",
              },
              {
                icon: <FaTwitter color="black" size={15} />,
                link: "#",
                target: "_blank",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
