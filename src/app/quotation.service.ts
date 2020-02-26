import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Quotation} from './quotation';

@Injectable({ providedIn: 'root' })
export class HeroService extends EntityCollectionServiceBase<Quotation> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Hero', serviceElementsFactory);
  }
}
