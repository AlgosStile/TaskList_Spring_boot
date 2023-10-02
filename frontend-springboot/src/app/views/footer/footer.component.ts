import {Component, OnInit} from '@angular/core';
import {AboutDialogComponent} from '../../dialog/about-dialog/about-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

// "presentational component": отображает полученные данные
// подвал - нижняя часть страницы
export class FooterComponent implements OnInit {
  year: Date;
  site = 'https:';
  blog = 'https:';


  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.year = new Date(); // текуший год
  }

  // окно "О программе"
  openAboutDialog() {
    this.dialog.open(AboutDialogComponent,
      {
        autoFocus: false,
        data: {
          dialogTitle: 'О программе',
          message: 'Приложение было создано при помощи фреймворков и библиотек Angular/TS + Java/SprigBoot/Hibernate'
        },
        width: '400px'
      });

  }

}
