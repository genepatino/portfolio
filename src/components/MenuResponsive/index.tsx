import { TfiMenu } from "react-icons/tfi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoHome, GoCodespaces } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaDownload } from "react-icons/fa6";
import { Menu, SidebarMenu } from "./styled";
import { ButtonCV } from "../Hero/styled";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import cvitae from "../../curriculum-vitae.pdf";

function MenuResponsive() {
  const [t] = useTranslation("global");
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuIcon = () => {
    setOpenMenu(true);
  };

  const closeMenuIcon = () => {
    setOpenMenu(false);
  };

  return (
    <Menu>
      <TfiMenu className="menu-icon" onClick={openMenuIcon} />
      <SidebarMenu $openMenu={openMenu}>
        <div className="icon-close">
          <IoIosCloseCircleOutline onClick={closeMenuIcon} />
        </div>
        <ul className="ul-responsive">
          <a onClick={closeMenuIcon} href="#">
            <li>
              <GoHome className="icon" />
              <span>{t("navbar.home")}</span>
            </li>
          </a>
          <a onClick={closeMenuIcon} href="#about-me">
            <li>
              <IoPersonOutline className="icon" />
              <span>{t("navbar.about-me")}</span>
            </li>
          </a>
          <a onClick={closeMenuIcon} href="#projects">
            <li>
              <SlBriefcase className="icon" />
              <span>{t("navbar.projects")}</span>
            </li>
          </a>
          <a onClick={closeMenuIcon} href="#tecnologies">
            <li>
              <GoCodespaces className="icon" />
              <span>{t("navbar.tecnologies")}</span>
            </li>
          </a>
          <a onClick={closeMenuIcon} href="#contact">
            <li>
              <HiOutlineMailOpen className="icon" />
              <span>{t("navbar.contact")}</span>
            </li>
          </a>
        </ul>
        <ButtonCV $color="#6928e6" $width="100%">
          <FaDownload />
          <a href={cvitae} download="curriculum-vitae.pdf">
            {t("navbar.curriculo")}
          </a>
        </ButtonCV>
      </SidebarMenu>
    </Menu>
  );
}

export { MenuResponsive };
