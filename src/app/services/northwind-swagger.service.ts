import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CategoryDto } from '../models/northwind-swagger/category-dto';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindSwaggerService {
  constructor(
    private http: HttpClient
  ) { }

  public getCategoryDtoList(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${API_ENDPOINT}/Categories`)
      .pipe(catchError(ErrorHandlerService.handleError<CategoryDto[]>('getCategoryDtoList', [])));
  }
}
