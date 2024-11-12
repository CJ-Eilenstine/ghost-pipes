"use client";
import referenceStyles from "./references.module.css";
import { useEffect, useState } from "react";

export default function References() {
  // Form Code
  function generateSlug(text) {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  }

  // Handle Form Submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const url = event.target.url.value; // Assuming 'url' is the input name for URL
    const linkText = event.target.linkText.value; // Assuming 'linkText' is the input name for link text
    const slug = generateSlug(linkText);

    const newLink = { url, linkText, slug };

    console.log(newLink);

    const existingLinks = JSON.parse(localStorage.getItem("links")) || [];

    existingLinks.push(newLink);

    console.log(existingLinks);

    localStorage.setItem("links", JSON.stringify(existingLinks));
    setLinks(existingLinks);

    // Reset form inputs
    event.target.reset();
  };

  // Listing Links
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links")) || [];
    setLinks(storedLinks);
  }, []);

  return (
    <main>
      <div className={referenceStyles.refrenceList}>
        <h1>Our References</h1>
        <ul>
          <li>
            <a href="https://www.homeopathyschool.com/the-school/provings/indian-pipe/">
              The homeopathic proving of Ghost Pipe (Monotropa Uniflora)- School
              of Homeopathy
            </a>
          </li>
          <li>
            <a href="https://www.fs.usda.gov/wildflowers/plant-of-the-week/monotropa_uniflora.shtml">
              US Forest Service
            </a>
          </li>
          <li>
            <a href="https://mdc.mo.gov/discover-nature/field-guide/ghost-pipe-indian-pipe">
              Missouri Department of Conservation
            </a>
          </li>
        </ul>
        <div className={referenceStyles.userSection}>
          <div className={referenceStyles.userList}>
            <h3>User Added Resources!</h3>
            <ul>
              {links.map((link) => (
                <li key={link.slug}>
                  <a href={link.url} target="_blank">
                    {link.linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={referenceStyles.resourceFormHolder}>
            <h3>Any Resources to Add?</h3>
            <p>If you have more resources on Ghost Pipes, Add them below!</p>
            <form
              onSubmit={handleFormSubmit}
              className={referenceStyles.resourceForm}
            >
              <input
                type="URL"
                name="url"
                placeholder="Insert URL..."
                required
              />
              <input
                type="text"
                name="linkText"
                placeholder="Link Text..."
                required
              />
              <button type="submit">Add Link</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
