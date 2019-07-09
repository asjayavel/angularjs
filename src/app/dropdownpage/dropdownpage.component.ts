import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dropdownpage',
  templateUrl: './dropdownpage.component.html',
  styleUrls: ['./dropdownpage.component.sass']
})
export class DropdownpageComponent implements OnInit {
  public drop: any;

  constructor() { }
  public PLOYGON_SHAPES = {
    close: '20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%',
    message: '0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%',
    cross: '10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%',
    star: '50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%',
    right_chevron: '75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%',
    left_chevron: '100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%',
    right_point: '0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%',
    left_point: '25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%',
    right_arrow: '0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%',
    left_arrow: '40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%',
    rabbet: '0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%',
    bevel: '20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%',
    decagon: '50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%',
    nonagon: '50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%',
    octagon: '30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%',
    heptagon: '50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%',
    hexagon: '50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%',
    pentagon: '50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%',
    rhombus: '50% 0%, 100% 50%, 50% 100%, 0% 50%',
    parallelogram: '25% 0%, 100% 0%, 75% 100%, 0% 100%',
    trapezoid: '20% 0%, 80% 0%, 100% 100%, 0% 100%'
  };
  ngOnInit() {
    this.drop = {};
    this.drop.d_shap = 'circle';
    this.drop.d_color = 'black';
    this.drop.d_color1 = 'red';
    this.drop.d_coloringType = 'fill';
    this.drop.ply_name = 'trapezoid';
    this.drop.obj_width = '100';
    this.drop.obj_height = '100';
    this.drdwon(this.drop);
  }
  public drdwon(drop) {
    if (drop && Object.keys(drop).length > 0) {
      const output = $('.out-put-section');
      output.removeAttr('style');
      const bgcolor1 = (drop.d_color1 ? drop.d_color1 : 'red');
      const bgcolor = (drop.d_color ? drop.d_color : 'black');
      const bgcoloring = (drop.d_coloringType == 'fill' ? bgcolor : '-webkit-linear-gradient(95deg,' + bgcolor + ' 0%,' + bgcolor1 + ' 100%)');
      const width = drop.obj_width ? (drop.obj_width + 'px') : '100px';
      const height = drop.obj_height ? (drop.obj_height + 'px') : '100px';
      const elem = document.querySelector('.out-put-section');
      switch (drop.d_shap) {
        case 'triangle':
          output.css({
            width: 0,
            height: 0,
            border: '0 solid transparent',
            'border-right-width': width,
            'border-left-width': width,
            'border-bottom': height + ' solid ' + bgcolor
          });
          break;
        case 'circle':
          elem.setAttribute('style', 'background : ' + bgcoloring + '; width : ' + width + '; height : '
            + height + '; border-radius : 50%');
          break;
        case 'square':
          elem.setAttribute('style', 'background : ' + bgcoloring + '; width : ' + width + '; height : '
            + height);
          break;
        case 'ploygon':
          elem.setAttribute('style', 'background : ' + bgcoloring + '; width : ' + width + '; height : '
            + height + ';-webkit-clip-path: polygon(' + this.PLOYGON_SHAPES[drop.ply_name] +
            ');clip-path : polygon(' + this.PLOYGON_SHAPES[drop.ply_name] + ')');
          break;
      }
    }
  }
}
