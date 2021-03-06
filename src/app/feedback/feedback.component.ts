import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedBack } from '../model/FeedBack';
import { Plat } from '../model/plat';
import { TypePlat } from '../model/typeplat';
import { FeedbackService } from '../shared/feedback.service';
import { PlatService } from '../shared/plat.service';
import { TypeService } from '../shared/type.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  plats: Plat[] = [];
  plat: Plat = new Plat();
  listfeedbacks: any = [];
  feedbackgroup: FormGroup;
  feedback: FeedBack = new FeedBack();
  currentRate = 0;
  constructor(private fs: FeedbackService, private router: Router,private ps:PlatService) {

    this.feedbackgroup = new FormGroup({
      body:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      note: new FormControl('', Validators.minLength(4)),
      plat_id: new FormControl('',Validators.required)
    });
   }

  ngOnInit(): void {
    this.fs.getFeedbackss().subscribe((data: FeedBack[]) => {
        this.listfeedbacks = data
    }, (err) => {
        console.log(err);
    }
    );
    this.ps.getPlats().subscribe((data: Plat[]) => {
      this.plats = data
    }, (err) => {
      console.log(err);
    }
    );
  }

  /*countStar(star) {
    this.selectedValue = this.feedback.note;
    this.selectedValue = star;
    console.log('Value of star', star);
  }*/

  get nom() { return this.feedbackgroup.get('body'); }
  get prix() { return this.feedbackgroup.get('note'); }
  get plat_id() { return this.feedbackgroup.get('plat_id'); }



  save() {
  this.fs.ajoutercommentairePlatF(this.feedback).subscribe(result => {
    alert("Un nouveau feedback est ajouté dans la liste");
    console.log(this.feedback)
    this.router.navigateByUrl('/listefeedbacks');
  },
    (err) => {
      alert('Erreur ! Vérifiez vos informations');
    
    }
  )
}
}
