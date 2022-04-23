import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  // contorolar el comportamirnto de debounce
  private debounceTimer?:NodeJS.Timeout;

  constructor() { }

  onQueryChanged(query:string=''){
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer= setTimeout(()=>{
      console.log("mandar este cuery", query);
    }, 1000)
  }
}
