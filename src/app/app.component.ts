import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getShowProductCode} from './products/state/product.reducer';
import * as ProductActions from './products/state/product.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngrxTest';
  displayCode: boolean;

  constructor(private store: Store<State>) 
  { 
  }

  ngOnInit(): void {
    // TODO: Unsubscribe
    this.store.select(getShowProductCode).subscribe(
      showProductCode => this.displayCode = showProductCode
    );
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }
}
