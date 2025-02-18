import {MlcProvider} from "@mai-alpha/mai-mlc-core-tsc";

export function mai_native_dsl() {

    MlcProvider.registryMlcDsl("mai_native_dsl", {
        "bizId": "10002",
        "bizName": "mai_native_dsl",
        "logic": "mai_native_dsl_logic",
        "workflow": "mai_native_dsl_workflow",
    });

    MlcProvider.registryMlcDsl("mai_native_dsl_logic", [
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

        {
            "name": "MaiNativeLLMsLogic",
            "logic": "MaiNativeLLMsLogic",
        },

        {
            "name": "MaiNativeMCubeLogic",
            "logic": "MaiNativeMCubeLogic",
        },
        {
            "name": "MaiNativeMddLogic",
            "logic": "MaiNativeMddLogic",
        },
        {
            "name": "MaiNativeMPromptLogic",
            "logic": "MaiNativeMPromptLogic",
        },
        {
            "name": "MaiNativeMCodeLogic",
            "logic": "MaiNativeMCodeLogic",
        },

        {
            "name": "MaiNativeKnowledgeLogic",
            "logic": "MaiNativeKnowledgeLogic",
        },
        {
            "name": "MaiNativeAgentLogic",
            "logic": "MaiNativeAgentLogic",
        },
        {
            "name": "MaiNativeEmbeddingLogic",
            "logic": "MaiNativeEmbeddingLogic",
        },
        {
            "name": "MaiEmbeddingVolcEngineLogic",
            "logic": "MaiEmbeddingVolcEngineLogic",
        },
        {
            "name": "MaiMCubKnowledgeLogic",
            "logic": "MaiMCubKnowledgeLogic",
        },
        {
            "name": "MaiMCubeViewCodeLogic",
            "logic": "MaiMCubeViewCodeLogic",
        },
        {
            "name": "MaiMCubeLogicCodeLogic",
            "logic": "MaiMCubeLogicCodeLogic",
        },
        {
            "name": "MaiMCubeDslCodeLogic",
            "logic": "MaiMCubeDslCodeLogic",
        },
        {
            "name": "MaiMCubeWorkflowCodeLogic",
            "logic": "MaiMCubeWorkflowCodeLogic",
        },
        // [0001 初始化时序] 1.先初始化 LLMs
        {
            "name": "MaiLLMsOpenAILogic",
            "logic": "MaiLLMsOpenAILogic",
        },
        {
            "name": "MaiLLMsVolcArkLogic",
            "logic": "MaiLLMsVolcArkLogic",
        },
        {
            "name": "MaiLLMsDeepSeekLogic",
            "logic": "MaiLLMsDeepSeekLogic",
        },
        {
            "name": "MaiLLMsBaiLianLogic",
            "logic": "MaiLLMsBaiLianLogic",
        },
        {
            "name": "MaiLLMsQianFanLogic",
            "logic": "MaiLLMsQianFanLogic",
        },
        {
            "name": "MaiLLMsVedaLogic",
            "logic": "MaiLLMsVedaLogic",
        },
        // [0001 初始化时序] 2.再初始化 Agent
        {
            "name": "MaiMCubeViewAgentLogic",
            "logic": "MaiMCubeViewAgentLogic",
        },
        {
            "name": "MaiMCubeDslAgentLogic",
            "logic": "MaiMCubeDslAgentLogic",
        },
        {
            "name": "MaiMCubeLogicAgentLogic",
            "logic": "MaiMCubeLogicAgentLogic",
        },
        {
            "name": "MaiMCubWorkflowAgentLogic",
            "logic": "MaiMCubWorkflowAgentLogic",
        },
        {
            "name": "MaiNativeAgentAppLogic",
            "logic": "MaiNativeAgentAppLogic",
        },
        {
            "name": "MaiAgentAppLogic",
            "logic": "MaiAgentAppLogic",
        },
        {
            "name": "MaiAgentAppCustomLogic",
            "logic": "MaiAgentAppCustomLogic",
        },
        {
            "name": "MaiNativeChatLogic",
            "logic": "MaiNativeChatLogic",
        },
    ])

    MlcProvider.registryMlcDsl("mai_native_dsl_workflow", [
        {
            "name": "MaiNativeWorkflow",
            "workflow": "MaiNativeWorkflow",
            "events": [
                {
                    "sender": "MaiNativeAccountLogic",
                    "action": [
                        "mai_account_login",
                        "mai_account_logout",
                        "mai_account_add",
                        "mai_account_del",
                        "mai_account_update",
                        "mai_account_get",
                        "mai_account_add_user",
                        "mai_account_update_user",
                        "mai_account_get_user_by_id",
                        "mai_account_get_user_by_account",
                    ]
                },
                {
                    "sender": "MaiNativeUserLogic",
                    "action": [
                        "mai_user_update",
                    ]
                },
                {
                    "sender": "MaiNativeKnowledgeLogic",
                    "action": [
                        "mai_mknowledge_add",
                        "mai_mknowledge_del",
                        "mai_mknowledge_update",
                        "mai_mknowledge_copy",
                        "mai_mknowledge_get",
                        "mai_mknowledge_all_get",
                        "mai_mknowledge_trash_all_get",
                        "mai_mknowledge_trash_restore",
                        "mai_mknowledge_content_import",
                        "mai_mknowledge_content_save",
                        "mai_mknowledge_content_get",
                        "mai_mknowledge_content_online",
                        "mai_mknowledge_content_offline",
                        "mai_mknowledge_content_offline_all",
                        "mai_mknowledge_embedding_all_modle",
                        "mai_mknowledge_content_item_get",
                        "mai_mknowledge_content_item_search",
                        "mai_mknowledge_init",
                        "mai_mknowledge_content_item_get_native",
                        "mai_mknowledge_content_code_task_get_result",
                    ]
                },
                {
                    "sender": "MaiNativeEmbeddingLogic",
                    "action": [
                        "mai_embedding_all_modle",
                        "mai_embedding_content",
                        "mai_embedding_content_data",
                        "mai_embedding_single_content",
                        "mai_embedding_single_content_data",
                    ]
                },
                {
                    "sender": "MaiNativeMCubeLogic",
                    "action": [
                        "mai_mcube_add",
                        "mai_mcube_del",
                        "mai_mcube_update",
                        "mai_mcube_copy",
                        "mai_mcube_get",
                        "mai_mcube_all_get",
                        "mai_mcube_trash_all_get",
                        "mai_mcube_trash_restore",
                        "mai_mcube_get_result",
                        "mai_mcube_version_get_all_result",
                        "mai_mcube_version_publish_result",
                        "mai_mcube_version_del_result",
                        "mai_mcube_version_roll_back_result",
                        "mai_mcube_version_export_select_directory_result",
                        "mai_mcube_version_export_result"
                    ]
                },
                {
                    "sender": "MaiNativeMddLogic",
                    "action": [
                        "mai_mdd_get",
                        "mai_mdd_save",
                        "mai_mdd_update",
                        "mai_mdd_get_result",
                    ]
                },
                {
                    "sender": "MaiNativeMPromptLogic",
                    "action": [
                        "mai_mprompt_get",
                        "mai_mprompt_save",
                        "mai_mprompt_def_prompt",
                        "mai_mprompt_get_def_prompt",
                        "mai_mprompt_import_select_file_result",
                        "mai_mprompt_import_mprompt_content_result",
                        "mai_mprompt_export_select_dir_result",
                        "mai_mprompt_export_mprompt_file_result",
                        "mai_mprompt_task_chat_queue",
                    ]
                },
                {
                    "sender": "MaiNativeSettingsLogic",
                    "action": [
                        "mai_settings_language_get",
                        "mai_settings_network_get",
                        "mai_settings_llms_set",
                        "mai_settings_llms_get",
                        "mai_settings_vector_set",
                        "mai_settings_vector_get",
                        "mai_settings_get_all",
                        "mai_settings_agent_select_dir",
                        "mai_settings_agent_get",
                        "mai_settings_knowledge_select_dir",
                        "mai_settings_knowledge_get",
                    ]
                },
                {
                    "sender": "MaiNativeMCodeLogic",
                    "action": [
                        "mai_mcode_get_list_result",
                        "mai_mcode_get_generate_language",
                        "mai_mcode_generate_start",
                        "mai_mcode_generate_start_result",
                        "mai_mcode_generate_stop",
                        "mai_mcode_generate_stop_result",
                        "mai_mcode_generate_result",
                        "mai_mcode_content_get_result",
                        "mai_mcode_content_save_result",
                        "mai_mcode_control_result",
                        "mai_mcode_get_publish_list_result",
                        "mai_mcode_select_directory_result",
                        "mai_mcode_export_code_result",
                        "mai_mcode_fine_tuning_get_result",
                        "mai_mcode_fine_tuning_select_directory_result",
                        "mai_mcode_fine_tuning_export_result",
                    ]
                },
                {
                    "sender": "MaiNativeAgentLogic",
                    "action": [
                        "mai_magent_add",
                        "mai_magent_del",
                        "mai_magent_update",
                        "mai_magent_copy",
                        "mai_magent_get",
                        "mai_magent_all_get",
                        "mai_magent_all_get_by_type",
                        "mai_magent_trash_all_get",
                        "mai_magent_trash_restore",
                        "mai_magent_content_save",
                        "mai_magent_content_get",
                        "mai_magent_content_online",
                        "mai_magent_content_offline",
                        "mai_magent_content_offline_all",
                        "mai_magent_content_item_get",
                        "mai_magent_content_item_search",
                        "mai_magent_init",

                    ]
                },
                {
                    "sender": "MaiNativeChatLogic",
                    "action": [
                        "mai_main_chat_mprompt_get",
                        "mai_main_chat_mdd_get",
                        "mai_main_chat_mcode_get",
                    ]
                }
            ]
        },
        {
            "name": "MaiNativeLLMsWorkflow",
            "workflow": "MaiNativeLLMsWorkflow",
            "events": [
                {
                    "sender": "MaiLLMsVedaLogic",
                    "action": [
                        "mai_llms_register_models",
                        "mai_llms_chat_task_stop",
                        "mai_llms_chat_task_result",
                        "mai_llms_chat_task_send_message_result",
                        "mai_llms_chat_task_send_knowledge_message_result",
                        "mai_llms_task_mdd_prompt_result",
                        "mai_llms_task_mcode_generate_result",
                        "mai_llms_task_mcode_agent_app_execute",
                    ]
                },
                {
                    "sender": "MaiLLMsQianFanLogic",
                    "action": [
                        "mai_llms_register_models",
                        "mai_llms_register_settings",
                        "mai_llms_chat_task_stop",
                        "mai_llms_chat_task_result",
                        "mai_llms_chat_task_send_message_result",
                        "mai_llms_chat_task_send_knowledge_message_result",
                        "mai_llms_task_mdd_prompt_result",
                        "mai_llms_task_mcode_generate_result",
                        "mai_llms_task_mcode_agent_app_execute",
                    ]
                },
                {
                    "sender": "MaiLLMsBaiLianLogic",
                    "action": [
                        "mai_llms_register_models",
                        "mai_llms_register_settings",
                        "mai_llms_chat_task_stop",
                        "mai_llms_chat_task_result",
                        "mai_llms_chat_task_send_message_result",
                        "mai_llms_chat_task_send_knowledge_message_result",
                        "mai_llms_task_mdd_prompt_result",
                        "mai_llms_task_mcode_generate_result",
                        "mai_llms_task_mcode_agent_app_execute",
                    ]
                },
                {
                    "sender": "MaiLLMsDeepSeekLogic",
                    "action": [
                        "mai_llms_register_models",
                        "mai_llms_register_settings",
                        "mai_llms_chat_task_stop",
                        "mai_llms_chat_task_result",
                        "mai_llms_chat_task_send_message_result",
                        "mai_llms_chat_task_send_knowledge_message_result",
                        "mai_llms_task_mdd_prompt_result",
                        "mai_llms_task_mcode_generate_result",
                        "mai_llms_task_mcode_agent_app_execute",
                    ]
                },
                {
                    "sender": "MaiLLMsVolcArkLogic",
                    "action": [
                        "mai_llms_register_models",
                        "mai_llms_register_settings",
                        "mai_llms_chat_task_stop",
                        "mai_llms_chat_task_result",
                        "mai_llms_chat_task_send_message_result",
                        "mai_llms_chat_task_send_knowledge_message_result",
                        "mai_llms_task_mdd_prompt_result",
                        "mai_llms_task_mcode_generate_result",
                        "mai_llms_task_mcode_agent_app_execute",
                    ]
                },
                {
                    "sender": "MaiLLMsOpenAILogic",
                    "action": [
                        "mai_llms_register_models",
                        "mai_llms_register_settings",
                        "mai_llms_chat_task_stop",
                        "mai_llms_chat_task_result",
                        "mai_llms_chat_task_send_message_result",
                        "mai_llms_chat_task_send_knowledge_message_result",
                        "mai_llms_task_mdd_prompt_result",
                        "mai_llms_task_mcode_generate_result",
                        "mai_llms_task_mcode_agent_app_execute",
                    ]
                },
                {
                    "sender": "MaiNativeLLMsLogic",
                    "action": [
                        "mai_llms_register_api",
                        "mai_llms_get_all_model",
                        "mai_llms_get_def_model",
                        "mai_llms_set_def_model",
                        "mai_llms_task_chat_clear",
                        "mai_llms_task_chat_send_message",
                        "mai_llms_task_chat_send_knowledge_message",
                        "mai_llms_task_chat_send_message_result",
                        "mai_llms_task_chat_send_knowledge_message_result",
                        "mai_llms_task_chat_send_func_message_result",
                        "mai_llms_task_chat_message_list_result",
                        "mai_llms_task_mdd_prompt",
                        "mai_llms_task_mdd_prompt_result",
                        "mai_llms_table_data_update",
                        "mai_llms_mdd_get",
                        "mai_llms_task_mcode_generate_init",
                        "mai_llms_task_mcode_generate",
                        "mai_llms_task_mcode_generate_result",
                        "mai_llms_task_chat_queue",
                    ]
                },
            ]
        },
        {
            "name": "MaiNativeEmbeddingWorkflow",
            "workflow": "MaiNativeEmbeddingWorkflow",
            "events": [
                {
                    "sender": "MaiEmbeddingVolcEngineLogic",
                    "action": [
                        "mai_embedding_register",
                        "mai_embedding_result",
                    ]
                }
            ]
        },
        {
            "name": "MaiNativeAgentAppWorkflow",
            "workflow": "MaiNativeAgentAppWorkflow",
            "events": [
                {
                    "sender": "MaiNativeAgentAppLogic",
                    "action": [
                        "mai_agent_app_execute",
                        "mai_agent_app_cancel",
                        "mai_agent_app_execute_result",
                        "mai_agent_app_get_result",
                    ]
                },
                {
                    "sender": "MaiAgentAppLogic",
                    "action": [
                        "mai_agent_app_register",
                        "mai_agent_app_execute_result"
                    ]
                },
                {
                    "sender": "MaiAgentAppCustomLogic",
                    "action": [
                        "mai_agent_app_custom_execute_result"
                    ]
                }
            ]
        },
        {
            "name": "MaiNativeAgentFuncWorkflow",
            "workflow": "MaiNativeAgentFuncWorkflow",
            "events": [
                {
                    "sender": "MaiMCubeViewAgentLogic",
                    "action": [
                        "mai_magent_register_api",
                        "mai_mprompt_get_def_prompt",
                    ]
                },
                {
                    "sender": "MaiMCubeDslAgentLogic",
                    "action": [
                        "mai_magent_register_api",
                        "mai_mprompt_get_def_prompt",
                    ]
                },
                {
                    "sender": "MaiMCubeLogicAgentLogic",
                    "action": [
                        "mai_magent_register_api",
                        "mai_mprompt_get_def_prompt",
                    ]
                },
                {
                    "sender": "MaiMCubWorkflowAgentLogic",
                    "action": [
                        "mai_magent_register_api",
                        "mai_mprompt_get_def_prompt",
                    ]
                },
            ]
        },
        {
            "name": "MaiNativeKnowledgeWorkflow",
            "workflow": "MaiNativeKnowledgeWorkflow",
            "events": [
                {
                    "sender": "MaiMCubKnowledgeLogic",
                    "action": []
                },
            ]
        },
        {
            "name": "MaiNativeCodeWorkflow",
            "workflow": "MaiNativeCodeWorkflow",
            "events": [
                {
                    "sender": "MaiMCubeViewCodeLogic",
                    "action": [
                        "mai_mcube_code_register",
                        "mai_mcode_get_mdd_data",
                        "mai_mcode_llms_data",
                        "mai_mcode_generate_result",
                        "mai_mcode_get_mknowledge_data",
                        "mai_mcode_llms_generate",
                        "mai_mcode_llms_generate_init",
                    ]
                },
                {
                    "sender": "MaiMCubeDslCodeLogic",
                    "action": [
                        "mai_mcube_code_register",
                        "mai_mcode_get_mdd_data",
                        "mai_mcode_llms_data",
                        "mai_mcode_generate_result",
                        "mai_mcode_get_mknowledge_data",
                        "mai_mcode_llms_generate",
                        "mai_mcode_llms_generate_init",
                    ]
                },
                {
                    "sender": "MaiMCubeLogicCodeLogic",
                    "action": [
                        "mai_mcube_code_register",
                        "mai_mcode_get_mdd_data",
                        "mai_mcode_llms_data",
                        "mai_mcode_generate_result",
                        "mai_mcode_get_mknowledge_data",
                        "mai_mcode_llms_generate",
                        "mai_mcode_llms_generate_init",
                    ]
                },
                {
                    "sender": "MaiMCubeWorkflowCodeLogic",
                    "action": [
                        "mai_mcube_code_register",
                        "mai_mcode_get_mdd_data",
                        "mai_mcode_llms_data",
                        "mai_mcode_generate_result",
                        "mai_mcode_get_mknowledge_data",
                        "mai_mcode_llms_generate",
                        "mai_mcode_llms_generate_init",
                    ]
                },
            ]
        },
    ])
}
