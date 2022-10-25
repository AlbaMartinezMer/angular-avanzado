import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme'); //antes estaba como public en pages.component.ts -> no necesito exponerlo=private

  constructor() { 
    
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css' //si no hay coge el default

    this.linkTheme?.setAttribute('href', url); //"quiero cambiar href por url"
    
  }

  changeTheme( theme:string ){ //cambiar tema

    const url = `./assets/css/colors/${ theme }.css`;

    this.linkTheme?.setAttribute('href', url); //"quiero cambiar href por url"

    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');//cada vez que se ejecute esta instruccion saltamos al DOM

    links.forEach( elem => {

      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme'); //obtenemos el atributo de data-theme
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`; //construyo url del elemento html - el que deberia estar en mi enlace (utilizado para extraer el color)
      const currentTheme = this.linkTheme?.getAttribute('href'); //extraigo la url que tengo ahora mismo (linkTheme)

      if ( btnThemeUrl == currentTheme ) { //si ambos son iguales, a ESTE elemento le pongo la clase working
        elem.classList.add('working');
      }

    });
  }





}
