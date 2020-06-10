import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { PublicationService } from '../../services/publication/publication.service';



@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass'],
  providers  : [UserService, PublicationService]

})
export class TimelineComponent implements OnInit {
  public title: string;
  public url: string;
  public publications: {};
  public loading: boolean;
  public identity;
  public token;
  public status;
  public page;
  public pages;
  public total;
  public itemsPerPage;
  public noMore;
  public showImage;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService
  ) {
    this.title     = 'Timeline';
    this.identity  = userService.getIdentity();
    this.token     = userService.getToken();
    this.url       = 'http://localhost:8000/api';
    this.page      = 1;
    this.noMore    = false;
    this.showImage = 0;
    this.loading   = true;
  }


  ngOnInit() {
    this.getPublications(this.page);
  }

/* Método para cargar las PUBLICACIONES. Si adding es true entonces añade páginas **/
getPublications(page, adding = false){
  this.publicationService.getPublications(this.token, page).subscribe(
    response => {
      if (response.publications){
        this.loading = false;
        this.total = response.total_items;
        this.pages = response.pages;
        this.itemsPerPage = response.items_per_page;

        if (this.pages === 1){
          this.noMore = true;
        }
        if (!adding){
          this.publications = response.publications;
        }else{
            const arrayA = this.publications; 	// lo que tengo hasta ahora
            const arrayB = response.publications;	// la siguiente página que me devuelve
        //    this.publications = arrayA.concat(arrayB);

        //    $('html, body').animate({ scrollTop: $('#timeline').prop('scrollHeight')}, 500);
          }

        if (page > this.pages){
            this.router.navigate(['/']);
          }
        }else{
          this.loading = false;
          this.status = 'error';
        }
      },
      error => {
        const errorMessage =  error as any;
        console.log(errorMessage);

        if (errorMessage != null){
          this.status = 'error';
          this.loading = false;
        }
      }
      );
    }

    deletePublication(publicationId: any){
      this.publicationService.deletePublication(this.token, publicationId).subscribe(
        response => {
        //  this.userService.updateMyStats('publications', -1);
          this.refreshPublications();
        },
        error => {
          const errorMessage =  error as any;
          console.log(errorMessage);

          if (errorMessage != null){
            this.status = 'error';
          }
        }
      );
    }

    viewMore(){
      this.page += 1;

      if (this.page === this.pages){
        this.noMore = true;
      }

      this.getPublications(this.page, true);
    }

/* Método que captura el evento enviado por sidebar **/
refreshPublications(event = null){
  this.noMore = false;
  this.getPublications(1);
}

showThisImage(id){
  this.showImage = id;
}

hideThisImage(id){
  this.showImage = 0;
}

}