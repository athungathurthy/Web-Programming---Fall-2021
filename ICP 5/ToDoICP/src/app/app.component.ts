import { Component } from '@angular/core';

interface IItem {
  text: string;
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // define list of items
  items: IItem[] = [];

  // push new item
  submitNewItem(text: string) {
    if (text !== '') {
      this.items.push({text, complete: false});
    }
  }

  // complete item
  completeItem(item: IItem) {
    item.complete = true;
  }

  // delete item
  deleteItem(value: IItem) {
    for (let i = 0 ; i <= this.items.length ; i++) {
      if (value === this.items[i]) {
        this.items.splice(i, 1);
        return;
      }
    }
  }
}
