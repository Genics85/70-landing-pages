import { InlineIcon } from "@iconify/react/dist/iconify.js";
import team1 from "../../assets/agency/team1.png"
import team2 from "../../assets/agency/team2.png"
import team3 from "../../assets/agency/team3.png"
import TeamCard from "./compponents/TeamCard";
function Team() {
  return (
    <div className="p-5 flex flex-col items-center gap-12 md:p-20 lg:p-24 min-h-screen bg-white">
      <div className="flex col gap-4 md:flex-row md:justify-between">
        <h3 className="text-3xl md:text-4xl font-bold md:w-1/2">Our Team</h3>
        <p className="md:w-3/5">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </p>
      </div>
      <div className="flex items-center justify-center w-full gap-4">
        <TeamCard img={team1} name="Hugo Saavedra" position="Developer" url="www.facebook.com" icon="line-md:facebook"/>
        <TeamCard img={team2} name="Angu Tamba" position="Manager" url="www.email.com" icon="entypo:email"/>
        <TeamCard img={team3} name="Oka Tomoaki" position="Designer" url="www.twitter.com" icon="uil:twitter"/>
      </div>
    </div>
  );
}

export default Team;
