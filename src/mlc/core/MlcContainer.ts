import {MlcActionEvent, MlcBuilder, MlcErrorEvent, MlcInstance, MlcLifecycleEvent, MlcProvider, MlcStateEvent} from "@mai-alpha/mai-mlc-core-tsc";

import {MlcListener} from "./MlcListener";
import {MlcEvn} from "../env/MlcEvn";

export class MlcContainer {

    private dls?: string

    private debug?: boolean

    private mlcInstance?: MlcInstance | null

    constructor(dsl: string, debug?: boolean) {
        this.debug = debug
        if (!MlcProvider.isRegistryMlcEnv()) {
            MlcProvider.registryMlcEnv(new MlcEvn())
        }
        this.handleContainerDsl(dsl)
    }

    handleContainerDsl(dls: string) {
        const loadDslFun = MlcProvider.MlcEnv().dsl(dls)
        if (loadDslFun) {
            loadDslFun()
            this.dls = dls
        }
    }

    handlerCreateContainer(listener: MlcListener) {
        if (!this.mlcInstance && this.dls) {
            this.mlcInstance = new MlcBuilder(this.debug).dls(this.dls).observer({
                handleActionEvent(event: MlcActionEvent) {
                    listener.onActionEvent(event)
                },
                handleStateEvent(event: MlcStateEvent) {
                    listener.onStateEvent(event)
                },
                handleLifecycleEvent(event: MlcLifecycleEvent) {
                    listener.onLifecycleEvent(event)
                },
                handleErrorEvent(event: MlcErrorEvent) {
                    listener.onErrorEvent(event)
                }
            }).build()
            this.mlcInstance.install()
        }
    }

    handleDestroyContainer() {
        if (this.mlcInstance) {
            this.mlcInstance.uninstall()
            this.mlcInstance = null
        }
    }

}
