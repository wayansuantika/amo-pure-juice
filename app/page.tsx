import type { Metadata } from "next";
import Image from "next/image";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282146804175";
const whatsappMessage = encodeURIComponent(
  "Hi AMO Pure Juice, I want to order AMO Love Potion Pure Juice 750 ml."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "0.0% Alcohol Grape Juice | AMO Pure Juice",
  description:
    "Discover AMO Love Potion Pure Juice 750 ml, a premium 0.0% alcohol grape juice with elegant sparkling character and a go-green philosophy.",
};

const tasteNotes = [
  { icon: "🍇", label: "Moscato Grapes" },
  { icon: "🍈", label: "Honey Melon Aroma" },
  { icon: "🥭", label: "Passion Fruit Finish" },
];

const keyFacts = [
  { icon: "🍾", label: "750 ml" },
  { icon: "🚫", label: "ABV 0%" },
];

const highlights = [
  {
    title: "0.0% Alcohol",
    description: "The celebration feel, fully alcohol-free for conscious moments.",
  },
  {
    title: "Premium Grapes",
    description: "Crafted from selected grapes for a rich and refined taste profile.",
  },
  {
    title: "AMO Pure Juice",
    description: "Built for mindful lifestyle choices and cleaner beverage experiences.",
  },
];

export default function Home() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AMO Love Potion Pure Juice",
    description:
      "Premium 0.0% alcohol grape juice with rich Moscato grape character, honey melon and passion fruit aroma. Elegant, refreshing, and fully alcohol-free.",
    image: "https://www.amopurejuice.com/amo.avif",
    brand: {
      "@type": "Brand",
      name: "AMO Pure Juice",
      logo: "https://www.amopurejuice.com/logo.avif",
    },
    offers: {
      "@type": "Offer",
      price: "150000",
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
      {
        "@type": "PropertyValue",
        name: "BPOM Registration",
        value: "RI ML 010982004200170",
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
      "Premium non-alcoholic grape juice brand offering elegant, sophisticated beverages for conscious living.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Indonesian"],
    },
  };

  return (
    <main className="bg-amber-50 text-green-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section className="relative overflow-hidden">
        <div className="absolute -top-28 left-0 h-80 w-80 rounded-full bg-amber-200 blur-3xl" />
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-yellow-200 blur-3xl" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start gap-10 px-6 py-12 lg:grid lg:grid-cols-2 lg:items-center lg:px-10 lg:py-16">
          <div className="w-full space-y-5 lg:order-1">
            <p className="inline-flex rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-medium text-amber-800">
              AMO Pure Juice
            </p>
            
            <div className="relative mx-auto mt-4 w-full max-w-md lg:hidden">
              <div className="rounded-[2rem] border border-amber-200 bg-white/80 p-6 shadow-lg shadow-amber-200/70 backdrop-blur-sm">
                <Image
                  src="/amo.avif"
                  alt="AMO Love Potion Pure Juice 750ml bottle - 0.0% alcohol grape juice"
                  width={600}
                  height={900}
                  priority
                  className="mx-auto h-auto w-full drop-shadow-xl"
                />
              </div>
              <div className="absolute right-4 top-8">
                <Image
                  src="/logo.avif"
                  alt="AMO Pure Juice Logo"
                  width={80}
                  height={80}
                  className="h-auto w-16 drop-shadow-md"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 rounded-2xl border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-green-900 shadow-md shadow-amber-200/70">
                750 ml • ABV 0%
              </div>
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:max-w-xl">
              Premium 0.0% alcohol <span className="text-amber-600">grape juice</span> for modern celebration.
            </h1>
            <p className="max-w-xl text-base text-green-900/80 md:text-lg">
              AMO Love Potion Pure Juice 750 ml delivers rich grape character with honey melon and passion fruit
              aroma. Elegant, refreshing, and fully alcohol-free.
            </p>

            <div className="text-3xl font-bold text-green-900 md:text-4xl">
              Rp 350,000
            </div>

            <div className="flex flex-wrap gap-4">
              {keyFacts.map((fact) => (
                <span
                  key={fact.label}
                  className="flex items-center gap-2 text-sm font-semibold text-green-900"
                >
                  <span className="text-lg text-green-700">{fact.icon}</span>
                  {fact.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {tasteNotes.map((note) => (
                <span
                  key={note.label}
                  className="flex items-center gap-2 text-sm font-medium text-green-900"
                >
                  <span className="text-lg text-green-700">{note.icon}</span>
                  {note.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-700 px-7 py-3.5 text-center text-base font-semibold text-white transition hover:bg-green-800"
              >
                Buy Now on WhatsApp
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-amber-400 bg-white px-7 py-3.5 text-center text-base font-semibold text-green-900 transition hover:bg-amber-50"
              >
                Chat for Bulk Order
              </a>
            </div>
            
            <p className="text-center text-sm text-green-900/60 sm:text-left">
              BPOM RI ML 010982004200170
            </p>
          </div>

          <div className="relative mx-auto hidden w-full max-w-md lg:order-2 lg:block">
            <div className="rounded-[2rem] border border-amber-200 bg-white/80 p-6 shadow-lg shadow-amber-200/70 backdrop-blur-sm md:p-8">
              <Image
                src="/amo.avif"
                alt="AMO Love Potion Pure Juice 750ml bottle - 0.0% alcohol grape juice"
                width={600}
                height={900}
                priority
                className="mx-auto h-auto w-full drop-shadow-xl"
              />
            </div>
            <div className="absolute right-6 top-12">
              <Image
                src="/logo.avif"
                alt="AMO Pure Juice Logo"
                width={100}
                height={100}
                className="h-auto w-20 drop-shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -left-8 rounded-2xl border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-green-900 shadow-md shadow-amber-200/70">
              750 ml • ABV 0%
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">Why AMO Pure Juice</h2>
        <p className="mt-3 max-w-3xl text-green-900/80">
          Inspired by AMO&apos;s love story, this product brings premium flavor and lifestyle symbolism into one pure,
          non-alcoholic bottle.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm shadow-amber-100"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-green-900/80">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/70 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <article className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm shadow-amber-100">
            <h2 className="text-3xl font-bold">Product Focus</h2>
            <ul className="mt-5 space-y-3 text-green-900/90">
              <li>AMO Love Potion Pure Juice - 750 ml</li>
              <li>Category: Premium Grape Juice / Sparkling Style</li>
              <li>Character: Fresh, rich, aromatic, celebratory</li>
              <li>Current price: Rp350.000</li>
            </ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-green-700 px-7 py-3 text-base font-semibold text-white transition hover:bg-green-800"
            >
              Buy AMO Juice on WhatsApp
            </a>
          </article>

          <article className="rounded-3xl border border-green-700 bg-green-900 p-8 text-green-50 shadow-sm shadow-green-700/30">
            <h2 className="text-3xl font-bold">Why AMO Pure Juice is Different</h2>
            <p className="mt-4 text-green-100/90">
              Unlike typical 0% alcohol wines that are dealcoholized, AMO Pure Juice is crafted from the ground up as
              a premium pure grape juice. We never add then remove alcohol—we celebrate the grape in its purest form.
            </p>
            <p className="mt-4 text-green-100/90">
              While other brands focus on mimicking wine, we focus on delivering authentic grape character with
              sophisticated flavor complexity. The result is a naturally vibrant taste without the chemical processes
              that can strip away aroma and authenticity.
            </p>
            <p className="mt-4 text-green-100/90">
              AMO Pure Juice is honest, clean, and unapologetically juice—elevating what non-alcoholic beverage
              experiences can be.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 text-center lg:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to order AMO Pure Juice?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-green-900/80">
          Tap the button below and continue your purchase directly on WhatsApp.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-full bg-green-700 px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-800"
        >
          Chat & Buy via WhatsApp
        </a>
        <div className="mt-6 flex justify-center">
          <Image
            src="/halal.avif"
            alt="Halal Certified"
            width={120}
            height={120}
            className="h-auto w-24 drop-shadow-md"
          />
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-amber-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-green-700 px-6 py-3 text-center text-base font-semibold text-white"
        >
          Buy via WhatsApp
        </a>
      </div>
    </main>
  );
}
