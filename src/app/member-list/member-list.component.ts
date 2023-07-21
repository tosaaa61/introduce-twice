import { Component } from '@angular/core';
import { PROFILE } from '../models/profile';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent {
  profiles = PROFILE;
  aboutTwice: string =
  "『いい音楽で一度、素晴らしいパフォーマンスで二度魅了させる』アジア発9人組ガールズグループ『TWICE』\n10代を中心とした幅広い層にも圧倒的な支持と社会現象を巻き起こしながら、デビューした年から3年連続、紅白歌合戦にも出演を果たす。\nそんなTWICEは、2023年5月、自身初となる日本でのスタジアムライブ「TWICE 5TH WORLD TOUR 'READY TO BE' in JAPAN」を開催するなどその勢いは留まることを知らず、今なお多くのファンを魅了し続ける！"
}
