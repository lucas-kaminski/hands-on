import React from "react";

export default function Head({ title, description, keywords }) {
  return (
    <Head>
      <meta charset="UTF-8" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Lucas Kaminski" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Lucas Kaminski {title && "- " + title} </title>
      <meta name="description" content={description} />
      <link rel="icon" href="" />
    </Head>
  );
}
