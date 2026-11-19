import { SeigaihaDefs, WaveBand } from "./components/Seigaiha";
import Image from "next/image";

function Photo({ src, alt, ratio = "4/5", priority = false }: { src: string; alt: string; ratio?: string; priority?: boolean }) {
  return (
    <div className="ph" style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 360px" priority={priority} />
    </div>
  );
}

const heroWords = ["Japanese", "brunch."];

const teishoku = [
  ["Tonkatsu teishoku", "Crumbed pork, rice, miso soup, cabbage and pickles"],
  ["Salmon teishoku", "Grilled salmon with rice and the full set of sides"],
  ["Japanese curry", "House curry made from scratch, with chicken katsu"],
  ["Furi Furi Kurokara Ramen", "Rich broth, soft egg, chilli crisp and crispy shallots"],
];
const sandos = [
  ["Katsu sando", "Pork katsu, tonkatsu sauce, cabbage, milk bread"],
  ["Aji fry sando", "Crumbed mackerel, spicy mayo, house tartare sauce", "$15"],
  ["Strawberry cream sando", "Fresh strawberries and whipped cream"],
  ["Matcha tiramisu", "Layered with ceremonial-grade matcha"],
];
const drinks = [
  ["Matcha einspanner", "Matcha under a cap of sweet cream"],
  ["Jasmine foam matcha", "Floral foam, matcha crumble"],
  ["Ube latte", "Purple yam, creamy and mellow"],
  ["Hojicha latte", "Roasted green tea, toasty and rich"],
];

