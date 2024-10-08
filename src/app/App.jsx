import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import TypeIt from "typeit-react";
import { Navbar } from "../widgets/Navbar";
import { Footer } from "../widgets/Footer";
import { useOutletDisplay } from "../shared/lib/hooks";

function App() {
  const {
    handleHidden,
    handleVisible,
    handleCount,
    isOutletHidden,
    hiddenCount,
  } = useOutletDisplay();

  return (
    <section className={styles.wrapper}>
      <Navbar
        setHidden={handleHidden}
        setVisible={handleVisible}
        cheat={hiddenCount >= 3 ? true : false}
      />
      <article
        className={
          isOutletHidden ? `${styles.typeit}` : `${styles.typeit_hidden}`
        }
      >
        <TypeIt
          options={{ loop: true, speed: 350, loopDelay: 8000 }}
          getBeforeInit={(instance) => {
            instance
              .type("<Strong>BURGERKING</Strong>")
              .pause(2000)
              .delete(4)
              .pause(1000)
              .type("<Strong>PUT</Strong>")
              .pause(3000);
            return instance;
          }}
        />
        <img
          className={styles.image}
          onClick={handleCount}
          src="/logo/burgerlogo2.png"
          alt="burger"
        />
      </article>
      <main
        className={
          isOutletHidden ? `${styles.outlet_hidden}` : `${styles.outlet}`
        }
      >
        <section className={styles.body}>
          <Outlet context={{ handleHidden }} />
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default App;
