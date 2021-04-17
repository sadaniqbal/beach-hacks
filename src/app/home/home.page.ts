import { Component, OnInit, Inject } from '@angular/core';
import { quizQuestions } from '../interfaces/questions';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public questions: quizQuestions[] = [];
  public activeQuestion: quizQuestions;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document, private httpClient: HttpClient) { 
    this.activeQuestion = {
      "question": "",
      "background": "#fff",
      "o1": "",
      "o2": "",
      "o3": "",
      "o4": "",
      "co": "",
    };
  }

  ngOnInit() {
    // this.httpClient.get('assets/questions.json').subscribe((res: any) =>{
    //   this.questions = res.questions;
    //   // this.setQuestion();  
    //   console.log(this.questions);
    //   this.domCtrl.write(() => {
    //     document.documentElement.style.setProperty('--ion-background-color', this.questions.background);
    // })
    
  }
  // setQuestion(){
  //   // console.log(this.questions.length); works! Length=10
  //   // if(this.questions.length > 0){
  //   for(var quest in this.questions){
  //     console.log(quest);
  //   this.activeQuestion = this.questions[quest];
  //   this.domCtrl.write(() => {
  //     document.documentElement.style.setProperty('--ion-background-color', this.activeQuestion.background);
  //   }
  //   );
  // }}
  }
