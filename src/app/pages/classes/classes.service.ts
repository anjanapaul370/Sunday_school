import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { ClassData } from './classes.model';
import * as firebase from 'firebase/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private db: AngularFirestore, public snackbar: MatSnackBar) {}

  fetchClasses(): Observable<ClassData[]> {
    return this.db
      .collection('classes', (ref) =>
        ref.where('is_deleted', '==', false)
         .orderBy('created', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((arr) => {
          return arr.map((action) => {
            return {
              id: action.payload.doc.id,
              ...(action.payload.doc.data() as object),
            } as ClassData;
          });
        })
      );
  }

  addClassToDatabase(classes: ClassData) {
    return this.db
      .collection('classes')
      .add({
        ...classes,
        created: this.timestamp,
        updated: null,
        is_deleted: false,
      });
  }

  updateClass(id: string, data: any) {
    return this.db
      .collection('classes')
      .doc(id)
      .update({ ...data, updated: this.timestamp });
  }

  deleteClass(id: string) {
    return this.db.collection('classes').doc(id).update({ is_deleted: true });
  }

  showSnackbar(message, action, duration) {
    this.snackbar.open(message, action, {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  get timestamp() {
    return firebase.serverTimestamp();
  }
}
