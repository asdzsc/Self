<?php
require_once "../../../51job/api/evp/weixin.php";
?>

dataForWx = {
"link": "http://evp.51job.com/2020/langjiu/", //微信链接
"imgUrl": "http://evp.51job.com/2020/langjiu/cover.jpg", //微信logo
"title": "与郎同行 酿造未来", //微信标题
"desc": "郎酒股份2020春季校园招聘",
};

wx.config({
debug: false,
appId: '<?php echo $signPackage["appId"]; ?>',
timestamp: <?php echo $signPackage["timestamp"]; ?>,
nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
signature: '<?php echo $signPackage["signature"]; ?>',
jsApiList: [
'onMenuShareAppMessage',
'onMenuShareTimeline'
]
});

wx.ready(function() {
wx.onMenuShareAppMessage({
title: dataForWx.title,
desc: dataForWx.desc,
link: dataForWx.link,
imgUrl: dataForWx.imgUrl,
fail: function (res) {
alert(JSON.stringify(res));
}
});

wx.onMenuShareTimeline({
title: dataForWx.title,
link: dataForWx.link,
imgUrl: dataForWx.imgUrl,
fail: function (res) {
alert(JSON.stringify(res));
}
});
});