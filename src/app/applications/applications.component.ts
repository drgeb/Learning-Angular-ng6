import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"],

  animations: [
    trigger("listStagger", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(-15px)" }),
            stagger(
              "50ms",
              animate(
                "550ms ease-out",
                style({ opacity: 1, transform: "translateY(0px)" })
              )
            )
          ],
          { optional: true }
        ),
        query(":leave", animate("50ms", style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class ApplicationsComponent implements OnInit {
  applications$: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getApplications().subscribe(data => (this.applications$ = data));
  }
}
