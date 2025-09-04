"use client";

import { useEffect } from 'react';

interface InstagramEmbedProps {
  embedCode: string;
}

const InstagramEmbed = ({ embedCode }: InstagramEmbedProps) => {
  useEffect(() => {
    // The Instagram embed script needs to be re-run to find and process new embeds.
    // It's usually available on the window object after the first load.
    // @ts-ignore
    if (window.instgrm) {
      // @ts-ignore
      window.instgrm.Embeds.process();
    } else {
      // If the script isn't loaded, we create and append it to the body.
      const script = document.createElement('script');
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      // Clean up the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [embedCode]); // This effect runs when the embedCode prop changes

  // We use dangerouslySetInnerHTML because the code from Instagram is trusted HTML.
  return <div dangerouslySetInnerHTML={{ __html: embedCode }} />;
};

export default InstagramEmbed;