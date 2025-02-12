import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserInterface } from '../interfaces/user-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  addDocument<T>(collection: string, data: T): Promise<any>{
    return this.db.collection<T>(collection).add(data);
  }

  getDocument<T>(collection: string, id: string): Observable<T | undefined>{
    return this.db.collection<T>(collection).doc(id).valueChanges();
  }

  getCollection<T>(collection: string): Observable<T[]>{
    return this.db.collection<T>(collection).valueChanges({ idField: 'id'});
  }

  getCollectionWithFilter<T>(collection: string, field: string, value: any): Observable<T[]>{
    return this.db.collection<T>(collection, ref => ref.where(field, '==', value)).valueChanges({ idField: 'id'});
  }

  //updateDocument(){

  //}

  deleteDocument(collection: string, id:string): Promise<void>{
    return this.db.collection(collection).doc(id).delete();
  }
}
