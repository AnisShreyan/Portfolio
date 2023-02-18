import React from "react";
import github from "./icons/github.svg";
import instagram from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";
import twitter from "./icons/twitter.svg";
import whatsapp from "./icons/whatsapp.svg";
import SocialIcons from "./SocialIcons";

function SocialMedia() {
  return (
    <>
      <div className="socialmedia">
        <SocialIcons link={'https://github.com/AnisShreyan'} icons={github} />
        <SocialIcons link={'https://www.instagram.com/AnisShreyan'} icons={instagram} />
        <SocialIcons link={'https://www.linkedin.com/in/AnisShreyan'} icons={linkedin} />
        <SocialIcons link={'https://twitter.com/AnisShreyan'} icons={twitter} />
        <SocialIcons link={'https://wa.me/+917718498921'} icons={whatsapp} />
      </div>
    </>
  );
}

export default SocialMedia;
