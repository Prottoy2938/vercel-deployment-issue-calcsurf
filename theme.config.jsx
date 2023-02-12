import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

// ---
// published: true
// publishedAt: "2020-11-22"
// updatedAt: "2020-11-22"
// title: REST Architecture
// seoTitle: What is Statelessness ?
// summary: The statelessness constraint means that the server does not store any state about the client between requests
// ---

export default {
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`hwdoi.com${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "How Do I"} />
        <meta
          property="og:description"
          content={frontMatter.description || "How Do I"}
        />
      </>
    );
  },
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
    { content: "en", httpEquiv: "Content-Language" },
    { content: "How Do I", name: "apple-mobile-web-app-title" },
    { content: "#fff", name: "msapplication-TileColor" },
    { content: "/ms-icon-144x144.png", name: "msapplication-TileImage" },
  ],
  description: frontMatter.description || "How Do I?",
  openGraph: {
    images: [{ url: frontMatter.image || "hwdoi.com/og.png" }],
  },
  titleTemplate: "%s – How Do You Do",
  twitter: {
    cardType: "summary_large_image",
    site: "hwdoi.com",
  },
};