function MenuList({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map(([n, d, p]) => (
        <div className="item" key={n}>
          <b>{n}</b>
          <em>{p ?? "[PRICE]"}</em>
          <small>{d}</small>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="logo">CAFE<br />L&apos;ARÔME<small>香り</small></a>
          <nav className="nav-links" aria-label="Main">
            <a href="#menu">Menu</a>
            <a href="#drinks">Drinks</a>
            <a href="#visit">Visit us</a>
          </nav>
          <a href="https://maps.google.com/?q=8+Warde+Street+Footscray" className="btn btn-blue">Get directions</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="kanji" aria-hidden>香</div>
          <div className="wrap hero-grid">
            <div>
              <h1 className="serif" aria-label="Japanese brunch.">
                {heroWords.map((w, i) => (
                  <span key={i}>
                    <span className="w" aria-hidden><span style={{ ["--i" as string]: i }}>{w}</span></span>{" "}
                  </span>
                ))}
              </h1>
              <p className="lede fade-up" style={{ ["--d" as string]: "900ms" }}>
                Teishoku sets, fluffy sandos and ramen, with Marukyu Koyamaen matcha and Allpress coffee. Tucked away on Warde Street, worth the trip.
              </p>
              <div className="hero-cta fade-up" style={{ ["--d" as string]: "1100ms" }}>
                <a href="#menu" className="btn btn-solid">See the menu</a>
                <a href="#visit" className="btn btn-ghost">Opening hours</a>
              </div>
            </div>

            <div className="bowl-stage">
              <svg className="waves" viewBox="0 0 400 400" aria-hidden>
                <SeigaihaDefs id="ring" bg="#2338a0" fg="#fff" />
                <circle cx="200" cy="200" r="198" fill="url(#ring)" stroke="#fff" strokeWidth="2" />
              </svg>
              <div className="photo"><Image src="/images/hero-ramen.jpg" alt="Tonkotsu ramen with soft egg, chashu and crispy shallots, held in a dark glazed bowl" fill sizes="460px" priority /></div>
              <div className="steam" aria-hidden>
                {[10, 35, 60, 85].map((l, i) => (
                  <span key={l} style={{ left: `${l}%`, animationDelay: `${i * 0.9}s` }} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="checker" aria-hidden />

        <section className="pad" id="menu">
          <div className="wrap">
            <div className="head-row">
              <h2 className="serif h2">What&apos;s on the table</h2>
              <p>Curry made from scratch, katsu fried to order and milk bread sandos built every morning. Here&apos;s a taste. The full menu changes with the season.</p>
            </div>
            <div className="grid3">
              <figure><Photo src="/images/teishoku.jpg" alt="Tonkatsu and menchi katsu teishoku sets with rice, miso soup, cabbage and pickles on wooden trays" ratio="1/1.15" /><figcaption className="cap">Teishoku sets, served on the tray</figcaption></figure>
              <figure><Photo src="/images/sandos.jpg" alt="Katsu, tamago and fish sandos on dark plates" ratio="1/1.15" /><figcaption className="cap">Sandos on soft milk bread</figcaption></figure>
              <figure><Photo src="/images/noodles.jpg" alt="Chopsticks lifting noodles and spicy karaage from a blue ramen bowl" ratio="1/1.15" /><figcaption className="cap">Furi Furi Kurokara Ramen</figcaption></figure>
            </div>
            <div className="menu-cols">
              <MenuList title="Teishoku and rice" items={teishoku} />
              <MenuList title="Sandos and sweets" items={sandos} />
            </div>
            <a href="#" className="btn btn-blue" style={{ marginTop: "3rem" }}>Download the full menu</a>
          </div>
        </section>

        <section className="pad mist" id="drinks">
          <div className="wrap feature">
            <Photo src="/images/drinks.jpg" alt="Two friends laughing over an iced einspanner and an ube latte outside the cafe" ratio="4/5" />
            <div>
              <h2 className="serif h2">Matcha from Uji. Coffee from Allpress.</h2>
              <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7, marginTop: "1.2rem", maxWidth: "28rem" }}>
                We whisk Marukyu Koyamaen matcha to order and pour Allpress espresso every day. Try one of the signatures, or just ask the bar what&apos;s good today.
              </p>
              <div className="drinks">
                {drinks.map(([n, d]) => (
                  <div className="drink" key={n}><b>{n}</b><small>{d}</small></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pad">
          <div className="wrap">
            <h2 className="serif h2" style={{ maxWidth: "36rem" }}>Coffee, matcha, food and the people who stay a while.</h2>
            <div className="grid3">
              <Photo src="/images/guest.jpg" alt="A guest smiling over a cappuccino in a navy cup" ratio="1/1.1" />
              <Photo src="/images/latte-sando.jpg" alt="Latte art beside two plates of sandos on a marble table" ratio="1/1.1" />
              <Photo src="/images/ramen-tray.jpg" alt="A bowl of ramen carried on a wooden tray through the sunny dining room" ratio="1/1.1" />
            </div>
            <a href="https://instagram.com/cafelarome" style={{ display: "inline-block", marginTop: "2rem", fontSize: ".8rem", textDecoration: "underline", color: "var(--indigo)", fontWeight: 600 }}>Follow @cafelarome on Instagram</a>
          </div>
        </section>

        <section className="pad visit" id="visit">
          <div className="wrap visit-grid">
            <div>
              <h2 className="serif h2" style={{ color: "#fff" }}>Find us on Warde Street</h2>
              <p style={{ marginTop: "1.4rem", fontSize: ".85rem", lineHeight: 1.7 }}>8 Warde Street<br />Footscray VIC 3011</p>
              <p style={{ marginTop: "1.2rem", fontSize: ".8rem", lineHeight: 1.7, opacity: .8, maxWidth: "26rem" }}>
                A short walk from Footscray station, and about 15 minutes from the city on the 216 bus. Grab a table inside or a seat in the sun out front.
              </p>
              <div className="hero-cta">
                <a href="https://maps.google.com/?q=8+Warde+Street+Footscray" className="btn btn-solid">Open in Google Maps</a>
                <a href="https://instagram.com/cafelarome" className="btn btn-ghost">Message us</a>
              </div>
            </div>
            <div className="hours">
              <div className="hours-top"><WaveBand height={36} /></div>
              <div className="hours-body">
                <h3>Opening hours</h3>
                <div className="hr"><span>Monday and Tuesday</span><span>Closed</span></div>
                <div className="hr"><span>Wednesday to Friday</span><span>[OPEN – CLOSE]</span></div>
                <div className="hr"><span>Saturday and Sunday</span><span>[OPEN – CLOSE]</span></div>
                <p style={{ fontSize: ".72rem", color: "var(--muted)", marginTop: "1.2rem" }}>Kitchen closes 30 minutes before we do. Walk-ins welcome.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <div className="logo" style={{ color: "#fff", fontSize: "1.8rem" }}>CAFE<br />L&apos;ARÔME<small>香り</small></div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="https://instagram.com/cafelarome">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">[EMAIL]</a>
            </div>
          </div>
          <p style={{ fontSize: ".7rem", opacity: .6, marginTop: "2rem" }}>© 2026 Cafe L&apos;Arôme. 8 Warde Street, Footscray.</p>
        </div>
      </footer>
    </>
  );
}
