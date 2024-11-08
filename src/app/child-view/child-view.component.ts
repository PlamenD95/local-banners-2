import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_GRID_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CategoryDto } from '../models/northwind-swagger/category-dto';
import { NorthwindSwaggerService } from '../services/northwind-swagger.service';

@Component({
  selector: 'app-child-view',
  standalone: true,
  imports: [IGX_GRID_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective],
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss']
})
export class ChildViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public buttonText: string = 'child view button';
  public northwindSwaggerCategoryDto: CategoryDto[] = [];

  constructor(
    private northwindSwaggerService: NorthwindSwaggerService,
  ) {}

  ngOnInit() {
    this.northwindSwaggerService.getCategoryDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindSwaggerCategoryDto = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
