import {MlcActionEvent, MlcStateEvent, MlcWorkflow} from "@mai-alpha/mai-mlc-core-tsc";
import {
    MaiAgentAppCustomStateKeys,
    MaiAgentAppCustomStateModel, MaiLLMsBaiLianLogicActionKeys,
    MaiLLMsDeepSeekLogicActionKeys,
    MaiLLMsOpenAILogicActionKeys, MaiLLMsQianFanLogicActionKeys, MaiLLMsVedaLogicActionKeys,
    MaiLLMsVolcArkLogicActionKeys, MaiNativeLLMsLogicActionKeys,
    MaiNativeLLMsLogicStateKeys,
    MaiNativeLLMsLogicStateModel, MaiNativeMddLogicStateKeys, MaiNativeMddLogicStateModel,
    MaiNativeSettingsLogicStateKeys,
    MaiNativeSettingsLogicStateModel
} from "@mai-community/mai-native-community-lib";


export class MaiNativeLLMsWorkflow extends MlcWorkflow {

    handleActionEvent(event: MlcActionEvent) {
        switch (event.getSender()) {
            case "MaiNativeLLMsLogic":
                this.handleMaiNativeLLMsLogic(event)
                break
            case "MaiLLMsOpenAILogic":
                this.handleMaiLLMsOpenAILogic(event)
                return
            case "MaiLLMsVolcArkLogic":
                this.handleMaiLLMsVolcArkLogic(event)
                break
            case "MaiLLMsDeepSeekLogic":
                this.handleMaiLLMsDeepSeekLogic(event)
                break
            case "MaiLLMsBaiLianLogic":
                this.handleMaiLLMsBaiLianLogic(event)
                break
            case "MaiLLMsQianFanLogic":
                this.handleMaiLLMsQianFanLogic(event)
                break
            case "MaiLLMsVedaLogic":
                this.handleMaiLLMsVedaLogic(event)
                return
            default:
                super.handleActionEvent(event);
                break
        }
    }

    handleMaiLLMsOpenAILogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiLLMsOpenAILogicActionKeys.MAI_LLMS_REGISTER_MODELS:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.llmsModels = [...event.getModel().llmsModels]
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_LLMS_MODEL)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiLLMsOpenAILogicActionKeys.MAI_LLMS_REGISTER_SETTINGS:
                const model2 = new MaiNativeSettingsLogicStateModel()
                model2.settingsData = {...event.getModel().settingsData}
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeSettingsLogic")
                    .setMessage(MaiNativeSettingsLogicStateKeys.MAI_NATIVE_SETTINGS_LLMS_REGISTER)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            case MaiLLMsOpenAILogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_MESSAGE_RESULT:
                const model3 = new MaiNativeLLMsLogicStateModel()
                model3.taskChatResultData = {...event.getModel().taskChatResultData}
                const event3 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver() ? event.getReceiver() : "MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_CHAT_TASK_SEND_MESSAGE_RESULT)
                    .setModel(model3)
                    .build()
                this.sendStateEventObj(event3)
                break
            case MaiLLMsOpenAILogicActionKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT:
                const model6 = new MaiNativeLLMsLogicStateModel()
                model6.taskID = event.getModel().taskID
                model6.taskMddData = {...event.getModel().taskMddData}
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT)
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiLLMsOpenAILogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT:
                const model7 = new MaiNativeLLMsLogicStateModel()
                model7.taskID = event.getModel().taskID
                model7.taskChatResultData = {...event.getModel().taskChatResultData}
                const event7 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT)
                    .setModel(model7)
                    .build()
                this.sendStateEventObj(event7)
                break
            case MaiLLMsOpenAILogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT:
                const model8 = new MaiNativeLLMsLogicStateModel()
                model8.mcodeKey = event.getModel().mcodeKey
                model8.mcodeStatus = event.getModel().mcodeStatus
                model8.mcodeContent = event.getModel().mcodeContent
                model8.mcodeInputToken = event.getModel().mcodeInputToken
                model8.mcodeOutputToken = event.getModel().mcodeOutputToken
                model8.mcodeInputPrice = event.getModel().mcodeInputPrice
                model8.mcodeOutputPrice = event.getModel().mcodeOutputPrice
                model8.mcodeExceType = event.getModel().mcodeExceType
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            case MaiLLMsOpenAILogicActionKeys.MAI_LLMS_TASK_MCODE_AGENT_APP_EXECUTE:
                const model9 = new MaiAgentAppCustomStateModel()
                model9.agentAppKey = event.getModel().agentAppKey
                model9.agentAppTaskID = event.getModel().agentAppTaskID
                model9.agentContent = event.getModel().agentContent
                const event9 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiAgentAppCustomLogic")
                    .setMessage(MaiAgentAppCustomStateKeys.MAI_AGENT_APP_CUSTOM_EXECUTE)
                    .setModel(model9)
                    .build()
                this.sendStateEventObj(event9)
                break
            default:
                break
        }
    }

    handleMaiLLMsVolcArkLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiLLMsVolcArkLogicActionKeys.MAI_LLMS_REGISTER_MODELS:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.llmsModels = [...event.getModel().llmsModels]
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_LLMS_MODEL)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiLLMsVolcArkLogicActionKeys.MAI_LLMS_REGISTER_SETTINGS:
                const model2 = new MaiNativeSettingsLogicStateModel()
                model2.settingsData = {...event.getModel().settingsData}
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeSettingsLogic")
                    .setMessage(MaiNativeSettingsLogicStateKeys.MAI_NATIVE_SETTINGS_LLMS_REGISTER)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            case MaiLLMsVolcArkLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_MESSAGE_RESULT:
                const model3 = new MaiNativeLLMsLogicStateModel()
                model3.taskChatResultData = {...event.getModel().taskChatResultData}
                const event3 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver() ? event.getReceiver() : "MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_CHAT_TASK_SEND_MESSAGE_RESULT)
                    .setModel(model3)
                    .build()
                this.sendStateEventObj(event3)
                break
            case MaiLLMsVolcArkLogicActionKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT:
                const model6 = new MaiNativeLLMsLogicStateModel()
                model6.taskID = event.getModel().taskID
                model6.taskMddData = {...event.getModel().taskMddData}
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT)
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiLLMsVolcArkLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT:
                const model7 = new MaiNativeLLMsLogicStateModel()
                model7.taskID = event.getModel().taskID
                model7.taskChatResultData = {...event.getModel().taskChatResultData}
                const event7 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT)
                    .setModel(model7)
                    .build()
                this.sendStateEventObj(event7)
                break
            case MaiLLMsVolcArkLogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT:
                const model8 = new MaiNativeLLMsLogicStateModel()
                model8.mcodeKey = event.getModel().mcodeKey
                model8.mcodeStatus = event.getModel().mcodeStatus
                model8.mcodeContent = event.getModel().mcodeContent
                model8.mcodeInputToken = event.getModel().mcodeInputToken
                model8.mcodeOutputToken = event.getModel().mcodeOutputToken
                model8.mcodeInputPrice = event.getModel().mcodeInputPrice
                model8.mcodeOutputPrice = event.getModel().mcodeOutputPrice
                model8.mcodeExceType = event.getModel().mcodeExceType
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            case MaiLLMsVolcArkLogicActionKeys.MAI_LLMS_TASK_MCODE_AGENT_APP_EXECUTE:
                const model9 = new MaiAgentAppCustomStateModel()
                model9.agentAppKey = event.getModel().agentAppKey
                model9.agentAppTaskID = event.getModel().agentAppTaskID
                model9.agentContent = event.getModel().agentContent
                const event9 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiAgentAppCustomLogic")
                    .setMessage(MaiAgentAppCustomStateKeys.MAI_AGENT_APP_CUSTOM_EXECUTE)
                    .setModel(model9)
                    .build()
                this.sendStateEventObj(event9)
                break
            default:
                break
        }
    }

    handleMaiLLMsDeepSeekLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiLLMsDeepSeekLogicActionKeys.MAI_LLMS_REGISTER_MODELS:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.llmsModels = [...event.getModel().llmsModels]
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_LLMS_MODEL)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiLLMsDeepSeekLogicActionKeys.MAI_LLMS_REGISTER_SETTINGS:
                const model2 = new MaiNativeSettingsLogicStateModel()
                model2.settingsData = {...event.getModel().settingsData}
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeSettingsLogic")
                    .setMessage(MaiNativeSettingsLogicStateKeys.MAI_NATIVE_SETTINGS_LLMS_REGISTER)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            case MaiLLMsDeepSeekLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_MESSAGE_RESULT:
                const model3 = new MaiNativeLLMsLogicStateModel()
                model3.taskChatResultData = {...event.getModel().taskChatResultData}
                const event3 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver() ? event.getReceiver() : "MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_CHAT_TASK_SEND_MESSAGE_RESULT)
                    .setModel(model3)
                    .build()
                this.sendStateEventObj(event3)
                break
            case MaiLLMsDeepSeekLogicActionKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT:
                const model6 = new MaiNativeLLMsLogicStateModel()
                model6.taskID = event.getModel().taskID
                model6.taskMddData = {...event.getModel().taskMddData}
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT)
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiLLMsDeepSeekLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT:
                const model7 = new MaiNativeLLMsLogicStateModel()
                model7.taskID = event.getModel().taskID
                model7.taskChatResultData = {...event.getModel().taskChatResultData}
                const event7 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT)
                    .setModel(model7)
                    .build()
                this.sendStateEventObj(event7)
                break
            case MaiLLMsDeepSeekLogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT:
                const model8 = new MaiNativeLLMsLogicStateModel()
                model8.mcodeKey = event.getModel().mcodeKey
                model8.mcodeStatus = event.getModel().mcodeStatus
                model8.mcodeContent = event.getModel().mcodeContent
                model8.mcodeInputToken = event.getModel().mcodeInputToken
                model8.mcodeOutputToken = event.getModel().mcodeOutputToken
                model8.mcodeInputPrice = event.getModel().mcodeInputPrice
                model8.mcodeOutputPrice = event.getModel().mcodeOutputPrice
                model8.mcodeExceType = event.getModel().mcodeExceType
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            case MaiLLMsDeepSeekLogicActionKeys.MAI_LLMS_TASK_MCODE_AGENT_APP_EXECUTE:
                const model9 = new MaiAgentAppCustomStateModel()
                model9.agentAppKey = event.getModel().agentAppKey
                model9.agentAppTaskID = event.getModel().agentAppTaskID
                model9.agentContent = event.getModel().agentContent
                const event9 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiAgentAppCustomLogic")
                    .setMessage(MaiAgentAppCustomStateKeys.MAI_AGENT_APP_CUSTOM_EXECUTE)
                    .setModel(model9)
                    .build()
                this.sendStateEventObj(event9)
                break
            default:
                break
        }
    }

    handleMaiLLMsQianFanLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiLLMsQianFanLogicActionKeys.MAI_LLMS_REGISTER_MODELS:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.llmsModels = [...event.getModel().llmsModels]
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_LLMS_MODEL)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiLLMsQianFanLogicActionKeys.MAI_LLMS_REGISTER_SETTINGS:
                const model2 = new MaiNativeSettingsLogicStateModel()
                model2.settingsData = {...event.getModel().settingsData}
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeSettingsLogic")
                    .setMessage(MaiNativeSettingsLogicStateKeys.MAI_NATIVE_SETTINGS_LLMS_REGISTER)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            case MaiLLMsQianFanLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_MESSAGE_RESULT:
                const model3 = new MaiNativeLLMsLogicStateModel()
                model3.taskChatResultData = {...event.getModel().taskChatResultData}
                const event3 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver() ? event.getReceiver() : "MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_CHAT_TASK_SEND_MESSAGE_RESULT)
                    .setModel(model3)
                    .build()
                this.sendStateEventObj(event3)
                break
            case MaiLLMsQianFanLogicActionKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT:
                const model6 = new MaiNativeLLMsLogicStateModel()
                model6.taskID = event.getModel().taskID
                model6.taskMddData = {...event.getModel().taskMddData}
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT)
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiLLMsQianFanLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT:
                const model7 = new MaiNativeLLMsLogicStateModel()
                model7.taskID = event.getModel().taskID
                model7.taskChatResultData = {...event.getModel().taskChatResultData}
                const event7 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT)
                    .setModel(model7)
                    .build()
                this.sendStateEventObj(event7)
                break
            case MaiLLMsQianFanLogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT:
                const model8 = new MaiNativeLLMsLogicStateModel()
                model8.mcodeKey = event.getModel().mcodeKey
                model8.mcodeStatus = event.getModel().mcodeStatus
                model8.mcodeContent = event.getModel().mcodeContent
                model8.mcodeInputToken = event.getModel().mcodeInputToken
                model8.mcodeOutputToken = event.getModel().mcodeOutputToken
                model8.mcodeInputPrice = event.getModel().mcodeInputPrice
                model8.mcodeOutputPrice = event.getModel().mcodeOutputPrice
                model8.mcodeExceType = event.getModel().mcodeExceType
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            case MaiLLMsQianFanLogicActionKeys.MAI_LLMS_TASK_MCODE_AGENT_APP_EXECUTE:
                const model9 = new MaiAgentAppCustomStateModel()
                model9.agentAppKey = event.getModel().agentAppKey
                model9.agentAppTaskID = event.getModel().agentAppTaskID
                model9.agentContent = event.getModel().agentContent
                const event9 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiAgentAppCustomLogic")
                    .setMessage(MaiAgentAppCustomStateKeys.MAI_AGENT_APP_CUSTOM_EXECUTE)
                    .setModel(model9)
                    .build()
                this.sendStateEventObj(event9)
                break
            default:
                break
        }
    }

    handleMaiLLMsBaiLianLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiLLMsBaiLianLogicActionKeys.MAI_LLMS_REGISTER_MODELS:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.llmsModels = [...event.getModel().llmsModels]
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_LLMS_MODEL)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiLLMsBaiLianLogicActionKeys.MAI_LLMS_REGISTER_SETTINGS:
                const model2 = new MaiNativeSettingsLogicStateModel()
                model2.settingsData = {...event.getModel().settingsData}
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeSettingsLogic")
                    .setMessage(MaiNativeSettingsLogicStateKeys.MAI_NATIVE_SETTINGS_LLMS_REGISTER)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            case MaiLLMsBaiLianLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_MESSAGE_RESULT:
                const model3 = new MaiNativeLLMsLogicStateModel()
                model3.taskChatResultData = {...event.getModel().taskChatResultData}
                const event3 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver() ? event.getReceiver() : "MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_CHAT_TASK_SEND_MESSAGE_RESULT)
                    .setModel(model3)
                    .build()
                this.sendStateEventObj(event3)
                break
            case MaiLLMsBaiLianLogicActionKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT:
                const model6 = new MaiNativeLLMsLogicStateModel()
                model6.taskID = event.getModel().taskID
                model6.taskMddData = {...event.getModel().taskMddData}
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT)
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiLLMsBaiLianLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT:
                const model7 = new MaiNativeLLMsLogicStateModel()
                model7.taskID = event.getModel().taskID
                model7.taskChatResultData = {...event.getModel().taskChatResultData}
                const event7 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT)
                    .setModel(model7)
                    .build()
                this.sendStateEventObj(event7)
                break
            case MaiLLMsBaiLianLogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT:
                const model8 = new MaiNativeLLMsLogicStateModel()
                model8.mcodeKey = event.getModel().mcodeKey
                model8.mcodeStatus = event.getModel().mcodeStatus
                model8.mcodeContent = event.getModel().mcodeContent
                model8.mcodeInputToken = event.getModel().mcodeInputToken
                model8.mcodeOutputToken = event.getModel().mcodeOutputToken
                model8.mcodeInputPrice = event.getModel().mcodeInputPrice
                model8.mcodeOutputPrice = event.getModel().mcodeOutputPrice
                model8.mcodeExceType = event.getModel().mcodeExceType
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            case MaiLLMsBaiLianLogicActionKeys.MAI_LLMS_TASK_MCODE_AGENT_APP_EXECUTE:
                const model9 = new MaiAgentAppCustomStateModel()
                model9.agentAppKey = event.getModel().agentAppKey
                model9.agentAppTaskID = event.getModel().agentAppTaskID
                model9.agentContent = event.getModel().agentContent
                const event9 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiAgentAppCustomLogic")
                    .setMessage(MaiAgentAppCustomStateKeys.MAI_AGENT_APP_CUSTOM_EXECUTE)
                    .setModel(model9)
                    .build()
                this.sendStateEventObj(event9)
                break
            default:
                break
        }
    }

    handleMaiLLMsVedaLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiLLMsVedaLogicActionKeys.MAI_LLMS_REGISTER_MODELS:
                const model1 = new MaiNativeLLMsLogicStateModel()
                model1.llmsModels = [...event.getModel().llmsModels]
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_REGISTER_LLMS_MODEL)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiLLMsVedaLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_MESSAGE_RESULT:
                const model3 = new MaiNativeLLMsLogicStateModel()
                model3.taskChatResultData = {...event.getModel().taskChatResultData}
                const event3 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver() ? event.getReceiver() : "MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_CHAT_TASK_SEND_MESSAGE_RESULT)
                    .setModel(model3)
                    .build()
                this.sendStateEventObj(event3)
                break
            case MaiLLMsVedaLogicActionKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT:
                const model6 = new MaiNativeLLMsLogicStateModel()
                model6.taskID = event.getModel().taskID
                model6.taskMddData = {...event.getModel().taskMddData}
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MDD_PROMPT_RESULT)
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiLLMsVedaLogicActionKeys.MAI_LLMS_CHAT_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT:
                const model7 = new MaiNativeLLMsLogicStateModel()
                model7.taskID = event.getModel().taskID
                model7.taskChatResultData = {...event.getModel().taskChatResultData}
                const event7 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_LOGIC_TASK_SEND_KNOWLEDGE_MESSAGE_RESULT)
                    .setModel(model7)
                    .build()
                this.sendStateEventObj(event7)
                break
            case MaiLLMsVedaLogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT:
                const model8 = new MaiNativeLLMsLogicStateModel()
                model8.mcodeKey = event.getModel().mcodeKey
                model8.mcodeStatus = event.getModel().mcodeStatus
                model8.mcodeContent = event.getModel().mcodeContent
                model8.mcodeInputToken = event.getModel().mcodeInputToken
                model8.mcodeOutputToken = event.getModel().mcodeOutputToken
                model8.mcodeInputPrice = event.getModel().mcodeInputPrice
                model8.mcodeOutputPrice = event.getModel().mcodeOutputPrice
                model8.mcodeExceType = event.getModel().mcodeExceType
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeLLMsLogic")
                    .setMessage(MaiNativeLLMsLogicStateKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            case MaiLLMsVedaLogicActionKeys.MAI_LLMS_TASK_MCODE_AGENT_APP_EXECUTE:
                const model9 = new MaiAgentAppCustomStateModel()
                model9.agentAppKey = event.getModel().agentAppKey
                model9.agentAppTaskID = event.getModel().agentAppTaskID
                model9.agentContent = event.getModel().agentContent
                const event9 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiAgentAppCustomLogic")
                    .setMessage(MaiAgentAppCustomStateKeys.MAI_AGENT_APP_CUSTOM_EXECUTE)
                    .setModel(model9)
                    .build()
                this.sendStateEventObj(event9)
                break
            default:
                break
        }
    }

    handleMaiNativeLLMsLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TASK_CHAT_CLEAR:
                const model1: any = {...event.getModel()}
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_REGISTER_API:
                const model5: any = {...event.getModel()}
                const event5 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model5)
                    .build()
                this.sendStateEventObj(event5)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TASK_CHAT_SEND_MESSAGE:
                const model6: any = {...event.getModel()}
                const event6 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model6)
                    .build()
                this.sendStateEventObj(event6)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TABLE_DATA_UPDATE:
                const model8 = new MaiNativeMddLogicStateModel()
                model8.mcubeID = event.getModel().mcubeID
                model8.mcubeVersion = event.getModel().mcubeVersion
                model8.messageID = event.getModel().messageID
                model8.taskID = event.getModel().taskID
                model8.mddControl = event.getModel().mddControl
                model8.mddContentData = {...event.getModel().mddContentData}
                const event8 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMddLogic")
                    .setMessage(MaiNativeMddLogicStateKeys.MAI_MDD_DATE_UPDATE)
                    .setModel(model8)
                    .build()
                this.sendStateEventObj(event8)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_MDD_GET:
                const model9 = new MaiNativeMddLogicStateModel()
                model9.mcubeID = event.getModel().mcubeID
                model9.mcubeVersion = event.getModel().mcubeVersion
                model9.messageID = event.getModel().messageID
                model9.taskID = event.getModel().taskID
                const event9 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMddLogic")
                    .setMessage(MaiNativeMddLogicStateKeys.MAI_MDD_DATE_GET)
                    .setModel(model9)
                    .build()
                this.sendStateEventObj(event9)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TASK_MDD_PROMPT:
                const model10: any = {...event.getModel()}
                const event10 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model10)
                    .build()
                this.sendStateEventObj(event10)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TASK_CHAT_SEND_KNOWLEDGE_MESSAGE:
                const model11: any = {...event.getModel()}
                const event11 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model11)
                    .build()
                this.sendStateEventObj(event11)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE:
                const model12: any = {...event.getModel()}
                const event12 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model12)
                    .build()
                this.sendStateEventObj(event12)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE_RESULT:
                const model13: any = {...event.getModel()}
                const event13 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model13)
                    .build()
                this.sendStateEventObj(event13)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TASK_CHAT_QUEUE:
                const model14 = new MaiNativeMddLogicStateModel()
                model14.mcubeID = event.getModel().mcubeID
                model14.mcubeVersion = event.getModel().mcubeVersion
                model14.taskMddQueue = [...event.getModel().taskChatQueue]
                const event14 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeMddLogic")
                    .setMessage(MaiNativeMddLogicStateKeys.MAI_MDD_DATE_QUEUE)
                    .setModel(model14)
                    .build()
                this.sendStateEventObj(event14)
                break
            case MaiNativeLLMsLogicActionKeys.MAI_LLMS_TASK_MCODE_GENERATE_INIT:
                const model15: any = {...event.getModel()}
                const event15 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver(event.getReceiver())
                    .setMessage(event.getMessage())
                    .setModel(model15)
                    .build()
                this.sendStateEventObj(event15)
                break
            default:
                break
        }
    }

}
