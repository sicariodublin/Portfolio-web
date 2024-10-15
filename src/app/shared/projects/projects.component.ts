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
      title: 'Supermarket Price Comparer',
      description: 'A web application that allows users to compare prices of different supermarket products in Ireland.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
      link: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A portfolio website for Fabio',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'Angular'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'This is a description for project three.',
      technologies: ['PostgreSQL', 'SQL', 'Python'],
      link: '#'
    },
    {
      title: 'FS Petshop, the Petparlour',
      description: 'This is my first website ever, as academic project.The criteria was to create a website with the basic requeriments for a consistent look website.',
      technologies: ['Plain HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Project Five',
      description: 'This is my first website ever, as academic project.The criteria was to create a website with the basic requeriments for a consistent look website.',
      technologies: ['Plain HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Project Six',
      description: 'This is my first website ever, as academic project.The criteria was to create a website with the basic requeriments for a consistent look website.',
      technologies: ['Plain HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Project Seven',
      description: 'This is my first website ever, as academic project.The criteria was to create a website with the basic requeriments for a consistent look website.',
      technologies: ['Plain HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Project Eight',
      description: 'This is my first website ever, as academic project.The criteria was to create a website with the basic requeriments for a consistent look website.',
      technologies: ['Plain HTML', 'CSS', 'JavaScript'],
      link: '#'
    }
  ];
  // Toggle the visibility of all projects
  toggleProjects() {
    this.showAllProjects = !this.showAllProjects;
  }
}


