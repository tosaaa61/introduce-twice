import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROFILE } from '../models/profile';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit{

  profiles = PROFILE;
  profile: any;
  slides: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const name = map.get('name.global');
      switch(name){
        case 'NAYOEN': 
          this.profile = this.profiles[0];
          break;
        case 'JEONGYEON': 
          this.profile = this.profiles[1];
          break;
        case 'MOMO': 
          this.profile = this.profiles[2];
          break;
        case 'SANA': 
          this.profile = this.profiles[3];
          break;
        case 'JIHYO': 
          this.profile = this.profiles[4];
          break;
        case 'MINA': 
          this.profile = this.profiles[5];
          break;
        case 'DAHYUN': 
          this.profile = this.profiles[6];
          break;
          case 'CHAEYOUNG': 
          this.profile = this.profiles[7];
          break;
        case 'TZUYU': 
          this.profile = this.profiles[8];
          break;
      }
      this.slides = [
        {src: `assets/detail-img/${this.profile.name.global}.jpeg` },
        {src: `assets/detail-img/${this.profile.name.global}.jpeg` },
        {src: `assets/detail-img/${this.profile.name.global}.jpeg` }
      ]
    })
  }
}
