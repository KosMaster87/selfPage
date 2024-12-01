import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private router = inject(Router);
  private viewportScroller = inject(ViewportScroller);



  scrollToFragment(fragment: string, route?: string): void {
    if (route) {
      // Navigiere zur Zielroute
      this.router.navigate([route], { fragment }).then(() => {
        // Warten auf `NavigationEnd`, um dann zum Fragment zu scrollen
        this.router.events
          .pipe(
            filter((e) => e instanceof NavigationEnd),
            take(1)
          )
          .subscribe(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          });
      });
    } else {
      // Innerhalb derselben Route scrollen
      this.router.navigate([], {
        fragment,
        queryParamsHandling: 'preserve',
      });
      this.viewportScroller.scrollToAnchor(fragment);
    }
  }

  // scrollToFragment(fragment: string): void {
  //   this.router.navigate([], {
  //     fragment,
  //     queryParamsHandling: 'preserve',
  //   });

  //   this.viewportScroller.scrollToAnchor(fragment);
  // }
}
