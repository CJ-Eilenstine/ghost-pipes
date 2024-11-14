"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LinkPage() {
  const { slug } = useRouter().query;
  const [link, setLink] = useState(null);

  useEffect(() => {
    if (slug) {
      const storedLinks = JSON.parse(localStorage.getItem("links")) || [];
      const foundLink = storedLinks.find((link) => link.slug === slug);
      setLink(foundLink);
    }
  }, [slug]);

  if (!link) {
    return <p>Link not found.</p>;
  }

  return (
    <div>
      <h1>{link.linkText}</h1>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        Visit {link.linkText}
      </a>
    </div>
  );
}
