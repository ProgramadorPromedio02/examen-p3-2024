import style from "../styles/GridStyles.module.css";
import Footer from "./Footer";
import NavbarDesigne from "./NavbarDesigne";
import Content from "./Content";
import SideBar from "./SideBar";
import CarouselHeader from "./CarouselHeader";
import ProjectsComponent from "./ProjectsComponent";

function Grid() {
  return (
    <div className={style["conteinerClass"]}>
      <div className={style["navbarConteiner"]}>
        <NavbarDesigne />
      </div>
      <div className={style["headerConteiner"]}>
        <CarouselHeader />
      </div>
      <div className={style["contentConteiner"]}>
        <Content />
      </div>
      <div className={style["lateralConteiner"]}>
        <SideBar />
      </div>
      <div className={style["projectContainer"]}>
        <ProjectsComponent />
      </div>
      <div className={style["footerConteiner"]}>
        <Footer />
      </div>
    </div>
  );
}

export default Grid;
