import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

// ---
// published: true
// publishedAt: "2020-11-22"
// updatedAt: "2020-11-22"
// title: REST Architecture
// seoTitle: What is Statelessness ?
// summary: The statelessness constraint means that the server does not store any state about the client between requests
//language: en
// ---

export default {
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    console.log("as ", frontMatter);
    // additionalMetaTags: [
    //   {
    //     content: frontMatter.language ? frontMatter.language : "en",
    //     httpEquiv: "Content-Language",
    //   },
    //   { content: "How Do I", name: "apple-mobile-web-app-title" },
    //   { content: "#fff", name: "msapplication-TileColor" },
    //   { content: "/android-chrome-192x192.png", name: "msapplication-TileImage" },
    // ],
    // description: frontMatter.description || "How Do I?",
    // openGraph: {
    //   images: [{ url: frontMatter.image || "https://hwdoi.com/og.jpg" }],
    // },
    // titleTemplate: "%s – How Do I Do?",
    // twitter: {
    //   cardType: "summary_large_image",
    //   site: "https://hwdoi.com",
    // },
    return (
      <>
        <meta property="og:url" content={`https://hwdoi.com${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "How Do I"} />
        <meta
          property="og:description"
          content={frontMatter.description || "How Do I"}
        />
      </>
    );
  },

  useNextSeoProps() {
    const { frontMatter } = useConfig();
    const { asPath } = useRouter();
    console.log(frontMatter);

    return {
      additionalLinkTags: [
        {
          href: "/apple-icon-180x180.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "/android-icon-192x192.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          href: "/favicon-96x96.png",
          rel: "icon",
          sizes: "96x96",
          type: "image/png",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      additionalMetaTags: [
        {
          content: frontMatter.language ? frontMatter.language : "en",
          httpEquiv: "Content-Language",
        },
        { content: "How Do I", name: "apple-mobile-web-app-title" },
        { content: "#fff", name: "msapplication-TileColor" },
        {
          content: "/android-chrome-192x192.png",
          name: "msapplication-TileImage",
        },
      ],
      description: frontMatter.description || "How Do I?",
      openGraph: {
        images: [{ url: frontMatter.image || "https://hwdoi.com/og.jpg" }],
      },
      titleTemplate: "%s – How Do I Do?",
      twitter: {
        cardType: "summary_large_image",
        site: "https://hwdoi.com",
      },
    };
  },
  additionalLinkTags: [
    {
      href: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    {
      href: "/android-chrome-192x192.png",
      rel: "icon",
      sizes: "192x192",
      type: "image/png",
    },
    {
      href: "/favicon-96x96.png",
      rel: "icon",
      sizes: "96x96",
      type: "image/png",
    },
    {
      href: "/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
    },
    {
      href: "/favicon-16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
    },
  ],

  i18n: [
    { locale: "af", text: "Afrikaans" },
    { locale: "ak", text: "Akan" },
    { locale: "sq", text: "Albanian" },
    { locale: "am", text: "Amharic" },
    { locale: "ar", text: "Arabic", direction: "rtl" },
    { locale: "hy", text: "Armenian" },
    { locale: "as", text: "Assamese" },
    { locale: "ay", text: "Aymara" },
    { locale: "az", text: "Azerbaijani" },
    { locale: "bm", text: "Bambara" },
    { locale: "eu", text: "Basque" },
    { locale: "be", text: "Belarusian" },
    { locale: "bn", text: "Bengali" },
    { locale: "bho", text: "Bhojpuri" },
    { locale: "bs", text: "Bosnian" },
    { locale: "bg", text: "Bulgarian" },
    { locale: "ca", text: "Catalan" },
    {
      locale: "ceb",
      text: "Cebuano",
    },
    { locale: "ny", text: "Chichewa" },
    { locale: "zh", text: "Chinese (Simplified)" },
    { locale: "co", text: "Corsican" },
    { locale: "hr", text: "Croatian" },
    { locale: "cs", text: "Czech" },
    { locale: "da", text: "Danish" },
    { locale: "dv", text: "Divehi" },
    { locale: "doi", text: "Dogri" },
    { locale: "nl", text: "Dutch" },
    { locale: "en", text: "English" },
    { locale: "eo", text: "Esperanto" },
    { locale: "et", text: "Estonian" },
    { locale: "ee", text: "Ewe" },
    { locale: "tl", text: "Filipino" },
    { locale: "fi", text: "Finnish" },
    { locale: "fr", text: "French" },
    {
      locale: "fy",
      text: "Frisian",
    },
    { locale: "gl", text: "Galician" },
    { locale: "lg", text: "Ganda" },
    { locale: "ka", text: "Georgian" },
    { locale: "de", text: "German" },
    {
      locale: "gom",
      text: "Goan Konkani",
    },
    { locale: "el", text: "Greek" },
    { locale: "gn", text: "Guarani" },
    { locale: "gu", text: "Gujarati" },
    {
      locale: "ht",
      text: "Haitian Creole",
    },
    { locale: "ha", text: "Hausa" },
    { locale: "haw", text: "Hawaiian" },
    { locale: "iw", text: "Hebrew" },
    { locale: "hi", text: "Hindi" },
    { locale: "hmn", text: "Hmong" },
    { locale: "hu", text: "Hungarian" },
    { locale: "is", text: "Icelandic" },
    { locale: "ig", text: "Igbo" },
    { locale: "ilo", text: "Iloko" },
    { locale: "id", text: "Indonesian" },
    { locale: "ga", text: "Irish" },
    { locale: "it", text: "Italian" },
    { locale: "ja", text: "Japanese" },
    {
      locale: "jv",
      text: "Javanese",
    },
    {
      locale: "kn",
      text: "Kannada",
    },
    { locale: "kk", text: "Kazakh" },
    { locale: "km", text: "Khmer" },
    { locale: "rw", text: "Kinyarwanda" },
    { locale: "ko", text: "Korean" },
    { locale: "kri", text: "Krio" },
    {
      locale: "ku",
      text: "Kurdish (Kurmanji)",
    },
    { locale: "ckb", text: "Kurdish (Sorani)" },
    { locale: "ky", text: "Kyrgyz" },
    { locale: "lo", text: "Lao" },
    { locale: "la", text: "Latin" },
    { locale: "lv", text: "Latvian" },
    { locale: "ln", text: "Lingala" },
    { locale: "lt", text: "Lithuanian" },
    { locale: "lb", text: "Luxembourgish" },
    { locale: "mk", text: "Macedonian" },
    { locale: "mai", text: "Maithili" },
    {
      locale: "mg",
      text: "Malagasy",
    },
    { locale: "ms", text: "Malay" },
    {
      locale: "ml",
      text: "Malayalam",
    },
    { locale: "mt", text: "Maltese" },
    { locale: "mi", text: "Maori" },
    { locale: "mr", text: "Marathi" },
    { locale: "lus", text: "Mizo" },
    { locale: "mn", text: "Mongolian" },
    {
      locale: "my",
      text: "Myanmar (Burmese)",
    },
    { locale: "ne", text: "Nepali" },
    {
      locale: "nso",
      text: "Northern Sotho",
    },
    { locale: "no", text: "Norwegian" },
    { locale: "or", text: "Odia (Oriya)" },
    { locale: "om", text: "Oromo" },
    { locale: "ps", text: "Pashto" },
    { locale: "fa", text: "Persian" },
    { locale: "pl", text: "Polish" },
    { locale: "pt", text: "Portuguese" },
    { locale: "pa", text: "Punjabi" },
    { locale: "qu", text: "Quechua" },
    { locale: "ro", text: "Romanian" },
    { locale: "ru", text: "Russian" },
    { locale: "sm", text: "Samoan" },
    { locale: "sa", text: "Sanskrit" },
    {
      locale: "gd",
      text: "Scots Gaelic",
    },
    { locale: "sr", text: "Serbian" },
    { locale: "st", text: "Sesotho" },
    { locale: "sn", text: "Shona" },
    { locale: "sd", text: "Sindhi" },
    { locale: "si", text: "Sinhala" },
    { locale: "sk", text: "Slovak" },
    { locale: "sl", text: "Slovenian" },
    { locale: "so", text: "Somali" },
    { locale: "es", text: "Spanish" },
    { locale: "su", text: "Sundanese" },
    { locale: "sw", text: "Swahili" },
    { locale: "sv", text: "Swedish" },
    { locale: "tg", text: "Tajik" },
    { locale: "ta", text: "Tamil" },
    {
      locale: "tt",
      text: "Tatar",
    },
    { locale: "te", text: "Telugu" },
    { locale: "th", text: "Thai" },
    { locale: "ti", text: "Tigrinya" },
    { locale: "ts", text: "Tsonga" },
    { locale: "tr", text: "Turkish" },
    { locale: "tk", text: "Turkmen" },
    { locale: "uk", text: "Ukrainian" },
    { locale: "ur", text: "Urdu" },
    { locale: "ug", text: "Uyghur" },
    { locale: "uz", text: "Uzbek" },
    { locale: "vi", text: "Vietnamese" },
    { locale: "cy", text: "Welsh" },
    { locale: "xh", text: "Xhosa" },
    { locale: "yi", text: "Yiddish" },
    { locale: "yo", text: "Yoruba" },
    { locale: "zu", text: "Zulu" },
  ],
};
