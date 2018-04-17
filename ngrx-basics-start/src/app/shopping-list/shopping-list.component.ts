import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }
}
