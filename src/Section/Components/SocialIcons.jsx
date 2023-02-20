import React from "react";

function SocialIcons({ icons, link }) {
  return (
    <>
      <a href={link} target="_blank">
        <img src={icons} />
      </a>
    </>
  );
}

export default SocialIcons;
