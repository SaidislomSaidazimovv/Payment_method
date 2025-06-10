import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row gap-2`}>
        <p className="font-poppins font-semibold text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain animate-bounce-slow"
        />
      </div>

      <p className="font-poppins font-semibold text-[18px] leading-[23.4px] mt-1">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
