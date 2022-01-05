import { useEffect, useState } from "react";
import thum from "thum.io";

export const useQueryThumbnail = ({ targetUrl }: { targetUrl: string }) => {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    try {
      const thumUrl = thum.getThumURL({
        url: targetUrl,
        // auth: {
        //   type: "md5",
        //   secret: process.env.THUM_IO_SECRET,
        //   keyId: "500",
        // },
      });

      setSrc(thumUrl);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }, [targetUrl]);

  return {
    status,
    src,
  };
};
