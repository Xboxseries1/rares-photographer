import type { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Despre mine",
  description:
    "Povestea lui Rareș Pușcașu și parcursul său în fotografie, de la primele cadre realizate cu telefonul până la fotografie de eveniment, portret, automotive, comercială și travel.",
  alternates: {
    canonical: "/despre-mine",
  },
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <strong>RAREȘ</strong>
          <span>PHOTOGRAPHER</span>
        </Link>

        <Link href="/" className={styles.back}>
          ← ACASĂ
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <span>ABOUT</span>
          <span>RAREȘ PUȘCAȘU</span>
        </div>

        <div className={styles.heroTitle}>
          <p>Behind the camera</p>

          <h1>
            Povestea din
            <br />
            spatele imaginilor.
          </h1>
        </div>

        <div className={styles.heroBottom}>
          <p>
            Fotografia a început pentru mine din curiozitate și s-a transformat,
            în timp, într-un mod de a observa, de a crea și de a păstra momente.
          </p>

          <span>SCROLL ↓</span>
        </div>
      </section>

      <section className={styles.story}>
        <aside className={styles.storyIndex}>
          <span>01</span>
          <p>ÎNCEPUTUL</p>
        </aside>

        <div className={styles.storyText}>
          <p className={styles.lead}>
            Pasiunea mea pentru fotografie a început dintr-o simplă joacă.
            Fotografiam aproape orice îmi atrăgea atenția, folosind telefonul
            mobil.
          </p>

          <p>
            Încă de la primele cadre am realizat că îmi doream mereu mai mult.
            Fiind atent la detalii și perfecționist, căutam constant modalități
            de a îmbunătăți fiecare fotografie — prin schimbarea unghiului,
            încadrare, lumină sau momentul în care apăsam declanșatorul.
          </p>

          <p>
            Pe măsură ce am descoperit mai bine arta fotografiei, am început să
            acord tot mai multă atenție și procesului de editare, culorilor,
            decupării și tuturor detaliilor care pot transforma o imagine
            obișnuită într-una memorabilă.
          </p>

          <p>
            Cu fiecare fotografie realizată simțeam că evoluez și că încep să-mi
            construiesc propriul stil vizual.
          </p>
        </div>
      </section>

      <section className={styles.highlight}>
        <div className={styles.highlightNumber}>
          02
        </div>

        <div className={styles.highlightContent}>
          <p className={styles.smallLabel}>
            PRIMA CAMERĂ
          </p>

          <h2>
            Nikon
            <br />
            <em>Z50.</em>
          </h2>

          <p>
            Un moment important a fost ziua în care am primit prima mea cameră
            foto: un Nikon Z50, împreună cu obiectivele NIKKOR Z DX 16–50mm și
            NIKKOR Z DX 50–250mm.
          </p>

          <p>
            Atunci perspectiva mea asupra fotografiei s-a schimbat complet.
            Calitatea imaginilor, culorile, claritatea și posibilitățile
            creative erau la un alt nivel.
          </p>

          <p>
            Tot atunci am înțeles însă ceva și mai important: echipamentul,
            indiferent cât de performant este, nu poate înlocui experiența,
            practica și modul în care fotograful vede un cadru.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <aside className={styles.storyIndex}>
          <span>03</span>
          <p>EXPERIENȚĂ</p>
        </aside>

        <div className={styles.storyText}>
          <p className={styles.lead}>
            Am început să fotografiez cât mai des și în cât mai multe locuri.
          </p>

          <p>
            Am explorat mai întâi județul Prahova, apoi orașe precum Brașov,
            București și Oradea, iar mai târziu am avut ocazia să fotografiez și
            în Viena.
          </p>

          <p>
            Fiecare ieșire mi-a oferit situații noi: lumină diferită, oameni
            diferiți, locuri diferite și momente pe care trebuia să învăț să le
            observ rapid.
          </p>

          <p>
            Feedback-ul sincer primit de la prieteni și de la oamenii din jur
            m-a ajutat să privesc imaginile mai critic și m-a motivat să evoluez
            constant.
          </p>
        </div>
      </section>

      <section className={styles.education}>
        <div>
          <span>04</span>
          <p>FORMARE</p>
        </div>

        <div>
          <h2>
            Mai mult decât
            <br />
            apăsarea unui buton.
          </h2>

          <p>
            Din dorința de a mă perfecționa și de a înțelege fotografia la un
            nivel mai profund, m-am înscris la cursul de fotografie susținut în
            Ploiești de Sorin Petculescu.
          </p>

          <p>
            Experiența acumulată acolo m-a ajutat enorm atât din punct de vedere
            tehnic, cât și artistic. Am învățat să privesc fotografia mai
            conștient, să înțeleg mai bine lumina, compoziția și procesul din
            spatele unei imagini reușite.
          </p>

          <p>
            Îi sunt recunoscător pentru timpul, răbdarea și dedicarea investite
            în formarea mea.
          </p>
        </div>
      </section>

      <section className={styles.finalStatement}>
        <span>05 / ASTĂZI</span>

        <h2>
          Fotografia este modul prin care
          <em> surprind emoții, spun povești și creez amintiri.</em>
        </h2>

        <p>
          Pentru mine, fotografia înseamnă astăzi mult mai mult decât un hobby.
          Este dorința de a transforma un moment care durează o fracțiune de
          secundă într-o imagine care poate rămâne peste ani.
        </p>
      </section>

      <section className={styles.cta}>
        <p>PORTOFOLIU</p>

        <h2>
          Vezi imaginile,
          <br />
          nu doar povestea.
        </h2>

        <Link href="/#portfolio">
          VEZI PORTOFOLIUL
          <span>↗</span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>RAREȘ</strong>
          <span>PHOTOGRAPHER</span>
        </div>

        <p>
          © 2026 RAREȘ PUȘCAȘU
        </p>

        <Link href="/">
          ACASĂ ↑
        </Link>
      </footer>
    </main>
  );
}