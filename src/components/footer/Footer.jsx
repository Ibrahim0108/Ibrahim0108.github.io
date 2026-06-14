import { footerData } from "../../data/portfolioData";
import FooterIcon from "./FooterIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail,MdMessage } from "react-icons/md";


const iconMap = {
  "linkedin-chat": MdMessage,
  "email": MdEmail,
  "github": FaGithub,
  "linkedin": FaLinkedin,
};


export default function Footer( ) {
  return (
    <footer
      id="contact"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        z-30
      "
    >
      {/* FOOTER IMAGE */}
      <img
        src={footerData.planetImage}
        alt="Planet footer"
        className="
          block
          w-full
          h-auto
          object-cover
          object-top
        "
      />

      {/* ICONS — ANCHORED TO IMAGE */}
      <div
        className="
          absolute
          bottom-8
          sm:bottom-10
          md:bottom-[7rem]
          left-1/2
          -translate-x-1/2
          z-20
          flex
          gap-6
          sm:gap-18
          md:gap-20
        "
      >
       {footerData.contacts.map((contact, idx) => (
          <FooterIcon
            key={idx}
            icon={iconMap[contact.type]}
            label={contact.label}
            value={contact.value}
            type={contact.type}
          />
        ))}
      </div>
    </footer>
  );
}
