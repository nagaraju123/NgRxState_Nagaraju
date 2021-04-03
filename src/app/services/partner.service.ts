import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, PartnerInfo } from '../State/reducer';
import { map } from 'rxjs/operators';
import { CreatePartner, DeletePartner, GetPartnerInfo, ProvidePartners, UpdatePartner } from '../State/actions';


@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private store: Store<AppState>) { }

  allPartners$: Observable<any[]> = this.store.select((s) => s.partnersInfo).pipe(map((p) => p.partnersInfo));

  createPartner(partnerInfo: PartnerInfo) {
    this.store.dispatch(CreatePartner({ partnersInfo: partnerInfo }));
  }

  updatePartner(partnersInfo: PartnerInfo) {
    this.store.dispatch(UpdatePartner({ partnersInfo }));
  }
  

  getAllPartners() {
    this.store.dispatch(ProvidePartners({ partnersInfo: [] }))
  }

  deletePartner(id) {
    this.store.dispatch(DeletePartner({ id }))
  }


  getPartnerInfo(id) {
    this.store.dispatch(GetPartnerInfo({ id }))
  }

}

