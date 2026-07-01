// Cloudinary configuration.
// Add your Cloudinary cloudName below to enable dynamic gallery loading.
// Upload gallery images to the folder named in `galleryFolder`.
// Filename convention: "<category>-<slug>.jpg"  (e.g. "wedding-rohit-priya.jpg")
// The prefix before the first "-" becomes the displayed tag/category.

export const cloudinaryConfig = {
  cloudName: "", // TODO: replace with your Cloudinary cloud name
  galleryFolder: "anand-studio-gallery",
};

/**
 * Fetch images from a public Cloudinary folder via the list delivery type.
 * NOTE: In your Cloudinary account, enable "Resource list" delivery type
 * (Settings → Security → uncheck "Restricted media types: resource_list").
 */
export async function fetchCloudinaryGallery() {
  const { cloudName, galleryFolder } = cloudinaryConfig;
  if (!cloudName) return null;
  try {
    const url = `https://res.cloudinary.com/${cloudName}/image/list/${galleryFolder}.json`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.resources?.length) return null;
    return data.resources.map((r) => {
      const filename = (r.public_id || "").split("/").pop() || "";
      const rawCat = filename.split("-")[0] || "Gallery";
      const cat = rawCat.charAt(0).toUpperCase() + rawCat.slice(1);
      const caption = filename
        .replace(/\.[a-z0-9]+$/i, "")
        .split("-")
        .slice(1)
        .join(" ")
        .replace(/\b\w/g, (c) => c.toUpperCase()) || cat;
      return {
        src: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_900/${r.public_id}.${r.format}`,
        cat,
        caption,
      };
    });
  } catch {
    return null;
  }
}