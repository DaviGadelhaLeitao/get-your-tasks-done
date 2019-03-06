export class Task {
    constructor(
        public id: number,
        public description: string,
        public done: boolean,
        public targetDate: Date
    ) {

    }
}