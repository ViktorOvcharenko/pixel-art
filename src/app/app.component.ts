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

  downloadImage() {
    const node: any = document.getElementById('test');

    toJpeg(node)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'Download.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
}
