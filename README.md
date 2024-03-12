# ⛏️ Su Zurfuru Mine - Web Application

## 💻 Full Stack Capstone Project

This application allows users to view the main information about **Su Zurfuru**'s mining site. Moreover, users can access the latest news via a blog and check available events for booking. The blog, events and reservations are all manageable through an Admin account. This application was developed using **ReactJS** for the front end part, **Java Spring Boot** for the back end part and **PostgreSQL** for data storage.

## 📋 Functionality

- Display blog posts 📝
- Display available events 📅
- Modal for reservation accessible via "Prenota" button 🎟️
- Access to Admin area through /login route where it's possible to:
  - Create, display, update and delete blog posts with the option to upload an image 🖼️
  - Create, display, update and delete events 📅
  - Display, update and delete reservations 🗂️
  - Create a new Admin user with **JWT token** and display all authorized registered users 🔐

## ⚙️ How to install

This project was developed using **React v.18.2.0** and **Vite v.5.0.8**

1. Download this project from **GitHub** and clone it on your PC
2. Download backend project from [GitHub Repository](https://github.com/NoemiP94/Capstone_be) and clone it on your PC:
   - Open backend project and create an `env.properties` file at the same level of `env.example` file
   - Copy the content of `env.example` file in `env.properties` file and fill in the fields with your data (server port used id 3001)
   - To use this project, it's necessary have a Cloudinary account
   - Run the project
     -- To view API documentation, import the `api_doc.yaml` file into Postman --
    ❗DISCLAIMER: it's necessary create an admin account: you can create in the right table of your database or using the /register endpoint in Postman❗
3. Open frontend project and open a terminal:

Run:

```bash
npm install
```

```bash
npm run dev
```

5. Once the application is started, you can access it in your browers at --> [http://localhost:5173/](http://localhost:5173/)

## 🖊️ Author

Noemi Pusceddu 🦋

🧑‍💻 [LinkedIn](https://www.linkedin.com/in/noemi-pusceddu-developer/)
