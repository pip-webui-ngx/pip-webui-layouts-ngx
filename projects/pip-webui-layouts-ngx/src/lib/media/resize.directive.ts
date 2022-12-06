import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';

export class PipResizeEvent {
  constructor(
    readonly element: ElementRef,
    readonly newWidth: number,
    readonly newHeight: number,
    readonly oldWidth: number,
    readonly oldHeight: number,
  ) {}
}

@Directive({
  selector: '[pipResize]',
})
export class PipResizeDirective implements OnInit, OnDestroy {
  @Output()
  readonly pipResize = new EventEmitter<PipResizeEvent>();

  private oldWidth: number;
  private oldHeight: number;
  private sensor: ResizeSensor;

  constructor(private readonly el: ElementRef) {}

  ngOnInit() {
    if (ResizeSensor) {
      this.sensor = new ResizeSensor(this.el.nativeElement, () => this.onResized());
    }
  }

  ngOnDestroy() {
    if (this.sensor) {
      this.sensor.detach();
    }
  }

  private onResized() {
    const newWidth = this.el.nativeElement.clientWidth;
    const newHeight = this.el.nativeElement.clientHeight;

    if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
      return;
    }

    const event = new PipResizeEvent(this.el, newWidth, newHeight, this.oldWidth, this.oldHeight);

    this.oldWidth = this.el.nativeElement.clientWidth;
    this.oldHeight = this.el.nativeElement.clientHeight;

    this.pipResize.emit(event);
  }
}
