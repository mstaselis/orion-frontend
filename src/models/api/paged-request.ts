export interface PagedRequest<TOptions> {
    limit?: number;
    offset?: number;
    options?: TOptions;
}