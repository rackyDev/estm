import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    login: new FormControl(''),
    pdw: new FormControl(''),
  });

  constructor(
    // private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login()
  {
    // console.log(this.formLogin.value);
    
     this.authService.login(this.formLogin.value).subscribe(
       (result:any) => {
         if (result) {
         localStorage.setItem('token', result.data);
         if (result.role === 'Administrateur') {
           this.router.navigate(['admin']);
         }
         else if(result.role === 'Superviseur')
         {
           this.router.navigate(['superviseur']);
         }
         else if(result.role === 'Etudiant')
         {
           this.router.navigate(['etudiant']);
         }
         else if(result.role === 'Agent')
         {
           this.router.navigate(['agent']);
         }
         else
         {
          this.router.navigate(['/']);
          alert('doullllll wayyyy do ndey def lou bakh');
         }
         }
       }
     )
  }

}
