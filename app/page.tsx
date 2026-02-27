import type { Metadata } from "next";
import Image from "next/image";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+6285713333536").replace(/\D/g, "");
const whatsappMessage = encodeURIComponent(
  "Hi AMO Pure Juice, I want to order AMO Love Potion Pure Juice."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "Let’s Drink | AMO Pure Juice",
  description:
    "Discover AMO Pure Juice, premium 0.0% alcohol grape juice 750 ml with moscato, honey melon, and passion fruit notes. Order directly via WhatsApp.",
};

const productDetails = [
  { icon: "🍾", label: "750 ml" },
  { icon: "🚫", label: "ABV 0%" },
  { icon: "🍇", label: "Moscato Grapes" },
  { icon: "🍈", label: "Honey Melon Aroma" },
  { icon: "🥭", label: "Passion Fruit Finish" },
];

export default function Home() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AMO Pure Juice",
    description:
      "Premium 0.0% alcohol grape juice with moscato character, honey melon aroma, and passion fruit finish.",
    image: "https://www.amopurejuice.com/Amo-Bottle-Halal.png",
    brand: {
      "@type": "Brand",
      name: "AMO Pure Juice",
    },
    offers: {
      "@type": "Offer",
      price: "350000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: "https://www.amopurejuice.com",
      seller: {
        "@type": "Organization",
        name: "AMO Pure Juice",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Volume",
        value: "750 ml",
      },
      {
        "@type": "PropertyValue",
        name: "Alcohol by Volume",
        value: "0.0%",
      },
    ],
    category: "Non-Alcoholic Beverages",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AMO Pure Juice",
    url: "https://www.amopurejuice.com",
    logo: "https://www.amopurejuice.com/logo.avif",
    description:
      "Premium non-alcoholic grape juice brand focused on modern, alcohol-free celebration moments.",
  };

  return (
    <main className="hero-shell relative min-h-screen overflow-hidden text-orange-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-200/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-orange-300/50 blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="relative z-20 flex items-center justify-between">
          <p className="text-xl font-semibold tracking-[0.28em] text-orange-900">A MO</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/35 transition hover:bg-orange-600"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M12.04 2C6.5 2 2 6.47 2 12c0 1.77.46 3.49 1.34 5l-1.42 5.18 5.3-1.39A10.02 10.02 0 0 0 12.04 22C17.58 22 22 17.53 22 12S17.58 2 12.04 2Zm0 18.3c-1.53 0-3.02-.41-4.33-1.2l-.31-.18-3.15.83.84-3.08-.2-.32a8.24 8.24 0 0 1-1.27-4.35c0-4.58 3.76-8.3 8.42-8.3 2.23 0 4.33.86 5.9 2.42A8.2 8.2 0 0 1 20.46 12c0 4.58-3.75 8.3-8.42 8.3Zm4.56-6.2c-.25-.12-1.47-.72-1.7-.8-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.99-1.2-.74-.65-1.24-1.45-1.38-1.7-.15-.24-.02-.38.1-.5.11-.1.25-.26.37-.39.12-.13.16-.22.24-.36.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.76-.2-.49-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.17.86 2.3.98 2.46.12.16 1.68 2.57 4.1 3.6.57.25 1.02.4 1.37.5.58.18 1.1.15 1.52.09.47-.07 1.47-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.47-.28Z" />
            </svg>
          </a>
        </header>

        <section className="hero-inner relative mt-6 flex flex-1 items-center overflow-hidden rounded-[2.3rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <p className="hero-silhouette-text" aria-hidden>
            GRAPE
            <br />
            JUICE
          </p>
          <div className="relative z-10 grid w-full items-center gap-7 lg:gap-6 lg:grid-cols-[1.1fr_0.95fr_1fr]">
            <div className="relative space-y-4">
              <p className="text-base font-bold uppercase tracking-[0.24em] text-orange-700/90 sm:text-lg">Premium Orange Sparkling Juice</p>
              <p className="max-w-md text-base leading-relaxed text-orange-900/75 sm:text-lg">
                A bright orange, premium 0.0% beverage with a clean sparkling finish. Fresh flavor, modern expression, and crafted for elevated social moments.
              </p>
              <ul className="max-w-md space-y-2.5 pt-1">
                {productDetails.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 rounded-lg bg-white/25 px-3 py-2 text-sm font-medium text-orange-900/85 sm:text-base">
                    <span className="inline-flex w-5 justify-center text-base" aria-hidden>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
              <p className="inline-flex w-fit rounded-full bg-white/60 px-4 py-2 text-2xl font-extrabold tracking-wide text-orange-700 shadow-md shadow-orange-300/40 sm:text-3xl">IDR 350,000</p>
            </div>

            <div className="relative z-20 mx-auto w-full max-w-[390px] sm:max-w-[440px] lg:max-w-[500px]">
              <div className="product-can-wrap relative z-10">
                <Image
                  src="/Amo-Bottle-Halal.png"
                  alt="AMO bright orange flavor can"
                  width={760}
                  height={1200}
                  priority
                  className="product-can mx-auto h-auto w-full"
                />
              </div>
            </div>

            <aside className="z-10 w-full max-w-md justify-self-end rounded-3xl bg-white/35 p-5 backdrop-blur-sm sm:p-6">
              <h2 className="text-lg font-bold text-orange-950 sm:text-xl">Why AMO Pure Juice is Different</h2>
              <p className="mt-3 text-sm leading-relaxed text-orange-900/80 sm:text-base">
                Unlike typical 0% alcohol wines that are dealcoholized, AMO Pure Juice is crafted from the ground up as a premium pure grape juice. We never add then remove alcohol—we celebrate the grape in its purest form.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-orange-900/80 sm:text-base">
                While other brands focus on mimicking wine, we focus on delivering authentic grape character with sophisticated flavor complexity. The result is a naturally vibrant taste without the chemical processes that can strip away aroma and authenticity.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-orange-900/80 sm:text-base">
                AMO Pure Juice is honest, clean, and unapologetically juice—elevating what non-alcoholic beverage experiences can be.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-900">BPOM Certified</span>
                <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-900">Halal Certified</span>
                <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-900">0.0% Alcohol</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 hidden items-center justify-center rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/35 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex"
              >
                Order Now
              </a>
            </aside>
          </div>

        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-orange-200/70 bg-white/85 p-4 backdrop-blur sm:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/35 transition hover:bg-orange-600"
        >
          Order Now
        </a>
      </div>
    </main>
  );
}
