window.api = {
    project: {
        addProject: function (e, cb) {
            util.request2("/project/add", e, cb);
        },
        updateProject: function (e, cb) {
            util.request2("/project/update", e, cb);
        },
        deleteProject: function (e, cb) {
            util.request("project/delete", e, cb);
        },
        getList: function (e, cb) {
            util.request2("/project/getList", e, cb);
        },
        startProject: function (e, cb) {
            util.request2("project/startFlow", e, cb);
        },
        getPerson: function (e, cb) {
            util.request("project/getPerson", e, cb);
        },
        getAllPerson: function (e, cb) {
            util.request2("project/getAllPerson", e, cb);
        },
        setMachineDuty:function(e,cb){
            console.log("project/setMachineDuty/"+e.projectid+"/"+e.machineid);
            util.request2("project/setMachineDuty/"+e.projectid+"/"+e.machineid, e.dutys, cb);
        }
    },
    machine: {
        addMachine: function (e, cb) {
            util.request2("/machine/add", e, cb);
        },
        updateMachine: function (e, cb) {
            util.request2("/machine/update", e, cb);
        },
        deleteMachine: function (e, cb) {
            util.request("/machine/delete", e, cb);
        },
        getListByProject: function (e, cb) {
            util.request("/machine/getMachineByProjectId", e, cb);
        },
        getMachineById: function (e, cb) {
            util.request("/machine/getMachineById", e, cb);
        },
    },
    flow: {
        getMyFlow: function (cb) {
            util.request("flow/getMyFlow", {}, cb);
        },
        getFlowById: function (e, cb) {
            util.request("flow/getFlowById", e, cb);
        },
        getFlowModule: function (e, cb) {
            util.request("flow/getList", e, cb);
        },

        commit: function (e, cb) {
            util.request2("flow/commit", e, cb);
        },
        getUnFinishNodeTask: function (e, cb) {
            util.request("milepost/getUnfinishTask", e, cb);
        },
        getNodeTasks: function (e, cb) {
            util.request2("/milepost/getList", e, cb);
        },
        // startFileTask: function (e, cb) {
        //     util.request("milepost/commit", e, cb);
        // },
        nodeFileUpload: function (target,e, cb) {

            util.uploadFile2(target,e, cb)
            //util.uploadFile(e, cb);
        },
        downLoadNodeFile: function (e, cb) {
            util.downLoad(e, cb);
        },
        addFlowFile: function (e, cb) {
            util.request("milepost/addFlowFile", e, cb);
        },
        addFlowEx: function (e, cb) {
            util.request("/milepost/addFlowEx", e, cb);
        },
        closeFlowEx: function (e, cb) {
            util.request("milepost/closeEx", e, cb);
        },
        getExTypes: function (e, cb) {
            util.request("exception/getExTypes", e, cb);
        },
        getExType2s: function (e, cb) {
            util.request("exception/getExtype2s", e, cb);
        },
        getFlowByRecord: function (e, cb) {
            util.request("flow/getFlowByRecord", e, cb);
        },
        setFileEx: function (e, cb) {
            util.request("mileport/setFileEx", e, cb);
        }
    },
    node: {
        getDutys: function (e,cb) {
            util.request("node/getDutys", e, cb);
        },
        getList: function (e,cb) {
            util.request("node/getList", e, cb);
        },
        deleteNode: function (e, cb) {
            util.request("node/deleteNodeTask", e, cb);
        },
        addNodeTask: function (e, cb) {
            util.request("/node/addNodeTask", e, cb);
        },
        updateNode: function (e, cb) {
            util.request("/node/update", e, cb);
        },
        getWorkNodes:function(e,cb){
            util.request2("/node/getWorkNodes",e,cb);
        },
        saveAll:function(e,cb){
            util.request2("/node/saveAll",e,cb);
        }
    },
    task: {
        getList: function (e, cb) {
            util.request2("task/getList", e, cb);
        },
        getMyTask: function (cb) {
            util.request("task/getMyTask", {}, cb);
        }
    }
}