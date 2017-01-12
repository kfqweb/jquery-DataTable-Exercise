$(function () {
//    2-2页面维修方案查询
    var valRem = function (id) {
        var vale = id.val();
        id.on('focus', function () {
            $(this).val('');
        });
    };
    valRem($('#remVal'));
    valRem($('#remVal1'));
    valRem($('#remVal2'));

// 点击选择是否更换按钮2-3页面
    $('#checked').children().children('input[type=checkbox]').click(function () {
        if ($(this).is(':checked')) {
            $(this).attr('checked', true).parent().siblings().children().attr('checked', false);
        } else {
            $(this).attr('checked', false).parent().children().attr('checked', false);
        }
    });

});

// 日期选择插件
$(function () {
    $('#date-range1').dateRangePicker({
        autoClose: true,
        singleDate: true,
        showShortcuts: false,
        singleMonth: true
    });
});
