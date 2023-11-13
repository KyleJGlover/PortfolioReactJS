// Coffee Break Images
import Coffee_Login from '../../images/Slideshow_images/Coffee_Break_images/Login_Registration_Coffee_Break.png';
import Drink_Selection from '../../images/Slideshow_images/Coffee_Break_images/Drink_Selection_Coffee_Break.png';
import Group_Order from '../../images/Slideshow_images/Coffee_Break_images/Group_Order_Coffee_Order.png';
import Order_Selection from '../../images/Slideshow_images/Coffee_Break_images/Order_Selection_Coffee_Break.png';
import Mapping from '../../images/Slideshow_images/Coffee_Break_images/Mapping_Coffee_Break.png';

// // myQuizzes Images
// import Quiz_Login from '../../images/Slideshow_images/MyQuizzes_images/Login.png';
// import Quiz_Registration from '../../images/Slideshow_images/MyQuizzes_images/Registration.png';
// import Quiz_Main from '../../images/Slideshow_images/MyQuizzes_images/Main.png';
// import Quiz_Quiz from '../../images/Slideshow_images/MyQuizzes_images/Quiz.png';

// Django Images
import Dash_Customer_Register from '../../images/Slideshow_images/Django_Dashboard_images/Customer_Registration.PNG';
import Dash_Admin_Dashboard from '../../images/Slideshow_images/Django_Dashboard_images/Dashboard.PNG';
import Dash_Login from '../../images/Slideshow_images/Django_Dashboard_images/Login.PNG';
import Dash_Register from '../../images/Slideshow_images/Django_Dashboard_images/Registration.PNG';

import Dash_Non_Admin from '../../images/Slideshow_images/Django_Dashboard_images/Non_Admin.PNG';
import Dash_Products from '../../images/Slideshow_images/Django_Dashboard_images/products.PNG';
import Dash_Tags from '../../images/Slideshow_images/Django_Dashboard_images/tags.PNG';
import Dash_Customer_Dashboard from '../../images/Slideshow_images/Django_Dashboard_images/User_Profile.PNG';
import Dash_Profile_Page from '../../images/Slideshow_images/Django_Dashboard_images/UserProfilePage.PNG';

// Plantings Images
import Plantings_Main from '../../images/Slideshow_images/Plantings_images/Plantings-Main.png';
import Plantings_Login from '../../images/Slideshow_images/Plantings_images/Login.jpeg';
import Plantings_SignUp from '../../images/Slideshow_images/Plantings_images/SignUp.jpeg';
import Plantings_Orders from '../../images/Slideshow_images/Plantings_images/Orders.jpeg';
import Plantings_Payments from '../../images/Slideshow_images/Plantings_images/Payment.jpeg';
import Plantings_Orders_Normal from '../../images/Slideshow_images/Plantings_images/OrdersNormal.jpeg';
import Plantings_Create_Plant from '../../images/Slideshow_images/Plantings_images/CreatePlant.jpeg';
import Plantings_Display_Plant from '../../images/Slideshow_images/Plantings_images/DisplayPlant.jpeg';


export const projectData = [
    {
      image:[Coffee_Login, Drink_Selection, Group_Order, Order_Selection, Mapping],
      title: "Coffee Break",
      description: "An iOS application GUI written in Swift UI. Restful Web API written in python using\
       the flask framework and using the Object relational Mapper SQLAlchemy created and stored data to\
         MySQL database. Stores and displays user constructed Coffee drinks, allowing users to manage \
         and create group orders for coffee drinks. For this Project documentation was written for the\
          OCD, SRS, STP, SDD, and User Manual was developed by my team.",
      github:"https://github.com/KyleJGlover/CoffeeBreakApp/tree/main",
      API: "https://github.com/KyleJGlover/Coffee_Break_API"
    },
    {
      image:[Dash_Customer_Register, Dash_Admin_Dashboard, Dash_Login, Dash_Register, Dash_Non_Admin, Dash_Products, Dash_Tags, Dash_Customer_Dashboard, Dash_Profile_Page],
      title: "Django Admin Dashboard",
      description: "A simple admin dashboard web application using the Django Framework \
       with authentication. On the site a user can make customer accounts that can receive\
        orders from a list products. These orders can be in multiple states of delivery (ex. \
          pending, out for delivery, Delivered). These orders can be filtered through on a multiple\
           criteria such as date created, product name, status. You can view user information and update this \
          information at any time. This dashboard uses the Django Framework to combine the tools \
          used in python with html for the front end. The styling for the webpage used Bootstrap/CSS.\
           The dashboard is supported by various APIs witten using Django standards of REST. Storage is\
            handled on AWS RDS instance for the Postgres. For image storage I used an Amazon S3 instance.",
      github:"https://github.com/KyleJGlover/CompanyDashboard"
    },
    {
      image:[Plantings_Main, Plantings_Login, Plantings_SignUp, Plantings_Orders, Plantings_Payments, Plantings_Orders_Normal, Plantings_Create_Plant, Plantings_Display_Plant],
      title: "Plantings",
      description: "A simple e-commerce site that was developed using a microservice architecture. On the site a user you can sign up, sign in, and post any kind of plant for sale. The website supports a payment service run by the Stripe API. This website is running on a Kubernetes cluster with pods built using Docker containers and is hosted by digital ocean. This repository is connected to my account on digital ocean and will initiate an action whenever there is push/merge to the Master repository using GitHub actions. Built the entire site as a personal project",
      github:"https://github.com/KyleJGlover/plantings_production",
      website: "https://www.plantings.page/"
    }
  ];