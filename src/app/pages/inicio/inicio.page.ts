import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  components: Componente[] = [
    {
      icon: 'albums-outline',
      name: 'action sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert',
    },
    {
      icon: 'person-circle-outline',
      name: 'avatar',
      redirectTo: '/avatar',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
