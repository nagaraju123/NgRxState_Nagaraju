import { createReducer, on } from "@ngrx/store";
import { CreatePartner, DeletePartner, GetPartnerInfo, ProvidePartners, UpdatePartner } from "./actions";

export interface PartnerInfo {
    firstName: string;
    lastName: string;
    email: string;
    budget: number;
    phoneNumber: number;
    id: number;
}

export class PartnerInfoData {
    firstName: string;
    lastName: string;
    email: string;
    budget: number;
    phoneNumber: number;
    id: number;
}

interface IntialPartnerState {
    partnersInfo: Array<PartnerInfo>
}

const InitialPartnerInfo: IntialPartnerState = {
    partnersInfo: []
};


const PartnersReducer = createReducer(InitialPartnerInfo,
    on(CreatePartner, (state: IntialPartnerState, { partnersInfo }) => {
        console.log(partnersInfo);
        return {
            partnersInfo: [...state.partnersInfo, partnersInfo]
        }
    }),
    on(ProvidePartners, (state: IntialPartnerState, { partnersInfo }) => {
        console.log(state, partnersInfo);
        return { ...state, partnersInfo }
    }),
    on(DeletePartner, (state: IntialPartnerState, { id }) => {
        return {
            ...state,
            partnersInfo: state.partnersInfo.filter(x => x.id !== id)
        };
    }),
    on(UpdatePartner, (state: IntialPartnerState, { partnersInfo }) => {

        let partnerInfo = [...state.partnersInfo];
        let index = state.partnersInfo.findIndex(x => x.id === partnersInfo.id);
        partnerInfo[index] = partnersInfo;

        return {
            ...state,
            partnersInfo: partnerInfo
        }
    })
)




export interface AppState {
    partnersInfo: IntialPartnerState,
}


export const AppReducer = {
    partnersInfo: PartnersReducer
}


