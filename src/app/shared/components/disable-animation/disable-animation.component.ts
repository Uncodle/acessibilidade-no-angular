import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-disable-animation',
  templateUrl: './disable-animation.component.html',
  styleUrls: ['./disable-animation.component.scss']
})
export class DisableAnimationComponent implements OnInit {
  isAnimationDisabled = false;

  constructor(
    private renderer: Renderer2
  ) { }

  public ngOnInit(): void {

  }

  public toggleAnimationClass() {
    if (this.isAnimationDisabled) {
      this.renderer.addClass(document.body, 'animate');
    } else {
      this.renderer.removeClass(document.body, 'animate');
    }
  }

}
