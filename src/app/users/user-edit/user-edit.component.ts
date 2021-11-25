import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


import { Users } from '../users';
import { UsersService } from '../users.service';
import { ConfirmDialogComponent } from 'src/app/tools/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: Users = { id: 0, name: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));//app-routingで指定したパラメータを参照して値を受け取る
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('mode'));
    this.user = this.service.getUser(id);
  }

  onSubmit(form: any): void {
    let user = {
      id: form.id,
      name: form.name,
      email: form.email
    };

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to update this user'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true) {
        this.service.setUser(user);
        this.router.navigate(["/Users"]);
      }
    })
  }

}
