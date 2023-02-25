import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {ColorPalette} from "../../models/color-palette.enum";

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPickerComponent {
  @Output() public selectColor = new EventEmitter<ColorPalette>();
  public colors: ColorPalette[] = Object.values(ColorPalette);
}
