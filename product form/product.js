var productsData = [];
$("form").submit(function(e) {
      e.preventDefault();

      var name=$("input[name='name']").val();
      var sku=$("input[name='number']").val();
      var price=$("input[name='price']").val();
      var quantity=$("input[name='quantity']").val();
      updateData(name, sku, price, quantity);
      $(".data-table tbody").html("")
      productsData.forEach(function(item) {
          $(".data-table tbody").append
          (
              "<tr data-name='"+item.values.name+"'" +
              " data-number='"+item.values.sku+"'" +
              " data-price='"+item.values.price+"'" +
              " data-quantity='"+item.values.quantity+"'>" +
              "<td><span value='"+item.values.name+"' id='pname'>"+item.values.name+"</span></td><td><span value='"+item.values.sku+"' id='pnumber'>"+item.values.sku+"</span></td><td><span value='"+item.values.price+"'id='pprice'>"+item.values.price+"</span></td>"+
              " <td> <button type='button' class='pls-minus'> - </button>"+
              "<input type='number' id='pquantity'  value='"+item.values.quantity+"' min='0'> "+
              "<button type='button' class='pls-altera'> + </button></td>"+
              "<td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button' >DELETE</button>"+
              "<button class='btn btn-info btn-lg btn-edit' type='button'>UPDATE</button></td>"+
              "<td><button>ADD TO CART</button></td></tr>");
      });

      $("input[name='name']").val("");
      $("input[name='number']").val("");
      $("input[name='price']").val("");
      $("input[name='quantity']").val("");
      
 });
 
function updateData(name, sku, price, qty) {
    let hasUpdated = false;
        productsData.forEach(function (item) {
            if(sku === item['sku']) {
                hasUpdated = true;
                item.values.name = name;
                item.values.price = price;
                item.values.quantity = parseInt(item.values.quantity) + parseInt(qty);
                return true;
            }
        });
    if(!hasUpdated) {
        pushNewData(name, sku, price, qty);
    }
}
function pushNewData(name, sku, price, qty) {
    let values = {}, productData = {};
    productData['sku'] = sku;
    values['name'] = name;
    values['sku'] = sku;
    values['price'] = price;
    values['quantity'] = qty;
    productData['values'] = values;
    productsData.push(productData);
}

    $('body').on('click','.btn-delete',function() {
      $(this).parents('tr').remove();
    });

    $('body').on('click','.btn-edit',function() {
      var name=$(this).parents('tr').attr('data-name');
      var number=$(this).parents('tr').attr('data-number');
      var price=$(this).parents('tr').attr('data-price');
      var quantity=$(this).parents('tr').attr('data-quantity');
      var quantity_count=" <td> <button type='button' class='pls-minus'> - </button>"+
       "<input type='number' value='"+quantity+"' min='1'> "+
       "<button type='button' class='pls-altera'> + </button></td>";
      
      $(this).parents('tr').find('td:eq(0)').html("<input name='edit_text' value='"+name+"'>");
      $(this).parents('tr').find('td:eq(1)').html("<input name='edit_number' value='"+number+"'>");
      $(this).parents('tr').find('td:eq(2)').html("<input name='edit_price' value='"+price+"'>");
      $(this).parents('tr').find('td:eq(3)').html(quantity_count);
      $(this).parents('tr').find('td:eq(5)').prepend("<button type='button' class='btn btn-info btn-lg btn-update mr-3'>SUBMIT</button>");
      $(this).hide()
    });

    $('body').on('click','.btn-update',function() {
      var name=$(this).parents('tr').find("input[name='edit_text']").val();
      var number=$(this).parents('tr').find("input[name='edit_number']").val();
      var price=$(this).parents('tr').find("input[name='edit_price']").val();
      var quantity=$(this).parents('tr').find("input[name='edit_quantity']").val();



      $(this).parents('tr').find('td:eq(0)').text(name);
      $(this).parents('tr').find('td:eq(1)').text(number);
      $(this).parents('tr').find('td:eq(2)').text(price);
      $(this).parents('tr').find('td:eq(3)').text(quantity);


      $(this).parents('tr').attr('data-name',name);
      $(this).parents('tr').attr('data-number',number);
      $(this).parents('tr').attr('data-price',price);
      $(this).parents('tr').attr('data-price',quantity);

      $(this).parents('tr').find('.btn-edit').show();
      $(this).parents('tr').find('.btn-update').remove();
      


    })
    $(document).ready(function() {
      $(document).on("click",".pls-altera",function() {
        var curr_quantity = $(this).prev().val();
       curr_quantity = parseInt(curr_quantity)+1;
       $(this).prev().val(curr_quantity);
   
});
$(document).on("click",".pls-minus",function() {
  var curr_quantity = $(this).next().val();
       if(curr_quantity != 0) {
           curr_quantity = parseInt(curr_quantity)-1;
           $(this).next().val(curr_quantity);
            
       }

  
   });
});
