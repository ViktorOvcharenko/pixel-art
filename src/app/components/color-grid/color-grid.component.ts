import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ColorPalette } from "../../models/color-palette.enum";
import { gridSizes } from "../../constants/grid-sizes";

@Component({
  selector: 'color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorGridComponent {
  @Input() public set gridSize(size: number) {
    this.cols = size;
    this.grid = Array.from(Array(size * size).keys()).map(() => ColorPalette.Default);
  }
  public grid: ColorPalette[] = [];
  public cols: number = gridSizes[0];
  public selectedIndex = 0;
}
