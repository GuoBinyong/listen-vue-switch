import Vue from "vue"

/**
 * 操作的类型
 */
type Action = (alive:boolean,vueInst:Vue,parentInst:Vue)=>void;


/**
 * listenVueSwitch()
 * 执行该函数，监听vue组件的激活和失活状态的改变
 *
 *
 * 该函数对象提供了以下属性供配置：
 * parentNames ?: string | string[]   可选；设置被监听的组件的父组件的标签名字；如果配置了该属性，则只有当组件的父组件包含在该配置里时，才会执行相应的 action;  否则，不会对其父组件做验证；
 * activate ?: Action | Action[]    可选；当组件被激活时需要执行的操作 或 一组操作的 数组
 * deactivate ?: Action | Action[]    可选；当组件失活时需要执行的操作 或 一组操作的 数组
 * switch ?: Action | Action[]    可选；当组件激活或失活时需要执行的操作 或 一组操作的 数组
 * */
interface ListenVueSwitch {
    /**
     * listenVueSwitch()
     * 执行该函数，监听vue组件的激活和失活状态的改变
     */
    ():void;

    /*该函数对象提供了以下属性供配置：*/

    /**
     * 设置被监听的组件的父组件的标签名字；
     */
    parentNames?:string | string[];


    /**
     * 当组件被激活时需要执行的操作 或 一组操作的 数组
     */
    activate?:Action | Action[];



    /**
     * 当组件失活时需要执行的操作 或 一组操作的 数组
     */
    deactivate?: Action | Action[];


    /**
     * 当组件激活或失活时需要执行的操作 或 一组操作的 数组
     */
    switch?: Action | Action[];

}




/**
 * 执行相关的 actions
 * @param vueInst : Vue   当前的Vue实例
 * @param alive ?: boolean  是否是激活
 */
declare function performActions(vueInst:Vue,alive?:boolean):void;



declare const listenVueSwitch:ListenVueSwitch;
export default listenVueSwitch;
