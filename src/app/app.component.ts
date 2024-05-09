import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {LogService} from './log.service';
import {Picture} from './picture';


@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html',    
	providers: [DataService, LogService],
  styleUrls:['./app.component.css']
})
// Все используемые сервисы должны быть определены в коллекции providers.
// После этого мы можем задействовать встроенный в Angular механизм dependency injection и получить объект сервиса в конструкторе компонента
export class AppComponent implements OnInit {
  file: string = "../assets/1.webp" ; 
  name: string = "Enfant geopolitique observant la naissance de l'homme nouveau";
  year: number = 1943;  
  height: number = 44.5;
  width: number = 52;
  museum: string = "Dali Musée, Florida";
  pictures: Picture[] = [];

  constructor(private dataService: DataService){}

    ngOnInit(){
      this.pictures = this.dataService.getData();
  }
  
  Info(n:number) {
    this.file = this.pictures[n].file;    
    this.name = this.pictures[n].name;
    this.year = this.pictures[n].year;    
    this.height = this.pictures[n].height;  
    this.width = this.pictures[n].width;  
    this.museum = this.pictures[n].museum ;  
}
}
