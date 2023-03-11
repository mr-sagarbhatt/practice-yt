<samp>

# POS (Point of sale) System:

### **point of sale :**

    a place where something is sold to the public, or the place where someone pays for something: It is wise to use the POS computer only for sales transactions, reports, and inventory control.

- basically a software build for shop or hotel counters to track the sales

[**_Difference between POS (Point of sale) vs POP (Point of purchase) System - feedough_**](https://www.feedough.com/point-of-purchase-pop/)

---

## pos for restaurant:

**_Functional Requirements:_**

- Login -> for restaurant staff(diff roles and permissions)
- Menu -> for food items
- Table view -> View of all tables(unique no for all tables) so that we can add the items for the customer
- KOT (kitchen order token) -> For order, comment for special instructions
- Bill -> comment for special instructions
- QR code on the table
- order
- Payment
- eBill -> pdf
- inventory
- Total sale for the day
- Categorize the items
- voucher/discount/coupon
- admin panel

**_Non Functional Requirements:_**

- Application should work without internet _(PWA-Progressive web apps)_
- Database to persist local data - like _service worker cache_ or _index db_ or _sqlite_ or _redux persist_
- Caching
- Sync data with server db?
- Installable (PWA)

[**_IndexedDB - MDN_**](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

**_tech stack:_**

- Typescript
- React
- Tailwind/Ant design/ MUI

---

<br />

# PWA (Progressive Web Apps)

[**_PWA - MDN_**](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

[**_PWA - quora_**](https://www.quora.com/Do-all-progressive-web-apps-PWA-work-offline)

- Application can work without internet but required internet to load first time
- Uses **_service workers_**
- Installable - asks to install on browser and open in a popup, So it work faster as **_native apps_**(platform specific apps)

[**_Service Worker - MDN_**](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

    IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data.

</samp>
