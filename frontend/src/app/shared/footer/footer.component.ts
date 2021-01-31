
import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  envelopeIcon=faEnvelope;
  faceIcon=faFacebookF;
  twitIcon=faTwitter;
  constructor() { }

  ngOnInit(): void {
  }

}
