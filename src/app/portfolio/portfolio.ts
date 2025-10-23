import { Component, inject } from '@angular/core';
import {
  CarouselLibConfig,
  GalleryModule,
  Image,
  ModalGalleryService,
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-portfolio',
  imports: [GalleryModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  protected images: Image[] = [
    {
      id: 10,
      modal: {
        img: 'assets/projects/img/broker-graph.jpg',
        description: 'Broker graph view',
        title: '',
        alt: '',
      },
      plain: {
        img: 'assets/projects/thumb/broker-graph.jpg',
      },
      loading: 'eager',
      fetchpriority: 'high',
    },
    {
      id: 20,
      modal: {
        img: 'assets/projects/img/apike-front.jpg',
        description: 'Apike.ca Front Page',
        title: '',
        alt: '',
      },
      plain: {
        img: 'assets/projects/thumb/apike-front.jpg',
      },
      loading: 'eager',
      fetchpriority: 'high',
    },
    {
      id: 21,
      modal: {
        img: 'assets/projects/img/apike-java.jpg',
        description: 'Apike.ca Java Page',
        title: '',
        alt: '',
      },
      plain: {
        img: 'assets/projects/thumb/apike-java.jpg',
      },
      loading: 'eager',
      fetchpriority: 'high',
    },
    {
      id: 30,
      modal: {
        img: 'assets/projects/img/apike-svg.jpg',
        description: 'Apike.ca <a href="">SVG Tutorial</a>',
        title: '',
        alt: '',
      },
      plain: {
        img: 'assets/projects/thumb/apike-svg.jpg',
      },
      loading: 'eager',
      fetchpriority: 'high',
    },
    {
      id: 40,
      modal: {
        img: 'assets/projects/img/japan-hiroshima.jpg',
        description: 'Japan Guidebook - Hiroshima',
        title: '',
        alt: '',
      },
      plain: {
        img: 'assets/projects/thumb/japan-hiroshima.jpg',
      },
      loading: 'eager',
      fetchpriority: 'high',
    },
    {
      id: 41,
      modal: {
        img: 'assets/projects/img/japan-miyajima.jpg',
        description: 'Japan Guidebook - Miyajima',
        title: '',
        alt: '',
      },
      plain: {
        img: 'assets/projects/thumb/japan-miyajima.jpg',
      },
      loading: 'eager',
      fetchpriority: 'high',
    },
    {
      id: 42,
      modal: {
        img: 'assets/projects/img/japan-climate.jpg',
        description: 'Japan Guidebook - Climate Graphs',
        title: '',
        alt: '',
      },
      plain: {
        img: 'assets/projects/thumb/japan-climate.jpg',
      },
      loading: 'eager',
      fetchpriority: 'high',
    },
    {
      id: 7,
      modal: {
        img: 'assets/projects/img/japan-map.jpg',
        description: 'Japan Guidebook - Map Visualization',
        title: '',
        alt: '',
      },
      plain: {
        img: 'assets/projects/thumb/japan-map.jpg',
      },
      loading: 'eager',
      fetchpriority: 'high',
    },
  ];

  // public plainGalleryRow: PlainGalleryConfig = {
  //   strategy: PlainGalleryStrategy.ROW,
  //   layout: new LineLayout({ width: '100px', height: '50px' }, { length: 20, wrap: true }, 'space-around')
  // };
  // libConfigPlainGalleryConfig: PlainLibConfig = {
  //   plainGalleryConfig: this.plainGalleryRow
  // };

  protected libConfigCarouselFixed: CarouselLibConfig = {
    carouselPreviewsConfig: {
      visible: true,
      number: 10,
      width: 'auto',
      maxHeight: '100px',
    },
    carouselConfig: {
      maxWidth: '1024px',
      maxHeight: '800px',
      showArrows: true,
      objectFit: 'scale-down',
      keyboardEnable: true,
      modalGalleryEnable: true,
    },
  };

  private modalGalleryService: ModalGalleryService = inject(ModalGalleryService);

  onShow(id: number, index: number, images: Image[] = this.images): void {
    console.log(index);
    this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index],
    });
  }
}
