import {IMlcEnv} from "@mai-alpha/mai-mlc-core-tsc";
import {mai_native_dsl} from "../../project/mai-native/dsl/mai_native_dsl";
import {MaiNativeWorkflow} from "../../project/mai-native/workflow/MaiNativeWorkflow";
import {MaiNativeLLMsWorkflow} from "../../project/mai-native/workflow/MaiNativeLLMsWorkflow";
import {MaiNativeAgentFuncWorkflow} from "../../project/mai-native/workflow/MaiNativeAgentFuncWorkflow";
import {MaiNativeEmbeddingWorkflow} from "../../project/mai-native/workflow/MaiNativeEmbeddingWorkflow";
import {MaiNativeCodeWorkflow} from "../../project/mai-native/workflow/MaiNativeCodeWorkflow";
import {MaiNativeKnowledgeWorkflow} from "../../project/mai-native/workflow/MaiNativeKnowledgeWorkflow";
import {mai_native_login_dsl} from "../../project/mai-native-login/dsl/mai_native_login_dsl";
import {MaiNativeLoginWorkflow} from "../../project/mai-native-login/workflow/MaiNativeLoginWorkflow";
import {MaiNativeAgentAppWorkflow} from "../../project/mai-native/workflow/MaiNativeAgentAppWorkflow";
import {
    MaiAgentAppMVedaActionKeys,
    MaiAgentAppMVedaLogic, MaiAgentAppMVedaStateKeys,
    MaiEmbeddingVolcEngineLogic, MaiEmbeddingVolcEngineLogicActionKeys, MaiEmbeddingVolcEngineLogicStateKeys,
    MaiLLMsBaiLianLogic, MaiLLMsBaiLianLogicActionKeys, MaiLLMsBaiLianLogicStateKeys,
    MaiLLMsDeepSeekLogic, MaiLLMsDeepSeekLogicActionKeys, MaiLLMsDeepSeekLogicStateKeys,
    MaiLLMsMVedaLogic, MaiLLMsMVedaLogicActionKeys, MaiLLMsMVedaLogicStateKeys,
    MaiLLMsOpenAILogic,
    MaiLLMsOpenAILogicActionKeys, MaiLLMsOpenAILogicStateKeys,
    MaiLLMsQianFanLogic, MaiLLMsQianFanLogicActionKeys, MaiLLMsQianFanLogicStateKeys,
    MaiLLMsVolcArkLogic, MaiLLMsVolcArkLogicActionKeys, MaiLLMsVolcArkLogicStateKeys, MaiMCubeDslAgentActionKeys,
    MaiMCubeDslAgentLogic, MaiMCubeDslAgentStateKeys, MaiMCubeDslCodeActionKeys,
    MaiMCubeDslCodeLogic, MaiMCubeDslCodeStateKeys, MaiMCubeKnowledgeActionKeys, MaiMCubeKnowledgeStateKeys, MaiMCubeLogicAgentActionKeys,
    MaiMCubeLogicAgentLogic, MaiMCubeLogicAgentStateKeys, MaiMCubeLogicCodeActionKeys,
    MaiMCubeLogicCodeLogic, MaiMCubeLogicCodeStateKeys, MaiMCubeViewAgentActionKeys,
    MaiMCubeViewAgentLogic, MaiMCubeViewAgentStateKeys, MaiMCubeViewCodeActionKeys,
    MaiMCubeViewCodeLogic, MaiMCubeViewCodeStateKeys, MaiMCubeWorkflowAgentActionKeys, MaiMCubeWorkflowAgentStateKeys, MaiMCubeWorkflowCodeActionKeys,
    MaiMCubeWorkflowCodeLogic, MaiMCubeWorkflowCodeStateKeys,
    MaiMCubKnowledgeLogic,
    MaiMCubWorkflowAgentLogic,
    MaiNativeAccountLogic,
    MaiNativeAccountLogicActionKeys, MaiNativeAccountLogicStateKeys,
    MaiNativeAgentAppLogic,
    MaiNativeAgentAppLogicActionKeys, MaiNativeAgentAppLogicStateKeys,
    MaiNativeAgentLogic,
    MaiNativeAgentLogicActionKeys, MaiNativeAgentLogicStateKeys,
    MaiNativeEmbeddingLogic,
    MaiNativeEmbeddingLogicActionKeys, MaiNativeEmbeddingLogicStateKeys,
    MaiNativeKnowledgeLogic,
    MaiNativeKnowledgeLogicActionKeys, MaiNativeKnowledgeLogicStateKeys,
    MaiNativeLLMsLogic,
    MaiNativeLLMsLogicActionKeys, MaiNativeLLMsLogicStateKeys,
    MaiNativeMCodeLogic,
    MaiNativeMCodeLogicActionKeys, MaiNativeMCodeLogicStateKeys,
    MaiNativeMCubeLogic,
    MaiNativeMCubeLogicActionKeys, MaiNativeMCubeLogicStateKeys,
    MaiNativeMddLogic,
    MaiNativeMddLogicActionKeys, MaiNativeMddLogicStateKeys,
    MaiNativeMPromptLogic,
    MaiNativeMPromptLogicActionKeys, MaiNativeMPromptLogicStateKeys,
    MaiNativeSettingsLogic,
    MaiNativeSettingsLogicActionKeys, MaiNativeSettingsLogicStateKeys,
    MaiNativeUserLogic,
    MaiNativeUserLogicActionKeys, MaiNativeUserLogicStateKeys
} from "@mai-community/mai-native-community-lib";


