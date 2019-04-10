import { Component, OnInit } from '@angular/core';
import { Image, PlainGalleryStrategy, PlainGalleryConfig, GridLayout, LineLayout } from '@ks89/angular-modal-gallery';

/**
 * Component that displays a gallery of previous projects.
 */
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public images: Image[] = [
    {
      id: 1,
      modal: {
        img: 'assets/projects/img/apike-front.jpg',
        description: 'Apike.ca Front Page',
        title: '',
        alt: ''
      },
      plain: {
        img: 'assets/projects/thumb/apike-front.jpg',
      }
    },
    {
      id: 2,
      modal: {
        img: 'assets/projects/img/apike-java.jpg',
        description: 'Apike.ca Java Page',
        title: '',
        alt: ''
      },
      plain: {
        img: 'assets/projects/thumb/apike-java.jpg',
      }
    },
    {
      id: 3,
      modal: {
        img: 'assets/projects/img/apike-svg.jpg',
        description: 'Apike.ca <a href="">SVG Tutorial</a>',
        title: '',
        alt: ''
      },
      plain: {
        img: 'assets/projects/thumb/apike-svg.jpg',
      }
    },
    {
      id: 4,
      modal: {
        img: 'assets/projects/img/japan-hiroshima.jpg',
        description: 'Japan Guidebook - Hiroshima',
        title: '',
        alt: ''
      },
      plain: {
        img: 'assets/projects/thumb/japan-hiroshima.jpg',
      }
    },
    {
      id: 5,
      modal: {
        img: 'assets/projects/img/japan-miyajima.jpg',
        description: 'Japan Guidebook - Miyajima',
        title: '',
        alt: ''
      },
      plain: {
        img: 'assets/projects/thumb/japan-miyajima.jpg',
      }
    },
    {
      id: 6,
      modal: {
        img: 'assets/projects/img/japan-climate.jpg',
        description: 'Japan Guidebook - Climate Graphs',
        title: '',
        alt: ''
      },
      plain: {
        img: 'assets/projects/thumb/japan-climate.jpg',
      }
    },
    {
      id: 7,
      modal: {
        img: 'assets/projects/img/japan-map.jpg',
        description: 'Japan Guidebook - Map Visualization',
        title: '',
        alt: ''
      },
      plain: {
        img: 'assets/projects/thumb/japan-map.jpg',
      }
    },
  ];

  public plainGalleryConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '100px', height: '50px' }, { length: 20, wrap: true }, 'space-around')
  };

  constructor() { }

  ngOnInit() {
  }

}
