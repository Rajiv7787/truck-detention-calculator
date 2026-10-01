import type { MetadataRoute } from "next";
import { toolConfig } from "@/lib/tool-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${toolConfig.url}/sitemap.xml`,
  };
}