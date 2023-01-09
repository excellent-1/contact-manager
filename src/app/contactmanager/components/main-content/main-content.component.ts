import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user?: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void { // Sidenav.Component loads the list with Users & user.id's for when the user is clicked you are routed to the ContactManager. In the ContactManager we Register's new root with a id to route to MainContentComponent who pulls the id. from the routeParams and pass it to this.userService.getUserById(id)
    this.route.params.subscribe(routeParams => {// from the routeParams and pass it to this.userService.getUserById(id)
      const id = routeParams['id'];
      this.user = this.userService.getUserById(id);
    })
  }
}
