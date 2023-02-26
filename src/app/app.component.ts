import { Component } from '@angular/core';
import { toJpeg } from 'html-to-image';
import { gridSizes } from "./constants/grid-sizes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedGridSize = gridSizes[0];

  downloadImage(): void {
    toJpeg(document.querySelector('.mat-grid-list') as HTMLElement).then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'download.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }
}
