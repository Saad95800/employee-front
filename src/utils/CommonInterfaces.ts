export interface ResponseInterface {
    meta:  {
        arg: object,
        requestId: string,
        requestStatus: string
    }
}

export interface CommitteeSelectItem{
    value: string|number, 
    label: string, 
    color?: string
}
export interface RoleSelectOption{
    value: string|number,
    label: string
}

export interface StatusSelectOption{
    value: string|number,
    label: string
}

export interface IDataFetchUsers{
    nbPerPage?:number|string, 
    newPage?:number, 
    active?: number, 
    filterProfil?: string, 
    filterRole?:string,
    filterName?:string,
    filterInstance?:string,
    filterStatus?:string
}