import {MlcActionEvent, MlcStateEvent, MlcWorkflow} from "@mai-alpha/mai-mlc-core-tsc";
import {MaiNativeAccountLogicActionKeys, MaiNativeAccountLogicStateKeys, MaiNativeAccountLogicStateModel, MaiNativeUserLogicActionKeys, MaiNativeUserLogicStateKeys, MaiNativeUserLogicStateModel} from "@mai-community/mai-native-community-lib";

export class MaiNativeLoginWorkflow extends MlcWorkflow {

    handleActionEvent(event: MlcActionEvent) {
        switch (event.getSender()) {
            case "MaiNativeAccountLogic":
                this.handleMaiNativeAccountLogic(event)
                break
            case "MaiNativeUserLogic":
                this.handleMaiNativeUserLogic(event)
                break
            default:
                super.handleActionEvent(event);
                break
        }
    }

    handleMaiNativeAccountLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiNativeAccountLogicActionKeys.MAI_ACCOUNT_ADD_USER:
                const model1 = new MaiNativeUserLogicStateModel()
                model1.account = event.getModel().account
                model1.password = event.getModel().password
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeUserLogic")
                    .setMessage(MaiNativeUserLogicStateKeys.MAI_USER_ADD)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiNativeAccountLogicActionKeys.MAI_ACCOUNT_GET_USER_BY_ACCOUNT:
                const model2 = new MaiNativeUserLogicStateModel()
                model2.account = event.getModel().account
                model2.password = event.getModel().password
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeUserLogic")
                    .setMessage(MaiNativeUserLogicStateKeys.MAI_USER_GET_BY_ACCOUNT)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

    handleMaiNativeUserLogic(event: MlcActionEvent) {
        switch (event.getMessage()) {
            case MaiNativeUserLogicActionKeys.MAI_USER_ADD:
                const model1 = new MaiNativeAccountLogicStateModel()
                model1.status = event.getModel().status
                if (model1.status) {
                    model1.accountData = {...event.getModel().userData}
                }
                const event1 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeAccountLogic")
                    .setMessage(MaiNativeAccountLogicStateKeys.MAI_ACCOUNT_ADD_USER_RESULT)
                    .setModel(model1)
                    .build()
                this.sendStateEventObj(event1)
                break
            case MaiNativeUserLogicActionKeys.MAI_USER_GET_BY_ACCOUNT:
                const model2 = new MaiNativeAccountLogicStateModel()
                model2.status = event.getModel().status
                if (model2.status) {
                    model2.accountData = {...event.getModel().userData}
                }
                const event2 = MlcStateEvent.obtain()
                    .setSender(event.getSender())
                    .setReceiver("MaiNativeAccountLogic")
                    .setMessage(MaiNativeAccountLogicStateKeys.MAI_ACCOUNT_GET_USER_RESULT)
                    .setModel(model2)
                    .build()
                this.sendStateEventObj(event2)
                break
            default:
                break
        }
    }

}
