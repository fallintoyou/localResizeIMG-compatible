/**
 * Created by Stephen on 2018/9/7.
 */
 ~(function($) {
    function imageSelector(opt) {
        var defaultOpt = {
            container: 'container',
            width: '',//图片最大宽度
            height:'',//图片最大高度
            quality:0.7,//0~1
            url: 'upload.php',
            filedName:''//后端接收的字段名,默认为file
        }
        var defaultOpt = $.extend({}, defaultOpt, opt);
        var $obj = this;
        $obj.each(function() {
            var $selectObj = $(this);
            $selectObj.change(function() {
                //change start
                lrz(this.files[0], {
                    width: defaultOpt.width, //图片最大宽度
                    height:defaultOpt.height,
                    quality:defaultOpt.quality,
                    filedName:defaultOpt.filedName
                }).then(function(rst) {
                    /* 处理成功后执行 */
                    rst.formData.append('base64img', rst.base64); // 添加额外参数
                    $.ajax({
                        url: defaultOpt.url,
                        type: "POST",
                        data: rst.formData,
                        processData: false,
                        contentType: false,
                        success: function(data) {
                            var html = '';
                            html += '<div style="display:inline-block;padding:10px;height:180px;width:190px;">';
                            html += '<img style="width:100%;height:100%;" src="' + data + '">';
                            html += '<img  style="position:relative;left:175px;bottom:195px;" onclick="$(this).parent().remove();" style="position:absolute;" src="./images/del.png">';
                            html += '<input type="hidden" name="pictures[]" value="'+data+'" />'
                            html += '</div>';
                            $('#' + defaultOpt.container).append(html);
                        }
                    });
                }).catch(function(err) {
                    console.log(err);
                    /* 处理失败后执行 */
                }).always(function() {
                    /* 必然执行 */
                })
                //change end
            })
        })
    }
    $.fn.extend({
        imageSelector: imageSelector
    })
})(jQuery)