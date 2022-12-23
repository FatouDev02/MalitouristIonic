import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { INTRO_KEY } from 'src/app/guards/intro.guard';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

  @ViewChild(IonSlides)
  slides!: IonSlides;
	constructor(private router: Router) {}

	ngOnInit() {}

	next() {
		this.slides.slideNext();
	}

	async start() {
		await Storage.set({ key: INTRO_KEY, value: 'true' });
		this.router.navigateByUrl('/login', { replaceUrl: true });
	}

}
