# Online-Shop

MERN Stack Full Ecommerce Site - Using React, Redux, Node.js

## Deployed Version

Live demo (Feel free to visit) 👉 : https://eli-online-shop.herokuapp.com/

## Key Features

* Authentication and Authorization
  - Signup, login and logout
* Dashboard
  - Edit products, orders, users (Only for Admin)
* User profile
  - Update name, email, photo
  - My orders
  - Change password
* Search products by price, categories and ratings
* Cart
* Payment
* Enter the card details (Test Mode):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: 02 / 22
  - CVV: 222

### Home

<img src="https://github.com/EliYakubov7/Online-Shop/blob/main/screenshots/home_page.png" width="700">

### Dashboard

<img src="https://github.com/EliYakubov7/Online-Shop/blob/main/screenshots/dashboard.png" width="700">

### Cart

<img src="https://github.com/EliYakubov7/Online-Shop/blob/main/screenshots/cart.png" width="700">

### Admin Actions

<img src="https://github.com/EliYakubov7/Online-Shop/blob/main/screenshots/admin_actions.png" width="700">

### Payment

<img src="https://github.com/EliYakubov7/Online-Shop/blob/main/screenshots/payment.png" width="700">

### Env Variables

Add your config variables values in the config.env file in backend/config folder as shown in the course.

```
NODE_ENV=
PORT=
FRONTEND_URL=

DB_LOCAL_URI=
DB_URI=
DATABASE_PASSWORD=

JWT_SECRET=
JWT_EXPIRES_TIME=
COOKIE_EXPIRES_TIME=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

STRIPE_SECRET_KEY=
STRIPE_API_KEY=

SMTP_HOST=
SMTP_PORT=
SMTP_EMAIL=
SMTP_PASSWORD=
SMTP_FROM_EMAIL=
SMTP_FROM_NAME=
```

### Install Dependencies (Frontend)

```
cd frontend
npm i
```

### Install Dependencies (Backend)

```
npm i
```

### Seed Database

Use the following commeand to put some dummy products in that database.
Run it in the root folder.

```
npm run seeder
```
