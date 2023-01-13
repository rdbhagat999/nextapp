export type HeadProps = {
  url: URL;
  title: string | undefined;
  description: string | undefined;
  image?: string;
};

export default function SeoElement({ ...props }: HeadProps) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{props?.title}</title>

      <meta name="title" content={props?.title} />
      <meta name="description" content={props?.description} />

      {/* Theme */}
      {/* <meta name="theme-color" content="#000" /> */}

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props?.url?.href} />
      <meta property="og:title" content={props?.title} />
      <meta property="og:description" content={props?.description} />
      {props?.image && <meta property="og:image" content={props?.image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props?.title} />
      <meta name="twitter:description" content={props?.description} />
      {props?.image && <meta name="twitter:image" content={props?.image} />}
      <meta property="twitter:domain" content={props?.url?.hostname} />
      <meta property="twitter:url" content={props?.url?.href} />
    </>
  );
}
