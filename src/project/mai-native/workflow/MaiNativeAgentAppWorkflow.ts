import {MlcActionEvent, MlcStateEvent, MlcWorkflow} from "@mai-alpha/mai-mlc-core-tsc";
import {MaiAgentAppMVedaActionKeys, MaiNativeAgentAppLogicActionKeys, MaiNativeAgentAppLogicStateKeys, MaiNativeAgentAppLogicStateModel} from "@mai-community/mai-native-community-lib";

export class MaiNativeAgentAppWorkflow extends MlcWorkflow {

    handleActionEvent(event: MlcActionEvent) {
        switch (event.getSender()) {
            case "MaiNativeAgentAppLogic":
                this.handleMaiNativeAgentAppLogic(event)
                break
            case "MaiAgentAppMVedaLogic":
                this.handleMaiAgentAppMVedaLogic(event)
                break
            default:
                break
        }
    }

    handleMaiNativeAgentAppLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiNativeAgentAppLogicActionKeys.MAI_NATIVE_AGENT_APP_EXECUTE:
                const model1: any = {...event.getModel()}
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiNativeAgentAppLogicActionKeys.MAI_NATIVE_AGENT_APP_CANCEL:
                const model2: any = {...event.getModel()}
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

    handleMaiAgentAppMVedaLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiAgentAppMVedaActionKeys.MAI_AGENT_APP_REGISTER:
                const model1 = new MaiNativeAgentAppLogicStateModel()
                model1.agentAppModels = [...event.getModel().agentAppModels]
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeAgentAppLogic")
                    .setMessage(MaiNativeAgentAppLogicStateKeys.MAI_AGENT_APP_REGISTER)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiAgentAppMVedaActionKeys.MAI_AGENT_APP_EXECUTE_RESULT:
                const model2: any = {...event.getModel()}
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

}
