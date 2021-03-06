// handle the error responce

import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorDialogComponent } from '../components/error-dialog/errordialog.component';

@Injectable()
export class ErrorDialogService {

    constructor(public dialog: MatDialog) { }
    openDialog(data: {}): void {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '300px',
            data
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            let animal: any;
            animal = result;
        });
    }
}

// import { Injectable } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { ErrorDialogComponent } from './../components/error-dialog/errordialog.component';

// @Injectable()
// export class ErrorDialogService {

//     constructor(public dialog: MatDialog) { }
//     openDialog(data): void {
//         const dialogRef = this.dialog.open(ErrorDialogComponent, {
//             width: '300px',
//             data: data
//         });

//         dialogRef.afterClosed().subscribe(result => {
//             console.log('The dialog was closed');
//             let animal;
//             animal = result;
//         });
//     }
// }
