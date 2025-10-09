# 🏦 Bank Management Web Application

A web-based platform built using **React**, **Spring Boot**, and **PostgreSQL**, designed to manage essential **banking operations** efficiently.  
It enables users to **create accounts**, **deposit**, **withdraw**, and **manage account details** through a secure and interactive interface.

---

## 📋 Features

* ✅ **React frontend** for a smooth and responsive user experience  
* ✅ **Spring Boot backend** handling authentication and transaction APIs  
* ✅ **PostgreSQL database** to store account and transaction details securely  
* ✅ **RESTful APIs** for efficient communication between frontend and backend  
* 🚀 **Future Enhancements**: Transaction History, Loan Management, and Analytics Dashboard  

---

## 🛠 Prerequisites

Make sure the following tools are installed before setting up the project:

* **Java 17+** → [Download](https://adoptium.net/)  
* **PostgreSQL** → [Download](https://www.postgresql.org/download/)  
* **Node.js & npm** → [Download](https://nodejs.org/)  
* **Spring Boot CLI (Optional)** → [Guide](https://spring.io/guides/gs/spring-boot/)  

---

## 🚀 Installation & Setup

### 🔹 Step 1: Clone the Repository

```sh
git clone https://github.com/Sandeep-G-S/Bank-Management-Web-Application.git
````

### 🔹 Step 2: Configure the Database

1. Open **PostgreSQL** and create a new database:

   ```sql
   CREATE DATABASE bankDb;
   ```
2. Update **application.properties** in the backend directory:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/bankDb
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

---

### 🔹 Step 3: Run the Backend

```sh
cd backend
mvn spring-boot:run
```

The backend runs on **[http://localhost:8080](http://localhost:8080)**

---

### 🔹 Step 4: Run the Frontend

```sh
cd frontend
npm install
npm start
```

The frontend runs on **[http://localhost:5174](http://localhost:5174)**

---

## 📷 Application Flow

| **Dashboard** | **Deposit** | **Withdraw** |
|----------------|--------------|---------------|
| ![Dashboard](img1.png) | ![Deposit](img2.png) | ![Withdraw](img3.png) |

| **Delete Account** | **Create Account** |
|---------------------|--------------------|
| ![Delete Account](img4.png) | ![Create Account](img5.png) |
