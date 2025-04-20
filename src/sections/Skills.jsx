import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <p>{icon.imgPath}</p> 
        </div>
    );
};

const Skills = () => {
  return (
      <div id="skills" className="md:my-20 my-10 relative">
          <div className="gradient-edge" />
          <div className="gradient-edge" />

          <div className="marquee h-52">
              <div className="marquee-box md:gap-12 gap-5">
                  {logoIconsList.map((icon, index) => (
                      <LogoIcon key={index} icon={icon} />
                  ))}

                  {logoIconsList.map((icon, index) => (
                      <LogoIcon key={index} icon={icon} />
                  ))}
              </div>
          </div>
      </div>
  )
}

export default Skills