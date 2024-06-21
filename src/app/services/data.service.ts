import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { tarifModelDTO } from '../models/tartifModelDTO';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private dbPath='/tarifler'
tarifRef!:AngularFireList<any>;
  constructor(private db:AngularFireDatabase) {
    this.tarifRef=db.list(this.dbPath);
   }

   getTarifler(){
    return this.tarifRef;
   }

   getTarif(id:string){
    return this.db.object(`${this.dbPath}/${id}`)
   }

   addTarif(tarif:tarifModelDTO){
    return this.tarifRef.push(tarif);
   }

   updateTarif(id:string,tarif:tarifModelDTO){
    this.tarifRef.push(tarif)
   }

   deleteTarif(id:string){
    return this.tarifRef.remove(id);

   }
}
