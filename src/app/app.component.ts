import { Component, OnInit, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  name = 'Saas KMS ' + VERSION.full;

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.name);
  }

  ngOnInit() {}
}
