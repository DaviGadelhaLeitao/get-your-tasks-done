import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthenticationService } from "../service/hardcoded-authentication.service";
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "davi";
  password = "";
  errorMessage = "Invalid credentials";
  invalidLogin = false;
  // In TypeScript, if pass something as a dependency in the constructor, it is readly available for use
  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    if (
      this.hardcodedAuthentication.authenticate(this.username, this.password)
    ) {
      this.router.navigate(["welcome", this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
  }
}
