import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-detailed',
  templateUrl: './film-detailed.component.html',
  styleUrls: ['./film-detailed.component.css']
})
export class FilmDetailedComponent implements OnInit {

  constructor(private router: Router, private filmService: FilmService, private activatedRoute: ActivatedRoute) { }
  public film
  private id = this.activatedRoute.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.filmService.getMovies()
      .subscribe(data => {
        this.film = data.find(object => object.id == this.id)
      })
  }

  onBack(){
    this.router.navigate(['/films'])
  }

}
