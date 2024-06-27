import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./App.module.css";
import TypeIt from "typeit-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useDisplay } from "./hooks/useOutletDisplay";
import { useDateCheck } from "./hooks/useDateCheck";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const {
    handleHidden,
    handleVisible,
    handleCount,
    isOutletHidden,
    hiddenCount,
  } = useDisplay();

  return (
    <QueryClientProvider client={queryClient}>
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
          {/* <TypeIt
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
          /> */}
          <h1>고장남!!! 쓰지마세요!!</h1>
          <h2>쓰지 말라고 했다!!!</h2>
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
    </QueryClientProvider>
  );
}

export default App;
