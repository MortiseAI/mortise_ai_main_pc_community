import {MlcActionEvent, MlcStateEvent, MlcLifecycleEvent, MlcErrorEvent} from "@mai-alpha/mai-mlc-core-tsc"

/**
 * MLC 容器 事件回调接口
 */
export interface MlcListener {

    /**
     * MLC Component/Logic/Workflow 发送 Action 事件通知，默认容器外不可接收，需 设置 AnnMlcActionKey 注解参数 acceptable == true，
     * @param event
     */
    onActionEvent(event: MlcActionEvent): void

    /**
     * MLC Component/Logic/Workflow 接收 State 事件通知，默认容器外不可接收，需 设置 AnnMlcStateKey 注解参数 acceptable == true，
     * @param event
     */
    onStateEvent(event: MlcStateEvent): void

    /**
     * MLC 容器声明周期，默认可接收，参考 MlcLifecycleConstants 常量
     * 1.MLC容器 开始加载 MLC_LIFECYCLE_DLC_CONTAINER_WILL_MOUNT : mlc_container_will_mount
     * 2.MLC容器 加载完成 MLC_LIFECYCLE_DLC_CONTAINER_DID_MOUNT : mlc_container_did_mount
     * 3.MLC容器 开始卸载 MLC_LIFECYCLE_DLC_CONTAINER_WILL_UNMOUNT : mlc_container_will_unmount
     * 4.MLC容器 卸载完成 MLC_LIFECYCLE_DLC_CONTAINER_DID_UNMOUNT : mlc_container_did_unmount
     * 5.MLC容器 切换后台 MLC_LIFECYCLE_DLC_CONTAINER_BACK : mlc_container_back
     * 6.MLC容器 恢复前台 MLC_LIFECYCLE_DLC_CONTAINER_FRONT : mlc_container_front
     * @param event
     */
    onLifecycleEvent(event: MlcLifecycleEvent): void

    /**
     * MLC Error 事件通知
     * @param event
     */
    onErrorEvent(event: MlcErrorEvent): void

}
