import { Component } from '@angular/core';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css'],
})
export class LoadImageComponent {
  img: HTMLImageElement | undefined;
  imgUrl: string | ArrayBuffer | null = '../../assets/flower.jpg';
  imageUrls = [
    // '../../assets/test/1.jpg',
  ];

  canvas: any;
  canvas2: any;
  originalCanvas: any;

  colBreakpoint = 5;
  colSpan1 = 3;
  colSpan2 = 2;
  rowSpan = 4;
  file: any;

  // file;
  // canvas;

  onFileSelected(event: { target: { files: any[] } }) {
    const f = event.target.files[0];
    this.file = f;

    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.imgUrl = reader.result;
      // this.setFromUrlToImage(URL.createObjectURL(this.file), false);
    };
  }

  setFromUrlToImage(url: string, isCrossOrigin: any) {
    this.img = new Image();
    this.img.src = url;

    if (isCrossOrigin) {
      this.img.crossOrigin = 'Anonymous'; // for some reason it fixes color thief destroying loaded image colors
    }

    this.img.onload = (event) => {
      this.displayFitImageOnCanvas(this.img, this.canvas, 1000);
      this.displayFitImageOnCanvas(this.img, this.canvas2, 1000);
      this.displayFitImageOnCanvas(this.img, this.originalCanvas, 1000);
      // this.runPalette();
      // this.initPalette();
    };
  }

  displayFitImageOnCanvas(
    image: HTMLImageElement | undefined,
    canvas: any,
    size: number
  ) {
    this.fitImageResizeCanvas(image, canvas, size);
  }

  // so that color scheme generators would not pick canvas background
  fitImageResizeCanvas(
    image: HTMLImageElement | undefined,
    canvas: { width: any; height: number; getContext: (arg0: string) => any },
    size: number
  ) {
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (image != undefined) {
      const wrh = image.width / image.height;
      let newWidth = canvas.width;
      let newHeight = newWidth / wrh;
      if (newHeight > canvas.height) {
        newHeight = canvas.height;
        newWidth = newHeight * wrh;
      }
      // resize canvas back to fit image
      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, newWidth, newHeight);
    }
  }
}
