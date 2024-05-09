import { Injectable } from "@angular/core";
import { Picture } from "./picture";
import { LogService } from "./log.service";

// Чтобы указать, что сервис может использовать другие сервисы, к классу сервиса применяется декоратор Injectable.
// В этом случае встроенный механизм внедрения зависимостей сможет создать объект этого класса.
@Injectable()
export class DataService {
  // В реальном приложении эти данные можно получать с сервера или из какого-либо внешнего хранилища.
  private data: Picture[] = [
    { file: "../assets/1.webp", name: "Enfant geopolitique observant la naissance de l'homme nouveau", year: 1943, height: 44.5, width: 52, museum: "Dali Musée, Florida"},
    { file: "../assets/2.webp", name: "La Tentation de Saint Antonie", year: 1946, height: 89.5, width: 119.5, museum: "Musees royaux des beaux-arts de Belgique"},
    { file: "../assets/3.webp", name: "Les Cygnes refletant les elephants", year: 1937, height: 61, width: 77, museum: "Collection privée"},
    { file: "../assets/4.webp", name: "l'araignée du soir promet l'espoir", year: 1940, height: 40.5, width: 50.8, museum: "Dali Musée, Florida"},
    { file: "../assets/5.webp", name: "Le Sommei", year: 1937, height: 51, width: 78, museum: "Collection privée"},
    { file: "../assets/6.webp", name: "La persistance de la Mémoire", year: 1931, height: 24, width: 33, museum: "Museum of Modern Art, New York"},
    { file: "../assets/7.webp", name: "Vivre encore la vie", year: 1956, height: 125, width: 160, museum: "Dali Musée, Florida"},
  ];
  constructor(private logService: LogService) {}

  getData(): Picture[] {
    this.logService.write("Получение данных");
    return this.data;
  }  
}