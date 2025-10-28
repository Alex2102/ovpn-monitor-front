export interface IAnswer<T = any> {
    data?: T;
    status: 'success' | 'error';
}