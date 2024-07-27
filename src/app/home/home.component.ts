import { Component } from '@angular/core';
import { slideUpDownAnimation } from '../animation';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideUpDownAnimation]
})
export class HomeComponent{
[x: string]: any;
pdfLink: string = ""; // Declare pdfLink as a class property
constructor(public dialog: MatDialog) {}

openDialog(): void {
  this.dialog.open(ModalComponent, {
    width: '250px',
    data: { name: 'Angular' }
  });
}
openPdfViewer(): void {
  this.dialog.open(PdfViewerComponent, {
    width: '80%',
    height: '80%',
  });
}
openPdfDialog(): void {
  this.dialog.open(ImageDialogComponent, {
    width: '80%',
    height: '80%',
    data: {
      pdfUrl: 'assets/images/cv.pdf'
    }
  });
}
openImage() {
  this.dialog.open(ImageDialogComponent, {
    data: {
      imageUrl: 'assets/images/cv.png'
    }

  });
  


}
}
