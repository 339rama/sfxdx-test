class AccountIdService {
    constructor(
        private readonly keyName:string,
    ){}

    public getAccountId() {
        return localStorage.getItem(this.keyName);
    }

    public setAccountId(id:string) {
        return localStorage.setItem(this.keyName, id);
    }

    public removeAccountId() {
        return localStorage.removeItem(this.keyName);
    }
}

const accountIdService = new AccountIdService('accountId');

export default accountIdService;