import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Shown for any address the site has no page for, such as a link to the old
 * site. Its route is marked `noindex`, so search engines drop the address.
 */
@Component({
  selector: 'ngx-govuk-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
