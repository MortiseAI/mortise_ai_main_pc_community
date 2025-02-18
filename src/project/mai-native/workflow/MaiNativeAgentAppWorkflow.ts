import {MlcActionEvent, MlcStateEvent, MlcWorkflow} from "@mai-alpha/mai-mlc-core-tsc";
import {MaiAgentAppActionKeys, MaiAgentAppCustomActionKeys, MaiNativeAgentAppLogicActionKeys, MaiNativeAgentAppLogicStateKeys, MaiNativeAgentAppLogicStateModel} from "@mai-community/mai-native-community-lib";

export class MaiNativeAgentAppWorkflow extends MlcWorkflow {

    handleActionEvent(event: MlcActionEvent) {
        switch (event.getSender()) {
            case "MaiNativeAgentAppLogic":
                this.handleMaiNativeAgentAppLogic(event)
                break
            case "MaiAgentAppLogic":
                this.handleMaiAgentAppLogic(event)
                break
            case "MaiAgentAppCustomLogic":
                this.handleMaiAgentAppCustomLogic(event)
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

    handleMaiAgentAppLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiAgentAppActionKeys.MAI_AGENT_APP_REGISTER:
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
            case MaiAgentAppActionKeys.MAI_AGENT_APP_EXECUTE_RESULT:
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

    handleMaiAgentAppCustomLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiAgentAppCustomActionKeys.MAI_AGENT_APP_CUSTOM_EXECUTE_RESULT:
                const model1: any = {...event.getModel()}
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            default:
                break
        }
    }

}
