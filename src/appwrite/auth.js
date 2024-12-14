import conf from '../conf/conf.js';
//Client, Account, ID: These are classes from the Appwrite SDK

//Client: Manages the connection to the Appwrite server
//Account: Provides methods for managing user accounts (e.g., creation, sessions, retrieval).
//ID: Provides helper functions for generating unique IDs.
import { Client, Account, ID } from "appwrite"

//This class wraps the Appwrite SDK methods to provide an abstraction layer for authentication.
export class Authservice {
    client = new Client();
    account;
    constructor() {
        //this.client Refers to an instance of the Client class from the Appwrite SDK.
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);    //It requires a Client instance (this.client) to know which server and project to interact with.
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {

                //call another method
                //If account creation is successful, it immediately logs the user in using the login method.
                return this.login({ email, password })

            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
        return null;
    }

    async logOut() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new Authservice();
export default authService
