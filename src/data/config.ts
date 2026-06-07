import type { Config } from "@/types/config";

const config: Config = {
  title: "Blaze Brand | Premium Vaping Experience",
  description: {
    long: "Blaze Brand crafts premium vaping devices and e-liquids designed for exceptional flavor, smooth performance, and modern lifestyle. Experience bold flavors, cutting-edge technology, and unmatched quality with every puff. From disposable vapes to advanced pod systems and box mods — we elevate your vaping journey.",
    short: "Premium vaping devices and e-liquids delivering bold flavor and exceptional performance.",
  },
  keywords: [
    "Blaze Brand",
    "Blaze Vapes",
    "Premium Vapes",
    "Disposable Vapes",
    "Pod Systems",
    "Box Mods",
    "E-Liquids",
    "Vape Juice",
    "Vaping Experience",
    "Best Vapes 2026",
    "Flavored Vapes",
    "Nicotine Vapes",
    "Vape Accessories",
    "Mango Ice",
    "Blue Razz",
    "Watermelon Vape",
    "Vape Shop",
    "Premium Vape Brand",
  ],
  author: "Blaze Brand",
  email: "hello@blazebrand.com",
  site: "https://blazebrand.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    instagram: "https://www.instagram.com/blazebrand/",
    tiktok: "https://www.tiktok.com/@blazebrand",
    facebook: "https://facebook.com/blazebrand",
    github: "https://github.com/blazebrand",
    linkedin: "https://linkedin.com/company/blazebrand",
    upwork: "https://www.upwork.com/freelancers/~your-profile",
  },
};

export { config };