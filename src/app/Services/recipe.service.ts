/* * * ./app/services/recipe.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Recipe }           from '../model/recipe';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipeService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}

     // private instance variable to hold base url
     private recipesUrl = 'http://localhost:3000/recipes'; 

     // Fetch Receipes
    getRecipes() : Observable<Recipe[]> {
         // using get request
         return this.http.get(this.recipesUrl)
            // calling .json() on the response to return data
             .map((res:Response) => res.json())
             // error handling
             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}