export class MlcEvn implements IMlcEnv {

    private _dsl: any = {
        mai_native_dsl: mai_native_dsl,
        mai_native_login_dsl: mai_native_login_dsl,
    }

    private _mortiseLogic: any = {
        /** mai-native **/
        MaiNativeAccountLogic,
        MaiNativeUserLogic,
        MaiNativeSettingsLogic,
        MaiNativeMCodeLogic,
        MaiNativeKnowledgeLogic,
        MaiNativeEmbeddingLogic,
        MaiNativeLLMsLogic,
        MaiNativeMCubeLogic,
        MaiNativeMddLogic,
        MaiNativeMPromptLogic,
        MaiNativeAgentLogic,
        MaiNativeAgentAppLogic,
        /** mai-llms **/
        MaiLLMsOpenAILogic,
        MaiLLMsVolcArkLogic,
        MaiLLMsDeepSeekLogic,
        MaiLLMsBaiLianLogic,
        MaiLLMsQianFanLogic,
        MaiLLMsMVedaLogic,
        /** mai-agent-function-calling **/
        MaiMCubeViewAgentLogic,
        MaiMCubeDslAgentLogic,
        MaiMCubeLogicAgentLogic,
        MaiMCubWorkflowAgentLogic,
        /** mai-agent-app **/
        MaiAgentAppMVedaLogic,
        /** mai-knowledge **/
        MaiMCubKnowledgeLogic,
        /** mai-knowledge-embedding **/
        MaiEmbeddingVolcEngineLogic,
        /** mai-code **/
        MaiMCubeViewCodeLogic,
        MaiMCubeDslCodeLogic,
        MaiMCubeLogicCodeLogic,
        MaiMCubeWorkflowCodeLogic,
    }

    private _mortiseWorkflow: any = {
        /** mai-native **/
        MaiNativeWorkflow,
        /** mai-logic **/
        MaiNativeLLMsWorkflow,
        /** mai-agent **/
        MaiNativeAgentAppWorkflow,
        MaiNativeAgentFuncWorkflow,
        /** mai-knowledge **/
        MaiNativeKnowledgeWorkflow,
        /** mai-knowledge-embedding **/
        MaiNativeEmbeddingWorkflow,
        /** mai-agent-code **/
        MaiNativeCodeWorkflow,
        /** mai-native-login **/
        MaiNativeLoginWorkflow
    }

