import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "WoodY",
    pic: "/OGRed.png",
    description: "Rosemary, Basil & Amber | India’s Strongest Perfume",
    price: 599,
    category: "luxury",
  },
  {
    name: "Shadow",
    pic: "/OGBlue.png",
    description: "Lavender, Sage & Amber | India’s Strongest Perfume",
    price: 599,
    category: "luxury",
  },
  {
    name: "Gallant",
    pic: "/OGGray.png",
    description: "Petitgrain, Jasmine & Sandalwood | India’s Strongest Perfume",
    price: 599,
    category: "luxury",
  },
  {
    name: "Smokey",
    pic: "/OGOrange.png",
    description: "Whiskey, Oud & Cinnamon | India’s Strongest Perfume",
    price: 599,
    category: "luxury",
  },
  {
    name: "Glow Elixir",
    pic: "https://images.unsplash.com/photo-1680503504076-e5c61901c36d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Turmeric, Aloe Vera & Saffron | Natural Glow Booster",
    price: 499,
    category: "natural",
  },
  {
    name: "Pure Dew Face Mist",
    pic: "https://imgs.search.brave.com/ceUwwnCKOZW0wNQr70c2TBKUFuSNvIfvBzpoBllnXIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2xv/dXJwb3AuY29tL2Nk/bi9zaG9wL2ZpbGVz/L0V3Q1VXLUh3Lmpw/Zz92PTE3NDQ1NjA1/NTAmd2lkdGg9NjIw",
    description: "Rose Water, Witch Hazel & Cucumber | Instant Hydration",
    price: 349,
    category: "natural",
  },
  {
    name: "Neem Detox Gel",
    pic: "https://images.unsplash.com/photo-1737099981626-558a93b5d3a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Neem, Tea Tree & Basil | Purifies Acne-Prone Skin",
    price: 399,
    category: "natural",
  },
  {
    name: "Cocoa Butter Balm",
    pic: "https://images.unsplash.com/photo-1734892495858-1b80d67a585c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cocoa Butter, Shea & Vitamin E | Deep Nourishment",
    price: 299,
    category: "natural",
  },
  {
    name: "Sun Kissed SPF 50",
    pic: "https://images.unsplash.com/photo-1706067501076-b747fe8978aa?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Zinc Oxide, Carrot Seed & Aloe | Mineral Sun Protection",
    price: 549,
    category: "natural",
  },
  {
    name: "Green Tea Serum",
    pic: "https://plus.unsplash.com/premium_photo-1661504705297-92efbb8a34f8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Green Tea, Licorice & Hyaluronic Acid | Soothes & Hydrates",
    price: 449,
    category: "natural",
  },
  {
    name: "Honey Oat Scrub",
    pic: "https://images.unsplash.com/photo-1680128435281-30bf87b50ad5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Raw Honey, Oats & Almond Oil | Gentle Exfoliation",
    price: 379,
    category: "natural",
  },
  {
    name: "Charcoal Clay Mask",
    pic: "https://imgs.search.brave.com/HR15_Ea_AestZgQnpTyI6R6sZmcB5PMOYZLOjiCaZwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFOUmJCKzg1dkwu/anBn",
    description: "Activated Charcoal, Bentonite & Aloe | Deep Pore Cleanse",
    price: 429,
    category: "natural",
  },
  {
    name: "Lavender Sleep Cream",
    pic: "https://imgs.search.brave.com/HTbmCn0QzswsBOmHV9udXv8N8b5NLAkHXKHUlbFeSKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYm9keXNob3Au/Y29tL2Nkbi9zaG9w/L2ZpbGVzL1NMRUVQ/X1JBTkdFXzlfSU5S/T0lQUzU5NC5qcGc_/Y3JvcD1jZW50ZXIm/aGVpZ2h0PTUyNSZ2/PTE3MzY0MTc4OTUm/d2lkdGg9NTI1",
    description: "Lavender, Chamomile & Coconut Milk | Calm & Repair Overnight",
    price: 499,
    category: "natural",
  },
  {
    name: "Papaya Brightening Gel",
    pic: "https://imgs.search.brave.com/Gap1ObM2uay7N491EqsU09A2fXNdWM_X_caIChuxvvo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzJ3aHl3YWl0LmNv/bS9jZG4vc2hvcC9m/aWxlcy8xXzZlY2Q4/MWYzLTNlZmItNGFi/Yi1iNWU5LTMxNmU1/NWZlNjA5Ni5qcGc_/dj0xNzQyMTk2MjE3/JndpZHRoPTE0NDU",
    description: "Papaya, Lemon & Aloe Vera | Fades Tan & Dark Spots",
    price: 389,
    category: "natural",
  },
  {
    name: "Peptide Repair Serum",
    pic: "https://imgs.search.brave.com/ZobzleTPMrc5iLulQ6pwAaNTIySqrc6OssogBkEbRRY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXN0ZWVsYXVkZXIu/Y29tL21lZGlhL2V4/cG9ydC9jbXMvcHJv/ZHVjdHMvNjQweDY0/MC9lbF9za3VfUEc1/MDAxXzY0MHg2NDBf/MC5qcGc",
    description:
      "Matrixyl 3000, Niacinamide & Hyaluronic Acid | Firms & Restores",
    price: 799,
    category: "science",
  },
  {
    name: "Retinol Night Cream",
    pic: "https://imgs.search.brave.com/OxvwUqFAr4SOl4W-bs_YvTzcdEhZIzqIicX_L-mXgc0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFSUFE4bmlhckwu/anBn",
    description:
      "0.3% Retinol, Ceramides & Squalane | Reduces Wrinkles & Fine Lines",
    price: 899,
    category: "science",
  },
  {
    name: "AHA Glow Toner",
    pic: "https://imgs.search.brave.com/3X4T_RfGqqn--l4VZXFrEsdUX0l40i7qla380tFM7Yo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmlt/YXJ5c2tpbi5jby9j/ZG4vc2hvcC9maWxl/cy9JTUdfNTA1NC5q/cGc_dj0xNzIxODM2/NTc4JndpZHRoPTIw/MzU",
    description:
      "5% Glycolic Acid, Lactic Acid & Green Tea | Smoothes & Exfoliates",
    price: 599,
    category: "science",
  },
  {
    name: "Vitamin C Shield",
    pic: "https://imgs.search.brave.com/Q_F41PgjFg4zn0c6pKRzPk7zGe9FNq-qDCP0RtieZiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvc2tpbmJlYXV0/eS5jb20vbWVkaWEv/Y2F0YWxvZy9wcm9k/dWN0L2NhY2hlL2I4/ZjFhZTYzZDRkM2Q5/NGFlMDBjM2FlODk4/ZmZiZDUwL2MvLS9j/LXNoaWVsZF9hbnRp/LXBvbGx1dGlvbl9k/cm9wcy1jbGluaWNh/bHMtcGRwLWdhbGxl/cnkuanBn",
    description:
      "15% L-Ascorbic Acid, Ferulic Acid & Vitamin E | Brightens & Protects",
    price: 849,
    category: "science",
  },
  {
    name: "Hyaluronic Hydration Boost",
    pic: "https://imgs.search.brave.com/FeVdfWoOY81TViJDTRcELmyuM2KCNmuApqYAGiE8Z1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxTUdScVlmRVZM/LmpwZw",
    description:
      "Multi-molecular HA, Panthenol & Glycerin | Deep Skin Hydration",
    price: 499,
    category: "science",
  },
  {
    name: "Salicylic Blemish Fix",
    pic: "https://imgs.search.brave.com/5uhi8_27CAHRIavAXIzCEFaetOrpEPeIaA4HItak_9I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFKZTJJY1UrOEwu/anBn",
    description:
      "2% Salicylic Acid, Zinc & Witch Hazel | Clears Acne & Blackheads",
    price: 549,
    category: "science",
  },
  {
    name: "Barrier Restore Moisturizer",
    pic: "https://imgs.search.brave.com/6yh5IH_H5GyXEo9c7FN-6rd-wX8A0Y0HKfzHIK4D3ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG90YW5ka2V5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9QTy5qcGc_/dj0xNzQ3MzkyNjM3/JHdpZHRoPTMwMA",
    description:
      "Ceramide Complex, Niacinamide & Fatty Acids | Strengthens Skin",
    price: 629,
    category: "science",
  },
  {
    name: "Azelaic Clarity Cream",
    pic: "https://imgs.search.brave.com/_8n9TO1ftyXtZX-nyVP_XLBnT2hz9r_og0GX1YXdFvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzF1VDNWZnFMc0wu/anBn",
    description:
      "10% Azelaic Acid, Allantoin & Vitamin B5 | Fades Redness & Spots",
    price: 699,
    category: "science",
  },
  {
    name: "Cica Repair Gel",
    pic: "https://imgs.search.brave.com/E_tAbyKd4v-iRBm9odMZAqsn6nHRlvdUzd1TCPfBjQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZHJqYXJ0LmNvbS9t/ZWRpYS9leHBvcnQv/Y21zL3Byb2R1Y3Rz/LzYwMHg2MDAvZGpf/c2t1X0gwVE8wMV82/MDB4NjAwXzEuanBn",
    description:
      "Centella Asiatica, Madecassoside & Beta Glucan | Soothes Sensitive Skin",
    price: 499,
    category: "science",
  },
  {
    name: "SPF 60 UV Defense Fluid",
    pic: "https://imgs.search.brave.com/ar4QMLFh52_ynnNUYS1Rpi4qiefntC_jbllutVsXXmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2llaGxzLmNvbS9k/dy9pbWFnZS92Mi9B/QUZNX1BSRC9vbi9k/ZW1hbmR3YXJlLnN0/YXRpYy8tL1NpdGVz/LWtpZWhscy1tYXN0/ZXItY2F0YWxvZy9k/ZWZhdWx0L2R3NTNj/ZjkwZTAvbmV4dGdl/bi9zdW4tY2FyZS9z/dW5zY3JlZW4vZGVy/bWF0b2xvZ2lzdC1z/b2x1dGlvbnMvc3Vw/ZXItZmx1aWQtZGFp/bHktdXYtZGVmZW5z/ZS1zcGYtNTAvRDA1/MTM5ODIlMjAtJTIw/S0hMUyUyMC0lMjBT/RlVWJTIwWCUyME1J/Q1JPRE9TRSUyMHJl/JTIwc3VwcG9ydCUy/MGFsdCUyMGltYWdl/cnklMjAtJTIwSW5n/cmVkaWVudHMlMjAt/JTIwQkctOTQweDk0/MC5qcGc_c3c9MzIw/JnNoPTMyMCZzbT1j/dXQmc2ZybT1qcGcm/cT03MA",
    description:
      "Broad Spectrum SPF 60, Niacinamide & Antioxidants | Lightweight & Non-Greasy",
    price: 749,
    category: "science",
  },
  {
    name: "Radiance Boost Cream",
    pic: "https://imgs.search.brave.com/9p0ubQLZ8rAiSo8jS71No0Qxg4xWNuZPXZA-ct_NSWI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2tpbmNhcmVieWxh/dXJlbnMuY29tL2Nk/bi9zaG9wL2ZpbGVz/LzFfNWFkYWU0MWYt/MmZmOC00ZGFhLTlk/ZmEtMThkYjdiMDMz/NWUyLnBuZz92PTE3/MjkxMDQ3MDkmd2lk/dGg9MTQ0NQ",
    description: "Pearl Extract, Vitamin C & Arbutin | Instant Glow Enhancer",
    price: 649,
    category: "beauty",
  },
  {
    name: "Glass Skin Serum",
    pic: "https://imgs.search.brave.com/uM6Jsil5f7UAz6sAYCEVjFTMgJTT8E5gnHnCeMEOzoI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWxsYW5hY29zbWV0/aWNzLmNvbS9jZG4v/c2hvcC9maWxlcy9N/YWluX0J1bmRsZV9T/ZXRfb2ZfMl9HbGFz/cy1DLnBuZz92PTE3/MzYzMzAyMTgmd2lk/dGg9MTQ0NQ",
    description:
      "Niacinamide, Snow Mushroom & Licorice Root | Dewy Skin Finish",
    price: 799,
    category: "beauty",
  },
  {
    name: "24K Gold Face Gel",
    pic: "https://imgs.search.brave.com/wv54XrFWSFdO75Z9uu1im8SLRVU5lmDxICvHhSwOrEI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFKbkszK21DK0wu/anBn",
    description: "24K Gold, Collagen & Rosehip Oil | Lifts & Illuminates",
    price: 999,
    category: "beauty",
  },
  {
    name: "Blush Berry Lip Balm",
    pic: "https://imgs.search.brave.com/2VWoEvr8ugXN49DIsfJCCp69qa-fvV1S6n4IQLy7I5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Jp/emNlbnRzLmNvbS9j/ZG4vc2hvcC9maWxl/cy81Q0ZBOUNDMi1E/OEUyLTRGMDAtQTA3/NS1FQTEyMzFENkEz/OTQucG5nP3Y9MTcz/OTEzNjgxOCZ3aWR0/aD0xNDQ1",
    description: "Beetroot, Shea Butter & Vitamin E | Natural Tinted Lips",
    price: 299,
    category: "beauty",
  },
  {
    name: "Rosy Cheek Mask",
    pic: "https://imgs.search.brave.com/dIcWhg3zUA8sqa1UbYKeyn2XbzCWAG3_jTHxm2WQBAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sdXNo/LmJnL2ltYWdlL2Nh/dGFsb2cvUHJvZHVj/dHMvQ29udGFpbmVy/cy93ZWJfcm9zeV9j/aGVla3NfZnJlc2hf/ZmFjZV9tYXNrX2xp/ZF8yMDI0LmpwZw",
    description: "French Rose Clay, Aloe & Avocado Oil | Brightens & Firms",
    price: 499,
    category: "beauty",
  },
  {
    name: "Glow Getter Sheet Mask",
    pic: "https://imgs.search.brave.com/pVqg9W_wrY7pSqolNs0gn9gmTdket8pZ-GCLnKyCRak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sdW1p/Z2xvc2tpbi5jby51/ay9jZG4vc2hvcC9m/aWxlcy9Db3B5b2Z0/ZWdhbnNtaXRocGhv/dG9ncmFwaHlfLTYx/XzFfLUVkaXRlZC5q/cGc_Y3JvcD1jZW50/ZXImaGVpZ2h0PTIw/NDgmdj0xNzQ0NzEw/OTAyJndpZHRoPTIw/NDg",
    description: "Hyaluronic Acid, Ginseng & Gold Flakes | 15-Minute Glow Shot",
    price: 199,
    category: "beauty",
  },
  {
    name: "Silk Touch Primer",
    pic: "https://imgs.search.brave.com/03MlkC_GxCWRq4lOdRP5lbpyqI-jxfLewRpkd0tpsik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFMUHByZXVtb0wu/anBn",
    description:
      "Dimethicone, Vitamin E & Glycerin | Blurs Pores & Softens Skin",
    price: 579,
    category: "beauty",
  },
  {
    name: "Under Eye Bright Cream",
    pic: "https://imgs.search.brave.com/uDRX2gGcFh8BVVp9rZoRu0hmZovmBaMQ-GEc1tGUZBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ib29t/YmVhdXR5LmNvbS9j/ZG4vc2hvcC9maWxl/cy9Cb29tX0V5ZUNy/ZWFtX1BEUF8wMS5q/cGc_dj0xNzM4OTE1/NzI1JndpZHRoPTE1/MDA",
    description:
      "Caffeine, Niacinamide & Hyaluronic Acid | Reduces Puffiness & Dark Circles",
    price: 429,
    category: "beauty",
  },
  {
    name: "Glow Milk Cleanser",
    pic: "https://imgs.search.brave.com/GX1u6PLw0VR7p1zcy7B-GQX3ztR4_dlJiBaokA2zh4Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wMTYt/bGVtb244LXNpZ24t/c2cudGlrdG9rY2Ru/LmNvbS90b3MtYWxp/c2ctdi1hM2U0Nzct/c2cvbzhtQkllMTlF/REVTNmdBQWN4VUNm/RmpzWUJRNjBRbFR0/c1A2bEF-dHBsdi1z/ZHdldW1tZDZ2LXNo/cmluazo2NDA6MDpx/NTAud2VicD9sazNz/PTY2YzYwNTAxJnNv/dXJjZT1zZW9fbWlk/ZGxlX2ZlZWRfbGlz/dCZ4LWV4cGlyZXM9/MTc4MTEzNjAwMCZ4/LXNpZ25hdHVyZT1G/MGlOblBINW1JV0ZF/MUd5Z1Y2MWN4TU1E/UDg9",
    description: "Coconut Milk, Almond Oil & Honey | Softens & Brightens Skin",
    price: 389,
    category: "beauty",
  },
  {
    name: "Peach Polish Scrub",
    pic: "https://imgs.search.brave.com/EL_qdDk5NtsUsbIkDaE24WhagTl_qWmXwv6JgSZKCBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzU4Mzg3ODQvci9p/bC83Y2I4MTgvNjAw/Mzc1NjYxMy9pbF83/OTR4Ti42MDAzNzU2/NjEzX2p5Y3IuanBn",
    description:
      "Peach Extract, Walnut Powder & Jojoba Oil | Smooth Radiant Skin",
    price: 399,
    category: "beauty",
  },
  {
    name: "Kumkumadi Tailam",
    pic: "https://imgs.search.brave.com/LVlBhuxLwT0hWltx_gXghSKbWRxR5mchSywDp2DWLO4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzky/MThmODUwLTA5OWQt/NGNiMS1hYWM3LWU2/ODk1Yjc1ZDllZS5f/X0NSNzYsMCwxMTk5/LDE1MDBfUFQwX1NY/MzYyX1YxX19fLmpw/Zw",
    description:
      "Saffron, Sandalwood & Manjistha | Traditional Ayurvedic Glow Oil",
    price: 799,
    category: "ayurveda",
  },
  {
    name: "Neem Tulsi Face Wash",
    pic: "https://imgs.search.brave.com/COdEpSbM-rSjOsBtH6RmBObI2p6uYGDkGxotPFVjhiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Nv/bXBhbnkuaW4vY2Ru/L3Nob3AvZmlsZXMv/MDZfNl8xMXpvbl8w/ZmFmMWFkNi0wYjVh/LTQ4NmMtYjE4My1m/Njg3ZmU5Mjg1NjUu/anBnP3Y9MTc0MDAz/MzU3NQ",
    description: "Neem, Tulsi & Aloe Vera | Balances Oil & Clears Acne",
    price: 349,
    category: "ayurveda",
  },
  {
    name: "Chandan Ubtan",
    pic: "https://imgs.search.brave.com/J3AQ4LifDJycrAhYC9UZTXEKqn33DHWhlLsV_Ftesaw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIzLzcv/MzI5MDM5NTE2L1ZR/L0JIL0dYLzE5MzE2/NDgzNS9kZXNpLXVi/dGFuLWhhbGRpLWNo/YW5kYW4tcG93ZGVy/LTEwMDB4MTAwMC5q/cGc",
    description:
      "Sandalwood, Multani Mitti & Rose | Ayurvedic Brightening Pack",
    price: 399,
    category: "ayurveda",
  },
  {
    name: "Ayur Glow Cream",
    pic: "https://imgs.search.brave.com/Vom637L4ZCFx98rlJ--ybE7koJ9bz302RijyWeEBHcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9heXVy/Z2xvdy5zdG9yZS9j/ZG4vc2hvcC9maWxl/cy9CbGFja19XaGl0/ZV9NaW5pbWFsaXN0/X05ld19Qcm9kdWN0/X05hdHVyYWxfU2tp/bmNhcmVfUHJvbW90/aW9uX0luc3RhZ3Jh/bV9Qb3N0XzEuanBn/P3Y9MTc0NzkzNTc0/NyZ3aWR0aD0xNDQ1",
    description: "Licorice, Turmeric & Almond Oil | Brightens and Softens",
    price: 479,
    category: "ayurveda",
  },
  {
    name: "Ashwagandha Night Balm",
    pic: "https://imgs.search.brave.com/6TBpuX_iU7JZBxXhbb-QbjytP0LAWoMajo75Fe153io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxaDBobTE0UjlM/LmpwZw",
    description: "Ashwagandha, Bala & Sesame Oil | Stress Relief & Skin Repair",
    price: 549,
    category: "ayurveda",
  },
  {
    name: "Methi Under Eye Serum",
    pic: "https://imgs.search.brave.com/sAiljPJjY_-zPgj9EqcWJ5PMOJoAxm0A9ZvIOKoX4hU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnVkZGhhbmF0dXJh/bC5jb20vY2RuL3No/b3AvZmlsZXMvYW50/aWRhcmtjaXJjbGVl/eWVzZXJ1bW1haW5p/bWFnZVJvbGxvbmNv/cHktbWluLW1pbi5q/cGc_dj0xNjg3MDI4/NzY0",
    description:
      "Fenugreek, Almond & Cucumber | Reduces Dark Circles Naturally",
    price: 299,
    category: "ayurveda",
  },
  {
    name: "Bhringraj Face Mist",
    pic: "https://imgs.search.brave.com/icx-OHsgqvT35VhGfkrVylPNCLo7IAFBNjVvhhRjqd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFjR3BQQ1A5ZEwu/anBn",
    description: "Bhringraj, Vetiver & Tulsi | Refreshing & Balancing Tonic",
    price: 319,
    category: "ayurveda",
  },
  {
    name: "Haldi Chandan Sunscreen SPF 30",
    pic: "https://imgs.search.brave.com/wuX7QZEp6awRzsUZYI5Ddtg3MPfLHqr_bU6uvjXiaNg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYXBvbGxvMjQ3/LmluL3B1Yi9tZWRp/YS9jYXRhbG9nL3By/b2R1Y3QvZC9yL2Ry/czAwMzJfMi5qcGc_/dHI9dy0yNjQscS04/MCxmLXdlYnAsZHBy/LWZhbHNlLGMtYXRf/bWF4",
    description: "Turmeric, Sandalwood & Coconut | Natural Sun Protection",
    price: 459,
    category: "ayurveda",
  },
  {
    name: "Triphala Skin Detox Mask",
    pic: "https://imgs.search.brave.com/vE2tT7Pegx3_FodqnHDxVDGhcDGShMYFtc05DPCnMYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZXJi/YWxlZGdlLmNhL2Nk/bi9zaG9wL3Byb2R1/Y3RzLzQucG5nP3Y9/MTY4MTgzODc2MyZ3/aWR0aD0xOTUx",
    description: "Triphala, Clay & Basil | Clears Pores & Enhances Clarity",
    price: 429,
    category: "ayurveda",
  },
  {
    name: "Desi Rose Toner",
    pic: "https://imgs.search.brave.com/E-vljWqSFd7tnHiu1y2tS_gDZ0Em0MQFote2Z00qJsg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGl2ZXRoYXRnbG93/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8xMS9TY3Jl/ZW5zaG90LTIwMjMt/MDctMDMtYXQtMTMx/MzI5LmpwZw",
    description: "Steam Distilled Rose Water & Vetiver | Tones & Cools Skin",
    price: 259,
    category: "ayurveda",
  },
];

const preCardInfoSlice = createSlice({
  name: "preCardInfo",
  initialState,
  reducers: {},
});

export const preCardInfoReducer = preCardInfoSlice.reducer;
export const {} = preCardInfoSlice.actions;