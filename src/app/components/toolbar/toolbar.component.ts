import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { gridSizes } from "../../constants/grid-sizes";

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  @Output() public selectGridSize = new EventEmitter<number>();
  @Output() public downloadImage = new EventEmitter<void>();
  public gridSizes = gridSizes;
}
