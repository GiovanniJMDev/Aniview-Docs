import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "📺 Explora el Mundo del Anime",
    Svg: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=1200x1200",
    description: (
      <>
        AniView es la plataforma ideal para descubrir, organizar y gestionar tus
        animes favoritos. Crea listas personalizadas, edita tu progreso y recibe
        recomendaciones adaptadas a tus gustos.
      </>
    ),
  },
  {
    title: "🤖 AniBot - Tu Chatbot de Anime",
    Svg: require("@site/static/img/Aniview_AI.jpg").default,
    description: (
      <>
        Habla con AniBot, un asistente inteligente especializado en anime.
        Pídele recomendaciones, información sobre animes o simplemente charla
        sobre tus series favoritas.
      </>
    ),
  },
  {
    title: "🎰 Anipon - Gachapon de Anime",
    Svg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrarn_Ry-b-zG9-Xx1XitI_QYZQeCbtsyIA&s",
    description: (
      <>
        ¿No sabes qué ver? Usa Anipon, nuestro sistema de gachapon, para recibir
        sugerencias aleatorias basadas en tus géneros preferidos. ¡Gira y
        descubre tu próximo anime favorito!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
