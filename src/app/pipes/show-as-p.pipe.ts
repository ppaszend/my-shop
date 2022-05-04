import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'showAsP', pure: false})
export class ShowAsPPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.map(text => `${text}`).join('\n\n');
  }
}
