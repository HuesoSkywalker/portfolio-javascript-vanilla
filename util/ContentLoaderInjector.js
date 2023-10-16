import { ContentLoaderInjectorInterface } from "../interfaces/ContentLoaderInjectorInterface.js"
import { ContentLoader } from "./ContentLoader.js"

export class ContentLoaderInjector extends ContentLoaderInjectorInterface {
    static instance

    static getInstance() {
        if (!this.instance) {
            this.instance = new ContentLoader()
        }
        return this.instance
    }
}
