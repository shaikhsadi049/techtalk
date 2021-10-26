import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../model/tutorial.model';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss'],
})
export class AddTutorialComponent implements OnInit {
  // submitted: boolean;
  // submitted: boolean = false;
  submitted = false;

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
  };

  constructor() {}

  ngOnInit(): void {}

  // saveTutorial(): void {
  saveTutorial() {
    let data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
    };

    // this.tutorialService.create(data).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.submitted = true;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
