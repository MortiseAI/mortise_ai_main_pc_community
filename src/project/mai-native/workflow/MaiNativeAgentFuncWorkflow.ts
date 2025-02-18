import {MlcActionEvent, MlcStateEvent, MlcWorkflow} from "@mai-alpha/mai-mlc-core-tsc";
import {MaiMCubeDslAgentActionKeys, MaiMCubeLogicAgentActionKeys, MaiMCubeViewAgentActionKeys, MaiMCubeWorkflowAgentActionKeys, MaiNativeLLMsLogicStateKeys, MaiNativeLLMsLogicStateModel, MaiNativeMPromptLogicStateKeys, MaiNativeMPromptLogicStateModel} from "@mai-community/mai-native-community-lib";

export class MaiNativeAgentFuncWorkflow extends MlcWorkflow {

    handleActionEvent(event: MlcActionEvent) {
        switch (event.getSender()) {
            case "MaiMCubeViewAgentLogic":
                this.handleMaiMCubeViewAgentLogic(event)
                break
            case "MaiMCubeDslAgentLogic":
                this.handleMaiMCubeDslAgentLogic(event)
                break
            case "MaiMCubeLogicAgentLogic":
                this.handleMaiMCubeLogicAgentLogic(event)
                break
            case "MaiMCubWorkflowAgentLogic":
                this.handleMaiMCubeWorkflowAgentLogic(event)
                break
            default:
                break
        }
    }

    handleMaiMCubeViewAgentLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiMCubeViewAgentActionKeys.MAI_MAGENT_REGISTER_API:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.agentApi = event.getModel().agentApi
                model1.agentFuncCalling = event.getModel().agentFuncCalling
                model1.agentFunc = event.getModel().agentFunc
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_API)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiMCubeViewAgentActionKeys.MAI_MPROMPT_GET_DEF_PROMPT:
                const model2 = new MaiNativeMPromptLogicStateModel()
                model2.mcubeID = event.getModel().mcubeID
                model2.mcubeVersion = event.getModel().mcubeVersion
                model2.mpromptList = [...event.getModel().mpromptList]
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMPromptLogic")
                    .setMessage(MaiNativeMPromptLogicStateKeys.MAI_MPROMPT_GET_DEF_PROMPT)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

    handleMaiMCubeDslAgentLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiMCubeDslAgentActionKeys.MAI_MAGENT_REGISTER_API:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.agentApi = event.getModel().agentApi
                model1.agentFuncCalling = event.getModel().agentFuncCalling
                model1.agentFunc = event.getModel().agentFunc
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_API)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiMCubeDslAgentActionKeys.MAI_MPROMPT_GET_DEF_PROMPT:
                const model2 = new MaiNativeMPromptLogicStateModel()
                model2.mcubeID = event.getModel().mcubeID
                model2.mcubeVersion = event.getModel().mcubeVersion
                model2.mpromptList = [...event.getModel().mpromptList]
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMPromptLogic")
                    .setMessage(MaiNativeMPromptLogicStateKeys.MAI_MPROMPT_GET_DEF_PROMPT)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

    handleMaiMCubeLogicAgentLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiMCubeLogicAgentActionKeys.MAI_MAGENT_REGISTER_API:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.agentApi = event.getModel().agentApi
                model1.agentFuncCalling = event.getModel().agentFuncCalling
                model1.agentFunc = event.getModel().agentFunc
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_API)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiMCubeLogicAgentActionKeys.MAI_MPROMPT_GET_DEF_PROMPT:
                const model2 = new MaiNativeMPromptLogicStateModel()
                model2.mcubeID = event.getModel().mcubeID
                model2.mcubeVersion = event.getModel().mcubeVersion
                model2.mpromptList = [...event.getModel().mpromptList]
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMPromptLogic")
                    .setMessage(MaiNativeMPromptLogicStateKeys.MAI_MPROMPT_GET_DEF_PROMPT)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

    handleMaiMCubeWorkflowAgentLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiMCubeWorkflowAgentActionKeys.MAI_MAGENT_REGISTER_API:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.agentApi = event.getModel().agentApi
                model1.agentFuncCalling = event.getModel().agentFuncCalling
                model1.agentFunc = event.getModel().agentFunc
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_API)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiMCubeWorkflowAgentActionKeys.MAI_MPROMPT_GET_DEF_PROMPT:
                const model2 = new MaiNativeMPromptLogicStateModel()
                model2.mcubeID = event.getModel().mcubeID
                model2.mcubeVersion = event.getModel().mcubeVersion
                model2.mpromptList = [...event.getModel().mpromptList]
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMPromptLogic")
                    .setMessage(MaiNativeMPromptLogicStateKeys.MAI_MPROMPT_GET_DEF_PROMPT)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

}
