import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  public tituloSubs$!: Subscription;

  constructor( private router: Router) { 

    this.tituloSubs$ = this.getArgumentosRuta()
                            .subscribe( ({ titulo }) => { //"desestructurar" - extraer propiedad titulo del argumento que estoy recibiendo
                                    this.titulo = titulo;
                                    document.title = `AdminPro - ${ titulo }`;
                            });
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {

    return this.router.events
      .pipe(
        filter<any>( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.data )
      )
  }

}
