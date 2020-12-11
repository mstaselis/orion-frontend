import { Pager } from 'resources/elements/pager';
import { bindable } from 'aurelia-framework';

export class DataTablePager {
  @bindable total: number;
  @bindable size: number;
  @bindable nav;

  pager: Pager;

  async attached() {
    this.pager = new Pager();
    this.pager.paginate(this.total, 1, this.size);
  }

  async valueChanged(newValue, oldValue) {
    console.log(newValue);
  }

  navigate(page: number) {
    this.pager.paginate(this.total, page, this.size);
    this.nav(this.pager.pagerOptions.startIndex);
  }
}
