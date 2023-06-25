import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const StickyNav = () => {
    useEffect(() => {
      const handlescroll = () => {
        const nav = document.querySelector("nav");
        if (document.documentElement.scrollTop > 20) {
          nav.classList.add("sticky");
        } else {
          nav.classList.remove("sticky");
        }
      };
      window.addEventListener("scroll", handlescroll);
      return () => {
        window.removeEventListener("scroll", handlescroll);
      };
    }, []);

    return <nav>navigation</nav>;
  };
  return (
    <div>
      <div className="home">
        <section className="fncbtn">
          <button onClick={() => navigate("/salonlogin")} className="sllgnbtn">
            SALON ✂
          </button>
          <button
            onClick={() => navigate("/customerlogin")}
            className="cstlgnbtn"
          >
            CUSTOMER 👨
          </button>
        </section>
      </div>

      <script>
        <StickyNav></StickyNav>
      </script>
    </div>
  );
};
