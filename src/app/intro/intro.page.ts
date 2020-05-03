import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centerSlides: true,
    speed: 400
  }

  slides = [{
    imageSrc: "assets/img/logo.png",
    imageAlt: 'Platzi music logo',
    title: "Escucha tu música",
    subTitle: "EN CUALQUIER LUGAR",
    description: `Los mejores álbumes, las mejores canciones. 
    Escucha y comparte en cualquier momento, a todas horas`,
    icon: "play"
  }, {
    imageSrc: "assets/img/logo.png",
    imageAlt: "Platzi music logo",
    title: "Disfruta de nuestro reproductor",
    subTitle: "DE VIDEOS INCREÍBBLES",
    description: `Entra al modo video de nuestro reproductor. <
    Obtén acceso a los documentales y making offs increíbles de tu artista favorito.`,
    icon: "videocam"
  }, {
    imageSrc: "assets/img/logo.png",
    imageAlt: "Platzi music logo",
    title: "Accedé al exclusivo",
    subTitle: "MODO DEPORTE",
    description: `Crea un playlist basado en tu actividad física. 
    Ten reportes y acceso a lo que necesitas integrado con GPS`,
    icon: "play"
  }]

  constructor(private router: Router, private storage: Storage) { }

  finish() {
    this.storage.set('isIntroShowed', true)
    this.router.navigateByUrl("/login")
  }



}
