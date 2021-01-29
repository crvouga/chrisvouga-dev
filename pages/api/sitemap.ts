import { NextApiHandler } from "next";
import { SitemapStream, streamToPromise } from "sitemap";

// why?
// https://www.reliablesoft.net/robots-txt-seo/
// https://www.reliablesoft.net/sitelinks/#:~:text=Sitelinks%20are%20links%20shown%20below,are%20useful%20to%20the%20user.

// how?
// https://linguinecode.com/post/add-robots-txt-file-sitemaps-nextjs

export const handler: NextApiHandler = async (req, res) => {
  try {
    const hostname = `https://${req.headers.host}`;

    const smStream = new SitemapStream({
      hostname,
    });

    smStream.write({
      url: `/`,
      changefreq: "daily",
      priority: 0.9,
      img: [
        {
          url: `/personal-logo.png`,
          title: "Chris Vouga",
          caption: "Chris Vouga",
        },
      ],
    });

    smStream.end();

    const sitemapOutput = (await streamToPromise(smStream)).toString();

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    res.end(sitemapOutput);
  } catch (error) {
    console.error(error.toString());
    res.send(JSON.stringify(error.toString()));
  }
};

export default handler;
