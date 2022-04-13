import { Component, ViewChild, AfterViewInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('PrintDoc') PrintDoc;

  ngAfterViewInit() {
    console.log(this.PrintDoc);
  }
  SavePDF() {
    alert('saving');
    let doc = new jsPDF();
    
  }
}
