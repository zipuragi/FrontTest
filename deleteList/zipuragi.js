$(document).ready(function(){
  $("button[name=listRender]").click(function(){
    $("table[name=table01] tbody tr").remove();
    _.each(data,function(obj){

      var $tr = $("<tr>"
          + "<td>" + obj._id + "</td>"
          + "<td>" + obj.menu + "</td>"
          + "<td>" + obj.price + "</td>"
          + "<td>" + obj.quantity + "</td>"
            // 목록에 삭제 버튼 추가
          + "<td><button class='btn btn-sm btn-primary' name='btnDel'><i class='glyphicon glyphicon-trash'></i> 삭제</button></td>"
          + "</tr>"
      );

      $tr.appendTo("table[name=table01] tbody");
    });

    $("button[name=btnDel]").click(function(){ //btnDel 이름을 가진 버튼 요소를 찾는다.
      //여기서 this는 button 자신을 가리킴
      //parent()는 상위 개체를 찾아가는 함수
      //아래 소스는 button을 찾아서 상위로 두개 위의 개체를 선택해서 지우라는 의미
      //위쪽 button 태그 바로 위는 <td>태그이고 그 위는 <tr> 태그임
      //그 위치에서 remove()를 실행하니 tr 태그가 지워지면서 목록 한개가 지워지는 효과가 생김
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

