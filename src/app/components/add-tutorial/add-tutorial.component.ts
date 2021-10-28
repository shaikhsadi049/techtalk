import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/model/tutorial.model';
import { TutorialService } from 'src/app/service/tutorial.service';

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

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {}

  // saveTutorial(): void {
  saveTutorial() {
    let data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
    };

    console.log(data);

    this.tutorialService.tutorialAdd(data).subscribe(
      (response) => {
        console.log(response, `response`);
        this.submitted = true;
      },
      (err) => {
        console.log(err, `errrrrrrr`);
      }
    );
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
    };
  }
}
