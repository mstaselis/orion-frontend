import { format } from 'date-fns'
 
export class DateValueConverter {
  toView(value) {
    return format(new Date(value), 'yyyy-MM-dd HH-mm-ss');
  }

  fromView(value) {
    //
  }
}
