  import { Component } from '@angular/core';

  @Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
  })
  export class ProjectsComponent {
    showAllProjects = false; // Toggle to show or hide all projects
    projects = [
      {
        title: 'Expense Tracker',
        description: 'This is an expense tracker website that allows users to track their expenses and categorize them. Users can add expenses manually or import them from a CSV file. The website displays the expenses in a table format, with options to filter and sort the data. The project demonstrates my skills in web development, responsive design, and modern frameworks like React. It’s designed to present a clean and user-friendly interface, with a focus on demonstrating skills, experience, and personal projects.',
        technologies: ['React', 'JavaScript', 'Node.js', 'MySQL', 'Express.js','Vs Studio Code'],
        link: '#'
      },
      {
        title: 'Personal Portfolio Website',
        description: 'This is my personal portfolio website showcasing a variety of software development projects. This site highlights my expertise in web development, responsive design, and modern frameworks like Angular. It’s designed to present a clean and user-friendly interface, with a focus on demonstrating skills, experience, and personal projects.',
        technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular','Vs Studio Code'],
        link: '#'
      },
      {
        title: 'Supermarket Price Comparer',
        description: 'A web application that allows users to compare prices of various supermarket products in Ireland. Users can manually add products and their prices from grocery receipts, building a community-driven database for price comparisons across multiple retailers. This tool helps users find the best deals by comparing prices based on real user inputs, ensuring that the information is crowdsourced and up-to-date. The project demonstrates my skills in full-stack development, database management, and building intuitive user interfaces that solve practical, everyday problems.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'Express.js','Vs Studio Code'],
        link: '#'
      },
      {
        title: 'FS Petshop, the Petparlour',
        description: '"FS - The Petparlour" is my very first website, developed as part of an academic project. The goal was to create a multi-page website with a consistent design using only HTML and CSS. The project required careful planning through wireframe, mood boards, and design sketches, followed by implementation across a minimum of three web pages. The website features a cohesive design with a consistent background image, logo, navbar, and footer across all pages. A single CSS stylesheet is used to ensure uniform styling, including the use of Google Fonts to enhance typography. The project demonstrates my ability to create a clean and structured layout with functional navigation, setting the foundation for my web development skills.',
        technologies: ['Plain HTML', 'CSS','Vs Studio Code'],
        link: '#'
      },
      {
        title: 'SmartFarm',
        description: 'This project simulates the operations of a smart automated environment using gRPC communication between multiple services. Designed for a smart farm scenario, it integrates various services that inter-communicate and simulate key agricultural operations, such as monitoring soil moisture, recommending watering levels, and managing fertilizer use.The project consists of three independent services, each publishing and discovering one another using gRPC protocols, which are defined in corresponding .proto files. A command-line client acts as the main controller, allowing interaction with the services and presenting results such as moisture levels and optimal farming conditions.The entire solution was implemented using Node.js and Protocol Buffers (gRPC) to create a robust and scalable communication infrastructure. This project demonstrates my ability to develop distributed systems and design communication protocols for smart environments.',
        technologies: ['gRPC', 'Node.js', 'JavaScript', 'IntelliJ IDEA',],
        link: '#'
      },
      {
        title: 'iPrint, Stack Interface Implementation',
        description: 'An academic project focused on creating a stack data structure using Java interfaces and generics. The stack supports essential operations such as push (to add elements to the top of the stack), pop (to remove and return the top element), and peek (to view the top element without removing it). The implementation highlights the versatility of interfaces and generics in Java, allowing the stack to handle various data types while ensuring type safety and reusability. This project demonstrates my understanding of core Java concepts such as interfaces, generics, and data structures.',
        technologies: ['Java', 'Stack', 'NetBeans'],
        link: '#'
      },
      {
        title: 'Employee Binary Search Tree',
        description: 'An academic project focused on building an efficient system to manage employee data using a Binary Search Tree (BST). The system stores employee information, including a unique 4-digit employee ID, name, and department. The custom Employee class implements the Comparable interface to allow natural ordering based on employee IDs. The system supports operations such as inserting, searching, and deleting employee records within the BST. Additionally, it provides functionality to retrieve and print all employee records in ascending order by employee ID. This project demonstrates my understanding of data structures, custom class design, and Java interfaces, with an emphasis on optimizing data retrieval and management.',
        technologies: ['Java', 'Binary Search Tree', 'IntelliJ IDEA'],
        link: '#'
      },
      {
        title: 'ReadStaffData, Sorting Algorithm Implementation',
        description: 'An academic project focused on implementing a custom sorting algorithm to organize staff data from a CSV file. The dataset was sorted based on a specific column using the Bubble Sort algorithm, chosen for its simplicity in implementation. In cases where values were identical in the selected column, the algorithm would then sort the data based on a unique identifier (Column 1). The project involved reading data from the CSV file using provided resource files and implementing the sorting algorithm from scratch without external libraries. This project highlights my ability to handle data from external files, implement basic sorting algorithms, and consider time complexity in algorithm selection.',
        technologies: ['Java', 'Bubble Sort', 'CSV File Handling', 'IntelliJ IDEA'],
        link: '#'
      },
      {
        title: 'ReadStockData, CSV Management and Multi-Threading Application',
        description: 'An academic project designed to manage and manipulate stock data from a CSV file using Java. The application reads the CSV file into memory using the BufferedReader class and performs several key operations: - A recursive method calculates the sum of every even-indexed row in the "weight" column. - An iterative method identifies the minimum value in the "weight" column, considering only odd-indexed rows. - A sorting algorithm allows users to sort the data based on any column of their choice. - A multi-threaded solution sorts the data in parallel, with each thread sorting based on a different column, and saving the sorted - results into separate files. - Additionally, the project supports adding new stock records to the dataset, and implements custom exception handling to ensure data integrity, such as validating that certain fields (e.g., first_name) are not empty or composed of digits only. This project showcases my skills in file handling, recursion, multi-threading, and robust error handling in Java.',
        technologies: ['Java', 'BufferedReader', 'Recursion', 'Iteration', 'Multi-Threading', 'IntelliJ IDEA'],
        link: '#'
      }
    ];
    // Toggle the visibility of all projects
    toggleProjects() {
      this.showAllProjects = !this.showAllProjects;
    }
  }


