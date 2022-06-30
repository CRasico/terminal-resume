import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  commandType: string = "test command type";
  commandMessage: string = "test command content";

  constructor() { }

  ngOnInit(): void {
  }

}
