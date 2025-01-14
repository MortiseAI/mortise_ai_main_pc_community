import {MlcProvider} from "@mai-alpha/mai-mlc-core-tsc";

export function mai_native_login_dsl() {

    MlcProvider.registryMlcDsl("mai_native_login_dsl", {
        "bizId": "10001",
        "bizName": "mai_native_login_dsl",
        "logic": "mai_native_login_dsl_logic",
        "workflow": "mai_native_login_dsl_workflow",
    });

    MlcProvider.registryMlcDsl("mai_native_login_dsl_logic", [
        {
            "name": "MaiNativeAccountLogic",
            "logic": "MaiNativeAccountLogic",
        },
        {
            "name": "MaiNativeUserLogic",
            "logic": "MaiNativeUserLogic",
        },
        {
            "name": "MaiNativeSettingsLogic",
            "logic": "MaiNativeSettingsLogic",
        },
    ])

    MlcProvider.registryMlcDsl("mai_native_login_dsl_workflow", [
        {
            "name": "MaiNativeLoginWorkflow",
            "workflow": "MaiNativeLoginWorkflow",
            "events": [
                {
                    "sender": "MaiNativeAccountLogic",
                    "action": [
                        "mai_account_login",
                        "mai_account_add",
                        "mai_account_get",
                        "mai_account_add_user",
                        "mai_account_get_user_by_account",
                    ]
                },
                {
                    "sender": "MaiNativeUserLogic",
                    "action": [
                        "mai_user_add",
                        "mai_user_get_by_account"
                    ]
                },
                {
                    "sender": "MaiNativeSettingsLogic",
                    "action": []
                },
            ]
        },
    ])
}
