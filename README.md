# DentalFlow HQ

**Patients Trusted Dental Partners**

A dental care ecosystem built for Nigeria and Africa — connecting patients, clinics, and dental professionals in one platform.

---

## What is this?

DentalFlow HQ is an MVP prototype with three fully interactive portals:

- **Patient portal** — find clinics, book appointments, manage your health profile, access care guides
- **Clinic portal** — manage bookings, schedules, patient records, staff, vacancies and revenue
- **Professionals portal** — find jobs, take gigs, offer home visits, track earnings (MDCN / DTHRBN / DTRBN registered)

---

## Live demo

Deploy instantly to GitHub Pages (see below) or Vercel.

---

## Project structure

```
dentalflow-hq/
├── index.html        # Full platform — all three portals wired together
├── css/
│   └── styles.css    # Global styles
├── js/
│   └── app.js        # Navigation & interaction logic
├── assets/
│   └── logo.svg      # DentalFlow HQ logo (SVG)
└── README.md
```

---

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://yourusername.github.io/dentalflow-hq`

## Deploy to Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project** and import this repo
3. Leave all settings as default and click **Deploy**
4. Live in ~60 seconds ✓

---

## Nigerian regulatory bodies supported

| Role | Regulator |
|---|---|
| Dental Surgeon | MDCN (Medical & Dental Council of Nigeria) |
| Therapist / Hygienist | DTHRBN |
| Dental Technologist | DTRBN |

---

## Brand

- **Primary dark:** `#0D1B3E` (navy)
- **Patient accent:** `#534AB7` (purple)
- **Clinic accent:** `#185FA5` (blue)
- **Professional accent:** `#3B6D11` (green)
- **Currency:** Nigerian Naira (₦)

---

## Next steps (production build)

- [ ] Add real authentication (Supabase Auth)
- [ ] Connect a database (Supabase or Firebase)
- [ ] Integrate Paystack or Flutterwave for ₦ payments
- [ ] Build native mobile apps (React Native)
- [ ] MDCN / DTHRBN / DTRBN licence verification API

---

*Built with DentalFlow HQ MVP prototype — March 2026*
