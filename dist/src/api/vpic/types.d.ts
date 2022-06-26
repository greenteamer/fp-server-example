export interface CarMake {
    Make_ID: number;
    Make_Name: string;
}
export interface CarManufacturers {
    Country: string;
    Mfr_CommonName: string | null;
    Mfr_ID: number;
    Mfr_Name: string;
}
export interface VpicResponse<Data> {
    Count: number;
    Message: string;
    Results: Data;
}
//# sourceMappingURL=types.d.ts.map