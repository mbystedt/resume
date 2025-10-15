import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  protected experiences = [
    {
      date: '2019 to current',
      company: 'Government of British Columbia',
      title: 'Full Stack Developer',
      description: [`lalala`],
    },
    {
      date: 'Sept 2018 to Dec 2018',
      company: 'Uncharted Software',
      title: 'Software Engineer',
      description: [`I helped finish a SPA (Vue) used to query and visualize social media activity.
				I championed quality and took ownership of ensuring UX (Bootstrap) was implemented consistent
				with modern web apps. I developed a front-end for tagging content and contributed
				to its REST API design.`],
    },
    {
      date: 'Mar 2014 to Jun 2018',
      company: 'Priologic Software',
      title: 'Software Engineer',
      description: [`I worked on timesheet tool that tracks Cisco Canada’s Engineering hours 
					in order to support SRED claims and reporting. I integrated employee information from an Oracle data warehouse. 
					I redesigned the pages using AngularJS and Bootstrap CSS to promote clarity and have a consistent design vocabulary 
					throughout.`,
        `With Veritas, I built a platform for SPA client applications to visualize and 
					manage an entire company’s data warehouse using an Angular front-end and served using Docker
					and Kubernetes.`],
    },
    {
      date: 'Dec 2012 to Jan 2014',
      company: 'FTS Environmental',
      title: 'Software Engineer',
      description: [`I worked on cross-functional team working to bring to market a web portal for managing remote data loggers.
					The server-side (GlassFish, Java, PostSQL) used a service oriented architecture to support a dynamic 
					realtime UI.`],
    },
    {
      date: 'Feb 2012 to Oct 2012',
      company: 'Priologic Software',
      title: 'Software Engineer',
      description: [`I worked with Cisco's Portlet Service Factory team to maintain and develop new portlets for Cisco’s WebEx Social (internal 
					employee collaboration portal). Assisted team by refactoring the frontend (HTML and JavaScript) and altering 
					the backend (Java and SQL) of multiple portlets as part of a major platform upgrade.`],
    },
    {
      date: 'Aug 2006 to 2007',
      company: 'CSI (OKI Software and OKI Access Technologies)',
      title: 'Engineering Programmer',
      description: [`Designed and developed prototypes using OKI Access Technologies’ Presence and PTT (Push to Talk) Library on Linux and 
					ALP (embedded linux from Access). I assisted with validation of the library’s behaviour against Softbank’s specifications 
					using simulation. I diagnosed test case failures and discussed with the engineer responsible for resolving the failure. 
					I assisted Samsung Engineers with integrating the library into their cellphones.`]
    }
  ]

}
