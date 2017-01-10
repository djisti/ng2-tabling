/* * * ./app/emitter.service.ts * * */
// Credits to https://gist.github.com/sasxa/e1164d9773b31459f6dc
// Imports
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService {
    // Event store
    private static _emitters: { [ID: string]: EventEmitter<any> } = {};
    // Set a new event in the store with a given ID
    // as key
    static get(ID: string): EventEmitter<any> {
        if (!this._emitters[ID]) 
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    }
}