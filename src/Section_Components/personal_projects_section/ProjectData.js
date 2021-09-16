// Coffee Break Images
import Coffee_Login from '../../images/Slideshow_images/Coffee_Break_images/Login_Registration_Coffee_Break.png';
import Drink_Selection from '../../images/Slideshow_images/Coffee_Break_images/Drink_Selection_Coffee_Break.png';
import Group_Order from '../../images/Slideshow_images/Coffee_Break_images/Group_Order_Coffee_Order.png';
import Order_Selection from '../../images/Slideshow_images/Coffee_Break_images/Order_Selection_Coffee_Break.png';
import Mapping from '../../images/Slideshow_images/Coffee_Break_images/Mapping_Coffee_Break.png';

// myQuizzes Images
import Quiz_Login from '../../images/Slideshow_images/MyQuizzes_images/Login.png';
import Quiz_Registration from '../../images/Slideshow_images/MyQuizzes_images/Registration.png';
import Quiz_Main from '../../images/Slideshow_images/MyQuizzes_images/Main.png';
import Quiz_Quiz from '../../images/Slideshow_images/MyQuizzes_images/Quiz.png';


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
      image:[Quiz_Login, Quiz_Registration, Quiz_Main, Quiz_Quiz],
      title: "MyQuizzes",
      description: "A web application that allows users to create, store, and share custom quizzes with \
      friends located on the site. The UI is written using the React library and JavaScript. Node.js to \
      connect to a local MySQL database stored on phpMyAdmin and styled with custom CSS.",
      github:"https://github.com/KyleJGlover/MyQuizzes_Official"
    },
  ];