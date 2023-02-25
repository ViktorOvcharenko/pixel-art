import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGridTile } from "../../models/grid-tile.model";
import { ColorPalette } from "../../models/color-palette.enum";

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
  public cols: number = 8;

  public selectColor(color: ColorPalette, index: number): void {
    this.grid[index] = color;
  }
}