    private _actionKeys: any = {
        /** mai-native **/
        MaiNativeAccountLogicActionKeys,
        MaiNativeUserLogicActionKeys,
        MaiNativeMCodeLogicActionKeys,
        MaiNativeKnowledgeLogicActionKeys,
        MaiNativeEmbeddingLogicActionKeys,
        MaiNativeLLMsLogicActionKeys,
        MaiNativeMCubeLogicActionKeys,
        MaiNativeMddLogicActionKeys,
        MaiNativeMPromptLogicActionKeys,
        MaiNativeSettingsLogicActionKeys,
        MaiNativeAgentLogicActionKeys,
        MaiNativeAgentAppLogicActionKeys,
        /** mai-llms **/
        MaiLLMsOpenAILogicActionKeys,
        MaiLLMsVolcArkLogicActionKeys,
        MaiLLMsDeepSeekLogicActionKeys,
        MaiLLMsBaiLianLogicActionKeys,
        MaiLLMsQianFanLogicActionKeys,
        MaiLLMsMVedaLogicActionKeys,
        /** mai-agent-function-calling **/
        MaiMCubeViewAgentActionKeys,
        MaiMCubeDslAgentActionKeys,
        MaiMCubeLogicAgentActionKeys,
        MaiMCubeWorkflowAgentActionKeys,
        /** mai-agent-app **/
        MaiAgentAppMVedaActionKeys,
        /** mai-knowledge **/
        MaiMCubeKnowledgeActionKeys,
        /** mai-knowledge-embedding **/
        MaiEmbeddingVolcEngineLogicActionKeys,
        /** mai-agent-code **/
        MaiMCubeViewCodeActionKeys,
        MaiMCubeDslCodeActionKeys,
        MaiMCubeLogicCodeActionKeys,
        MaiMCubeWorkflowCodeActionKeys,
    }

    private _stateKeys: any = {
        /** mai-native **/
        MaiNativeAccountLogicStateKeys,
        MaiNativeUserLogicStateKeys,
        MaiNativeMCodeLogicStateKeys,
        MaiNativeKnowledgeLogicStateKeys,
        MaiNativeEmbeddingLogicStateKeys,
        MaiNativeLLMsLogicStateKeys,
        MaiNativeMCubeLogicStateKeys,
        MaiNativeMddLogicStateKeys,
        MaiNativeMPromptLogicStateKeys,
        MaiNativeSettingsLogicStateKeys,
        MaiNativeAgentLogicStateKeys,
        MaiNativeAgentAppLogicStateKeys,
        /** mai-llms **/
        MaiLLMsOpenAILogicStateKeys,
        MaiLLMsVolcArkLogicStateKeys,
        MaiLLMsDeepSeekLogicStateKeys,
        MaiLLMsBaiLianLogicStateKeys,
        MaiLLMsQianFanLogicStateKeys,
        MaiLLMsMVedaLogicStateKeys,
        /** mai-agent-function-calling **/
        MaiMCubeViewAgentStateKeys,
        MaiMCubeDslAgentStateKeys,
        MaiMCubeLogicAgentStateKeys,
        MaiMCubeWorkflowAgentStateKeys,
        /** mai-agent-app **/
        MaiAgentAppMVedaStateKeys,
        /** mai-knowledge **/
        MaiMCubeKnowledgeStateKeys,
        /** mai-knowledge-embedding **/
        MaiEmbeddingVolcEngineLogicStateKeys,
        /** mai-agent-code **/
        MaiMCubeViewCodeStateKeys,
        MaiMCubeDslCodeStateKeys,
        MaiMCubeLogicCodeStateKeys,
        MaiMCubeWorkflowCodeStateKeys,
    }

    private _sidecar: any = {}

    appId(): string {
        return "";
    }

    dsl(key: string): any {
        return this._dsl[key]
    }

    mortiseView(key: string): any {
    }

    mortiseLogic(key: string): any {
        return this._mortiseLogic[key]
    }

    mortiseWorkflow(key: string): any {
        return this._mortiseWorkflow[key]
    }

    actionKeys(key: string): any {
        return this._actionKeys[key]
    }

    stateKeys(key: string): any {
        return this._stateKeys[key]
    }

    sidecarClass(key: string): any {
        return this._sidecar[key]
    }

}
