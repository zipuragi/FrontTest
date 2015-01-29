$(document).ready(function(){
  $("button[name=listRender]").click(function(){
    $("table[name=table01] tbody tr").remove();
    //수정사항 반영되는지 테스트
    _.each(data,function(obj){

      var $tr = $("<tr>"
        + "<td>" + obj._id + "</td>"
        + "<td>" + obj.menu + "</td>"
        + "<td>" + obj.price + "</td>"
        + "<td>" + obj.quantity + "</td>"
        + "<td><button class='btn btn-sm btn-primary' name='btnDel'><i class='glyphicon glyphicon-trash'></i> 삭제</button></td>"
        + "</tr>"
      );

      $tr.appendTo("table[name=table01] tbody");
    });

    $("button[name=btnDel]").click(function(){
      $(this).parent().parent().remove();
    });
  });

  $("button[name=save]").click(function(){
    var rtn = {};

    rtn["_id"] = $("input[name=_id]").val();
    rtn["menu"] = $("input[name=menu]").val();
    rtn["price"] = $("input[name=price]").val();
    rtn["quantity"] = $("input[name=quantity]").val();

    var rtn = {};
    _.each($(".form-control"), function(obj){
      var ctrl = $(obj);
      rtn[ctrl.attr("name")] = ctrl.val();
    });

    var rtn = {
      _id: $("input[name=_id]").val(),
      menu: $("input[name=menu]").val(),
      price: $("input[name=price]").val(),
      quantity: $("input[name=quantity]").val()
    };

    data.push(rtn);

    $("button[name=listRender]").trigger('click');

  });
})

