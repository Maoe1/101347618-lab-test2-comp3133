import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'launchFilter'
})
export class LaunchFilterPipe implements PipeTransform {
  transform(launches: any[], yearFilter: number): any[] {
    if (!yearFilter) {
      return launches;
    }

    return launches.filter(launch => new Date(launch.launch_date_local).getFullYear() === yearFilter);
  }
}