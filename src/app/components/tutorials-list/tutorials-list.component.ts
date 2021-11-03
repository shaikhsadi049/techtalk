import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/model/tutorial.model';
import { TutorialService } from 'src/app/service/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.scss'],
})
export class TutorialsListComponent implements OnInit {
  tutorials: Tutorial[];
  // tutorials = [];
  currentTutorial: Tutorial = {};
  currentIndex: number;
  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.getTutorialList();
  }

  getTutorialList() {
    this.tutorialService.tutorialList().subscribe((data) => {
      if (data) {
        this.tutorials = data;
      }
    });
  }

  setActiveTutorial(value: any, index: number): void {
    this.currentTutorial = value;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;
    this.tutorials = [];
    this.getTutorialList();
  }

  removeAllTutorials() {
    this.tutorialService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
