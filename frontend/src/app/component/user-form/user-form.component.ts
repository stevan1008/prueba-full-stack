import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
 
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: any = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    control: ''
  }
  res: any = []
  
  edit: boolean = false;

  @HostBinding('class') classes = 'row';


  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id_entrada = this.activatedRoute.snapshot.params;

    if (id_entrada['id']) {
      this.usersService.getUser(id_entrada['id'])
      .subscribe((res) => {
        this.res = res
        for (let i in this.res) {
          this.user = this.res[i];
        }
        this.edit = true;
      })
    }
  }


  saveNewUser() {
    delete this.user.id;
    this.usersService.postUser(this.user)
    .subscribe(user => {
      this.router.navigate(['/users']);
    });
  }

  editUser() {
    this.usersService.updateUser(this.user)
      .subscribe(user => {
        this.router.navigate(['/users']);
      })
  }

}
