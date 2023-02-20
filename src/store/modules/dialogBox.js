const dialogBox = {
    state: {
        //控制对话框的显示与隐藏
        dialogShow:false
    },
    getters: {
    },
    mutations: {
        ctrlDialogShow(state,value){
            state.dialogShow = value;
            return;
        }
    },
    actions: {
    },
}
export default dialogBox;
