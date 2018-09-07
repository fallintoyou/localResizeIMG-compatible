# localResizeIMG-compatible
## Usage:

* require files:
```
    <script type="text/javascript" src="../dist/jquery.min.js"></script>
    <script type="text/javascript" src="../dist/lrz.bundle.js"></script>
    <!--main logic-->
    <script type="text/javascript" src="./imageSelector.jquery.js"></script>
```
* code:
```javascript
    $("input[type=file]").imageSelector({
       container: 'container', //图片存放的容器
       width: '',// 图片最大宽度
       height:'',// 图片最大高度
       quality:0.7,// 0~1 图片质量
       url: 'upload.php',// 图片上传url
       filedName:''//后端接收的字段名,默认为file
    });
```
