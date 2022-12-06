import {
  Component,
  EventEmitter,
  ElementRef,
  Input,
  Output,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  SimpleChanges,
  HostBinding,
} from '@angular/core';
import Masonry from 'masonry-layout';
import { addResizeListener, removeResizeListener } from '../media/resize-layout.function';

@Component({
  selector: 'pip-tiles-layout',
  styleUrls: ['./tiles-layout.component.scss'],
  templateUrl: './tiles-layout.component.html',
})
export class PipTilesLayoutComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @HostBinding('class.pip-tiles-layout') pipTilesLayoutCls = true;

  @Input() columnWidth: number | string;
  @Input() stretch: boolean;
  @Input() animation = true;

  @Output() resized = new EventEmitter<number>();

  private container: any;
  private masonry: any;
  private listener: any;
  private sizer: any;
  private prevContainerWidth: any = null;
  private observer: MutationObserver;
  private debounced: Function;

  public tilesOptions: any = {
    gutter: 16,
    columnWidth: '.pip-tile-sizer',
    itemSelector: '.pip-tile',
    transitionDuration: '0s',
    fitWidth: false,
  };

  constructor(private elRef: ElementRef) {
    this.listener = () => {
      this.onResize(true);
    };
  }

  public ngOnInit() {
    this.columnWidth = this.columnWidth != null ? Math.floor(Number(this.columnWidth)) : 440;
    this.container = this.elRef.nativeElement.querySelector('.pip-tiles-content');
    addResizeListener(this.elRef.nativeElement, this.listener);
    this.sizer = document.createElement('div');
    this.container.appendChild(this.sizer).className = 'pip-tile-sizer';

    setTimeout(() => {
      this.masonry = new Masonry(this.container, this.tilesOptions);
      this.onResize(true);
    });

    if (this.animation === true) {
      setTimeout(() => {
        this.elRef.nativeElement.classList.add('animation');
      }, 1000);
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['animation']) {
      if (changes['animation'].currentValue === true) {
        this.elRef.nativeElement.classList.add('animation');
      } else {
        this.elRef.nativeElement.classList.remove('animation');
      }
    }
  }

  ngAfterViewInit() {
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        this.masonry = new Masonry(this.container, this.tilesOptions);
        this.onResize(true);
      });
    });
    const config = { childList: true, characterData: true };

    this.observer.observe(this.elRef.nativeElement.getElementsByClassName('pip-tiles-content')[0], config);
  }

  public ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.masonry) {
      this.masonry.destroy();
    }
    removeResizeListener(this.elRef.nativeElement, this.listener);
  }

  private onResize(force: boolean = false) {
    let width = this.elRef.nativeElement.parentElement.offsetWidth;
    let containerWidth;

    if (!this.stretch && width - 32 > this.columnWidth) {
      width = width - 24 * 2;

      let columns = Math.floor(width / Number(this.columnWidth));
      containerWidth = (Number(this.columnWidth) + 16) * columns - 16;

      if (containerWidth > width) {
        columns--;
        containerWidth = (Number(this.columnWidth) + 16) * columns - 16;
      }

      if (columns < 1) {
        containerWidth = width;
        this.sizer.style['width'] = containerWidth + 'px';
      } else {
        this.sizer.style['width'] = Number(this.columnWidth) + 'px';
      }

      this.container.style['width'] = containerWidth + 10 + 'px';
      this.container.classList.remove('pip-stretch');
    } else {
      this.container.style['width'] = '100%';
      this.container.classList.add('pip-stretch');
    }

    if (this.prevContainerWidth !== containerWidth || force) {
      this.prevContainerWidth = containerWidth;
      this.resized.emit(containerWidth);
      setTimeout(() => {
        this.masonry.layout();
      }, 400);
    }
  }
}
