// scan-qr.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scan-qr',
  templateUrl: 'scan-qr.page.html',
  styleUrls: ['scan-qr.page.scss'],
})
export class ScanQRPage {
  scannedData: string ='';

  constructor(private navCtrl: NavController, private barcodeScanner: BarcodeScanner) {}

  scanQRCode() {
    const options: BarcodeScannerOptions = {
      prompt: 'Scan a QR Code',
    };

    this.barcodeScanner.scan(options).then(
      (barcodeData) => {
        // Handle scanned data
        this.scannedData = barcodeData.text;
      },
      (err) => {
        console.error('Error while scanning QR code', err);
      }
    );
  }
}
