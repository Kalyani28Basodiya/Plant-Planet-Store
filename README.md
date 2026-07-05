
# 🌿 Plant Planet Store

A full-stack e-commerce web app for buying plants online — with real authentication, cart, and payments.

🔗 **Live Demo:** https://plant-planet-store.vercel.app

---

## 📸 Screenshots

> *(Add your screenshots here)*

---

## 🤔 Why I Built This

Most plant shopping websites are cluttered and confusing. I wanted to build a clean, minimal plant store with real backend features — not just a static UI. Every feature here is connected to a real database and real payment gateway.

---

## ✨ Features

- 🔐 Register & Login with secure password hashing (bcrypt)
- 🛒 User-specific cart — each user has their own cart
- 🌱 Browse plants by category with filters
- 📦 Product detail page with quantity selector
- 💳 Razorpay payment gateway integration
- 🧾 Orders saved to MongoDB after payment
- 👤 Profile page with order history
- 📱 Responsive design

---

## 🛠️ Tech Stack

| Frontend | Auth | Database | Payment | Deploy |
|----------|------|----------|---------|--------|
| Next.js 15 | NextAuth.js | MongoDB Atlas | Razorpay | Vercel |
| TypeScript | JWT Sessions | Mongoose | — | — |
| Tailwind CSS | bcryptjs | — | — | — |
| TanStack Query | — | — | — | — |
| Zustand | — | — | — | — |

---

## 🧠 Technical Challenges I Faced

### 1. User-Specific Cart
Zustand cart store was using a fixed localStorage key `cart-storage` — so all users shared the same cart. Fixed it by creating a dynamic key `cart-{email}` so every user gets their own isolated cart.

### 2. Mongoose Model Caching
After changing the Order schema's `id` field from `Number` to `String`, the old compiled model was cached in memory. Had to delete the cached model and recreate it to apply the new schema.

### 3. Order Saving After Payment
Razorpay's `handler` function is not async by default. Had to convert it to async and add a POST call to `/api/orders` inside the handler — only redirecting to success page after the order was confirmed saved in MongoDB.

### 4. Session Timing Issue
`useSession` loads after component renders, so `session?.user?.name` was empty when initializing `useState` — causing `userName` validation errors in MongoDB. Fixed using `useEffect` to set name once session loads.

---

## 🚀 Future Improvements

- [ ] Admin dashboard to manage orders
- [ ] Order status tracking (pending → shipped → delivered)
- [ ] Email confirmation after order
- [ ] Wishlist feature
- [ ] Search functionality
- [ ] Mobile app with React Native

---

## ⚙️ Setup & Installation

```bash
git clone https://github.com/Kalyani28Basodiya/Plant-Planet-Store.git
cd Plant-Planet-Store
npm install
```

Create `.env.local`:

```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
```

```bash
npm run dev
```

---

## 👩‍💻 Built by Kalyani Basodiya
