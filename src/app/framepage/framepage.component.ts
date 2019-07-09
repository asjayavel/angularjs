import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-framepage',
  templateUrl: './framepage.component.html',
  styleUrls: ['./framepage.component.sass']
})
export class FramepageComponent implements OnInit {


  public frame_urls: any;
  public showcontent_section = 'first';

  constructor(sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.frame_urls = ['/fr_autocomplete.html', '/fr_chips.html', '/fr_picker.html', '/fr_checkbox.html', '/fr_range.html', '/fr_radio.html', '/fr_switch.html', '/fr_form.html'];

  }
  public fr_showContent(showcontent_section) {
    this.showcontent_section = showcontent_section;
  }
}
