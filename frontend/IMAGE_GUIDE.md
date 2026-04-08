# 📸 Image Replacement & Sourcing Guide
## Freeway Agro Limited Website Redesign

This guide explains where images are currently used (with placeholder URLs) and what real images need to be sourced from your existing website or provided by the client.

---

## 🎯 CRITICAL IMAGE LOCATIONS

### 1. **Logo** (`/public/logo.png`)
**Current Status:** Must exist and be high-quality  
**Location in Site:** Navbar (sticky header) + Footer + Hero (optional)  
**Recommended specs:**
- Format: SVG (preferred) or high-quality PNG
- Size: 200x60px minimum
- Requirements: Must be crisp, clear, professional quality
- Action: Replace the current logo with the high-quality one from tractor platform

**Implementation:**
```jsx
// In Navbar.jsx and Footer.jsx
<Image
  src="/logo.png"
  alt="Freeway Agro Limited"
  width={568}
  height={572}
  priority
  className="h-full w-auto object-contain"
/>
```

---

### 2. **Homepage Hero Image** (page.js)
**Current URL:** `https://images.unsplash.com/photo-1598515214211-89d3c73ae83b`  
**Location:** Full-width hero banner at top of homepage  
**Desired Content:** 
- Cassava farm/fields
- Farming machinery in action
- Agricultural landscape
- Processing facility (if available)

**Recommended specs:**
- Dimensions: 1800x1200px minimum
- Format: JPG/PNG optimized
- Style: Authentic agricultural, professional
- Feel: Wide-open farmland or modern farming operation

**How to replace:**
```jsx
// In app/page.js (Hero component)
<Hero
  image="YOUR_NEW_IMAGE_URL_HERE"
  ...
/>
```

---

### 3. **About Page Hero Image**
**Current URL:** `https://images.unsplash.com/photo-1552664730-d307ca884978`  
**Location:** Hero section on About page  
**Desired Content:**
- Processing facility interior
- Cassava handling/sorting
- Team at work
- Modern industrial clean environment

**Recommended specs:**
- Dimensions: 1800x1200px
- Format: JPG/PNG
- Professional, trustworthy feel
- Clean, organized space

---

### 4. **About Page Content Image (Side-by-side section)**
**Current URL:** `https://images.unsplash.com/photo-1593113630400-ea4288922497`  
**Location:** About page, text + image grid  
**Desired Content:**
- Freeway Agro facility/premises
- Team photo
- Processing equipment
- Operations area

**Recommended specs:**
- Dimensions: 640x480px
- Square-ish ratio preferred for grid layout
- Professional quality
- Shows company capability/professionalism

```jsx
// In app/about/page.js
<Image
  src="YOUR_CONTENT_IMAGE_HERE"
  alt="Freeway Agro facility and team"
  width={640}
  height={480}
  ...
/>
```

---

### 5. **Contact Page Hero Image**
**Current URL:** `https://images.unsplash.com/photo-1552664730-d307ca884978`  
**Location:** Contact page hero  
**Desired Content:**
- Welcoming farm scene
- Team communication/meeting
- Open field with sky
- Modern agricultural setting

---

## 📋 IMAGE CHECKLIST

### Source Images From:
- [ ] **Current Website** (https://www.freewayagro.com/) - Extract existing images
- [ ] **Local Files** - Check if client provided images
- [ ] **Real Facility/Operations** - Photography of actual:
  - [ ] Farms where cassava is grown
  - [ ] Processing facility interior/exterior
  - [ ] Team members at work
  - [ ] Machinery in operation
  - [ ] Final products
  - [ ] Packaging

### For Each Image:
- [ ] Verify authenticity (real company assets)
- [ ] Check resolution (minimum 1800x1200px for hero images)
- [ ] Optimize file size (use tools like TinyPNG)
- [ ] Add meaningful alt text
- [ ] Ensure proper licensing (if needed)

---

## 🔄 REPLACING PLACEHOLDER IMAGES

### Quick Replace Instructions:

#### Option 1: Direct URL Replacement
```jsx
// Change this:
image="https://images.unsplash.com/photo-..."

// To this:
image="/images/homepage-farm.jpg"
// OR
image="https://your-cdn.com/images/homepage-farm.jpg"
```

#### Option 2: Upload to Public Directory
1. Place image files in `/public/images/` folder
2. Reference them as:
```jsx
image="/images/your-image-name.jpg"
```

#### Option 3: Use External CDN
Upload to Cloudinary, Vercel Blob, or similar:
```jsx
image="https://your-cdn-url/image-name.jpg"
```

---

## 🎨 IMAGE OPTIMIZATION REQUIREMENTS

### For Web Performance:
- **Format:** JPG for photos, PNG for graphics
- **Compression:** Use Next.js Image component (already in code)
- **Max file size:** <500KB per hero image
- **Responsive:** Images work on mobile, tablet, desktop

### Current Implementation (Already Optimized):
```jsx
import Image from "next/image";

<Image
  src={imageUrl}
  alt="Descriptive alt text"
  width={1800}
  height={1200}
  className="w-full h-full object-cover"
  priority  // For hero images
  quality={85}  // Balanced quality/size
/>
```

---

## 📍 SPECIFIC PAGES & IMAGES

| Page | Component | Current URL | Desired Content | Action |
|------|-----------|-------------|-----------------|--------|
| Homepage | Hero | Unsplash #1598515214211... | Cassava farm/fields | REPLACE |
| Homepage | Company Overview | Unsplash #1593113630400... | Facility/team | REPLACE |
| About | Hero | Unsplash #1552664730-d307ca | Modern farm | REPLACE |
| About | Story Section | Unsplash #1593113630400... | Freeway facility | REPLACE |
| Contact | Hero | Unsplash #1552664730-d307ca | Welcoming scene | REPLACE |
| All Pages | Logo | /logo.png | Company logo | VERIFY |

---

## ✅ QUALITY CHECKLIST BEFORE LAUNCH

- [ ] All images are from authentic sources (real company/farms)
- [ ] Logo is high-quality, crisp, professional
- [ ] Hero images are 1800px+ wide
- [ ] All images optimized for web (<500KB)
- [ ] Images convey trust/professionalism
- [ ] Agricultural/earthy aesthetic maintained
- [ ] Images visible on mobile (responsive)
- [ ] Page load time acceptable (test with Lighthouse)
- [ ] No broken image links
- [ ] Alt text is descriptive

---

## 🚀 NEXT STEPS

1. **Gather Images:** Collect all real images from website + facility
2. **Organize:** Create `/public/images/` folder structure:
   ```
   /public/images/
   ├── hero/
   │   ├── homepage.jpg
   │   ├── about.jpg
   │   └── contact.jpg
   ├── content/
   │   └── about-facility.jpg
   └── products/
   ```
3. **Optimize:** Use TinyPNG or ImageOptim to reduce file sizes
4. **Replace:** Update image URLs in each page's component
5. **Test:** Check all pages load correctly
6. **Verify:** Ensure images display correctly on all devices

---

## 💡 TIPS FOR BEST RESULTS

- Use **real company images** instead of stock photos for authenticity
- Show **people at work** to build trust
- Include **facility/equipment** to demonstrate capability
- Use **consistent lighting/style** across images
- Maintain **agricultural aesthetic** (earthy tones, natural lighting)
- Ensure **consistent branding** between images

---

## 📞 SUPPORT

If you have questions about image specs or need help with implementation, check:
- Next.js Image documentation: https://nextjs.org/docs/app/api-reference/components/image
- Image optimization tools: https://tinypng.com
- This project's component structure for image usage patterns

