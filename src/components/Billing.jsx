import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  
  <section id="product" className={layout.sectionReverse}>
    
    <div className={`${layout.sectionImgReverse} relative`}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] animate-float"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-4">
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src={apple}
            alt="apple_store"
            className="w-[128.86px] h-[42.05px] object-contain cursor-pointer"
          />
        </a>

        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
