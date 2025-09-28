import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],  // 👈 Add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Music Collection';
  version: string = '1.0';

    constructor(private router: Router)
  {

  }

  displayVersion() {
    alert(`Version: ${this.version}`);
  }

  displayArtistList() {
    this.router.navigate(['list-artists'], { queryParams: { t: Date.now() } });
  }
}
