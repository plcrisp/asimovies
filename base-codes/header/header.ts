/*
import { Component } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showLogoutModal: boolean=false;

  frases: string[] = [
    "Pau na máquina!",
    "Desktop Asimov Jr!",
    "Asimov, me arranha!",
    "TRI-AI!",
  ];

  fraseAtual: string = '';

  user: UserInterface | null = null;

  dropdownAberto: boolean = false;


  constructor(
    private router: Router,
    private auth: AuthService,
    ) { }

  ngOnInit(){
    this.auth.getUserData().subscribe((user: UserInterface) =>{
      this.user = user;
    })
    this.exibirFraseAleatoria();
  }

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }

  exibirFraseAleatoria() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseAtual = this.frases[indice];
  }

  navHome() {
    this.router.navigate(['/home']);
  }

  openLogoutModal() {
    this.showLogoutModal=true;
  }

  cancelLogout() {
    this.showLogoutModal=false;
  }

  confirmLogout() {
    this.auth.logout();
    console.log('Usuário deslogado.');
  }
}

*/
