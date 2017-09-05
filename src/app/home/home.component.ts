import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    innerHeight:any;
    innerWidth:any;

    constructor() {
        this.innerHeight = (window.screen.height);
        this.innerWidth = (window.screen.width);
    }

    ngOnInit() {
        console.log(this.innerHeight);
    }


}
