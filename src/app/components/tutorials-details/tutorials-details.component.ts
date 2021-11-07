import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/model/tutorial.model';
import { TutorialService } from 'src/app/service/tutorial.service';

@Component({
  selector: 'app-tutorials-details',
  templateUrl: './tutorials-details.component.html',
  styleUrls: ['./tutorials-details.component.scss'],
})
export class TutorialsDetailsComponent implements OnInit {
  tutorialId: string = '';
  currentTutorial: Tutorial = {};
  message = '';
  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute, // import to get params value
    private router: Router // it is used to navigate to another component
  ) {}

  ngOnInit(): void {
    this.tutorialId = this.route.snapshot.params.id;
    this.getTutorial();
  }

  getTutorial() {
    this.tutorialService.getTutorialById(this.tutorialId).subscribe((data) => {
      if (data) {
        this.currentTutorial = data;
        console.log(this.currentTutorial);
      }
    });
  }

  updatePublished(value: boolean) {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: value,
    };

    this.tutorialService.update(this.tutorialId, data).subscribe(
      (response) => {
        this.currentTutorial.published = value;
        console.log(response, `resssss`);
        this.message = response.message
          ? response.message
          : 'Something went wrong !!';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTutorial() {
    this.message = '';

    this.tutorialService
      .update(this.tutorialId, this.currentTutorial)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = response.message
            ? response.message
            : 'Something went wrong !!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteTutorial() {
    this.tutorialService.delete(this.tutorialId).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/tutorials']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
