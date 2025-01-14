import {MlcActionEvent, MlcWorkflow} from "@mai-alpha/mai-mlc-core-tsc";

export class MaiNativeKnowledgeWorkflow extends MlcWorkflow {

    handleActionEvent(event: MlcActionEvent) {
        switch (event.getSender()) {
            case "MaiMCubKnowledgeLogic":
                this.handleMaiMCubKnowledgeLogic(event)
                break
            default:
                break
        }
    }

    handleMaiMCubKnowledgeLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            default:
                break
        }
    }

}