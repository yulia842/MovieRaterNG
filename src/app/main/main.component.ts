import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit{
  movies :any  = [];
  movie :any  = [];
  selectedMovie = null;
  
  
  constructor(private apiService : ApiService){ }

  ngOnInit(){
    this.apiService.getMovies().subscribe(
      data =>{
        this.movies = data;
      },
      error => console.log(error)
    )
  }

  selectMovie(movie:any){
    this.selectedMovie = movie;
    console.log("Selected: ",this.selectedMovie)
    console.log(typeof this.selectedMovie);
  }
}
