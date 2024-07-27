import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

// Set workerSrc to point to the assets directoryt
(pdfjsLib as any).GlobalWorkerOptions.workerSrc = 'asses/pdf.worker.min.js';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  @ViewChild('pdfContainer', { static: true }) pdfContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.loadPdf();
  }

  loadPdf() {
    const url = 'assets/cv.pdf';  // Path to your PDF file

    // Load the PDF
    pdfjsLib.getDocument(url).promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        if (context) { // Ensure context is not null
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          this.pdfContainer.nativeElement.appendChild(canvas);

          const renderContext = {
            canvasContext: context,
            viewport: viewport
          };

          page.render(renderContext).promise.then(() => {
            console.log('Page rendered');
          }).catch((error) => {
            console.error('Error rendering page:', error);
          });
        } else {
          console.error('Failed to get canvas context');
        }
      }).catch((error) => {
        console.error('Error getting page:', error);
      });
    }).catch((error) => {
      console.error('Error loading PDF:', error);
    });
  }
}
