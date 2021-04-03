import { createAction, props } from "@ngrx/store";
import { PartnerInfo } from "./reducer";


export const CreatePartner = createAction("Create Partner", props<{ partnersInfo: PartnerInfo }>());


export const ProvidePartners = createAction("Get All Partners", props<{ partnersInfo: any[] }>());


export const DeletePartner = createAction("Delete Partner", props<{ id: number }>());



export const GetPartnerInfo = createAction("Get Partner Info", props<{ id: number }>());


export const UpdatePartner = createAction("Update Partner", props<{ partnersInfo: PartnerInfo }>());


