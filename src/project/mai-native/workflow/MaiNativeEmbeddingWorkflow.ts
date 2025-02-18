import {MlcActionEvent, MlcStateEvent, MlcWorkflow} from "@mai-alpha/mai-mlc-core-tsc";
import {MaiEmbeddingVolcEngineLogicActionKeys, MaiNativeEmbeddingLogicStateKeys, MaiNativeEmbeddingLogicStateModel} from "@mai-community/mai-native-community-lib";


export class MaiNativeEmbeddingWorkflow extends MlcWorkflow {

    handleActionEvent(event: MlcActionEvent) {
        switch (event.getSender()) {
            case "MaiEmbeddingVolcEngineLogic":
                this.handleMaiEmbeddingVolcEngineLogic(event)
                break
            default:
                break
        }
    }

    handleMaiEmbeddingVolcEngineLogic(event: MlcActionEvent){
        switch (event.getMessage()) {
            case MaiEmbeddingVolcEngineLogicActionKeys.MAI_EMBEDDING_REGISTER:
                const model1 = new MaiNativeEmbeddingLogicStateModel()
                model1.embeddingModels = [...event.getModel().embeddingModels]
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeEmbeddingLogic")
                    .setMessage(MaiNativeEmbeddingLogicStateKeys.MAI_EMBEDDING_REGISTER)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiEmbeddingVolcEngineLogicActionKeys.MAI_EMBEDDING_RESULT:
                const model2 = new MaiNativeEmbeddingLogicStateModel()
                model2.status = event.getModel().status
                model2.embeddingID = event.getModel().embeddingID
                model2.errorMessage = event.getModel().errorMessage
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeEmbeddingLogic")
                    .setMessage(MaiNativeEmbeddingLogicStateKeys.MAI_EMBEDDING_RESULT)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

}