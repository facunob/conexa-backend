export interface IPageableResponse<T> {
    count: number;
    results: T[];
}
