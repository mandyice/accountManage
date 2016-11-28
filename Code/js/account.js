$(function(){
    //测试数据
    var data = {
        "success":true,
        "results" : [
            {
                "code" : "001",
                "username" : "name1",
                "remark" : "1",
                "state":"状态1",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "002",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/24/2016",
                "endtime":"11/24/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "003",
                "username" : "name3",
                "remark" : "3",
                "state":"状态2",
                "createtime":"11/23/2016",
                "endtime":"11/23/2016",
                "numtype":"类型2"
            }
            ,{
                "code" : "004",
                "username" : "name4",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/22/2016",
                "endtime":"11/22/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "005",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "006",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/23/2016",
                "endtime":"11/22/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "001",
                "username" : "name1",
                "remark" : "1",
                "state":"状态1",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "002",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "003",
                "username" : "name3",
                "remark" : "3",
                "state":"状态2",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型2"
            }
            ,{
                "code" : "004",
                "username" : "name4",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "005",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "006",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "001",
                "username" : "name1",
                "remark" : "1",
                "state":"状态1",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "002",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "003",
                "username" : "name3",
                "remark" : "3",
                "state":"状态2",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型2"
            }
            ,{
                "code" : "004",
                "username" : "name4",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/25/2016",
                "endtime":"11/25/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "005",
                "username" : "name2",
                "remark" : "2",
                "state":"状态2",
                "createtime":"11/24/2016",
                "endtime":"11/24/2016",
                "numtype":"类型2"
            }
            ,{
                "code" : "006",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/24/2016",
                "endtime":"11/24/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "001",
                "username" : "name1",
                "remark" : "1",
                "state":"状态1",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "002",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "003",
                "username" : "name3",
                "remark" : "3",
                "state":"状态2",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型2"
            }
            ,{
                "code" : "004",
                "username" : "name4",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "005",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "006",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/21/2016",
                "endtime":"11/21/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "001",
                "username" : "name1",
                "remark" : "1",
                "state":"状态1",
                "createtime":"11/20/2016",
                "endtime":"11/20/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "002",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/20/2016",
                "endtime":"11/20/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "003",
                "username" : "name3",
                "remark" : "3",
                "state":"状态2",
                "createtime":"11/20/2016",
                "endtime":"11/20/2016",
                "numtype":"类型2"
            }
            ,{
                "code" : "004",
                "username" : "name4",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/20/2016",
                "endtime":"11/20/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "005",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/20/2016",
                "endtime":"11/20/2016",
                "numtype":"类型1"
            }
            ,{
                "code" : "006",
                "username" : "name2",
                "remark" : "2",
                "state":"状态1",
                "createtime":"11/20/2016",
                "endtime":"11/20/2016",
                "numtype":"类型1"
            }
        ]
    }

    var dataCache = [];
    function loadData(tableSelector, data){
        var $table = $(tableSelector);

        if($table && data){

            var $tbody = $table.find("tbody");
            var $ths = $table.find("thead th");
            $tbody.html("");
            if(data.results){
                dataCache = data.results;

                $(data.results).each(function(index,obj){
                    var $tr = $("<tr></tr>");
                    $ths.each(function(i,th){
                        var $th = $(th);
                        var field = $th.attr("field");

                        if(field){
                            var $td = $("<td>"+ obj[field] +"</td>");
                        }else{
                            var $td = $('<td> <a href="javascript:void(0);" data-id="'+index+'"  class="btn btn-primary" data-cmd="edit">编辑</a>&emsp;<a href="javascript:void(0);"  data-id="'+index+'" data-cmd="del" class="btn btn-danger">删除</a>&emsp;<a href="javascript:void(0);"  data-id="'+index+'" data-cmd="seal" class="btn btn-primary">封存</a>&emsp;<a href="javascript:void(0);"  data-id="'+index+'" data-cmd="unseal" class="btn btn-danger">启封</a></td>');
                        }
                        $tr.append($td);
                    });
                    $tbody.append($tr);

                });
            }
        }

    }

    loadData("table",data);
    $('#example').DataTable();

    // 发送ajax请求，异步加载数据
//        $.get(url,function(data){
//            if(data.success){
//                loadData("table",data);
//                $('#example').DataTable();
//            }
//        },"json");


    // 创建一个事件对象
    var cmdObj = {
        "create":function(){
            $("#formContent input").val("");

            $('#createtime').daterangepicker({
                "startDate": "11/25/2016"
            });
            $("#numtype").select2();
        },
        "edit":function($btn){

            $("#realAuthDlg").modal("show");
            var index = $btn.data("id");
            if(dataCache){
                var rowData = dataCache[index];

                $("#realAuthDlg").find("#formContent :input").each(function(index,inputEl){
                    inputEl.value  =  rowData[inputEl.name];
                });
            }
            $('#createtime').daterangepicker({
                "startDate": rowData.createtime,
                "endDate": rowData.endtime
            });
            $("#numtype").select2({
                "placeholder":rowData.numtype
            });

        },
        "del":function($btn){
            $.messager.confirm("温馨提示", "是否要删除当前数据？？", function() {
                console.log("删除成功");
//                    var id = $btn.data("id");
//                    $.get("url?id="+id,function(rs){
//                        if(rs.success){
//                            $.get("url",function(data){
//                                console.log('删除成功');
//                                if(data.success){
//                                    loadData("table",data);
//                                }
//                            },"json");
//                        }
//                    },"json");
            });
        },
        "seal":function($btn){
            $.messager.confirm("温馨提示", "是否要封存当前数据？？", function() {
                console.log("封存成功");
            });
        },
        "unseal":function($btn){
            $.messager.confirm("温馨提示", "是否要启封当前数据？？", function() {
                console.log("启封成功");
            });
        }
    };

    $(".el-main").delegate("a[data-cmd]","click",function(){
        var $this= $(this);
        var cmd = $this.data("cmd");
        if(cmd){
            cmdObj[cmd]($this);
        }
    });
});
