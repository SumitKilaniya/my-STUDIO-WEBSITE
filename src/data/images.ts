// ============================================================================
// ANAND STUDIO — CENTRAL IMAGE CATALOG
// Replace any URL below with your final photo URL (Cloudinary, S3, or direct).
// The site components can import from here to swap photos in one place.
// ============================================================================

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// REPLACE THIS URL WITH YOUR HERO PHOTO
export const HERO_BG = u("1488646953014-85cb44e25828", 2000);

// REPLACE THESE URLS WITH YOUR ABOUT-SECTION PHOTOS
export const ABOUT_IMAGES = {
  primary: u("1500051638674-ff996a0ec29e", 800),
  secondary: u("1502635385003-ee1e6a1a742d", 700),
};

// REPLACE THESE URLS WITH YOUR TEAM PHOTOS
export const TEAM_LEAD_IMAGE = u("1500648767791-00dcc994a43e", 900);

// REPLACE THESE URLS WITH YOUR PORTFOLIO PHOTOS
export const GALLERY_FALLBACK = [
  { src: u("1519741497674-611481863552"), cat: "Weddings", caption: "Sanya & Rohan" },
  { src: u("1583939003579-730e3918a45a"), cat: "Portraits", caption: "Studio Light" },
  { src: u("1511285560929-80b456fea0bc"), cat: "Pre-Wedding", caption: "Golden Hour" },
  { src: u("1492691527719-9d1e07e534b4"), cat: "Events", caption: "Summit Night" },
  { src: u("1502635385003-ee1e6a1a742d"), cat: "Portraits", caption: "Editorial" },
  { src: u("1530103862676-de8c9debad1d"), cat: "Birthdays", caption: "Aria Turns 5" },
];