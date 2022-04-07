import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsStateService {
  private readonly _items = new BehaviorSubject<Item[]>([]);
  readonly items$ = this._items.asObservable();

  private readonly _page = new BehaviorSubject<number>(1);
  readonly page$ = this._page.asObservable();
  
  public pageSize = 3;
  public pageSizeSubject = new Subject<number>();
  readonly pageSize$ = this.pageSizeSubject.asObservable();

  private readonly _count = new BehaviorSubject<number>(1);
  readonly count$ = this._count.asObservable();

  constructor() { }

  get items(): Item[] {
    return this._items.getValue();
  }

  set items(val: Item[]) {
    this._items.next(val);
  }

  get page(): number {
    return this._page.getValue();
  }

  set page(val: number) {
    this._page.next(val);
  }

  get count(): number {
    return this._count.getValue();
  }

  set count(val: number) {
    this._count.next(val);
  }
}