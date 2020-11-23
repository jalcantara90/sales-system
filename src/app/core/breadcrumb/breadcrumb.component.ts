import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';

interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs$: Observable<BreadCrumb[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.breadcrumbs$ = this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.buildBreadCrumb(this.activatedRoute.root)),
      startWith(this.buildBreadCrumb(this.activatedRoute.root))
    );
  }

  private buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
    let label = route.routeConfig && route.routeConfig.data ?
      route.routeConfig.data.title :
      "";

    let path =  route.routeConfig ? route.routeConfig.path : "";
    const lastRoutePart = path.split("/").pop();
    const isDynamicRoute = lastRoutePart.startsWith(":");
    if (isDynamicRoute && !!route.snapshot) {
      const [_, paramName] = lastRoutePart.split(":");
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: BreadCrumb = {
      label: label,
      url: nextUrl
    };

    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
