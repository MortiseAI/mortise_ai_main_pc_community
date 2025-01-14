import {contextBridge, ipcRenderer} from "electron";

contextBridge.exposeInMainWorld('MaiBridge', {

    /** mai-chage-page **/
    handleMaiChangePage: (params) => ipcRenderer.send("mai_change_page", params),

    /** mai-native-account **/
    handleMaiAccountLogin: (params) => ipcRenderer.send("mai_account_login", params),
    handleMaiAccountLogout: () => ipcRenderer.send("mai_account_logout"),
    handleMaiAccountAdd: (params) => ipcRenderer.send("mai_account_add", params),
    handleMaiAccountDel: () => ipcRenderer.send("mai_account_del"),
    handleMaiAccountUpdate: (params) => ipcRenderer.send("mai_account_update", params),
    handleMaiAccountGet: () => ipcRenderer.send("mai_account_get"),
    handleMaiAccountRegistryCallback: (callback) => ipcRenderer.on("mai_account_call_back", callback),
    handleMaiAccountRemoveCallback: () => ipcRenderer.removeAllListeners('mai_account_call_back'),

    /** mai-native-mcube **/
    handleMaiMCubeAdd: (params) => ipcRenderer.send("mai_mcube_add", params),
    handleMaiMCubeDel: (params) => ipcRenderer.send("mai_mcube_del", params),
    handleMaiMCubeUpdate: (params) => ipcRenderer.send("mai_mcube_update", params),
    handleMaiMCubeCopy: (params) => ipcRenderer.send("mai_mcube_copy", params),
    handleMaiMCubeGet: (params) => ipcRenderer.send("mai_mcube_get", params),
    handleMaiMCubeAllGet: () => ipcRenderer.send("mai_mcube_all_get"),
    handleMaiMCubeTrashAllGet: () => ipcRenderer.send("mai_mcube_trash_all_get"),
    handleMaiMCubeTrashRestore: (params) => ipcRenderer.send("mai_mcube_trash_restore", params),
    handleMaiMCubeVersionGetAll: (params) => ipcRenderer.send("mai_mcube_version_get_all", params),
    handleMaiMCubeVersionPublish: (params) => ipcRenderer.send("mai_mcube_version_publish", params),
    handleMaiMCubeVersionDel: (params) => ipcRenderer.send("mai_mcube_version_del", params),
    handleMaiMCubeVersionRollBack: (params) => ipcRenderer.send("mai_mcube_version_roll_back", params),
    handleMaiMCubeVersionExportSelectDirectory: () => ipcRenderer.send("mai_mcube_version_export_select_directory"),
    handleMaiMCubeVersionExport: (params) => ipcRenderer.send("mai_mcube_version_export", params),
    handleMaiMCubeRegistryCallback: (callback) => ipcRenderer.on("mai_mcube_call_back", callback),
    handleMaiMCubeRemoveCallback: () => ipcRenderer.removeAllListeners('mai_mcube_call_back'),

    /** mai-native-mdd **/
    handleMaiMddGet: (params) => ipcRenderer.send("mai_mdd_get", params),
    handleMaiMddSave: (params) => ipcRenderer.send("mai_mdd_save", params),
    handleMaiMddRegistryCallback: (callback) => ipcRenderer.on("mai_mdd_call_back", callback),
    handleMaiMddRemoveCallback: () => ipcRenderer.removeAllListeners('mai_mdd_call_back'),

    /** mai-native-mprompt **/
    handleMaiMPromptGet: (params) => ipcRenderer.send("mai_mprompt_get", params),
    handleMaiMPromptSave: (params) => ipcRenderer.send("mai_mprompt_save", params),
    handleMaiMPromptImportSelectFile: () => ipcRenderer.send("mai_mprompt_import_select_file"),
    handleMaiMPromptImportMPromptContent: (params) => ipcRenderer.send("mai_mprompt_import_mprompt_content", params),
    handleMaiMPromptExportSelectDir: () => ipcRenderer.send("mai_mprompt_export_select_dir"),
    handleMaiMPromptExportMPromptFile: (params) => ipcRenderer.send("mai_mprompt_export_mprompt_file", params),
    handleMaiMPromptRegistryCallback: (callback) => ipcRenderer.on("mai_mprompt_call_back", callback),
    handleMaiMPromptRemoveCallback: () => ipcRenderer.removeAllListeners('mai_mprompt_call_back'),

    /** mai-native-embedding **/
    handleMaiEmbeddingExecute: (params) => ipcRenderer.send("mai_embedding_execute", params),
    handleMaiEmbeddingDirectory: () => ipcRenderer.send('mai_embedding_directory'),
    handleMaiEmbeddingRegistryCallback: (callback) => ipcRenderer.on("mai_embedding_call_back", callback),
    handleMaiEmbeddingRemoveCallback: () => ipcRenderer.removeAllListeners('mai_embedding_call_back'),

    /** mai-native-llms **/
    handleMaiLLMsGetAllModel: () => ipcRenderer.send("mai_llms_get_all_model"),
    handleMaiLLMsGetDefModel: () => ipcRenderer.send("mai_llms_get_def_model"),
    handleMaiLLMsSetDefModel: (params) => ipcRenderer.send("mai_llms_set_def_model", params),
    handleMaiLLMsTaskChatClear: (params) => ipcRenderer.send("mai_llms_task_chat_clear", params),
    handleMaiLLMsTaskChatExecChange: (params) => ipcRenderer.send("mai_llms_task_chat_exec_change", params),
    handleMaiLLMsTaskChatMessageList: (params) => ipcRenderer.send("mai_llms_task_chat_message_list", params),
    handleMaiLLMsTaskChatSendMessage: (params) => ipcRenderer.send("mai_llms_task_chat_send_message", params),
    handleMaiLLMsTaskChatFuncExecution: (params) => ipcRenderer.send("mai_llms_task_chat_function_execution", params),
    handleMaiLLMsTaskChatQueue: (params) => ipcRenderer.send("mai_llms_task_chat_queue", params),
    handleMaiLLMsRegistryCallback: (callback) => ipcRenderer.on("mai_llms_call_back", callback),
    handleMaiLLMsRemoveCallback: () => ipcRenderer.removeAllListeners('mai_llms_call_back'),

    /** mai-native-agent-app **/
    handleMaiAgentAppGet: (params) => ipcRenderer.send("mai_agent_app_get", params),
    handleMaiAgentAppExecute: (params) => ipcRenderer.send("mai_agent_app_execute", params),
    handleMaiAgentAppCancel: (params) => ipcRenderer.send("mai_agent_app_cancel", params),
    handleMaiAgentAppRegistryCallback: (callback) => ipcRenderer.on("mai_agent_app_call_back", callback),
    handleMaiAgentAppRemoveCallback: () => ipcRenderer.removeAllListeners('mai_agent_app_call_back'),

    /** mai-native-agent-func **/
    handleMaiMAgentAdd: (params) => ipcRenderer.send("mai_magent_add", params),
    handleMaiMAgentDel: (params) => ipcRenderer.send("mai_magent_del", params),
    handleMaiMAgentUpdate: (params) => ipcRenderer.send("mai_magent_update", params),
    handleMaiMAgentCopy: (params) => ipcRenderer.send("mai_magent_copy", params),
    handleMaiMAgentGet: (params) => ipcRenderer.send("mai_magent_get", params),
    handleMaiMAgentAllGet: () => ipcRenderer.send("mai_magent_all_get"),
    handleMaiMAgentAllGetByType: (params) => ipcRenderer.send("mai_magent_all_get_by_type", params),
    handleMaiMAgentTrashAllGet: () => ipcRenderer.send("mai_magent_trash_all_get"),
    handleMaiMAgentTrashRestore: (params) => ipcRenderer.send("mai_magent_trash_restore", params),
    handleMaiMAgentContentSave: (params) => ipcRenderer.send("mai_magent_content_save", params),
    handleMaiMAgentContentGet: (params) => ipcRenderer.send("mai_magent_content_get", params),
    handleMaiMAgentContentOnline: (params) => ipcRenderer.send("mai_magent_content_online", params),
    handleMaiMAgentContentOffline: (params) => ipcRenderer.send("mai_magent_content_offline", params),
    handleMaiMAgentContentOfflineAll: () => ipcRenderer.send("mai_magent_content_offline_all"),
    handleMaiMAgentContentItemGet: (params) => ipcRenderer.send("mai_magent_content_item_get", params),
    handleMaiMAgentContentItemSearch: (params) => ipcRenderer.send("mai_magent_content_item_search", params),
    handleMaiMAgentRegistryCallback: (callback) => ipcRenderer.on("mai_magent_call_back", callback),
    handleMaiMAgentRemoveCallback: () => ipcRenderer.removeAllListeners('mai_magent_call_back'),

    /** mai-native-knowledge **/
    handleMaiMKnowledgeAdd: (params) => ipcRenderer.send("mai_mknowledge_add", params),
    handleMaiMKnowledgeDel: (params) => ipcRenderer.send("mai_mknowledge_del", params),
    handleMaiMKnowledgeUpdate: (params) => ipcRenderer.send("mai_mknowledge_update", params),
    handleMaiMKnowledgeCopy: (params) => ipcRenderer.send("mai_mknowledge_copy", params),
    handleMaiMKnowledgeGet: (params) => ipcRenderer.send("mai_mknowledge_get", params),
    handleMaiMKnowledgeAllGet: () => ipcRenderer.send("mai_mknowledge_all_get"),
    handleMaiMKnowledgeTrashAllGet: () => ipcRenderer.send("mai_mknowledge_trash_all_get"),
    handleMaiMKnowledgeTrashRestore: (params) => ipcRenderer.send("mai_mknowledge_trash_restore", params),
    handleMaiMKnowledgeContentSave: (params) => ipcRenderer.send("mai_mknowledge_content_save", params),
    handleMaiMKnowledgeContentGet: (params) => ipcRenderer.send("mai_mknowledge_content_get", params),
    handleMaiMKnowledgeContentOnline: (params) => ipcRenderer.send("mai_mknowledge_content_online", params),
    handleMaiMKnowledgeContentOffline: (params) => ipcRenderer.send("mai_mknowledge_content_offline", params),
    handleMaiMKnowledgeContentOfflineAll: () => ipcRenderer.send("mai_mknowledge_content_offline_all"),
    handleMaiMKnowledgeContentItemGet: (params) => ipcRenderer.send("mai_mknowledge_content_item_get", params),
    handleMaiMKnowledgeContentItemSearch: (params) => ipcRenderer.send("mai_mknowledge_content_item_search", params),
    handleMaiMKnowledgeRegistryCallback: (callback) => ipcRenderer.on("mai_mknowledge_call_back", callback),
    handleMaiMKnowledgeRemoveCallback: () => ipcRenderer.removeAllListeners('mai_mknowledge_call_back'),

    /** mai-native-embedding **/
    handleMaiMEmbeddingAllModel: () => ipcRenderer.send("mai_membedding_all_model"),
    handleMaiMEmbeddingContent: (params) => ipcRenderer.send("mai_membedding_content", params),
    handleMaiMEmbeddingSingleContent: (params) => ipcRenderer.send("mai_membedding_single_content", params),
    handleMaiMEmbeddingRegistryCallback: (callback) => ipcRenderer.on("mai_membedding_call_back", callback),
    handleMaiMEmbeddingRemoveCallback: () => ipcRenderer.removeAllListeners('mai_membedding_call_back'),

    /** mai-native-mcode **/
    handleMaiMCodeGetGenerateLanguage: (params) => ipcRenderer.send("mai_mcode_get_generate_language", params),
    handleMaiMCodeGenerate: (params) => ipcRenderer.send("mai_mcode_generate", params),
    handleMaiMCodeGetList: (params) => ipcRenderer.send("mai_mcode_get_list", params),
    handleMaiMCodeContentGet: (params) => ipcRenderer.send("mai_mcode_content_get", params),
    handleMaiMCodeContentSave: (params) => ipcRenderer.send("mai_mcode_content_save", params),
    handleMaiMCodeControl: (params) => ipcRenderer.send("mai_mcode_content_control", params),
    handleMaiMCodeSelectDirectory: (params) => ipcRenderer.send("mai_mcode_select_directory", params),
    handleMaiMCodeExportCode: (params) => ipcRenderer.send("mai_mcode_export_code", params),
    handleMaiMCodePublishGetList: (params) => ipcRenderer.send("mai_mcode_publish_get_list", params),
    handleMaiMCodeFineTuningGet: (params) => ipcRenderer.send("mai_mcode_fine_tuning_get", params),
    handleMaiMCodeFineTuningSelectDirectory: (params) => ipcRenderer.send("mai_mcode_fine_tuning_select_directory", params),
    handleMaiMCodeFineTuningExport: (params) => ipcRenderer.send("mai_mcode_fine_tuning_export", params),
    handleMaiMCodeRegistryCallback: (callback) => ipcRenderer.on("mai_mcode_call_back", callback),
    handleMaiMCodeRemoveCallback: () => ipcRenderer.removeAllListeners('mai_mcode_call_back'),

    /** mai-native-settings **/
    handleMaiSettingsLanguageSet: (params) => ipcRenderer.send("mai_settings_language_set", params),
    handleMaiSettingsLanguageGet: () => ipcRenderer.send("mai_settings_language_get"),
    handleMaiSettingsNetWorkSet: (params) => ipcRenderer.send("mai_settings_network_set", params),
    handleMaiSettingsNetWorkGet: () => ipcRenderer.send("mai_settings_network_get"),
    handleMaiSettingsLLMsSet: (params) => ipcRenderer.send("mai_settings_llms_set", params),
    handleMaiSettingsLLMsGet: (params) => ipcRenderer.send("mai_settings_llms_get", params),
    handleMaiSettingsAgentSet: (params) => ipcRenderer.send("mai_settings_agent_set", params),
    handleMaiSettingsAgentGet: () => ipcRenderer.send("mai_settings_agent_get"),
    handleMaiSettingsAgentSelectDirectory: () => ipcRenderer.send("mai_settings_agent_select_dir"),
    handleMaiSettingsKnowledgeSet: (params) => ipcRenderer.send("mai_settings_knowledge_set", params),
    handleMaiSettingsKnowledgeGet: () => ipcRenderer.send("mai_settings_knowledge_get"),
    handleMaiSettingsKnowledgeSelectDirectory: () => ipcRenderer.send("mai_settings_knowledge_select_dir"),
    handleMaiSettingsGetAll: () => ipcRenderer.send("mai_settings_get_all"),
    handleMaiSettingsRegistryCallback: (callback) => ipcRenderer.on("mai_settings_call_back", callback),
    handleMaiSettingsRemoveCallback: () => ipcRenderer.removeAllListeners('mai_settings_call_back'),

})



