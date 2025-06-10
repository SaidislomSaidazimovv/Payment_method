import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-10 overflow-hidden`}>
    <div className="w-full relative">
      <div className="flex animate-slide whitespace-nowrap">
        {clients.concat(clients).map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center sm:w-[192px] w-[120px] m-5"
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
