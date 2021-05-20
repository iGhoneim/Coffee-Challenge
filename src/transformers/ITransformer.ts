export default interface ITransformer<T> {

    transform(json: string): T;
}
