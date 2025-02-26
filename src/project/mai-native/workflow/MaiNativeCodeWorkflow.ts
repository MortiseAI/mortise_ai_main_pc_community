import {MlcActionEvent, MlcStateEvent, MlcWorkflow} from "@mai-alpha/mai-mlc-core-tsc";
import {
    MaiMCubeDslCodeActionKeys,
    MaiMCubeLogicCodeActionKeys,
    MaiMCubeViewCodeActionKeys, MaiMCubeWorkflowCodeActionKeys,
    MaiNativeKnowledgeLogicStateKeys,
    MaiNativeKnowledgeLogicStateModel,
    MaiNativeLLMsLogicStateKeys,
    MaiNativeLLMsLogicStateModel,
    MaiNativeMCodeLogicStateKeys,
    MaiNativeMCodeLogicStateModel,
    MaiNativeMddLogicStateKeys,
    MaiNativeMddLogicStateModel
} from "@mai-community/mai-native-community-lib";

export class MaiNativeCodeWorkflow extends MlcWorkflow {

    handleActionEvent(event: MlcActionEvent) {
        switch (event.getSender()) {
            case "MaiMCubeViewCodeLogic":
                this.handleMaiMCubeViewCodeLogic(event)
                break
            case "MaiMCubeLogicCodeLogic":
                this.handleMaiMCubeLogicCodeLogic(event)
                break
            case "MaiMCubeDslCodeLogic":
                this.handleMaiMCubeDslCodeLogic(event)
                break
            case "MaiMCubeWorkflowCodeLogic":
                this.handleMaiMCubeWorkflowCodeLogic(event)
                break
            default:
                break
        }
    }

    handleMaiMCubeViewCodeLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiMCubeViewCodeActionKeys.MAI_MCUBE_CODE_REGISTER:
                const model1 = new MaiNativeMCodeLogicStateModel()
                model1.mcubeCode = {...event.getModel().mcubeCode}
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMCodeLogic")
                    .setMessage(MaiNativeMCodeLogicStateKeys.MAI_MCODE_LOGIC_REGISTER_CODE)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiMCubeViewCodeActionKeys.MAI_MCODE_GET_MDD_DATA:
                const model2 = new MaiNativeMddLogicStateModel()
                model2.mcubeID = event.getModel().mcubeID
                model2.mcubeVersion = event.getModel().mcubeVersion
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMddLogic")
                    .setMessage(MaiNativeMddLogicStateKeys.MAI_MDD_DATE_GET)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            case MaiMCubeViewCodeActionKeys.MAI_MCODE_GET_MKNOWLEDGE_DATA:
                const model3 = new MaiNativeKnowledgeLogicStateModel()
                model3.taskServiceID = event.getModel().taskServiceID
                model3.taskID = event.getModel().taskID
                model3.taskKnowledge = [...event.getModel().taskKnowledge]
                const event3 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeKnowledgeLogic")
                    .setMessage(MaiNativeKnowledgeLogicStateKeys.MAI_MKNOWLEDGE_CONTENT_CODE_TASK_GET)
                    .setModel(model3)
                    .build()
                this.sendStateEventObj(event3)
                break
            case MaiMCubeViewCodeActionKeys.MAI_MCODE_LLMS_GENERATE:
                const model4 = new MaiNativeLLMsLogicStateModel()
                model4.mcodeKey = event.getModel().mcodeKey
                model4.mcodeID = event.getModel().mcodeID
                model4.mcodeName = event.getModel().mcodeName
                model4.mcodeLLMs = event.getModel().mcodeLLMs
                model4.mcodeVersion = event.getModel().mcodeVersion
                model4.mcodeContent = event.getModel().mcodeContent
                model4.mcodeKnowledge = event.getModel().mcodeKnowledge
                model4.mcodeAgent = event.getModel().mcodeAgent
                const event4 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_MCODE_GENERATE)
                    .setModel(model4)
                    .build()
                this.sendStateEventObj(event4)
                break
            case MaiMCubeViewCodeActionKeys.MAI_MCODE_GENERATE_RESULT:
                const model5 = new MaiNativeMCodeLogicStateModel()
                model5.status = event.getModel().status
                model5.mcubeID = event.getModel().mcubeID
                model5.mcubeVersion = event.getModel().mcubeVersion
                model5.generateResult = {...event.getModel().generateResult}
                const event5 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMCodeLogic")
                    .setMessage(MaiNativeMCodeLogicStateKeys.MAI_MCODE_GENERATE_RESULT)
                    .setModel(model5)
                    .build()
                this.sendStateEventObj(event5)
                break
            case MaiMCubeViewCodeActionKeys.MAI_MCODE_LLMS_GENERATE_INIT:
                const model6 = new MaiNativeLLMsLogicStateModel()
                model6.mcodeID = event.getModel().mcodeID
                model6.mcodeName = event.getModel().mcodeName
                model6.mcodeLLMs = event.getModel().mcodeLLMs
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_MCODE_GENERATE_INIT)
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiMCubeViewCodeActionKeys.MAI_MCODE_GENERATE_STREAM_RESULT:
                const model7 = new MaiNativeMCodeLogicStateModel()
                model7.mcubeID = event.getModel().mcubeID
                model7.mcodeKey = event.getModel().mcodeKey
                model7.mcodeContent = event.getModel().mcodeContent
                model7.mcodeReasoningContent = event.getModel().mcodeReasoningContent
                model7.generateResult = {...event.getModel().generateResult}
                const event7 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMCodeLogic")
                    .setMessage(MaiNativeMCodeLogicStateKeys.MAI_MCODE_GENERATE_STREAM_RESULT)
                    .setModel(model7)
                    .build()
                this.sendStateEventObj(event7)
                break
            case MaiMCubeViewCodeActionKeys.MAI_MCODE_LLMS_GENERATE_STOP:
                const model8 = new MaiNativeLLMsLogicStateModel()
                model8.mcodeID = event.getModel().mcodeID
                model8.mcodeName = event.getModel().mcodeName
                model8.mcodeLLMs = event.getModel().mcodeLLMs
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_MCODE_GENERATE_STOP)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            default:
                break
        }
    }

    handleMaiMCubeLogicCodeLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiMCubeLogicCodeActionKeys.MAI_MCUBE_CODE_REGISTER:
                const model1 = new MaiNativeMCodeLogicStateModel()
                model1.mcubeCode = {...event.getModel().mcubeCode}
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMCodeLogic")
                    .setMessage(MaiNativeMCodeLogicStateKeys.MAI_MCODE_LOGIC_REGISTER_CODE)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiMCubeLogicCodeActionKeys.MAI_MCODE_GET_MDD_DATA:
                const model2 = new MaiNativeMddLogicStateModel()
                model2.mcubeID = event.getModel().mcubeID
                model2.mcubeVersion = event.getModel().mcubeVersion
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMddLogic")
                    .setMessage(MaiNativeMddLogicStateKeys.MAI_MDD_DATE_GET)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            case MaiMCubeLogicCodeActionKeys.MAI_MCODE_GET_MKNOWLEDGE_DATA:
                const model3 = new MaiNativeKnowledgeLogicStateModel()
                model3.taskServiceID = event.getModel().taskServiceID
                model3.taskID = event.getModel().taskID
                model3.taskKnowledge = [...event.getModel().taskKnowledge]
                const event3 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeKnowledgeLogic")
                    .setMessage(MaiNativeKnowledgeLogicStateKeys.MAI_MKNOWLEDGE_CONTENT_CODE_TASK_GET)
                    .setModel(model3)
                    .build()
                this.sendStateEventObj(event3)
                break
            case MaiMCubeLogicCodeActionKeys.MAI_MCODE_LLMS_GENERATE:
                const model4 = new MaiNativeLLMsLogicStateModel()
                model4.mcodeKey = event.getModel().mcodeKey
                model4.mcodeID = event.getModel().mcodeID
                model4.mcodeName = event.getModel().mcodeName
                model4.mcodeLLMs = event.getModel().mcodeLLMs
                model4.mcodeVersion = event.getModel().mcodeVersion
                model4.mcodeContent = event.getModel().mcodeContent
                model4.mcodeKnowledge = event.getModel().mcodeKnowledge
                model4.mcodeAgent = event.getModel().mcodeAgent
                const event4 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_MCODE_GENERATE)
                    .setModel(model4)
                    .build()
                this.sendStateEventObj(event4)
                break
            case MaiMCubeLogicCodeActionKeys.MAI_MCODE_GENERATE_RESULT:
                const model5 = new MaiNativeMCodeLogicStateModel()
                model5.status = event.getModel().status
                model5.mcubeID = event.getModel().mcubeID
                model5.mcubeVersion = event.getModel().mcubeVersion
                model5.generateResult = {...event.getModel().generateResult}
                const event5 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMCodeLogic")
                    .setMessage(MaiNativeMCodeLogicStateKeys.MAI_MCODE_GENERATE_RESULT)
                    .setModel(model5)
                    .build()
                this.sendStateEventObj(event5)
                break
            case MaiMCubeLogicCodeActionKeys.MAI_MCODE_LLMS_GENERATE_INIT:
                const model6 = new MaiNativeLLMsLogicStateModel()
                model6.mcodeID = event.getModel().mcodeID
                model6.mcodeName = event.getModel().mcodeName
                model6.mcodeLLMs = event.getModel().mcodeLLMs
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_MCODE_GENERATE_INIT)
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiMCubeLogicCodeActionKeys.MAI_MCODE_GENERATE_STREAM_RESULT:
                const model7 = new MaiNativeMCodeLogicStateModel()
                model7.mcubeID = event.getModel().mcubeID
                model7.mcodeKey = event.getModel().mcodeKey
                model7.mcodeContent = event.getModel().mcodeContent
                model7.mcodeReasoningContent = event.getModel().mcodeReasoningContent
                model7.generateResult = {...event.getModel().generateResult}
                const event7 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMCodeLogic")
                    .setMessage(MaiNativeMCodeLogicStateKeys.MAI_MCODE_GENERATE_STREAM_RESULT)
                    .setModel(model7)
                    .build()
                this.sendStateEventObj(event7)
                break
            case MaiMCubeLogicCodeActionKeys.MAI_MCODE_LLMS_GENERATE_STOP:
                const model8 = new MaiNativeLLMsLogicStateModel()
                model8.mcodeID = event.getModel().mcodeID
                model8.mcodeName = event.getModel().mcodeName
                model8.mcodeLLMs = event.getModel().mcodeLLMs
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_MCODE_GENERATE_STOP)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            default:
                break
        }
    }

    handleMaiMCubeDslCodeLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiMCubeDslCodeActionKeys.MAI_MCUBE_CODE_REGISTER:
                const model1 = new MaiNativeMCodeLogicStateModel()
                model1.mcubeCode = {...event.getModel().mcubeCode}
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMCodeLogic")
                    .setMessage(MaiNativeMCodeLogicStateKeys.MAI_MCODE_LOGIC_REGISTER_CODE)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            default:
                break
        }
    }

    handleMaiMCubeWorkflowCodeLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiMCubeWorkflowCodeActionKeys.MAI_MCUBE_CODE_REGISTER:
                const model1 = new MaiNativeMCodeLogicStateModel()
                model1.mcubeCode = {...event.getModel().mcubeCode}
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMCodeLogic")
                    .setMessage(MaiNativeMCodeLogicStateKeys.MAI_MCODE_LOGIC_REGISTER_CODE)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            default:
                break
        }
    }


}
