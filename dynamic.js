function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// var imageUrl = ['images/course1.jpg'];
// document.getElementById('image').src = imageUrl;



var passwedCourseId = getParameterByName('courseId');

var courses = [
    [1, "100 Days of Code - The Complete Python Pro Bootcamp for 2021", "Master Python by building 100 projects in 100 days. Learn to build websites, games, apps, plus scraping and data science", "Dr.Angela Yu", "4.4", "60hrs on demanded Video", "229 articles", "course1.jpg", "https://www.youtube.com/embed/hUNAtr-xgyo"],
    [2, "The Python Mega Course: Build 10 Real World Applications", "Go from zero to hero in Python in weeks! Learn Python the easy way by building real-life Python programs!", "Ardit Sulce", "4.6", "34hrs on demanded Video", "192 articles", "images/course2.png", "https://www.youtube.com/embed/rbqR4QQxPr0"],
    [3, "Complete Python Programming Masterclass Beginner to Advanced", "Learn to Program like a Pro with Python. Start with Python Programming Basics and progress to a Python Professional.", "Kyle Pew", "4.6", "20hrs on demanded Video", "203 articles", "images/course3.jpg", "https://www.youtube.com/embed/dIpaY_1aoUw"],
    [4, "Complete Python Developer in 2021: Zero to Mastery", "How to become a Python 3 Developer and get hired! Build 12+ projects, learn Web Development, Machine Learning + more!", "Andrei Neagoie", "4.4", "50hrs on demanded video", "222 articles", "images/course4.jpg", "https://www.youtube.com/embed/Fp8a_J2wIUw"],
    [5, "The Complete Python Course | Learn Python by Doing", "Go from Beginner to Expert in Python by building projects. The best investment for your Python journey!", "Rob Percival", "4.2", "72hrs on demanded videos", "629 articles", "images/course5.jpg", "https://www.youtube.com/embed/NKiSF4O4Oec"],
    [6, "Learn Python Programming Masterclass", "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3", "John Dew", "4.0", "34hrs on demanded vidoes", "149 articles", "images/course6.jpg", "https://www.youtube.com/embed/6L6XqWoS8tw"],

    [7, "The Complete 2020 Fullstack Web Development Course", "Learn HTML5, CSS3, JavaScript, Python, Wagtail CMS, PHP & MySQL from scratch!", "Jan Ki Yo", "4.8", "45hrs on demanded vidoes", "120 articles", "images/course7.jpg", "https://www.youtube.com/embed/YZhUwHFsCO0"],
    [8, "The Complete Web Development Bootcamp", "COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!", "Colt Steel", "4.5", "75hrs on demanded vidoes", "167 articles", "images/course8.jpg", "https://www.youtube.com/embed/Q-Eeacn-7aI"],
    [9, "Beginner Full Stack Web Development", "Learn web development with HTML, CSS, Bootstrap 4, ES6 React and Node", "Mark Goen", "4.6", "35hrs on demanded vidoes", "137 articles", "images/course9.jpg", "https://www.youtube.com/embed/Tq6Znavm-0o"],
    [10, "The Result Oriented Web Development Course", "Full Stack Web Development. Full Stack Web Development Bootcamp. HTML, CSS, JavaScript, etc. ! Major Projects. Complete", "Max Pain", "4.6", "15hrs on demanded vidoes", "398 articles", "images/course10.jpg", "https://www.youtube.com/embed/nlsLKA6hlVQ"],
    [11, "Build Dynamic Website with Java Script", "Understand DOM (Document Object Model). Crucial for front end web development. Novice to Pro in easy steps.Course 1 of 2", "Smith Jois", "4.1", "43hrs on demanded vidoes", "128 articles", "images/course11.jpg", "https://www.youtube.com/embed/D1yAeW2OmDA"],
    [12, "Become a WordPress Developer: Unlocking Power With Code", "Learn PHP, JavaScript, WordPress theming & the WP REST API to Create Custom & Interactive WordPress Websites", "Joot Rock", "4.6", "29hrs on demanded vidoes", "169 articles", "images/course12.jpg", "https://www.youtube.com/embed/NZXDAKG46wI"],


    [13, "The Complete JavaScript Course 2021: From Zero to Expert!", "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!", "Jonas Seem", "4.7", "68hrs on demanded vidoes", "20 articles", "images/course13.jpg", "https://www.youtube.com/embed/m6Y8xEfyXTs"],
    [14, "JavaScript - The Complete Guide 2021 (Beginner + Advanced)", "Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2021.", "Maximilian Schwarzmüller", "4.6", "52hrs on demanded vidoes", "75 articles", "images/course14.jpg", "https://www.youtube.com/embed/kHyGYa2uVX0"],
    [15, "Modern JavaScript From The Beginning", "Learn and build projects with pure JavaScript (No frameworks or libraries)", "Brad Traversy", "4.7", "21.5hrs on demanded vidoes", "5 articles", "images/course15.jpg", "https://www.youtube.com/embed/HKVvc54RXIQ"],
    [16, "The Modern JavaScript Bootcamp", "Learn JavaScript by building real-world apps. Includes 3 real-world projects, 80 programming challenges, and ES6/ES7!", "Andrew Made", "4.8", "29.5hrs on demanded vidoes", "209 articles", "images/course16.jpg", "https://www.youtube.com/embed/TKq6nvGqIB0"],
    [17, "JavaScript Projects for JavaScript Beginners", "Interactive Front-End Development for Beginners", "Rob Marry", "4.6", "7.5hrs on demanded vidoes", "56 articles", "images/course17.jpg", "https://www.youtube.com/embed/XgdY_s1LsZc"],
    [18, "JavaScript Projects Games 55 Modern JavaScript DOM ES6", "Real Projects! ES6 AJAX Java Script Projects Apps 55+ Projects Modern JS DOM JavaScript Games Portfolio Games DOM", "Luke Right", "4.4", "57hrs on demanded vidoes", "71 articles", "images/course18.jpg", "https://www.youtube.com/embed/bnqLzCsffwY?list=RDMM"],


    [19, "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert", "Become an In-demand SQL Master by creating complex databases and building reports through real-world projects", "Akash Hanchinal", "4.6", "20hrs on demanded vidoes", "13 articles", "images/course19.jpg", "https://www.youtube.com/embed/K7EUuZjlW9U"],
    [20, "SQL for Beginners: Learn SQL using MySQL and Database Design", "Understand SQL using the MySQL database. Learn Database Design and Data Analysis with Normalization and Relationships", "Manoj YB", "4.5", "8hrs on demanded vidoes", "29 articles", "images/course20.jpg", "https://www.youtube.com/embed/QxDUroLzE2I"],
    [21, "Relational Database Design for Begineers", "Learn how to create an effective relational database design to use in your IT career or even a personal project.", "Sangmesh Sarwad", "4.3", "1.5hrs on demanded vidoes", "17 articles", "images/course21.jpg", "https://www.youtube.com/embed/R0RUGwtE5ic"],
    [22, "Complete SQL and Databases Bootcamp: Zero to Mastery [2021]", "Master SQL, Database Management & Design and learn to work with databases like PostgreSQL, MySQL + more. With Exercises!        ", "Prakash Patil", "4.7", "25hrs on demanded vidoes", "58 articles", "images/course22.jpg", "https://www.youtube.com/embed/ZCwVEf7Nmlw"],
    [23, "MySQL Database Administration: Beginner SQL Database Design", "Learn Database Design with MySQL Workbench. SQL DBA for Beginners: A Relational Database Management System Introduction", "Shambhavi Gangavati", "4.5", "7hrs on demanded vidoes", "69 articles", "images/course23.jpg", "https://www.youtube.com/embed/08wBwaNijuU"],
    [24, "SQL & Database Design A-Z™: Learn MS SQL Server + PostgreSQL", "Learn Both SQL Server & PostgreSQL By Doing. Enhance Your Data Analytics Career With Real World Data Science Exercises", "Gubbi Love", "4.5", "12.5hrs on demanded vidoes", "5 articles", "images/course24.jpg", "https://www.youtube.com/embed/kHyGYa2uVX0"],


    [25, "C Programming For Beginners - Master the C Language", "C Programming will increase career options. Become a better dev in other languages by learning C. Pointers explained   ", "Sandeep desh", "4.4", "24hrs on demanded vidoes", "1 articles", "images/course25.jpg", "https://www.youtube.com/embed/PgCliOxl41o"],
    [26, "Microcontroller Embedded C Programming: absolute beginners", "Foundation course on Embedded C programming using STM32 Microcontroller.        ", "Adarsh Hiremath", "4.6", "35hrs on demanded vidoes", "35 articles", "images/course26.jpg", "https://www.youtube.com/embed/iLf_yqF9VjA"],
    [27, "C Programming Step by Step - Complete Tutorial For Beginners", "C language tutorial from basics with C operator,loop,array,pointer,function,parameter,string,recursion,structure,file.", "Basavaraj MP", "4.7", "12hrs on demanded vidoes", "189 articles", "images/course27.jpg", "https://www.youtube.com/embed/TKk-ZGY5Ik4"],
    [28, "151122 students     Beginning C++ Programming - From Beginner to Beyon", "Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills. C++14 and C++17 covered. C++20 info see below.        ", "Akshay Burli", "4.8", "6hrs on demanded vidoes", "99 articles", "images/course28.jpg", "https://www.youtube.com/embed/ebz20FHrT44"],
    [29, "C++ Fundamentals: Game Programming For Beginners", "Learn to make games using industry standard C++ and Raylib        ", "Akhil Shetty", "4.6", "3.8hrs on demanded vidoes", "76 articles", "images/course29.jpg", "https://www.youtube.com/embed/AJ59Vgzuda0"],
    [30, "The Complete C++ Developer Course", "Master theory and practice using one of the world's most popular programming languages!        ", "M.S Dhoni", "5", "19hrs on demanded vidoes", "234 articles", "images/course30.jpg", "https://www.youtube.com/embed/TCAO95AmyXc"],
]

for (var i = 0; i < courses.length; i++) {
    if (courses[i][0] == passwedCourseId) {
        var courTitle = courses[i][1];
        var couDes = courses[i][2];
        var couAut = courses[i][3];
        var couRate = courses[i][4];
        var couDur = courses[i][5];
        var couArt = courses[i][6];
        var img = courses[i][7];
        var couVid = courses[i][8];
    }
}

document.getElementById("dark-head").innerHTML = courTitle;
document.getElementById("dark-para").innerHTML = couDes;
document.getElementById("dark-author").innerHTML = couAut;
document.getElementById("dark-number").innerHTML = couRate;
document.getElementById("coud").innerHTML = couDur;
document.getElementById("art").innerHTML = couArt;
document.getElementById("image").src = img;
document.getElementById("iframeDisplay").src = couVid