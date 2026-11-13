import Image from "next/image";

const KEY = "tadore-preloaded";

/**
 * Brand preloader: the logo mark is "drawn" with a circular wipe, the
 * wordmark letters rise in, then the cream panel lifts away.
 *
 * It is server-rendered so it covers the page from the very first paint, and
 * runs on pure CSS. The inline script runs before paint and hides it on
 * repeat page loads within the same browser session.
 */
export function Preloader() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{if(sessionStorage.getItem("${KEY}")){document.documentElement.classList.add("preloaded")}else{sessionStorage.setItem("${KEY}","1")}}catch(e){}`,
        }}
      />
      <div className="preloader" aria-hidden>
        <div className="flex flex-col items-center">
          <div className="preloader-mark">
            <Image src="/media/mark-dark.png" alt="" width={294} height={274} priority className="h-auto w-24 md:w-28" />
          </div>
          <p className="mt-7 flex font-display text-3xl text-ink md:text-4xl" style={{ letterSpacing: "0.32em" }}>
            {"T.ADORE".split("").map((ch, i) => (
              <span key={i} className="preloader-letter" style={{ ["--i" as string]: i }}>
                {ch}
              </span>
            ))}
          </p>
          <span className="preloader-line mt-6" />
        </div>
      </div>
    </>
  );
}
