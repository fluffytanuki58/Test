import { HashLink } from "react-router-hash-link";
import green from "../assets/green.jpg";
import blue from "../assets/blue.jpg";
import lightblue from "../assets/lightblue.jpg";
import red from "../assets/red.jpg";

export default function Elixir() {
  return (
    <>
      <h1>Our Elixirs</h1>

      <h2>Green Tea Cooler</h2>
      <p>
        <img src={green} alt="Green Tea Cooler" />
        Chock full of vitamins and minerals, this elixir combines the healthful
        benefits of green tea with a twist of chamomile blossoms and ginger
        root.
      </p>
      <h2>Raspberry Ice Concentration</h2>
      <p>
        <img src={lightblue} alt="Raspberry Ice Concentration" />
        Combining raspberry juice with lemon grass, citrus peel and rosehips,
        this icy drink will make your mind feel clear and crisp.
      </p>
      <h2>Blueberry Bliss Elixir</h2>
      <p>
        <img src={blue} alt="Blueberry Bliss Elixir" />
        Blueberries and cherry essence mixed into a base of elderflower herb tea
        will put you in a relaxed state of bliss in no time.
      </p>
      <h2>Cranberry Antioxidant Blast</h2>
      <p>
        <img src={red} alt="Cranberry Antioxidant Blast" />
        Wake up to the flavors of cranberry and hibiscus in this vitamin C rich
        elixir.
      </p>
      <p>
        <HashLink to="../">Back to the Lounge</HashLink>
      </p>
    </>
  );
}
